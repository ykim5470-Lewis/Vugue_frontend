import React from "react"
import { globalStyles } from "../reset/Styles"
import SubArticle from "./subArticle"
import Link from "next/link"

const Home = () => (
  <>
    <style type="text/css">{globalStyles}</style>
    <Link href="/PracticePagination/PracticePagination">
      <a>Pagination</a>
    </Link>
    <SubArticle />
  </>
)

export default Home
