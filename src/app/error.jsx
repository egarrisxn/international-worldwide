"use client";
import { useTranslations } from "next-intl";

export default function ErrorPage() {
  const t = useTranslations("error");

  return (
    <div className="mx-auto flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-semibold tracking-tight">{t("title")}</h1>
      <p className="max-w-[460px]">{t("description")}</p>
    </div>
  );
}
