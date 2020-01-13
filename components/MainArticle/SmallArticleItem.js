import { Component } from "react"
import styled from "styled-components"
import Link from "next/link"

class SmallArticleItem extends Component {
  render() {
    const { id, title, imageUrl } = this.props.data
    console.log(imageUrl)
    return (
      <Wrap>
        <OuterBorder>
          <Link href={`/SubPage/SubPage${id}`}>
            <a>
              <InnerBorder></InnerBorder>
              <Image imageUrl={imageUrl}></Image>
              <ArticleTitle>{title}</ArticleTitle>
            </a>
          </Link>
        </OuterBorder>
      </Wrap>
    )
  }
}
const Wrap = styled.div`
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
const OuterBorder = styled.div`
  position: relative;
  height: 100%;
`
const InnerBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  &:hover {
    border: 13px solid rgba(255, 0, 0);
    transition: 0.5s;
  }
`

const Image = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: 50% 50%;
  width: 100%;
  height: 100%;
  @media (max-width: 800px) {
    background-size: fill;
  }
`
const ArticleTitle = styled.div`
  width: 100%;
  padding: 10px;
  position: absolute;
  bottom: 10%;
  text-align: center;
  z-index: 999;
  font-size: 33px;
  color: #fff;
  font-weight: 400;
`

export default SmallArticleItem
