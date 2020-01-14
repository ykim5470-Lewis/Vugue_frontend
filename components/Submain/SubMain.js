import axios from "axios"
import React, { useState, useEffect } from "react"
import El from "../DetailPage/El"
import Posts from "../PracticePagination/Posts"
import El1 from "../DetailPage/El1"
import Posts1 from "../PracticePagination/Posts1"
import Article from "../../pages/Article/[id]"
import "./DetailStyle.scss"
import style from "styled-components"
import Layout from "../Layout"

const SubMain = (props) => {
  const articleId = props.id.id.id
  // console.log(articleId) //이것이 Article page에서의 1번 page를 의미하고 이 id data와 관련된 html과 sub_article image,title을 가져오면 된다.
  // console.log(typeof articleId)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [html, setHtml] = useState("")
  const [alterData, setAlterData] = useState("")

  const getMagazineData = async () => {
    const result = await axios.get(
      "http://10.58.5.67:8000/article/detail/" + articleId
    )
    console.log(result)
    // console.log("a", result)
    // console.log(result.data.detail[0].description)
    const context = result.data.detail[0].description
    let a = context.split(" ")
    let b = a.filter((str) => str.includes("data:image"))
    let c = b.join()
    console.log(b)
    console.log(c)
    let d = a.filter((items) => !c.includes(items))
    console.log(d)
    let e = d.join(" ").replace(/data-lazy-src/g, "src")
    // console.log(context)
    return e
  }
  //위에서 keylock decoding한 것 처럼, date정보를 삭제하고, <blockquote>의 inline style margin:1px를 0px로 바꾸기
  //console로 찍어봐야 알겠지만, b부분을 이렇게 수정하자.
  // b= a.filter((str)=> str.includes("data:image",))

  const getDummyData = async () => {
    const res = await axios.get("http://10.58.5.67:8000/article/detail/1")
    const ArticlePosts = res.data.article_list
    return ArticlePosts
  }

  // console.log(getDummyData())

  const fetchPosts = async () => {
    setLoading(true)
    const posts = await getDummyData()
    // console.log("posts", posts)
    setPosts(posts)
  }

  const fetchMagazine = async () => {
    const htmlText = await getMagazineData()
    // console.log("html", htmlText)
    setHtml(htmlText)
    setAlterData(reSetAlterData())
  }
  console.log(alterData) //page router id value

  const reSetAlterData = () => {
    let num = Math.floor(Math.random() * 7)
    return num
  }
  console.log(reSetAlterData())

  useEffect(() => {
    fetchPosts()
    fetchMagazine()
  }, [])
  // console.log(posts)
  // console.log(html)

  //articleId
  const ArticleArray = posts.slice(
    0 + 18 * (alterData - 1),
    3 + 18 * (alterData - 1)
  )
  //위에 것 처럼 하면 120개의 array에서 0,3까지 없어진 0,1,2 이후의 117개가 나온다.
  //120개 중에서 앞에 0,1,2만 나오게 하려면 slice말고 어떤 것을 해야할까?
  console.log(0 + 18 * (alterData - 1))
  console.log(3 + 18 * (alterData - 1))
  console.log(posts)
  console.log(ArticleArray)
  console.log(articleId)
  const CommerceArray = posts.slice(
    3 + 18 * (alterData - 1),
    9 + 18 * (alterData - 1)
  )
  // console.log(CommerceArray)
  const ArticleArray1 = posts.slice(
    9 + 18 * (alterData - 1),
    12 + 18 * (alterData - 1)
  )
  // console.log(ArticleArray1)
  const CommerceArray1 = posts.slice(
    12 + 18 * (alterData - 1),
    18 + 18 * (alterData - 1)
  )
  // console.log(CommerceArray1)

  // 03,39,912,12,18 이렇게? 2면 18부터 36이여하니까 *articleID?

  return (
    <>
      <Layout>
        <div className="Wrapper">
          <div
            dangerouslySetInnerHTML={{
              __html: html
            }}
          ></div>
        </div>
        <Bg_common>
          <SubLayout>
            <Posts CommerceArray={CommerceArray} />
            <El DataArray={ArticleArray} />
            <Posts1 CommerceArray1={CommerceArray1} />
            <El1 DataArray1={ArticleArray1} />
            <Posts CommerceArray={CommerceArray} />
          </SubLayout>
        </Bg_common>
        <LoadingWrap>
          {" "}
          <img src="/loading_logo.gif" />
        </LoadingWrap>
      </Layout>
    </>
  )
}
export default SubMain

const Bg_common = style.div`
background-color: #f9f9f9;
`

const SubLayout = style.div`
max-width: 1300px;
margin: auto;
background-color: white;
`

const LoadingWrap = style.div`
text-align: center
`
