import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
export default function MenuDesktop() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="bg-blue-900 p-6 font-bold text-xl hidden xl:flex xl:flex-col xl:items-center xl:justify-between xl:fixed xl:left-0 xl:h-screen xl:top-0 xl:w-72">
      <div></div>
      <ul>
        <li className="hover:color-amber-300">
          <Link
            to="hello"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass="active"
          >
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
            activeClass="active"
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
            activeClass="active"
          >
            Habilidades Técnicas
          </Link>
        </li>
        <li>
          <Link
            to="aboutMe"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass="active"
          >
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
            activeClass="active"
          >
            Formación
          </Link>
        </li>
      </ul>
      <div>
        <p className="bg-blue-800 p-2 rounded-xl">
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
