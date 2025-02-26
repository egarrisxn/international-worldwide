import clsx from "clsx";
import { Inter, Rubik, Geist } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ThemeProvider } from "../components/theme-provider";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
});
const rubik = Rubik({
  subsets: ["arabic"],
  variable: "--rubik",
});
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata = {
  metadataBase: new URL("https://international-worldwide.vercel.app"),
  title: "International Worldwide",
  description: "Just doing it worldwide!",
  referrer: "origin-when-cross-origin",
  creator: "https://egxo.dev.",
  keywords: [
    "javascript",
    "nextjs",
    "next-int",
    "react",
    "tailwindcss",
    "vercel",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "International Worldwide",
    description: "Just doing it worldwide!",
    url: "https://international-worldwide.vercel.app",
    siteName: "international-worldwide",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "International Worldwide",
    description: "Just doing it worldwide!",
    creator: "@eg__xo",
    site: "@eg__xo",
    images: [
      {
        url: "/twitter-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },
};

export default async function LocaleLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" || locale == "fa" ? "rtl" : "ltr"}
      className={`${inter.variable} ${geist.variable} ${rubik.variable} `}
      suppressHydrationWarning
    >
      <head>
        <title>Int'l Worldwide</title>
      </head>
      <body className={clsx("flex min-h-[100vh] flex-col")}>
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="light"
          themes={[
            "light",
            "dark",
            "instagram",
            "facebook",
            "discord",
            "netflix",
            "twilight",
            "reddit",
          ]}
        >
          <NextTopLoader
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            color="var(--primary)"
            showSpinner={false}
          />
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
