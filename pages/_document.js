import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
          <script data-ad-client="ca-pub-1599870932013624"
            type='text/javascript'
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
          <script
            dangerouslySetInnerHTML={{
            __html: `
               (adsbygoogle = window.adsbygoogle || []).push({
                   google_ad_client: "ca-pub-1599870932013624",
                   enable_page_level_ads: true
              });
                `
          }}
 />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}