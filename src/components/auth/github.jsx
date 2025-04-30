import { signIn } from "@/services/auth";
import Button from "../ui/button";

export function GitHubSignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/home" });
      }}
    >
      <Button>GitHub</Button>
    </form>
  );
}
