import { GoX } from "react-icons/go";
import image from "../assets/appComplete.jpg";
import { useTranslation } from "react-i18next";
export default function MobileAppProjectComplete({ onClick }) {
  const { t, i18n } = useTranslation();
  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full bg-blue-600/90 flex flex-col items-center p-10 overflow-scroll">
      <h3 className="font-bold text-2xl">
        {t("MobileCompleteComponent.title")}
      </h3>
      <p>{t("MobileCompleteComponent.description")}</p>
      <h3 className="font-bold text-2xl">
        {t("MobileCompleteComponent.architecture.title")}{" "}
      </h3>
      <p>{t("MobileCompleteComponent.architecture.introduction")}</p>
      <p>{t("MobileCompleteComponent.architecture.client")}</p>
      <p>{t("MobileCompleteComponent.architecture.server")}</p>
      <img src={image} className="rounded-xl w-72 m-4" />
      <GoX onClick={onClick} size={36} className="absolute right-0 top-0 m-4" />
    </div>
  );
}
