import {useTranslations} from 'next-intl';
import Link from 'next/link';
import Button from '../../../components/button';

export default function QuizPage() {
  const t = useTranslations('QuizPage');
  return (
    <>
      <h1 className="text-4xl 2xl:text-5xl pb-2 font-semibold tracking-tight">
        {t('title')}
      </h1>
      <p className="text-lg  2xl:text-xl py-2 max-w-[460px] 2xl:max-w-[580px]">
        {t('description')}
      </p>
      <div className="flex gap-2 pt-2 flex-row flex-wrap max-w-[460px] 2xl:max-w-[580px]">
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
