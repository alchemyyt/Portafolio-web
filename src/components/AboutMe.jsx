import { useTranslation } from "react-i18next";
export default function AboutMe() {
  const { t, i18n } = useTranslation();
  return (
    <div id="aboutMe" className="bg-blue-900 pt-4">
      <h3 className="text-2xl font-bold">{t("AboutMe.title")}</h3>
      <p className="p-4">{t("AboutMe.info")}</p>
    </div>
  );
}
