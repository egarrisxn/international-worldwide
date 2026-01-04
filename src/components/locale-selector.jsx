"use client";
import { useTransition } from "react";
import * as Select from "@radix-ui/react-select";
import clsx from "clsx";
import { CheckIcon, LanguageIcon } from "@heroicons/react/24/solid";
import { setUserLocale } from "@/services/locale";

export default function LocaleSelector({ defaultValue, items, label }) {
  const [isPending, startTransition] = useTransition();

  function onChange(value) {
    const locale = value;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <div className="relative">
      <Select.Root defaultValue={defaultValue} onValueChange={onChange}>
        <Select.Trigger
          aria-label={label}
          className={clsx(
            "font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY rounded-base border-2 border-border p-2 text-sm shadow-shadow transition-all hover:shadow-none",
            isPending && "pointer-events-none opacity-60"
          )}
        >
          <Select.Icon>
            <LanguageIcon className="size-6 text-button transition-colors" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            align="end"
            className="min-w-[8rem] overflow-hidden rounded-lg bg-dropdown py-0.5 shadow-md"
            position="popper"
          >
            <Select.Viewport>
              {items.map((item) => (
                <Select.Item
                  key={item.value}
                  className="data-highlighted:bg-dropdownHover flex cursor-default items-center justify-between px-3 py-2 text-base"
                  value={item.value}
                >
                  <div className="mr-2 w-[1rem]">
                    {item.value === defaultValue && (
                      <CheckIcon className="size-5 text-slate-600" />
                    )}
                  </div>
                  <span className="text-button">{item.label}</span>
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
