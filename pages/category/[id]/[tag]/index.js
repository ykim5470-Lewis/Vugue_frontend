import { useState, useEffect } from "react"
import axios from "axios"
import { API_URL } from "../../../../config/Constants"
import { CommonSection } from "../../../../styles/Common"
import { useRouter } from "next/router"
import CategoryHeader from "../../../../components/categoryHeader"
import SmallArticleItem from "../../../../components/mainArticle/SmallArticleItem"
import styled from "styled-components"

const SubCategoryPage = () => {
  const router = useRouter()
  const [categoryData, setCategoryData] = useState([])
  const queryId = router.query.id
  const [counter, setCounter] = useState(12)
  const subId = router.query.tag
  const id = queryId.slice(queryId.length - 1, queryId.length)
  const title = queryId.slice(0, queryId.length - 1)
  const dataLoad = async () => {
    const res = await axios.get(
      `${API_URL}article/${id}?tag_id=${subId}&offset=0&limit=${counter}`
    )
    setCategoryData(res.data.data)
  }
  useEffect(() => {
    dataLoad()
    console.log(1)
  }, [counter])

  useEffect(() => {
    dataLoad()
    const getInfiniteScroll = () => {
      const scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      )
      const scrollTop = Math.max(
        document.documentElement.scrollTop,
        document.body.scrollTop
      )
      const clientHeight = document.documentElement.clientHeight

      if (scrollTop + clientHeight === scrollHeight) {
        setCounter((counter) => counter + 12)
      }
    }
    window.addEventListener("scroll", getInfiniteScroll)
    return () => {
      window.removeEventListener("scroll", getInfiniteScroll)
    }
  }, [])

  useEffect(() => {
    setCounter(12)
    if (counter === 12) dataLoad()
  }, [subId])
  return (
    <CommonSection>
      <Content>
        <CategoryHeader id={id} title={title}></CategoryHeader>
        {categoryData.map((curr, i) => (
          <SmallArticleItem data={curr} key={i}></SmallArticleItem>
        ))}
      </Content>
      <Loading src="/loading_logo.gif"></Loading>
    </CommonSection>
  )
}
SubCategoryPage.getInitialProps = async () => {
  return {}
}
const Content = styled.div`
  width: 1300px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 33.333%;
  }
  @media (max-width: 800px) {
    width: 100%;
    height: 680px;
    transition: 1s;
  }
`
const Loading = styled.img`
  width: 300px;
  height: 300px;
`

export default SubCategoryPage
