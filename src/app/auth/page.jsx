import Image from "next/image";
import { redirect } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { z } from "zod";
import { isEqual } from "lodash";
import { LanguageIcon } from "@heroicons/react/24/solid";
import ThemeSwitcher from "../../components/theme-switcher";
import LocaleSwitcher from "../../components/locale-switcher";
import FormButton from "../../components/ui/form-button";
import FormField from "../../components/ui/form-input";
import { authUser } from "../../services/session";
import AuthForm from "./auth-form";

const authFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

async function authAction(prev, data) {
  "use server";
  const t = await getTranslations("auth");
  const values = Object.fromEntries(data);

  const result = await authFormSchema
    .refine(async (credentials) => authUser(credentials), {
      message: t("invalidCredentials"),
    })
    .safeParseAsync(values, {
      errorMap(issue, ctx) {
        let message;

        if (isEqual(issue.path, ["email"])) {
          message = t("invalidEmail");
        } else if (isEqual(issue.path, ["password"])) {
          message = t("invalidPassword");
        }

        return { message: message || ctx.defaultError };
      },
    });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten(),
    };
  } else {
    redirect("/home");
  }
}

export default function AuthPage() {
  const t = useTranslations("auth");
  const locale = useLocale();

  return (
    <div>
      <header className="w-full border-b shadow-xl">
        <div className="mx-auto flex max-w-screen-2xl flex-row items-center justify-between px-4 py-5">
          <div className="flex items-center">
            <Image
              src="/intl-wrld.png"
              alt="International Worldwide Icon"
              width={40}
              height={40}
              className="size-10"
              priority
            />
            <span className="ml-2 text-3xl font-black tracking-tighter sm:hidden">
              INTL. WRLD
            </span>
            <span className="ml-2 hidden text-3xl font-black tracking-tighter sm:block">
              INTL. WORLDWIDE
            </span>
          </div>
          <div className="flex flex-row items-center gap-3">
            <ThemeSwitcher />
            <LocaleSwitcher />
          </div>
        </div>
      </header>
      <div className="mx-auto w-full max-w-lg rounded-base border-2 border-border bg-white text-black shadow-shadow lg:mt-12 dark:bg-black dark:text-white">
        <AuthForm
          key={locale}
          action={authAction}
          fields={
            <div className="flex flex-col gap-5 font-bold">
              <FormField
                label={t("email")}
                name="email"
                placeholder="jane@doe.com"
                required
                type="email"
              />
              <FormField
                label={t("password")}
                name="password"
                placeholder="••••••••"
                required
                type="password"
              />
            </div>
          }
          header={
            <div className="text-center">
              <LanguageIcon className="mx-auto size-16" />
              <h1 className="mt-4 text-4xl font-extrabold leading-none tracking-tight">
                {t("title")}
              </h1>
              <p className="mt-2 text-slate-500">{t("description")}</p>
            </div>
          }
          submit={
            <div>
              <div className="flex flex-row justify-center gap-1.5 sm:gap-2">
                <FormButton type="submit">{t("login")}</FormButton>
                <FormButton type="submit">{t("register")}</FormButton>
              </div>
              <p className="mt-4 text-center text-sm text-slate-500">
                {t("credentials")}
              </p>
            </div>
          }
        />
        <div className="pb-8">
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
