import styled from "styled-components"
import Link from "next/link"
import React, { Component } from "react"
import HeeaderNavList from "./HeaderNavList"

export default class extends Component {
  state = {
    scrolled: false
  }
  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler)
  }

  scrollHandler = () => {
    const scale = window.scrollY > 10
    console.log(this.state.scroll)
    // if (scale) {
    //   this.setState({
    //     scrolled: false
    //   })
    // } else {
    //   this.setState({
    //     scrolled: true
    //   })
    // }
    console.log(this.state.scroll)
    this.setState({ scrolled: scale ? false : true })
  }
  render() {
    const { scrolled } = this.state
    return (
      <HeaderWrap HeaderHidden={scrolled}>
        <HeaderListWrap>
          <HeaderList>
            <HeeaderNavList
              url="/SignIn"
              text="로그인"
              hidden={this.state.scrolled}
            />
            <HeeaderNavList url="/" text="회원가입" hidden={this.state.scrolled} />
          </HeaderList>
        </HeaderListWrap>
        <Header>
          <HeaderLogo line={scrolled}>
            <Link href="/">
              <LogoImage
                imgShow={scrolled}
                src="http://img.vogue.co.kr/vogue/2018/02/style_5a83e4245454d.png"
              ></LogoImage>
            </Link>
            <Link href="/">
              <LogoServeImage
                imgHidden={this.state.scrolled}
                src="http://img.vogue.co.kr/vogue/2018/02/style_5a83e4245454d.png"
              />
            </Link>
          </HeaderLogo>
        </Header>
      </HeaderWrap>
    )
  }
}

const HeaderWrap = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  position: ${(props) => (props.HeaderHidden ? "relative" : "sticky")};
  z-index: 100;
  top: 0;
  background-color: white;
`
const HeaderListWrap = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  height: 41px;
`
const HeaderList = styled.div`
  float: right;
`
const Header = styled.header`
  position: relative;
`
const HeaderLogo = styled.div`
  text-align: left;
  height: ${(props) => (props.line ? "100px" : "50px")};
  line-height: 80px;
  border-bottom: 5px solid #000;
  @media screen and (max-width: 860px) {
    line-height: 67px;
    height: 65px;
  }
`
const LogoImage = styled.img`
  vertical-align: middle;
  width: 250px;
  display: ${(props) => (props.imgShow ? "block" : "none")};

  @media only screen and (max-width: 860px) {
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
  }
`
const LogoServeImage = styled.img`
  width: 100px;
  vertical-align: middle;
  display: ${(props) => (props.imgHidden ? "none" : "block")};
  @media only screen and (max-width: 860px) {
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
  }
`
