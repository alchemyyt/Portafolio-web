import { GoX } from "react-icons/go";
import image from "../assets/appComplete.jpg";
export default function MobileAppProjectComplete({ onClick }) {
  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full bg-blue-600/90 flex flex-col items-center p-10 overflow-scroll">
      <h3 className="font-bold text-2xl">App Horario de anime en español</h3>
      <p>
        Esta aplicación móvil, desarrollada con React Native, permite a los
        usuarios consultar de forma sencilla los horarios de estreno de sus
        animes favoritos en español. La información se obtiene de una API REST
        construida con Next.js, lo que garantiza una fuente de datos actualizada
        y confiable.
      </p>
      <h3 className="font-bold text-2xl">Arquitectura </h3>
      <p>La aplicación sigue una arquitectura cliente-servidor:</p>
      <p>
        Cliente (React Native): La aplicación móvil se encarga de la interfaz de
        usuario, la interacción con el usuario y la presentación de los datos.
      </p>
      <p>
        Servidor (Next.js): La API RESTful en el servidor Next.js proporciona
        los datos de horarios de anime en formato JSON.
      </p>
      <img src={image} className="rounded-xl w-72 m-4" />
      <GoX onClick={onClick} size={36} className="absolute right-0 top-0 m-4" />
    </div>
  );
}
