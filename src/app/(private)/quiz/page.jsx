import { useTranslations } from "next-intl";
import Link from "next/link";
import Button from "../../../components/button";

export default function QuizPage() {
  const t = useTranslations("QuizPage");
  return (
    <>
      <h1 className="pb-2 text-4xl font-semibold tracking-tight 2xl:text-5xl">
        {t("title")}
      </h1>
      <p className="max-w-[460px] py-2 text-lg 2xl:max-w-[580px] 2xl:text-xl">
        {t("description")}
      </p>
      <div className="flex max-w-[460px] flex-row flex-wrap gap-2 pt-2 2xl:max-w-[580px]">
        <Link href="/quiz/css">
          <Button>CSS</Button>
        </Link>
        <Link href="/quiz/html">
          <Button>HTML</Button>
        </Link>
        <Link href="/quiz/javascript">
          <Button>JavaScript</Button>
        </Link>
        <Link href="/quiz/nextjs">
          <Button>Next.js</Button>
        </Link>
        <Link href="/quiz/nodejs">
          <Button>Node.js</Button>
        </Link>
        <Link href="/quiz/react">
          <Button>React</Button>
        </Link>
        <Link href="/quiz/sql">
          <Button>SQL</Button>
        </Link>
        <Link href="/quiz/tailwindcss">
          <Button>Tailwind CSS</Button>
        </Link>
        <Link href="/quiz/typescript">
          <Button>TypeScript</Button>
        </Link>
        <Link href="/quiz/vercel">
          <Button>Vercel</Button>
        </Link>
      </div>
    </>
  );
}
