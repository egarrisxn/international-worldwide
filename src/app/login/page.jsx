import Image from "next/image";
import { redirect } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { z } from "zod";
import { isEqual } from "lodash";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import ThemeSwitcher from "../../components/theme-switcher";
import LocaleSwitcher from "../../components/locale-switcher";
import FormButton from "../../components/form-button";
import FormField from "../../components/form-field";
import { loginUser } from "../../services/session";
import LoginForm from "./login-form";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

async function loginAction(prev, data) {
  "use server";
  const t = await getTranslations("login");
  const values = Object.fromEntries(data);

  const result = await loginFormSchema
    .refine(async (credentials) => loginUser(credentials), {
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

export default function LoginPage() {
  const t = useTranslations("login");
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
          </div>
          <div className="flex flex-row items-center gap-3">
            <ThemeSwitcher />
            <LocaleSwitcher />
          </div>
        </div>
      </header>
      <div className="mx-auto w-full max-w-lg rounded-xl border-[var(--button)] lg:mt-12 lg:border-2 lg:shadow-xl">
        <LoginForm
          key={locale}
          action={loginAction}
          fields={
            <div className="flex flex-col gap-5">
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
              <UserGroupIcon className="mx-auto size-16" />
              <h1 className="mt-4 text-4xl font-semibold tracking-tight">
                {t("title")}
              </h1>
              <p className="mt-2 text-slate-500">{t("description")}</p>
            </div>
          }
          submit={
            <div>
              <FormButton type="submit">{t("login")}</FormButton>
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
