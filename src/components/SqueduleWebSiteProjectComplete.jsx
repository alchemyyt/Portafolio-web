import { GoX } from "react-icons/go";
import homeImage from "../assets/webSqueduleCompleteHome.png";
import postImage from "../assets/webSqueduleCompletePOST.png";
export default function MobileAppProjectComplete({ onClick }) {
  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full bg-blue-600/90 flex flex-col items-center p-10 overflow-scroll">
      <h3 className="font-bold text-2xl">
        Página web Horario de anime en español + API REST
      </h3>
      <p>
        Esta página web desarrollada con Next.js muestra un horario de anime en
        español. La página consume datos de una API REST propia y permite la
        actualización de los datos a través de un formulario.
      </p>
      <h4 className="font-bold text-2xl">Arquitectura</h4>
      <p>
        Backend: Con el método GET obtienes los datos de los animes y con el
        método POST en el formulario actualizas los animes de la nueva
        temporada.
      </p>
      <p>
        Frontend: Crea los componentes de Horario y Formulario. Implementa la
        lógica para consumir la API REST y mostrar los datos en el componente de
        Horario.
      </p>
      <img src={homeImage} className="rounded-xl m-6" />
      <img src={postImage} className="rounded-xl " />
      <GoX onClick={onClick} size={36} className="absolute right-0 top-0 m-4" />
    </div>
  );
}
