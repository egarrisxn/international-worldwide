"use client";
import * as Select from "@radix-ui/react-select";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useTransition } from "react";
import { useTheme } from "next-themes";
import { CheckIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ThemeSwitcher() {
  const t = useTranslations("");
  const { setTheme, themes, theme } = useTheme();
  const [isPending, startTransition] = useTransition();

  const onChange = (value) => {
    startTransition(() => {
      setTheme(value);
    });
  };

  return (
    <div className="relative">
      <Select.Root onValueChange={onChange}>
        <Select.Trigger
          aria-label={t("Theme")}
          className={clsx(
            "rounded-lg p-2 transition-colors hover:bg-dropdownHover",
            isPending && "pointer-events-none opacity-60"
          )}
        >
          <Select.Icon>
            <SunIcon className="size-6 text-button transition-colors" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            align="end"
            className="min-w-[8rem] overflow-hidden rounded-lg bg-dropdown py-0.5 shadow-md"
            position="popper"
          >
            <Select.Viewport>
              {themes.map((themeItem) => (
                <Select.Item
                  key={themeItem}
                  className="flex cursor-default items-center px-3 py-2 text-base data-[highlighted]:bg-dropdownHover"
                  value={themeItem}
                >
                  <div className="mr-2 w-[1rem]">
                    {themeItem === theme && (
                      <CheckIcon className="size-5 text-slate-600" />
                    )}
                  </div>
                  <span className="text-button">{themeItem}</span>
                </Select.Item>
              ))}
            </Select.Viewport>
            <Select.Arrow className="fill-dropdown text-dropdown" />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}
