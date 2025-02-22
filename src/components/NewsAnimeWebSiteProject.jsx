import { FaGithub, FaJs, FaLink } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPayloadcms } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import image from "../assets/webCmsImage.jpg";
export default function NewsAnimeWebSite({ onClick }) {
  return (
    <div className="m-2">
      <li className="bg-blue-800 p-1 flex flex-col rounded-xl max-w-96 h-full justify-between ">
        <img src={image} className="rounded-xl w-full" onClick={onClick} />
        <h3 className="font-bold ">Sitio web CMS de artículos de anime</h3>
        <p className="font-thin m-4">
          Sitio web de noticias y artículos de opinión sobre anime; el frontend
          está hecho con NEXT.js y el backend con Payload CMS.
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
            <SiPayloadcms size={20} />
            payloadCMS
          </div>
        </div>
        <div className="flex  justify-center ">
          <a
            href="https://github.com/alchemyyt/animeWebFrontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={36} className="m-4" />
          </a>
          <a
            href="https://anime-en-castellano.vercel.app/"
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
