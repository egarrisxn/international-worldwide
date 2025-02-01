import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useFormStatus } from "react-dom";

export default function LoginFormErrors({ errors }) {
  const { pending } = useFormStatus();

  const messages = [];
  if (errors.fieldErrors.email) {
    messages.push(...errors.fieldErrors.email);
  }
  if (errors.fieldErrors.password) {
    messages.push(...errors.fieldErrors.password);
  }
  messages.push(...errors.formErrors);

  return messages.map((error, i) => (
    <p
      key={i}
      className={clsx(
        "font-semibold transition-opacity",
        pending && "opacity-60"
      )}
    >
      <ExclamationTriangleIcon className="inline-block size-5" /> {error}
    </p>
  ));
}
