import React, { Component } from "react"
import Link from "next/link"
import styled from "styled-components"
import TextMenu from "./TextMenu"
import Social from "./Social"
import SmallGnb from "./SmallGnb"
import SearchBar from "./SearchBar"
import { Logo, Category, SearchIcon } from "../../styles/Common"
import { LOGO_URL, SOCIAL_LOGO } from "../../config"

class Gnb extends Component {
  state = {
    mouse: false,
    wheel: false,
    wideScreen: true,
    searchClicked: false
  }
  componentDidMount() {
    //작은화면에서 랜더링시 큰화면 Gnb 랜더링 방지
    if (document.body.offsetWidth < 786) {
      this.setState({ wideScreen: false, wheel: true })
    } else {
      this.setState({ wideScreen: true })
    }

    window.addEventListener("resize", this.onResizeHandle)
    window.addEventListener("scroll", this.onScrollHandle)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResizeHandle)
    window.removeEventListener("scroll", this.onScrollHandle)
  }

  onResizeHandle = (e) => {
    if (document.body.offsetWidth < 786) {
      this.setState({ wideScreen: false, wheel: true })
    } else {
      this.setState({ wideScreen: true })
    }
  }

  onScrollHandle = (e) => {
    if (window.scrollY >= 30 && this.state.wideScreen) {
      this.setState({ wheel: true })
    } else if (this.state.wideScreen) {
      this.setState({ wheel: false })
    }
  }

  onMouseHandle = (action) => {
    if (action === "MouseOver") {
      this.setState({ mouse: true })
    } else if (action === "MouseOut") {
      this.setState({ mouse: false })
    }
  }

  onSearchHandle = () => {
    if (this.state.searchClicked) {
      this.setState({ searchClicked: false })
    } else {
      this.setState({ searchClicked: true })
    }
  }
  moveTop = () => {
    window.scrollTo(0, 0)
  }

  render() {
    const { mouse, wheel, wideScreen, searchClicked } = this.state
    return (
      <>
        <Overlay
          display={searchClicked ? "block" : "none"}
          onClick={this.onSearchHandle}
        ></Overlay>
        <Header>
          <Container>
            <Top display={wheel ? "none" : "flex"}>
              <TopLeft>
                {SOCIAL_LOGO.map((curr, i) => (
                  <Social imgUrl={curr.imgUrl} link={curr.link} key={i} />
                ))}
              </TopLeft>
              <TopRight>
                <SideMenu
                  onMouseOver={() => {
                    this.onMouseHandle("MouseOver")
                  }}
                  onMouseOut={() => {
                    this.onMouseHandle("MouseOut")
                  }}
                >
                  SIDE MENU
                  <SideMenuModal display={mouse ? "block" : "none"}>
                    <SideMenuModalItem>회사 소개</SideMenuModalItem>
                    <SideMenuModalItem>광고 및 제휴</SideMenuModalItem>
                    <SideMenuModalItem>개인정보 처리방침</SideMenuModalItem>
                  </SideMenuModal>
                </SideMenu>
                <Link href="SignIn">
                  <a>
                    <Subscribe>Sign IN</Subscribe>
                  </a>
                </Link>
                <Link href="registration">
                  <a>
                    <Subscribe>Register Post</Subscribe>
                  </a>
                </Link>
              </TopRight>
            </Top>
            <Link href="/">
              <a>
                <Logo
                  display={wheel ? "none" : "block"}
                  width="400px"
                  height="104px"
                  margin=" 10px auto"
                />
              </a>
            </Link>
            <SamllLogo display={wheel && wideScreen ? "block" : "none"} />
            <Bottom>
              {Category.map((curr, i) => (
                <TextMenu key={i} title={curr.title} id={curr.id} wheel={wheel} />
              ))}
              <SearchBar
                display={searchClicked ? "inline-block" : "none"}
                width="300px"
                margin="0"
              ></SearchBar>
              <SearchIcon
                onClick={this.onSearchHandle}
                display={this.state.searchClicked ? "none" : "block"}
              />
            </Bottom>
          </Container>
        </Header>
        <SmallGnb display={!wideScreen}></SmallGnb>
        <BtnContainer display={wheel ? "block" : "none"} onClick={this.moveTop}>
          <MoveTopBtn></MoveTopBtn>
        </BtnContainer>
      </>
    )
  }
}
const Header = styled.header`
  border-bottom: 1px solid #747474;
  background-color: white;
  box-shadow: 0 4px 2px -2px gray;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  @media all and (max-width: 800px) {
    display: none;
    height: 50px;
    box-shadow: none;
    border: none;
  }
`
const Container = styled.div`
  margin: 0 auto;
  @media all and (max-width: 1300px) {
    width: 100%;
  }
`
const Top = styled.div`
  display: ${(props) => props.display || flex};
  justify-content: space-between;
  width: 970px;
  margin: 0 auto;
  @media all and (max-width: 1300px) {
    width: 100%;
  }
`
const TopLeft = styled.div`
  display: inline-block;
  max-width: 940px;
  transform: translateY(25%);
  height: 100%;
`
const TopRight = styled.div`
  color: #747474;
  align-items: center;
  font-size: 12px;
  display: flex;
  position: relative;
`
const SideMenu = styled.div`
  border-right: 1px solid #747474;
  padding: 0 13px;
`
const SideMenuModal = styled.ul`
  border: 1px solid #747474;
  display: ${(props) => props.display || "none"};
  position: absolute;
  top: 80%;
  left: 7%;
`
const SideMenuModalItem = styled.li`
  padding: 10px 5px;
  cursor: pointer;
  & :hover {
    color: black;
    background-color: #fafafa;
  }
`
const Subscribe = styled.div`
  padding: 0 13px;
`
const SamllLogo = styled(Logo)`
  display: ${(props) => props.display || none};
  background-image: url(${LOGO_URL});
  width: 100px;
  height: 26px;
  margin-left: 10px;
  float: left;
  transform: translateY(30%);
`
const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /*transform: translateX(-45px);*/
  transition: 2s;
  @media all and (max-width: 800px) {
    display: none;
  }
`
const Overlay = styled.div`
  display: ${(props) => props.display || "none"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0);
`
const BtnContainer = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  top: 96%;
  right: 5%;
  background-color: #333333;
  cursor: pointer;
  border-radius: 3px;
  opacity: 0.8;
  z-index: 9999;
  display: ${(props) => props.display || "none"};
  &:hover {
    background-color: #fe0000;
  }
`
const MoveTopBtn = styled.div`
  background-image: url("https://www.weply.io/img/common/top_btn.png");
  background-size: cover;
  width: 50px;
  height: 50px;
  transform: translateY(-5px);
`

export default Gnb
