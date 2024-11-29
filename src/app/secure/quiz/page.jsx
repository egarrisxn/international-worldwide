import {useTranslations} from 'next-intl';
import Link from 'next/link';

export default function QuizPage() {
  const t = useTranslations('QuizPage');
  return (
    <>
      <h1 className="text-4xl 2xl:text-5xl pb-2 font-semibold tracking-tight">
        {t('title')}
      </h1>
      <p className="text-lg 2xl:text-xl py-2 max-w-[460px] 2xl:max-w-[580px]">
        {t('description')}
      </p>
      <div className="flex gap-2 pt-2 flex-row">
        <Link className="sm:text-lg 2xl:text-xl" href="/secure/quiz/nextjs">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Next.js
          </button>
        </Link>
        <Link className="sm:text-lg 2xl:text-xl" href="/secure/quiz/react">
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            React
          </button>
        </Link>
        <Link className="sm:text-lg 2xl:text-xl" href="/secure/quiz/vercel">
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            Vercel
          </button>
        </Link>
      </div>
    </>
  );
}
