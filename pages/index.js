import React from "react"
import { globalStyles } from "../reset/Styles"
import Layout from "../components/Layout"
import MainArticle from "../components/mainArticle"

const Home = () => (
  <>
    <style type="text/css">{globalStyles}</style>
    <Layout>
      <MainArticle></MainArticle>
    </Layout>
  </>
)

export default Home
