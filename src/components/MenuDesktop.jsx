import { Link } from "react-scroll";
export default function MenuDesktop() {
  return (
    <div className="bg-blue-900 p-6 font-bold text-xl hidden xl:flex xl:items-center xl:fixed xl:left-0 xl:h-screen xl:top-0 xl:w-72">
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
    </div>
  );
}
