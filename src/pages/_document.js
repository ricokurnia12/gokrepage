import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Ganesha Operation | Go Kreasi</title>
        <meta
          name="description"
          content="Aplikasi GO Kreasi memudahkan kamu untuk menerapkan formula 3B: Belajar, Berlatih, dan Bertanding di mana saja dan kapan saja hanya dalam satu genggaman. Membuatmu siap untuk capai target akademikmu."
        />
        <Script
          id="gtm-script"
          src="https://www.googletagmanager.com/gtag/js?id=G-GFBCTCXQD2"
        />
        <script
          id="gtm-config"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                    dataLayer.push(arguments);
                }
                gtag("js", new Date());

                gtag("config", "G-GFBCTCXQD2" ,{page_path: window.location.pathname,});
              `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
