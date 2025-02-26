import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import ThemeSwitcher from "../../components/theme-switcher";
import LocaleSwitcher from "../../components/locale-switcher";
import NavLink from "../../components/nav-link";
import GithubIcon from "../../components/github-icon";

export default function PrivateLayout({ children }) {
  const t = useTranslations("PrivateLayout");

  return (
    <div className="flex grow flex-col">
      <header className="w-full border-b shadow-lg">
        <div className="mx-auto flex max-w-screen-2xl flex-row items-center justify-between px-4 py-5">
          <nav className="flex flex-row items-center gap-6">
            <NavLink href="/home">{t("home")}</NavLink>
            <NavLink href="/profile">{t("profile")}</NavLink>
            <NavLink href="/quiz">{t("quiz")}</NavLink>
          </nav>
          <div className="flex flex-row items-center gap-3">
            <ThemeSwitcher />
            <LocaleSwitcher />
          </div>
        </div>
      </header>
      <div className="mx-auto flex w-full max-w-2xl grow flex-col px-4 py-10 sm:px-0">
        {children}
      </div>
      <footer className="w-full">
        <div className="mx-auto flex max-w-screen-2xl flex-row items-center justify-between px-4 py-5">
          <div className="flex items-center">
            <GithubIcon />
          </div>
          <div>
            <Link
              className="group flex flex-row items-center gap-1 font-semibold transition-all hover:text-button"
              href="/"
            >
              <p>{t("logout")}</p>
              <ArrowLongRightIcon className="size-5 -translate-x-0.5 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:scale-x-105" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
