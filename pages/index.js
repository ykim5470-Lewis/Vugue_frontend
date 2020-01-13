import React from "react"
import { globalStyles } from "../reset/Styles"
import SubArticle from "./subArticle"
import Link from "next/link"
import Layout from "../components/Layout"
import styled from "styled-components"

const Home = () => (
  <>
    <style type="text/css">{globalStyles}</style>
    {/* <Link href="/PracticePagination/PracticePagination">
      <a>Pagination</a>
    </Link> */}
    {/* <SubArticle /> */}
    <Layout>
      <Content>메인컨텐츠</Content>
    </Layout>
  </>
)
const Content = styled.div`
  margin-top: 100px;
`
export default Home
