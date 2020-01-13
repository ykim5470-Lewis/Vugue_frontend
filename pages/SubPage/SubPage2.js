import React from "react"
import dynamic from "next/dynamic"
import Layout from "../../components/Layout"

const SubMain1 = dynamic(() => import("../../components/Submain/SubMain1"))

const SubPage2 = () => {
  return (
    <Layout>
      <SubMain1></SubMain1>
    </Layout>
  )
}

export default SubPage2
