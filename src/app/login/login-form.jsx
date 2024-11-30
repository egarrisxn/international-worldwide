'use client';
import {useActionState} from 'react';
import LoginFormErrors from './login-form-errors';

export default function LoginForm({action, fields, header, submit}) {
  const [state, formAction] = useActionState(action, null);

  return (
    <form
      action={formAction}
      className="mx-auto mt-12 mb-20 w-full max-w-[24rem] px-4"
    >
      {header}
      <div className="mb-10 mt-14">
        {fields}
        {state?.success === false && (
          <div className="mt-4">
            <LoginFormErrors errors={state.errors} />
          </div>
        )}
      </div>
      {submit}
    </form>
  );
}
