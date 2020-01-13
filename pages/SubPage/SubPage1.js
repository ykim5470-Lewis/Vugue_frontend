import React from "react"
import dynamic from "next/dynamic"
import Layout from "../../components/Layout"

const SubMain = dynamic(() => import("../../components/Submain/SubMain"))

const SubPage1 = () => {
  return (
    <Layout>
      <SubMain></SubMain>
    </Layout>
  )
}

export default SubPage1
