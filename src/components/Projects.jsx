import { useState } from "react";
import MobileAppProject from "./MobileAppProject";
import MobileAppProjectComplete from "./MobileAppProjectComplete";
import NewsAnimeWebSiteProjectComplete from "./NewsAnimeWebSiteProjectComplete";
import SqueduleWebSiteProjectComplete from "./SqueduleWebSiteProjectComplete";
import SqueduleWebSiteProject from "./SqueduleWebSiteProject";
import NewsAnimeWebSiteProject from "./NewsAnimeWebSiteProject";
import { useTranslation } from "react-i18next";
export default function Proyects() {
  const { t, i18n } = useTranslation();
  const [activeProject, setActiveProject] = useState(null);
  const handleProjectClick = (projectId) => {
    setActiveProject(projectId === activeProject ? null : projectId);
  };
  return (
    <div id="projects" className="bg-blue-900 text-lg p-6 my-6">
      <h2 className="font-bold">{t("ProyectsComponent.title")}</h2>
      <ul className="xl:flex md:flex xl:justify-center">
        <MobileAppProject onClick={() => handleProjectClick("mobileApp")} />
        <SqueduleWebSiteProject
          onClick={() => handleProjectClick("squedule")}
        />
        <NewsAnimeWebSiteProject
          onClick={() => handleProjectClick("newsAnime")}
        />

        {activeProject === "mobileApp" && (
          <MobileAppProjectComplete
            onClick={() => handleProjectClick("mobileApp")}
          />
        )}
        {activeProject === "newsAnime" && (
          <NewsAnimeWebSiteProjectComplete
            onClick={() => handleProjectClick("newsAnime")}
          />
        )}
        {activeProject === "squedule" && (
          <SqueduleWebSiteProjectComplete
            onClick={() => handleProjectClick("squedule")}
          />
        )}
      </ul>
      {/*descripcion, tecnologias,imagen,cofigo 
      mostrar icono de github e ir a la pagina y tecnologias si se leda click a la tarjeta se ve mas info con descripcion */}
    </div>
  );
}
