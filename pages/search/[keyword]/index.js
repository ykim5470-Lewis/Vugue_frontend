import { CommonSection } from "../../../styles/Common"
import axios from "axios"
import { useRouter } from "next/router"
import { API_URL } from "../../../config/Constants"
import { useState, useEffect } from "react"
import styled from "styled-components"
import SmallArticleItem from "../../../components/mainArticle/SmallArticleItem"
const SearchPage = () => {
  const [searchData, setSearchData] = useState([])
  const router = useRouter()
  const searchKeyword = router.query.keyword
  const dataLoad = async () => {
    const res = await axios.get(`${API_URL}article/search?keyword=${searchKeyword}`)
    setSearchData(res.data.data)
  }
  useEffect(() => {
    dataLoad()
    console.log(1)
  }, [router, []])
  console.log(searchData)
  return (
    <CommonSection>
      <SearchTitle>Search results for:{searchKeyword}</SearchTitle>
      {searchData.map((curr, i) => (
        <SmallArticleItem data={curr} key={i}></SmallArticleItem>
      ))}
    </CommonSection>
  )
}
const SearchTitle = styled.div`
  text-align: center;
  font-size: 48px;
  font-weight: 600;
  padding: 20px;
  margin: 15px;
`
export default SearchPage
