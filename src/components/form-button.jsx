"use client";
import { useFormStatus } from "react-dom";

export default function Button(props) {
  const { pending } = useFormStatus();

  return (
    <button
      className="block w-full rounded-md border bg-button px-3 py-2 font-semibold text-button-text shadow-sm transition-all hover:bg-opacity-90 hover:shadow-lg disabled:opacity-60"
      disabled={pending}
      type="button"
      {...props}
    />
  );
}
