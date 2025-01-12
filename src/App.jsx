import "./App.css";
import Menu from "./components/Menu";
import Hello from "./components/Hello";

import Projects from "./components/Projects";
import Knowledge from "./components/Knowledge";
import Education from "./components/Education";
import AboutMe from "./components/AboutMe";
function App() {
  return (
    <>
      {/*poner un icono de menu que solo se vea en mobile*/}
      {/*hacer condicional paraquese renderice el menu cuando se le de clickal menu no se si va interferir el display non en patalla lg  */}

      <Menu />
      {/*hacer el menu vertical y que no se vea en mobile display none */}
      <Hello />
      <Projects />
      <Knowledge />
      <Education />
      <AboutMe />
    </>
  );
}

export default App;
