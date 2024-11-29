import clsx from 'clsx';
import {Inter, Rubik, Space_Grotesk} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import {ThemeProvider} from '../components/theme-provider';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter'
});
const rubik = Rubik({
  subsets: ['arabic'],
  variable: '--rubik'
});
const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});

export default async function LocaleLayout({children}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === 'ar' || locale == 'fa' ? 'rtl' : 'ltr'}
      className={`${inter.variable} ${space_grotesk.variable} ${rubik.variable} `}
      suppressHydrationWarning
    >
      <head>
        <title>Int'l Worldwide'</title>
      </head>
      <body className={clsx('flex min-h-[100vh] flex-col')}>
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="light"
          themes={[
            'light',
            'dark',
            'instagram',
            'facebook',
            'discord',
            'netflix',
            'twilight',
            'reddit'
          ]}
        >
          <NextIntlClientProvider messages={messages}>
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
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
