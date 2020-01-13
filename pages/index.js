import React from "react"
import { globalStyles } from "../reset/Styles"
<<<<<<< HEAD
import Layout from "../components/Layout"
import styled from "styled-components"
=======
import SubArticle from "./subArticle"
import Link from "next/link"
import MainArticle from "../components/MainArticle"
>>>>>>> c29d225... 메인컨텐츠 추가

const Home = () => (
  <>
    <style type="text/css">{globalStyles}</style>
<<<<<<< HEAD
    <Layout>
      <Content>메인컨텐츠</Content>
    </Layout>
=======
    {/* <Link href="/PracticePagination/PracticePagination">
      <a>Pagination</a>
    </Link> */}
    {/* <SubArticle /> */}
    <MainArticle></MainArticle>
>>>>>>> c29d225... 메인컨텐츠 추가
  </>
)
const Content = styled.div`
  margin-top: 100px;
`
export default Home
