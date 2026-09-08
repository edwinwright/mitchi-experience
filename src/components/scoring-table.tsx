import { useTranslations } from "next-intl";

export function ScoringTable() {
  const t = useTranslations("reference.scoring");

  return (
    <>
      <h2 className="text-xl font-bold mb-6">{t("heading")}</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">{t("roundHeader")}</th>
            <th scope="col">{t("tableHeader")}</th>
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
      <p>{t("note")}</p>
    </>
  );
}
