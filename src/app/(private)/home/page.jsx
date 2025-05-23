import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/button";

export default function HomePage() {
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
      <div className="flex pt-4">
        <Link href="/quiz">
          <Button variant="primary" size="primary">
            {t("button")}
          </Button>
        </Link>
      </div>
    </>
  );
}
