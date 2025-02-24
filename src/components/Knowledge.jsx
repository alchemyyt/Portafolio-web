import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiPayloadcms } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import { useTranslation } from "react-i18next";
export default function Knowledge() {
  const { t, i18n } = useTranslation();
  return (
    <div id="knowledge" className="bg-blue-900 text-lg p-6 my-6">
      <h2 className="font-bold">{t("Knowledge.title")}</h2>
      <ul>
        <li>
          <h3 className="font-bold">Frontend</h3>
        </li>
        <li className="flex items-center justify-center gap-2">
          <FaReact size={20} />
          React
        </li>
        <li className="flex items-center justify-center gap-2">
          <RiTailwindCssFill size={20} />
          Tailwind
        </li>
      </ul>
      <ul>
        <li>
          <h3 className="font-bold">Backend</h3>
        </li>
        <li className="flex items-center justify-center gap-2">
          <RiNextjsFill size={20} />
          Next.js
        </li>
        <li className="flex items-center justify-center gap-2">
          <SiPayloadcms size={20} />
          PayloadCMS
        </li>
      </ul>
      <ul>
        <li>
          <h3 className="font-bold">{t("Knowledge.dataBase")}</h3>
        </li>
        <li className="flex items-center justify-center gap-2">
          <DiMongodb size={20} />
          MongoDB
        </li>
      </ul>
      <ul>
        <li>
          <h3 className="font-bold">{t("Knowledge.mobile")}</h3>
        </li>
        <li className="flex items-center justify-center gap-2">
          <TbBrandReactNative size={20} />
          React Native
        </li>
      </ul>
      <ul>
        <li>
          <h3 className="font-bold">{t("Knowledge.versionControl")}</h3>
        </li>
        <li className="flex items-center justify-center gap-2">
          <FaGitAlt size={20} />
          Git
        </li>
        <li className="flex items-center justify-center gap-2">
          <FaGithub size={20} />
          Git-hub
        </li>
      </ul>
    </div>
  );
}
