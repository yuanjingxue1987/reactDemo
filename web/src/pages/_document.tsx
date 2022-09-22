import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class HtmlDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, height=device-height,  initial-scale=1.0, user-scalable=no;user-scalable=0;"/>
         </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
