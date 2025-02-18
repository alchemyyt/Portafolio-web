import { FaGithub, FaJs, FaCloudDownloadAlt } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpo } from "react-icons/si";
import image from "../assets/appImage.jpg";
export default function MobileAppProject({ onClick }) {
  return (
    <div className="m-2">
      <li className="bg-blue-800 p-1 flex flex-col rounded-xl max-w-96 h-full justify-between">
        <img
          src={image}
          className="rounded-xl w-full cursor-pointer"
          onClick={onClick}
        />
        <h3 className="font-bold ">
          App Movil Horario de Anime en Español con React Native
        </h3>
        <p className="font-thin m-4">
          Aplicacion android que dice el dia y lugar de estreno de los animes en
          español de la temporada y tambien ofrece su informacion completa.
        </p>
        <div className=" flex justify-center m-6 items-center flex-wrap gap-4">
          <div className="flex justify-center items-center gap-2">
            <RiTailwindCssFill size={20} />
            Tailwind
          </div>
          <div className="flex justify-center items-center gap-2">
            <TbBrandReactNative size={20} />
            React Native
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
            <SiExpo size={20} />
            Expo
          </div>
        </div>
        <div className="flex  justify-center  ">
          <a
            href="https://github.com/alchemyyt/app-horaio-anime-en-espa-ol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={36} className="m-4" />
          </a>
          <a
            href="https://drive.google.com/file/d/157BNZQIR2iAEYUVhkceMxefeEVqdCgO-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCloudDownloadAlt size={36} className="m-4" />
          </a>
        </div>
      </li>
    </div>
  );
}
