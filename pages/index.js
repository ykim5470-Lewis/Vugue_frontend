import React from "react"
import { globalStyles } from "../reset/Styles"
import Layout from "../components/Layout"
import styled from "styled-components"

const Home = () => (
  <>
    <style type="text/css">{globalStyles}</style>
    <Layout>
      <Content>메인컨텐츠</Content>
    </Layout>
  </>
)
const Content = styled.div`
  margin-top: 100px;
`
export default Home
