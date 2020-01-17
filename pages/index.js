import React, { Component } from "react"
import { globalStyles } from "../reset/Styles"
import MainArticle from "../components/mainArticle"
import styled from "styled-components"
import Link from "next/link"

// const Home = (props) => (
//   <>
//     <style type="text/css">{globalStyles}</style>
//     {/* <Article title="Article Page Routing" /> */}
//     <MainArticle></MainArticle>
//   </>
// )

// function Article(props) {
//   return (
//     <div>
//       <Link href="/Article/[id]" as={`/Article/${props.id}`}>
//         <a>{props.id}</a>
//       </Link>
//     </div>
//   )
// }

class Home extends Component {
  render() {
    return (
      <>
        <style type="text/css">{globalStyles}</style>
        <MainArticle></MainArticle>
      </>
    )
  }
}

export default Home
