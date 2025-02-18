import "./App.css";
import { Cross as Hamburger } from "hamburger-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Menu from "./components/Menu";
import MenuDesktop from "./components/MenuDesktop";
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
      <div className=" mb-6 xl:hidden ">
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

      <MenuDesktop />
      <Hello />
      <Projects />
      <Knowledge />
      <AboutMe />
      <Education />
    </>
  );
}

export default App;
