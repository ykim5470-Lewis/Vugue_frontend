import React from "react"
// import dynamic from "./node_modules/next/dynamic"
import { useRouter } from "next/router"
import SubMain from "../../../components/Submain/SubMain"

Article.getInitialProps = ({ query }) => {
  console.log(query)

  return { id: query }
}

// const SubMain = dynamic(() => import("../../components/Submain/SubMain"))

export default function Article(props) {
  const router = useRouter(props)
  console.log(props)
  console.log(router)

  return (
    <>
      <SubMain id={props} />
    </>
  )
}

// const SubPage1 = () => {
//   const router = useRouter()
//   return <SubMain />
// }

// export default SubPage1
