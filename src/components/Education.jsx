import pdf from "../assets/diploma-javascript-full-stack.pdf";
import beginner from "../assets/diploma-beginner-core.pdf";
import intermediate from "../assets/diploma-intermediate-core.pdf";
export default function Education() {
  return (
    <div id="education" className="bg-blue-900 pt-4">
      <h3 className=" text-2xl font-bold">Formación</h3>
      <ul>
        <li className=" flex flex-col justify-center p-4">
          <h4 className="text-xl font-bold mb-6">
            Diploma de full stack developer con JavaScript
          </h4>
          <object data={pdf} type="application/pdf" className=" w-full h-96">
            <p>
              Tu navegador no soporta la visualización de PDFs.
              <a href={pdf}>Descarga el PDF aquí</a>.
            </p>
          </object>
        </li>
        <li className=" flex flex-col justify-center p-4">
          <h4 className="text-xl font-bold mb-6">
            Diploma de inglés principiante
          </h4>
          <object
            data={beginner}
            type="application/pdf"
            className=" w-full h-96"
          >
            <p>
              Tu navegador no soporta la visualización de PDFs.
              <a href={beginner}>Descarga el PDF aquí</a>.
            </p>
          </object>
        </li>
        <li className=" flex flex-col justify-center p-4">
          <h4 className="text-xl font-bold mb-6">
            Diploma de inglés intermedio
          </h4>
          <object
            data={intermediate}
            type="application/pdf"
            className=" w-full h-96"
          >
            <p>
              Tu navegador no soporta la visualización de PDFs.
              <a href={intermediate}>Descarga el PDF aquí</a>.
            </p>
          </object>
        </li>
      </ul>
    </div>
  );
}
