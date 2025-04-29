"use client";
import { useActionState } from "react";
import AuthErrors from "./auth-errors";

export default function AuthForm({ action, fields, header, submit }) {
  const [state, formAction] = useActionState(action, null);

  return (
    <form
      action={formAction}
      className="mx-auto mt-12 mb-20 w-full max-w-[24rem] px-4"
    >
      {header}
      <div className="mt-14 mb-10">
        {fields}
        {state?.success === false && (
          <div className="mt-4">
            <AuthErrors errors={state.errors} />
          </div>
        )}
      </div>
      {submit}
    </form>
  );
}
