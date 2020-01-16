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

class ArticleItem extends Component {
  render() {
    const { id, title, image_url } = this.props.data
    return (
      <CommonArticleWrap>
        <WideArticleOutBorder>
          <Link href={`/SubPage/SubPage${id}`}>
            <a>
              <CommonArticleInBorder></CommonArticleInBorder>
              <CommonArticleImage image_url={image_url}></CommonArticleImage>
              <CommonArticleTitle>{title}</CommonArticleTitle>
            </a>
          </Link>
        </WideArticleOutBorder>
      </CommonArticleWrap>
    )
  }
}

const WideArticleOutBorder = styled(CommonArticleOutBorder)`
  width: 1185px;
  height: 650px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 100%;
    height: 500px;
  }
`
export default ArticleItem
