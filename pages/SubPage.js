import React from "react"
import dynamic from "next/dynamic"

const SubMain = dynamic(() => import("../components/Submain/SubMain"))

const SubPage = () => {
  return <SubMain />
}

export default SubPage
