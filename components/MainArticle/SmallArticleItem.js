import { Component } from "react"
import styled from "styled-components"
import Link from "next/link"
import {
  CommonArticleWrap,
  CommonArticleOutBorder,
  CommonArticleInBorder,
  CommonArticleImage,
  CommonArticleTitle
} from "../../styles/Common"

class SmallArticleItem extends Component {
  render() {
    const { id, title, imageUrl } = this.props.data
    console.log(imageUrl)
    return (
      <SmallArticleWrap>
        <SmallArticleOutBorder>
          <Link href={`/SubPage/SubPage${id}`}>
            <a>
              <CommonArticleInBorder></CommonArticleInBorder>
              <SmallArticleImage imageUrl={imageUrl}></SmallArticleImage>
              <CommonArticleTitle>{title}</CommonArticleTitle>
            </a>
          </Link>
        </SmallArticleOutBorder>
      </SmallArticleWrap>
    )
  }
}
const SmallArticleWrap = styled(CommonArticleWrap)`
  display: inline-block;
  width: 395px;
  height: 650px;
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
const SmallArticleOutBorder = styled(CommonArticleOutBorder)`
  height: 100%;
`

const SmallArticleImage = styled(CommonArticleImage)`
  @media (max-width: 800px) {
    background-size: cover;
    background-position: 0 0;
    background-repeat: no-repeat;
  }
`

export default SmallArticleItem
