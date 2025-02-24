/**
 * The function `SqueduleWebSiteProject` renders a project card for a website showcasing Spanish anime
 * with a REST API built using NEXT.js and MongoDB, displaying relevant icons and links.
 * @returns The `SqueduleWebSiteProject` component is being returned. It is a functional component that
 * displays information about a website project related to anime in Spanish with a REST API built using
 * NEXT.js and MongoDB. The component includes an image, project title, description, technology stack
 * details (Tailwind CSS, NEXT.js, JavaScript, MongoDB), and icons for GitHub and a link. The component
 * is
 */
import { FaGithub, FaLink, FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import image from "../assets/webImage.jpg";
import { useTranslation } from "react-i18next";
export default function SqueduleWebSiteProject({ onClick }) {
  const { t, i18n } = useTranslation();
  return (
    <div className="m-2 ">
      <li className="bg-blue-800 p-1 flex flex-col rounded-xl max-w-96 h-full justify-between">
        <img src={image} className="rounded-xl w-full" onClick={onClick} />
        <h3 className="font-bold ">{t("SquedulePageComponent.title")}</h3>
        <p className="font-thin m-4">
          {t("SquedulePageComponent.description")}
        </p>
        <div className=" flex justify-center m-6 items-center flex-wrap gap-4">
          <div className="flex justify-center items-center gap-2">
            <RiTailwindCssFill size={20} />
            Tailwind
          </div>
          <div className="flex justify-center items-center gap-2">
            <RiNextjsFill size={20} />
            NEXT.js
          </div>
          <div className="flex justify-center items-center gap-2">
            <FaJs size={20} />
            JavaScript
          </div>
          <div className="flex justify-center items-center gap-2">
            <DiMongodb size={20} />
            MONGODB
          </div>
        </div>
        <div className="flex  justify-center ">
          <a
            href="https://github.com/alchemyyt/horarioApiRest"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={36} className="m-4" />
          </a>
          <a
            href="https://horario-de-anime-en-castellano.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLink size={36} className="m-4" />
          </a>
        </div>
      </li>
    </div>
  );
}
