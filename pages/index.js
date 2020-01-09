import React from "react"
import { globalStyles } from "../reset/Styles"
import DetailPage from "./DetailPage/DetailPage"
import Link from "next/link"
import PracticePagination from "./PracticePagination/PracticePagination"

const Home = () => (
  <>
    <DetailPage />
    <PracticePagination />
  </>
)

export default Home
