import React from "react"
import { globalStyles } from "../reset/Styles"
import DetailPage from "./DetailPage/DetailPage"

const Home = () => (
  <>
    <style type="text/css">{globalStyles}</style>
    <DetailPage />
  </>
)

export default Home
