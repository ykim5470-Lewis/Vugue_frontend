import React from "react"
import Head from "next/head"
import { globalStyles } from "../reset/Styles"
import Layout from "../components/Layout"

const Noop = ({ children }) => children

export default function Vugue({ Component, pageProps }) {
  return (
    <>
      <Head>
        <style type="text/css">{globalStyles}</style>
        <title>Vugue</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
