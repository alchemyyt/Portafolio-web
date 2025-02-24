import { GoX } from "react-icons/go";
import homeImage from "../assets/webSqueduleCompleteHome.png";
import postImage from "../assets/webSqueduleCompletePOST.png";
import { useTranslation } from "react-i18next";
export default function MobileAppProjectComplete({ onClick }) {
  const { t, i18n } = useTranslation();
  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full bg-blue-600/90 flex flex-col items-center p-10 overflow-scroll">
      <h3 className="font-bold text-2xl">
        {t("SquedulePageCompleteComponent.title")}
      </h3>
      <p>{t("SquedulePageCompleteComponent.description")}</p>
      <h4 className="font-bold text-2xl">
        {t("SquedulePageCompleteComponent.architecture.title")}
      </h4>
      <p>{t("SquedulePageCompleteComponent.architecture.client")}</p>
      <p>{t("SquedulePageCompleteComponent.architecture.server")}</p>
      <img src={homeImage} className="rounded-xl m-6" />
      <img src={postImage} className="rounded-xl " />
      <GoX onClick={onClick} size={36} className="absolute right-0 top-0 m-4" />
    </div>
  );
}
