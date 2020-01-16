import React, { Component } from "react"
import { globalStyles } from "../reset/Styles"
import Layout from "../components/Layout"
import styled from "styled-components"
import Link from "next/link"

const Home = (props) => (
  <>
    <style type="text/css">{globalStyles}</style>
    <Article title="Article Page Routing" />
    <Layout>
      <Content>메인컨텐츠</Content>
    </Layout>
  </>
)

function Article(props) {
  return (
    <div>
      <Link href="/Article/[id]" as={`/Article/${props.id}`}>
        <a>{props.id}</a>
      </Link>
    </div>
  )
}
const Content = styled.div`
  margin-top: 100px;
`
export default Home
