import React, { Component } from "react"
import styled from "styled-components"

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
  max-width: 100%;
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

export class SubArticle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      article: []
    }
  }

  infiContent = () => {}

  setData = () => {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then(
        (res) =>
          this.setState({
            article: res.data
          }),
        () => console.log(res.data)
      )
  }

  componentDidMount() {
    this.setData()
  }

  render() {
    if (!this.state.article) return <>로딩중</>
    console.log(Object.keys(this.state.article).length)
    const idValue = this.state.article.map((el, idx) => (
      <>
        <div itemprop="articleBody">
          <ArticleLayout id={el.id}>
            <ArticleUrlLink href={el.url} onClick={this.infiContent}>
              <div key={idx}>
                <ArticleTitle>{el.title}</ArticleTitle>
              </div>
              <ArticleDate date>{el.published_time}</ArticleDate>
              <ArticleImageMarginTopDown>
                {" "}
                <ArticleImage src={el.image} />
              </ArticleImageMarginTopDown>
              <ArticleBackground background={el.image} />
              <ArticleDsc>{el.desc}</ArticleDsc>
              <MoreBtn>
                <MoreBtnBox>기사보기+</MoreBtnBox>
              </MoreBtn>
            </ArticleUrlLink>
          </ArticleLayout>
        </div>
      </>
    ))

    return <div>{idValue}</div>
  }
}

export default SubArticle