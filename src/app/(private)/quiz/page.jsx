import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Button from "../../../components/button";

export default function QuizPage() {
  const t = useTranslations("QuizPage");
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
        <Link href="/quiz/css">
          <Button size="primary" variant="primary">
            CSS
          </Button>
        </Link>
        <Link href="/quiz/html">
          <Button size="primary" variant="primary">
            HTML
          </Button>
        </Link>
        <Link href="/quiz/javascript">
          <Button size="primary" variant="primary">
            JavaScript
          </Button>
        </Link>
        <Link href="/quiz/nextjs">
          <Button size="primary" variant="primary">
            Next.js
          </Button>
        </Link>
        <Link href="/quiz/nodejs">
          <Button size="primary" variant="primary">
            Node.js
          </Button>
        </Link>
        <Link href="/quiz/react">
          <Button size="primary" variant="primary">
            React
          </Button>
        </Link>
        <Link href="/quiz/sql">
          <Button size="primary" variant="primary">
            SQL
          </Button>
        </Link>
        <Link href="/quiz/tailwindcss">
          <Button size="primary" variant="primary">
            Tailwind CSS
          </Button>
        </Link>
        <Link href="/quiz/typescript">
          <Button size="primary" variant="primary">
            TypeScript
          </Button>
        </Link>
        <Link href="/quiz/vercel">
          <Button size="primary" variant="primary">
            Vercel
          </Button>
        </Link>
      </div>
    </>
  );
}
