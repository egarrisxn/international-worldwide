import { useLocale, useTranslations } from "next-intl";
import LocaleSelector from "./locale-selector";

export default function LocaleSwitcher() {
  const t = useTranslations("localeswitcher");
  const locale = useLocale();

  return (
    <LocaleSelector
      defaultValue={locale}
      items={[
        { value: "en", label: "English (English)" },
        { value: "de", label: "Deutsch (German)" },
        { value: "ar", label: "العربية (Arabic)" },
        { value: "es", label: "Español (Spanish)" },
        { value: "fa", label: "فارسی (Persian)" },
        { value: "fr", label: "Français (French)" },
        { value: "ja", label: "日本語 (Japanese)" },
        { value: "ru", label: "Русский (Russian)" },
      ]}
      label={t("label")}
    />
  );
}
