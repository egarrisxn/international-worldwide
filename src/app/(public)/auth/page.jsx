import Image from "next/image";
import { useTranslations } from "next-intl";
import { LanguageIcon } from "@heroicons/react/24/solid";
import Button from "@/components/ui/button";
import { GitHubSignIn } from "@/components/auth/github";
// import { GoogleSignIn } from "@/components/auth/google";

export default function AuthPage() {
  const t = useTranslations("auth");

  return (
    <div className="mx-auto flex w-full max-w-2xl grow flex-col px-4 py-10 sm:px-0 xl:pt-20">
      <div className="mx-auto w-full max-w-lg rounded-base border-2 border-border bg-white py-12 text-black shadow-shadow lg:mt-12 dark:bg-black dark:text-white">
        <div className="text-center">
          <LanguageIcon className="mx-auto size-16" />
          <h1 className="mt-4 text-4xl leading-none font-extrabold tracking-tight">
            {t("title")}
          </h1>
          <p className="mt-2 text-slate-500">{t("description")}</p>
        </div>
        <div className="fex-row mx-auto flex items-center justify-center gap-2 pt-8 pb-12 sm:gap-4">
          <GitHubSignIn />
          <Button disabled>Google</Button>
          {/* <GoogleSignIn /> */}
        </div>
        <div>
          <Image
            src="/intl-wrld.png"
            alt="International Worldwide Icon"
            width={80}
            height={80}
            className="mx-auto size-20"
            priority
          />
        </div>
      </div>
    </div>
  );
}
