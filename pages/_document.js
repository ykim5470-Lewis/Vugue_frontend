import React from "react"
import NextDocument from "next/document"
import { ServerStyleSheet } from "styled-components"

class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        })
      const initialProps = await NextDocument.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
}

class MyDocument extends Document {
  render() {
    const { nextStyle } = this.props

    return (
      <html>
        <Head>{nextStyle.tag}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

MyDocument.getInitialProps = function(ctx) {
  const props = Document.getInitialProps(ctx)

  props.nextStyle = flush()

  return props
}

export default Document
