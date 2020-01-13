import { Component } from "react"
import styled from "styled-components"
import Link from "next/link"

class ArticleItem extends Component {
  render() {
    const { id, title, imageUrl } = this.props.data
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
const Wrap = styled.div``
const OuterBorder = styled.div`
  position: relative;
  width: 1185px;
  height: 650px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 100%;
    height: 500px;
  }
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
`
const ArticleTitle = styled.div`
  width: 100%;
  position: absolute;
  bottom: 10%;
  text-align: center;
  z-index: 999;
  font-size: 30px;
  color: white;
`
export default ArticleItem
