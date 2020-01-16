import React from "react"
import styled from "styled-components"

const El1 = (props) => {
  const array1 = props.DataArray1

  if (array1 === undefined) return <></>
  return array1.map((el) => (
    <>
      <div itemprop="articleBody">
        <ArticleLayout id={el.detail_id}>
          <ArticleUrlLink href={el.url}>
            <div key={el.deatil_id}>
              <ArticleTitle>{el.title}</ArticleTitle>
            </div>
            <ArticleDate date>{el.caption_date}</ArticleDate>
            <ArticleImageMarginTopDown>
              {" "}
              <ArticleImage src={el.image_url} />
            </ArticleImageMarginTopDown>
            <ArticleBackground background={el.image_url} />
            <ArticleDsc>{el.caption}</ArticleDsc>
            <MoreBtn>
              <MoreBtnBox>기사보기+</MoreBtnBox>
            </MoreBtn>
          </ArticleUrlLink>
        </ArticleLayout>
      </div>
    </>
  ))
}

export default El1

const ArticleLayout = styled.article`
  max-width: 759px;
  margin: 50px auto;
  text-align: center;
  position: relative;
`

const ArticleTitle = styled.h2`
  font-family: "Antic Slab";
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0px;
  font-size: 50px;
  color: #000;
  max-width: 900px;
  margin: 10px auto;
  word-wrap: break-word;
  font-family: "Roboto", "Nanum Barun Gothic", "Apple SD Gothic Neo", Sans-serif,
    Dotum, arial !important;

  @media only screen and (min-width: 501px) {
    display: block;
    text-align: center;
  }
`

const ArticleDate = styled.div`
  font-size: ${(props) => (props.date ? "16px" : null)};

  @media only screen and (min-width: 501px) {
    display: block;
    text-align: center;
  }
`

const ArticleImageMarginTopDown = styled.div`
  margin: 20px 0;

  @media only screen and (min-width: 501px) {
    display: block;
    text-align: center;
  }
`

const ArticleImage = styled.img`
  border-style: none;
  vertical-align: top;
  width: 100%;
  height: auto;

  @media only screen and (min-width: 501px) {
    display: block;
    text-align: center;
  }
`
const ArticleBackground = styled.div`
  background-image: url(${(props) => props.background});
  @media only screen and (min-width: 501px) {
    display: none;
  }
`

const ArticleUrlLink = styled.a`
  transition-property: color, background-color, border-color;
  transition-duration: 0.2s;
  transition-timing-function: linear;
`

const ArticleDsc = styled.div`
  margin-bottom: 40px;
  color: #000;
  line-height: 1.8em;
  font-size: 16px;

  @media only screen and (min-width: 501px) {
    display: block;
    text-align: center;
  }
`

const MoreBtn = styled.div`
  border-top: 1px solid #000;

  @media only screen and (min-width: 501px) {
    display: block;
    text-align: center;
  }
`

const MoreBtnBox = styled.p`
  background: #000;
  display: inline-block;
  color: #fff;
  padding: 10px 15px;
  font-size: 16px;
  margin-top: 0;
  letter-spacing: 0.1rem;
  font-family: "Roboto", "Nanum Barun Gothic", "Apple SD Gothic Neo", Sans-serif,
    Dotum, arial !important;
`
