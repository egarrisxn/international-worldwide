"use server";
import { cookies } from "next/headers";
import { defaultLocale } from "../i18n/config";

const COOKIE_NAME = "NEXT_LOCALE";

export async function getUserLocale() {
  const cookieStore = await cookies();
  const locale = cookieStore.get(COOKIE_NAME)?.value || defaultLocale;
  console.log("Locale:", locale);
  return locale;
}

export async function setUserLocale(locale) {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, locale);
}
