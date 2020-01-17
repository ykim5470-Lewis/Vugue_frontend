import React from "./node_modules/react"
import { useRouter } from "./node_modules/next/router"
import SubMain from "../../../components/Submain/SubMain"

Article.getInitialProps = ({ query }) => {
  console.log(query)

  return { id: query }
}

export default function Article(props) {
  const router = useRouter(props)

  return (
    <>
      <SubMain id={props} />
    </>
  )
}
