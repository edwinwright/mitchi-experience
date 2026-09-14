import { useTranslations } from "next-intl";
import { speakHands } from "@/data/speak";

export function SpeakTable() {
  const tSpeak = useTranslations("speak");
  const tHands = useTranslations("hands");

  return (
    <table className="data-table">
      <caption>{tSpeak("caption")}</caption>
      <thead>
        <tr>
          <th scope="col">{tSpeak("officialHeader")}</th>
          <th scope="col">{tSpeak("speakHeader")}</th>
        </tr>
      </thead>
      <tbody>
        {speakHands().map(({ hand, name }) => (
          <tr key={hand.id}>
            <td>{tHands(hand.id)}</td>
            <td lang="en" translate="no">
              {name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
