import axios from "axios"
import React, { useState, useEffect } from "react"

import MoreArticle from "../moreArticle/MoreArticle"
import RecommendationArticle from "../recommendationArticle/RecommendationArticle"

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
      "http://10.58.5.67:8000/article/details/" + articleId
    )
    // console.log(result)
    // console.log("a", result)
    // console.log(result.data.detail[0].description)
    const context = result.data.detail[0].description
    let Str_Arr = context.split(" ")
    let Find_Code = Str_Arr.filter((str) => str.includes("data:image"))
    let innerStyle = Str_Arr.filter((str) => str.includes("style="))
    // console.log(innerStyle)
    let Join_innerStyle = innerStyle.join()
    let d1 = Str_Arr.filter((item) => !Join_innerStyle.includes(item))
    // console.log(d1)
    let Join_Find_Code = Find_Code.join()
    let d = d1.filter((items) => !Join_Find_Code.includes(items))
    // console.log(d)
    let e = d.join(" ").replace(/data-lazy-src/g, "src")

    return e
  }
  //위에서 keylock decoding한 것 처럼, date정보를 삭제하고, <blockquote>의 inline style margin:1px를 0px로 바꾸기
  //console로 찍어봐야 알겠지만, b부분을 이렇게 수정하자.
  // b= a.filter((str)=> str.includes("data:image",))

  const getDummyData = async () => {
    const res = await axios.get(
      "http://10.58.5.67:8000/article/details/" + articleId
    )
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
  // console.log(alterData) //page router id value

  const reSetAlterData = () => {
    let num = Math.floor(Math.random() * 7)
    return num
  }
  // console.log(reSetAlterData())

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
  // console.log(0 + 18 * (alterData - 1))
  // console.log(3 + 18 * (alterData - 1))
  // console.log(posts)
  // console.log(ArticleArray)
  // console.log(articleId)
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
        <Main>
          <DetailWrapper>
            <div
              dangerouslySetInnerHTML={{
                __html: `${html} 

              <style>
              .fusion-post-slideshow{
                display:none;
              }
              .post{
                margin-bottom: 0;
              }
              .fusion-post-title-meta-wrap{
                margin-bottom: 28px;
                text-align: center;
              }
              .post-title-custom{
                margin: 50px 0 30px 0;
              }
              .post-cate-txt {
                font-size: 16px;
                color: red;
              }
              .fusion-post-title-meta-wrap h2 {
                font-size: 50px !important;
                line-height: 1.2em !important;
                font-family: 'Pistilli', 'Playfair Display', 'Nanum Barun Gothic', "Apple SD Gothic Neo", Sans-serif !important;
                color: #000 !important;
                max-width: 900px;
                margin: 10px auto;
                word-wrap: break-word;
                font-weight: 400px
              }
              .single-post .fusion-post-title-meta-wrap .fusion-meta-info {
                border: 0;
                font-size: 16px;
                margin-top: 0;
              }
              .fusion-meta-info {
                clear: both;
                overflow: hidden;
              }
              .post-content{
                color: #747474;
              }
              .post-content {
                padding: 0 20px;
                text-align: center;
              }
              .single-post .post-content p {
                max-width: 700px;
                margin: 0 auto 40px auto;
                color: #000;
                line-height: 1.8em;
                font-size: 16px;
              }
              .aligncenter, .fusion-aligncenter {
                clear: both;
                display: block;
                margin-left: auto;
                margin-right: auto;
                text-align: center;
                border-style: none;
                vertical-align: top;
                max-width: 100%;
                height: auto;
              }
              .single-post .post-content p {
                max-width: 700px;
                margin: 0 auto 40px auto;
                color: #000;
                line-height: 1.8em;
                font-size: 16px;
              }
              .lazy {
                border-style: none;
                vertical-align: top;
                max-width: 100%;
                height: auto;
              }
              .wp-caption alignnone{
                max-width:0;
              }
              .post-content p {
                  max-width: 700px;
                  margin: 0 auto 40px auto;
                  color: #000;
                  line-height: 1.8em;
                  font-size: 16px;
              }
                </style>
              `
              }}
            ></div>
          </DetailWrapper>
          <Bg_common>
            <SubLayout>
              <RecommendationArticle CommerceArray={CommerceArray} />
              <MoreArticle DataArray={ArticleArray} />
              <RecommendationArticle CommerceArray1={CommerceArray1} />
              <MoreArticle DataArray1={ArticleArray1} />
              <RecommendationArticle CommerceArray={CommerceArray} />
            </SubLayout>
          </Bg_common>
          <LoadingWrap>
            <LoadingLogo src="/loading_logo.gif" />
          </LoadingWrap>
        </Main>
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
  text-align: center;
`

const LoadingLogo = style.img`
width: 200px;
backgounrd-color: none;

`

const DetailWrapper = style.div`
  max-width: 1300px;
  margin: 0 auto;
  zoom: 1;
  background-color: white;
`

const Main = style.main`
padding: 0;
color: #000;
background-color: #f9f9f9;
margin-top:18%;

`
