import {useTranslations} from 'next-intl';

export default function ProfilePage() {
  const t = useTranslations('ProfilePage');
  return (
    <>
      <h1 className="text-4xl 2xl:text-5xl pb-2 font-semibold tracking-tight">
        {t('title')}
      </h1>
      <p className="text-lg 2xl:text-xl pt-2 max-w-[460px] 2xl:max-w-[580px]">
        {t('description')}
      </p>
    </>
  );
}
