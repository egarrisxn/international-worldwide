import {useLocale, useTranslations} from 'next-intl';
import LocaleSwitcherSelect from './locale-switcher-select';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {value: 'en', label: 'English (English)'},
        {value: 'de', label: 'Deutsch (German)'},
        {value: 'ar', label: 'العربية (Arabic)'},
        {value: 'es', label: 'Español (Spanish)'},
        {value: 'fa', label: 'فارسی (Persian)'},
        {value: 'fr', label: 'Français (French)'},
        {value: 'ja', label: '日本語 (Japanese)'},
        {value: 'ru', label: 'Русский (Russian)'}
      ]}
      label={t('label')}
    />
  );
}

//  <LocaleSwitcherSelect
//    defaultValue={locale}
//    items={[
//      {
//        value: 'en',
//        label: t('en')
//      },
//      {
//        value: 'de',
//        label: t('de')
//      },
//      {
//        value: 'ar',
//        label: t('ar')
//      },
//      {
//        value: 'es',
//        label: t('es')
//      },
//      {
//        value: 'fa',
//        label: t('fa')
//      },
//      {
//        value: 'fr',
//        label: t('fr')
//      },
//      {
//        value: 'ja',
//        label: t('ja')
//      },
//      {
//        value: 'ru',
//        label: t('ru')
//      }
//    ]}
//    label={t('label')}
//  />;
