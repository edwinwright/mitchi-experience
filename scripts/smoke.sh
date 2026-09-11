#!/usr/bin/env bash
#
# Smoke tests for Mitchi site locale routing.
#
# These check the one thing that is not covered by a build: what the proxy
# does at request time. Locale negotiation, cookie precedence and the apex
# redirect are all request-time behaviour, so they can only be verified
# against a running deployment.
#
# Usage:
#   ./scripts/smoke.sh                          # production
#   ./scripts/smoke.sh https://mitchi-web.vercel.app
#   ./scripts/smoke.sh http://localhost:3000    # after `npm run dev`
#
# Exits non-zero if any check fails, so it can go in CI later.

set -uo pipefail

PROD="https://www.mitchidice.com"
BASE="${1:-$PROD}"
BASE="${BASE%/}"

# Observed status codes. If a Next.js or next-intl upgrade changes these,
# fix them here: the location is the assertion that matters, the exact
# 3xx code is a library detail.
LOCALE_REDIRECT=307   # next-intl locale redirect
DOMAIN_REDIRECT=308   # Vercel apex -> www

# Realistic browser headers. Region subtags and q-values matter: matching
# `es-ES` to the `es` locale is precisely the negotiation being tested.
ES='Accept-Language: es-ES,es;q=0.9,en;q=0.8'
EN='Accept-Language: en-GB,en;q=0.9'

FAILS=0

# probe <url> [curl args...] -> "STATUS|LOCATION"
# No redirects followed and no cookie jar, so every call is a first visit.
probe() {
  local url="$1"; shift
  curl -sS -o /dev/null -D - "$@" "$url" 2>/dev/null | awk '
    BEGIN { IGNORECASE = 1 }
    /^HTTP\//     { status = $2 }
    /^location:/  { loc = $2 }
    END {
      gsub(/\r/, "", status); gsub(/\r/, "", loc)
      printf "%s|%s", status, loc
    }'
}

expect() {
  local desc="$1" want="$2" got="$3"
  if [[ "$got" == "$want" ]]; then
    printf '  ok    %s\n' "$desc"
  else
    printf '  FAIL  %s\n          want: %s\n          got:  %s\n' "$desc" "$want" "$got"
    FAILS=$((FAILS + 1))
  fi
}

printf 'Smoke tests against %s\n\n' "$BASE"

expect "English speaker gets the root, no redirect" \
  "200|" \
  "$(probe "$BASE/" -H "$EN")"

expect "Spanish speaker is redirected to /es" \
  "${LOCALE_REDIRECT}|/es" \
  "$(probe "$BASE/" -H "$ES")"

expect "NEXT_LOCALE cookie beats the Accept-Language header" \
  "${LOCALE_REDIRECT}|/es" \
  "$(probe "$BASE/" -H "$EN" -H 'Cookie: NEXT_LOCALE=es')"

expect "/es serves the Spanish page" \
  "200|" \
  "$(probe "$BASE/es" -H "$EN")"

expect "localised Spanish rules slug serves" \
  "200|" \
  "$(probe "$BASE/es/reglas" -H "$EN")"

expect "switcher English prefix strips to unprefixed path" \
  "${LOCALE_REDIRECT}|/reference" \
  "$(probe "$BASE/en/reference" -H "$EN")"

expect "NEXT_LOCALE rewrites an English path to the Spanish slug" \
  "${LOCALE_REDIRECT}|/es/reglas" \
  "$(probe "$BASE/rules" -H "$EN" -H 'Cookie: NEXT_LOCALE=es')"

expect "old Spanish rules slug redirects to localised slug" \
  "${LOCALE_REDIRECT}|/es/reglas" \
  "$(probe "$BASE/es/rules" -H "$EN")"

# Domain-level checks only make sense against production.
if [[ "$BASE" == "$PROD" ]]; then
  expect "apex redirects to www" \
    "${DOMAIN_REDIRECT}|${PROD}/" \
    "$(probe "https://mitchidice.com/" -H "$EN")"
fi

echo
if (( FAILS > 0 )); then
  printf '%d failed\n' "$FAILS"
  exit 1
fi
echo "all passed"
