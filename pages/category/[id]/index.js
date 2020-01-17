import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/router"
import { API_URL } from "../../../config/Constants"
import axios from "axios"
import SmallArticleItem from "../../../components/mainArticle/SmallArticleItem"
import { CommonSection } from "../../../styles/Common"
import CategoryHeader from "../../../components/categoryHeader"
import styled from "styled-components"

const CategoryPage = () => {
  const router = useRouter()
  const [categoryData, setCategoryData] = useState([])
  const [counter, setCounter] = useState(12)
  const queryId = router.query.id
  const id = queryId.slice(queryId.length - 1, queryId.length)
  const title = queryId.slice(0, queryId.length - 1)

  const dataLoad = async () => {
    if (queryId === "VIDEO5") {
      const res = await axios.get(
        `${API_URL}/article/video?offset=0&limit=${counter}`
      )
      setCategoryData(res.data)
    } else if (queryId === "NEWPOST6") {
      const res = await axios.get(`${API_URL}/article/image`)
      setCategoryData(res.data.data)
    } else {
      const res = await axios.get(
        `${API_URL}/article/${id}?offset=0&limit=${counter}`
      )
      setCategoryData(res.data.data)
    }
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
  }, [queryId])
  return (
    <CommonSection>
      <Content>
        <CategoryHeader title={title} id={id}></CategoryHeader>
        {categoryData.map((curr, i) => (
          <SmallArticleItem data={curr} id={i}></SmallArticleItem>
        ))}
      </Content>
      <Loading src="/loading_logo.gif" />
    </CommonSection>
  )
}

CategoryPage.getInitialProps = async () => {
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
  display: block;
  margin: 0 auto;
  width: 300px;
  height: 300px;
`
export default CategoryPage
