import pdf from "../assets/diploma-javascript-full-stack.pdf";
import beginner from "../assets/diploma-beginner-core.pdf";
import intermediate from "../assets/diploma-intermediate-core.pdf";
import { useTranslation } from "react-i18next";
export default function Education() {
  const { t, i18n } = useTranslation();
  return (
    <div id="education" className="bg-blue-900 pt-4">
      <h3 className=" text-2xl font-bold">{t("Education.title")}</h3>
      <ul>
        <li className=" flex flex-col justify-center p-4">
          <h4 className="text-xl font-bold mb-6">
            {t("Education.javascript")}
          </h4>
          <object data={pdf} type="application/pdf" className=" w-full h-96">
            <p>
              {t("Education.errorPdf")}
              <a href={pdf}> {t("Education.donwload")}</a>.
            </p>
          </object>
        </li>
        <li className=" flex flex-col justify-center p-4">
          <h4 className="text-xl font-bold mb-6">{t("Education.englishA1")}</h4>
          <object
            data={beginner}
            type="application/pdf"
            className=" w-full h-96"
          >
            <p>
              {t("Education.errorPdf")}
              <a href={beginner}>{t("Education.donwload")}</a>.
            </p>
          </object>
        </li>
        <li className=" flex flex-col justify-center p-4">
          <h4 className="text-xl font-bold mb-6">{t("Education.englishB1")}</h4>
          <object
            data={intermediate}
            type="application/pdf"
            className=" w-full h-96"
          >
            <p>
              {t("Education.errorPdf")}
              <a href={intermediate}>{t("Education.donwload")}</a>.
            </p>
          </object>
        </li>
      </ul>
    </div>
  );
}
