import { Link } from "react-scroll";
export default function menu() {
  return (
    <div className="bg-blue-900 p-6 font-bold text-lg  ">
      <ul>
        <li className="hover:color-amber-300">
          <Link to="hello" spy={true} smooth={true} offset={0} duration={500}>
            Hello
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
            Conocimientos Tecnicos
          </Link>
        </li>
        <li>
          <Link to="aboutMe" spy={true} smooth={true} offset={0} duration={500}>
            Sobre mi
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
            Formacion
          </Link>
        </li>
      </ul>
    </div>
  );
}
