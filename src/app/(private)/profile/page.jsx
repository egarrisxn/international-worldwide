import { useTranslations } from "next-intl";

export default function ProfilePage() {
  const t = useTranslations("ProfilePage");
  return (
    <>
      <h1 className="pb-2 text-4xl font-semibold tracking-tight 2xl:text-5xl">
        {t("title")}
      </h1>
      <p className="max-w-[460px] pt-2 text-lg 2xl:max-w-[580px] 2xl:text-xl">
        {t("description")}
      </p>
    </>
  );
}
