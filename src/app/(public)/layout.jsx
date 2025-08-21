import Image from "next/image";
import { useTranslations } from "next-intl";
import ThemeSwitcher from "@/components/theme-switcher";
import LocaleSwitcher from "@/components/locale-swticher";

export default function PublicLayout({ children }) {
  const t = useTranslations("public");

  return (
    <main className="flex grow flex-col">
      <header className="w-full border-b-2 shadow-lg">
        <div className="max-w-(--breakpoint-2xl) mx-auto flex flex-row items-center justify-between px-4 py-5">
          <nav className="flex flex-row items-center">
            <div className="text-3xl font-light tracking-tighter">
              {t("logoP1")}
            </div>
            <Image
              src="/intl-wrld.png"
              alt={t("logoAlt")}
              width={36}
              height={36}
              className="ml-0.5 size-9"
              priority
            />
            <div className="flex flex-col gap-0 text-base font-black leading-3">
              <span className="tracking-tight">{t("logoP2")}</span>
              <span className="pl-[3px]">{t("logoP3")}</span>
            </div>
          </nav>
          <div className="flex flex-row items-center gap-3">
            <ThemeSwitcher />
            <LocaleSwitcher />
          </div>
        </div>
      </header>
      {children}
    </main>
  );
}
