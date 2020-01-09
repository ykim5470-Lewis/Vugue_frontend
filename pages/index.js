import React from "react"
import { globalStyles } from "../reset/Styles"
import DetailPage from "./DetailPage/DetailPage"
import Link from "next/link"

const Home = () => (
  <>
    <style type="text/css">{globalStyles}</style>
    <Link href="/PracticePagination/PracticePagination">
      <a>Pagination</a>
    </Link>
    <DetailPage />
  </>
)

export default Home
