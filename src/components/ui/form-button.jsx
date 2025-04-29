"use client";
import { useFormStatus } from "react-dom";

export default function Button(props) {
  const { pending } = useFormStatus();

  return (
    <button
      className="font-base rounded-base border-border bg-button text-button-text shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY inline-flex h-10 w-full items-center justify-center border-2 px-3 py-2 text-sm whitespace-nowrap transition-all hover:shadow-none disabled:opacity-60"
      disabled={pending}
      type="button"
      {...props}
    />
  );
}
