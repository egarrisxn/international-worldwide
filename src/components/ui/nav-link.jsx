"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, ...rest }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={clsx(
        "border-b-[3px] border-transparent py-1 font-bold transition-colors",
        isActive
          ? "border-b-primary text-primary"
          : "text-button hover:border-b-button hover:text-button"
      )}
      href={href}
      {...rest}
    />
  );
}
