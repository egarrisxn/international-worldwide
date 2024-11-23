import {useTranslations} from 'next-intl';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  return (
    <div className="flex min-h-screen flex-col mx-auto items-center justify-center text-center">
      <h1 className="text-4xl font-semibold tracking-tight">{t('title')}</h1>
      <p className="max-w-[460px]">{t('description')}</p>
    </div>
  );
}
