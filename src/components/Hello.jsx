import { FiCopy } from "react-icons/fi";
import { FaGithub, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import pdfUrl from "../assets/cv.pdf";
import { useTranslation } from "react-i18next";
export default function Hello() {
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState(false);
  const email = "josemontesdeoca00@gmail.com";
  const handleClick = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
      })
      .catch((err) => {
        console.error("Error al copiar:", err);
      });
  };
  return (
    <div className="bg-blue-900 text-lg p-6" id="hello">
      <h1 className="font-bold text-white">
        {t("HelloComponent.hello")}
        <span className="text-amber-300 text-xl"> José Montes de Oca</span>
      </h1>
      <p>{t("HelloComponent.introduction")}</p>
      <p>{t("HelloComponent.email")} josemontesdeoca00@gmail.com</p>
      <button onClick={handleClick} className="text-amber-300">
        {copied ? "Copiado!" : <FiCopy />}
      </button>
      <div>
        <object data={pdfUrl} type="application/pdf" className=" w-full h-96">
          <p>
            {t("Education.errorPdf")}
            <a href={pdfUrl}>{t("Education.donwload")}</a>.
          </p>
        </object>
        <br />
      </div>
      <ul className="flex flex-row items-center justify-center m-6">
        <li>
          <a href="https://github.com/alchemyyt" target="_blank">
            <FaGithub size={36} className="mx-4" />
          </a>
        </li>
        <li>
          <a href="https://x.com/jose62230911" target="_blank">
            <FaXTwitter size={36} className="mx-4" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/atiDesarrollador/" target="_blank">
            <FaFacebook size={36} className="mx-4" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCJK_yWYBevPy0CFgdoxVLvQ"
            target="_blank"
          >
            <FaYoutube size={36} className="mx-4" />
          </a>
        </li>
      </ul>
    </div>
  );
}
