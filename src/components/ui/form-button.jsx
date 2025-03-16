"use client";
import { useFormStatus } from "react-dom";

export default function Button(props) {
  const { pending } = useFormStatus();

  return (
    <button
      className="font-base inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-base border-2 border-border bg-button px-3 py-2 text-sm text-button-text shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none disabled:opacity-60"
      disabled={pending}
      type="button"
      {...props}
    />
  );
}
