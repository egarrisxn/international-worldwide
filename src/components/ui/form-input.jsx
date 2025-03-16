"use client";
import { useFormStatus } from "react-dom";

export default function FormField({ label, ...rest }) {
  const { pending } = useFormStatus();

  return (
    <label>
      <p className="text-sm font-extrabold leading-none">{label}</p>
      <input
        className="file:font-base mt-2 h-10 w-full rounded-base border bg-white px-3 py-2 transition-all placeholder:text-slate-500 focus:border-sky-600 focus:ring-1 focus:ring-sky-600 hover:enabled:border-slate-400 disabled:opacity-60"
        disabled={pending}
        {...rest}
      />
    </label>
  );
}
