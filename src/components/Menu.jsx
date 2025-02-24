import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
export default function menu() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="bg-blue-900 p-6 font-bold text-lg  ">
      <ul>
        <li className="hover:color-amber-300">
          <Link to="hello" spy={true} smooth={true} offset={0} duration={500}>
            Introducción
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Proyectos
          </Link>
        </li>
        <li>
          <Link
            to="knowledge"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Habilidades Técnicas
          </Link>
        </li>
        <li>
          <Link to="aboutMe" spy={true} smooth={true} offset={0} duration={500}>
            Sobre Mí
          </Link>
        </li>
        <li>
          <Link
            to="education"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Formación
          </Link>
        </li>
      </ul>
      <div className="mt-4 flex items-center justify-center flex-col ">
        <p className="bg-blue-800 p-1 w-1/4 rounded-xl ">
          {t("changeLanguage.title")}
        </p>
        <ul>
          <li
            className="hover:text-amber-300 duration-300 cursor-pointer"
            onClick={() => changeLanguage("es")}
          >
            {t("changeLanguage.es")}
          </li>
          <li
            className="hover:text-amber-300 duration-300 cursor-pointer"
            onClick={() => changeLanguage("en")}
          >
            {t("changeLanguage.en")}
          </li>
        </ul>
      </div>
    </div>
  );
}
