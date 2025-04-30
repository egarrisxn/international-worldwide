import { useTranslations } from "next-intl";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { signOut } from "@/services/auth";
import NavLink from "@/components/ui/link";
import ThemeSwitcher from "@/components/theme-switcher";
import LocaleSwitcher from "@/components/locale-swticher";
import GithubIcon from "@/components/icons/github";

export default function PrivateLayout({ children }) {
  const t = useTranslations("private");

  return (
    <main className="flex grow flex-col">
      <header className="w-full border-b-2 shadow-lg">
        <div className="mx-auto flex max-w-(--breakpoint-2xl) flex-row items-center justify-between px-4 py-5">
          <nav className="flex flex-row items-center gap-6">
            <NavLink href="/home">{t("home")}</NavLink>
            <NavLink href="/quiz">{t("quiz")}</NavLink>
          </nav>
          <div className="flex flex-row items-center gap-3">
            <ThemeSwitcher />
            <LocaleSwitcher />
          </div>
        </div>
      </header>
      <div className="mx-auto flex w-full max-w-2xl grow flex-col px-4 py-10 sm:px-0 xl:pt-20">
        {children}
      </div>
      <footer className="w-full">
        <div className="mx-auto flex max-w-(--breakpoint-2xl) flex-row items-center justify-between px-4 py-5">
          <div className="flex items-center">
            <GithubIcon />
          </div>
          <div>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <button
                type="submit"
                className="group hover:text-button flex flex-row items-center gap-1 font-semibold transition-all"
              >
                <span>{t("logout")}</span>
                <ArrowLongRightIcon className="size-5 -translate-x-0.5 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:scale-x-105" />
              </button>
            </form>
          </div>
        </div>
      </footer>
    </main>
  );
}
