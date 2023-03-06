/* eslint-disable @next/next/google-font-preconnect */

import { Head, Html, Main, NextScript } from 'next/document'
import { fonts } from '../styles/typography.css'

const Home = () => (
  <Html>
    <Head>
      {Object.values(fonts).map(({ file }) => (
        <link as="font" crossOrigin="anonymous" href={file} key={file} rel="preload" />
      ))}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="preload"
        href="https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="true"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <body>
      <Main />
      <div id="portal"></div>
      <NextScript />
    </body>
  </Html>
)

export default Home
