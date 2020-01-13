import axios from "axios"
import React, { useState, useEffect } from "react"
import El from "../DetailPage/El"
import Posts from "../PracticePagination/Posts"
import El1 from "../DetailPage/El1"
import Posts1 from "../PracticePagination/Posts1"
import styled from "styled-components"

const getDummyData = async ({ page = 1, limit = 18 } = {}) => {
  const res = await axios.get("http://localhost:3000/data/data.json")
  const itmes = res.data.data
  const from = page - 1
  const to = page * limit
  return itmes.slice(from, to)
}
//getDummyData()에서 page와 limit을 관리할 수 있을까? button 혹은 scroll event로?  button2를 누르면 page의 1이 2로 바뀌면서 새로운 것을 rendering한다.

console.log(getDummyData())

const SubMain = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchPosts = async (page) => {
    setLoading(true)
    const posts = await getDummyData({ page })
    console.log("posts", posts)
    setPosts(posts)
  }

  useEffect(() => {
    fetchPosts()
  }, [])
  console.log(posts)

  const ArticleArray = posts.slice(0, 3)
  console.log(ArticleArray)
  const CommerceArray = posts.slice(3, 9)
  console.log(CommerceArray)
  const ArticleArray1 = posts.slice(9, 12)
  console.log(ArticleArray1)
  const CommerceArray1 = posts.slice(12, 18)
  console.log(CommerceArray1)

  return (
    <>
      <Mg_top200 />
      <El DataArray={ArticleArray} />
      <Posts CommerceArray={CommerceArray} />
      <El1 DataArray1={ArticleArray1} />
      <Posts1 CommerceArray1={CommerceArray1} />
    </>
  )
}

export default SubMain

const Mg_top200 = styled.div`
  margin-top: 200px;
`
