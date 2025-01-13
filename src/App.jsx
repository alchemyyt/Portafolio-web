import "./App.css";
import { Cross as Hamburger } from "hamburger-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Menu from "./components/Menu";
import Hello from "./components/Hello";

import Projects from "./components/Projects";
import Knowledge from "./components/Knowledge";
import Education from "./components/Education";
import AboutMe from "./components/AboutMe";
function App() {
  const [isOpen, setOpen] = useState(false);
  const menuVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <div className=" mb-6 ">
        <div className=" border-2 border-blue-900 bg-blue-950 top-0 left-0 z-50 ">
          <Hamburger
            size={20}
            toggled={isOpen}
            toggle={setOpen}
            color="#FFFFFF"
          />
        </div>
        <motion.div
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={menuVariants}
          transition={{ duration: 0.5 }}
        >
          {isOpen ? <Menu /> : null}
        </motion.div>
      </div>
      {/*poner un icono de menu que solo se vea en mobile*/}
      {/*hacer condicional paraquese renderice el menu cuando se le de clickal menu no se si va interferir el display non en patalla lg  */}

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
