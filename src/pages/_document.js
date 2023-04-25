import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
            <link
                rel="stylesheet"
                href="https://bootswatch.com/4/flatly/bootstrap.min.css"
            />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
