import homeImage from "../assets/WebNewsAnimeComplete.png";
import payload from "../assets/PayloadCms.png";
import { GoX } from "react-icons/go";
export default function NewsAnimeWebSiteComplete({ onClick }) {
  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full bg-blue-600/90 flex flex-col items-center p-10 overflow-scroll">
      <h3 className="font-bold text-2xl">Página web CMS de anime en español</h3>
      <p>
        Es una página web desarrollada utilizando Next.js para el frontend y
        Payload CMS para el backend.
      </p>
      <p>
        Next.js proporciona un framework para React que permite renderizado del
        lado del servidor (SSR), generación de sitios estáticos (SSG) y otras
        características avanzadas.
      </p>
      <p>
        Payload CMS actúa como un sistema de gestión de contenido (CMS)
        headless, permitiendo la creación y gestión de contenido a través de una
        API.
      </p>
      <h3 className="font-bold text-2xl"> Arquitectura </h3>
      <p>
        Frontend (Next.js): Desarrollado con Next.js. Se encarga de la
        presentación y la interacción con el usuario. Consume datos desde la API
        de Payload CMS. Utiliza enrutamiento dinámico y componentes
        reutilizables.
      </p>
      <p>
        Backend (Payload CMS): Sistema de gestión de contenido headless. Permite
        la creación y gestión de contenido (textos, imágenes, etc.). Expone una
        API GraphQL o REST para que el frontend consuma los datos. Proporciona
        un panel de administración para la gestión de contenido.
      </p>
      <img src={homeImage} className="rounded-xl m-6" />
      <img src={payload} className="rounded-xl" />
      <GoX onClick={onClick} size={36} className="absolute right-0 top-0 m-4" />
    </div>
  );
}
