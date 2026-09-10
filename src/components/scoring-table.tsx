import { useTranslations } from "next-intl";

export function ScoringTable() {
  const t = useTranslations("reference.scoring");
  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">{t("roundHeader")}</th>
            <th scope="col">{t("potHeader")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t("none")}</td>
            <td>{t("noneValue")}</td>
          </tr>
          <tr>
            <td>{t("one")}</td>
            <td>{t("oneValue")}</td>
          </tr>
          <tr>
            <td>{t("two")}</td>
            <td>{t("twoValue")}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
