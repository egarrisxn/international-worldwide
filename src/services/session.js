export async function authUser(credentials) {
  // In a real app, the credentials would be checked against a
  // database and potentially a session token set in a cookie
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        credentials.email === "jane@doe.com" &&
          credentials.password === "next-intl"
      );
    }, 1000);
  });
}
