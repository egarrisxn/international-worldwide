import Link from 'next/link';
import {useTranslations} from 'next-intl';
import ThemeSwitcher from '../../components/theme-switcher';
import LocaleSwitcher from '../../components/locale-switcher';
import NavLink from '../../components/nav-link';
import GithubIcon from '../../icons/github';

export default function AppLayout({children}) {
  const t = useTranslations('AppLayout');

  return (
    <div className="flex grow flex-col">
      <header className="w-full border-b shadow-lg">
        <div className="mx-auto flex max-w-screen-2xl flex-row items-center justify-between px-4 py-5">
          <nav className="flex flex-row items-center gap-6">
            <NavLink href="/secure">{t('home')}</NavLink>
            <NavLink href="/secure/profile">{t('profile')}</NavLink>
            <NavLink href="/secure/quiz">{t('quiz')}</NavLink>
          </nav>
          <div className="flex flex-row items-center gap-3">
            <ThemeSwitcher />
            <LocaleSwitcher />
          </div>
        </div>
      </header>
      <div className="mx-auto flex w-full max-w-2xl grow flex-col px-4 sm:px-0 py-10">
        {children}
      </div>
      <footer className="w-full">
        <div className="mx-auto flex max-w-screen-2xl flex-row items-center justify-between px-4 py-5">
          <div className="flex items-center">
            <GithubIcon />
          </div>
          <div className="flex items-center">
            <Link className="font-semibold transition-colors " href="/">
              {t('logout')} →
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
