import homeImage from "../assets/WebNewsAnimeComplete.png";
import payload from "../assets/PayloadCms.png";
import { GoX } from "react-icons/go";
import { useTranslation } from "react-i18next";
export default function NewsAnimeWebSiteComplete({ onClick }) {
  const { t, i18n } = useTranslation();
  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full bg-blue-600/90 flex flex-col items-center p-10 overflow-scroll">
      <h3 className="font-bold text-2xl">
        {t("NewsPageCompleteComponent.title")}
      </h3>
      <p> {t("NewsPageCompleteComponent.description")}</p>
      <p>{t("NewsPageCompleteComponent.nextJs")}</p>
      <p>{t("NewsPageCompleteComponent.payloadCms")}</p>
      <h3 className="font-bold text-2xl">
        {t("NewsPageCompleteComponent.architecture.title")}
      </h3>
      <p>{t("NewsPageCompleteComponent.architecture.client")}</p>
      <p>{t("NewsPageCompleteComponent.architecture.server")}</p>
      <img src={homeImage} className="rounded-xl m-6" />
      <img src={payload} className="rounded-xl" />
      <GoX onClick={onClick} size={36} className="absolute right-0 top-0 m-4" />
    </div>
  );
}
