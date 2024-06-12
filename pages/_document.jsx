import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
      {/* <Script
        strategy="afterInteractive"
        src={"https://www.googletagmanager.com/gtag/js?id=G-FSL6XKF6GR"}
      />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FSL6XKF6GR');
        `}
        </Script> */}
        {/* <Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-PDG4DWR');`}}></Script> */}
      </Head>
      <body>
        {/* <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PDG4DWR" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

