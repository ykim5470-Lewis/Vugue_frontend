import { Component } from "react"
import styled, { keyframes } from "styled-components"
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
    const { detail_id, title, image_url } = this.props.data

    return (
      <SmallArticleWrap>
        <SmallArticleOutBorder>
          <Link href={`/Article/${detail_id}`}>
            <a>
              <CommonArticleInBorder></CommonArticleInBorder>
              <SmallArticleImage image_url={image_url}></SmallArticleImage>
              <CommonArticleTitle>{title}</CommonArticleTitle>
            </a>
          </Link>
        </SmallArticleOutBorder>
      </SmallArticleWrap>
    )
  }
}
const bounce = keyframes`
  0% {
    transform: scale(0)
  }
  100% {
    transform: scale(1)
  }
  `
const SmallArticleWrap = styled(CommonArticleWrap)`
  display: inline-block;
  width: 395px;
  height: 650px;
  margin: 0 auto;
  animation: ${bounce} 0.5s;
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
