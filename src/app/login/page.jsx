import { UsersIcon } from "@heroicons/react/24/outline";
import { isEqual } from "lodash";
import { redirect } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { z } from "zod";
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
  const t = await getTranslations("LoginPage");
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
  const t = useTranslations("LoginPage");
  const locale = useLocale();

  return (
    <>
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
            <UsersIcon className="mx-auto h-14 w-14" />
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
    </>
  );
}
