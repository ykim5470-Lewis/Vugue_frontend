import React, { Component } from "react"
import { globalStyles } from "../reset/Styles"
import Layout from "../components/Layout"
import MainArticle from "../components/mainArticle"

class Home extends Component {
  render() {
    return (
      <>
        <style type="text/css">{globalStyles}</style>
        <Layout>
          <MainArticle></MainArticle>
        </Layout>
      </>
    )
  }
}

export default Home
