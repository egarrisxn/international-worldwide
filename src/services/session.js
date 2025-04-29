export async function authUser(credentials) {
  // Just for testing.
  // Will update soon.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        credentials.email === "jane@doe.com" &&
          credentials.password === "next-intl"
      );
    }, 1000);
  });
}
