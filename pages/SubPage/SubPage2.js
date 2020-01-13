import React from "react"
import dynamic from "next/dynamic"

const SubMain1 = dynamic(() => import("../../components/Submain/SubMain1"))

const SubPage2 = () => {
  return <SubMain1 />
}

export default SubPage2
