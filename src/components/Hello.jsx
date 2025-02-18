import { FiCopy } from "react-icons/fi";
import { FaGithub, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
export default function Hello() {
  const [copied, setCopied] = useState(false);
  const email = "josemontesdeoca00@gmail.com";
  const pdfUrl = "./src/assets/cv.pdf";
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
        Hola, soy
        <span className="text-amber-300 text-xl"> José Montes de Oca</span>
      </h1>
      <p>
        Un desarrollador full-stack de 25 años enfocado en JavaScript . Me
        encanta transformar ideas en realidad a través del desarrollo web.
      </p>
      <p>Este es mi correo josemontesdeoca00@gmail.com</p>
      <button onClick={handleClick} className="text-amber-300">
        {copied ? "Copiado!" : <FiCopy />}
      </button>
      <div>
        <a
          href={pdfUrl}
          download="joseMontesDeOcaCv.pdf"
          className="text-amber-300 text-xl"
        >
          Descargar CV
        </a>
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
