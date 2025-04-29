import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/button";

export default function Quiz() {
  const t = useTranslations("quiz");

  const subjects = [
    "css",
    "html",
    "javascript",
    "nextjs",
    "nodejs",
    "react",
    "sql",
    "tailwindcss",
    "typescript",
    "vercel",
  ];

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
      <div className="flex max-w-[460px] flex-row flex-wrap gap-4 pt-4 2xl:max-w-[580px]">
        {subjects.map((subject) => (
          <Link key={subject} href={`/quiz/${subject}`}>
            <Button size="primary" variant="primary">
              {subject.charAt(0).toUpperCase() + subject.slice(1)}
            </Button>
          </Link>
        ))}
      </div>
    </>
  );
}
