import React, { useEffect } from "react"
import Head from "next/head"
import { globalStyles } from "../reset/Styles"

const Noop = ({ children }) => children

export default function Vugue({ Component, pageProps }) {
  const Layout = Component.Layout || Noop
  return (
    <>
      <Head>
        <style type="text/css">{globalStyles}</style>
        <title>Vugue</title>
        <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
