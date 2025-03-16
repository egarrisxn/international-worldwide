import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  return (
    <>
      <div className="flex flex-row items-center gap-1">
        <h1 className="pb-2 text-4xl font-semibold tracking-tight 2xl:text-5xl">
          {t("title")}
        </h1>
        <Image
          src="/intl-wrld.png"
          alt="International Worldwide Icon"
          width={48}
          height={48}
          className="size-12"
          priority
        />
      </div>
      <p className="max-w-[460px] pt-2 text-lg 2xl:max-w-[580px] 2xl:text-xl">
        {t("description")}
      </p>
    </>
  );
}
