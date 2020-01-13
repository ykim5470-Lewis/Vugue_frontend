import React, { Component } from "react"
import styled from "styled-components"
import { Logo, Menu, SearchIcon } from "../../styles/Common"
import { LOGO_URL, SOCIAL_LOGO } from "../../config"
import Social from "./Social"
import SearchBar from "./SearchBar"

class SmallGnb extends Component {
  state = {
    moreClicked: false,
    searchClicked: false
  }
  handleMore = () => {
    this.setState(
      {
        moreClicked: !this.state.moreClicked
      },
      () => {
        if (this.state.moreClicked) {
          window.scrollTo(0, 0)
        }
      }
    )
  }
  handleSearch = () => {
    this.setState({
      searchClicked: !this.state.searchClicked
    })
  }
  render() {
    const { moreClicked, searchClicked } = this.state
    return (
      <>
        <Wrap
          display={this.props.display}
          position={(moreClicked && searchClicked) || moreClicked ? "none" : "fixed"}
        >
          <Container>
            <More onClick={this.handleMore}></More>
            <Logo
              imgUrl={LOGO_URL}
              width="130px"
              height="34px"
              display="block"
            ></Logo>
            <SearchIcon onClick={this.handleSearch}></SearchIcon>
          </Container>
          <SearchBar display={searchClicked ? "block" : "none"}></SearchBar>
          <MoreContent display={moreClicked}>
            {Menu.map((curr, i) => (
              <MenuItem key={i}>{curr}</MenuItem>
            ))}
            {SOCIAL_LOGO.map((curr, i) => (
              <Social
                imgUrl={curr.imgUrl}
                link={curr.link}
                kye={i}
                width="20px"
                height="20px"
                margin="30px 0px 10px 5.5%"
              />
            ))}
            <Subscription>
              <SubscriptionImg
                src="http://img.vogue.co.kr/vogue/2019/12/style_5df999d779cc7.jpg"
                alt=""
              ></SubscriptionImg>
              <Discount>정기구독을 신청하면 최대 30% 할인혜택을 드립니다!</Discount>
              <SubscriptionBtn>정기구독 신청</SubscriptionBtn>
            </Subscription>
            <CompanyInfo>
              <CompanyInfoItem>회사소개 /</CompanyInfoItem>
              <CompanyInfoItem>광고 및 제휴 /</CompanyInfoItem>
              <CompanyInfoItem>개인정보처리방침 /</CompanyInfoItem>
            </CompanyInfo>
          </MoreContent>
        </Wrap>
      </>
    )
  }
}
const Wrap = styled.div`
  display: ${(props) => (props.display ? "block" : "none")};
  position: ${(props) => props.position};
  top: 0;
  width: 100%;
  background-color: white;
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`
const More = styled.div`
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png");
  background-size: cover;
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin-top: 3px;
`
const Search = styled.div`
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDdr40bUMZstelWonpxfu8FIDXVGs_h2FcSmjWw4wU4HMkCtom&s");
  background-size: cover;
  width: 30px;
  height: 30px;
  text-align: center;
  cursor: pointer;
`
const MoreContent = styled.div`
  display: ${(props) => (props.display ? "block" : "none")};
  color: #333333;
  font-size: 25px;
  width: 90%;
  margin: 0 auto;
`
const MenuItem = styled.div`
  padding: 16px 5.5%;
`
const Subscription = styled.div`
  margin: 0 5.5%;
`
const SubscriptionImg = styled.img`
  width: 100%;
`
const Discount = styled.div`
  font-size: 12px;
  color: #747474;
  margin: 10px 0;
`
const SubscriptionBtn = styled.div`
  cursor: pointer;
  font-size: 18px;
  text-align: center;
  height: 40px;
  background-color: black;
  color: white;
  padding: 10px;
`
const CompanyInfo = styled.div`
  margin: 0 5.5%;
`
const CompanyInfoItem = styled.span`
  font-size: 14px;
  display: inline-block;
  font-weight: 600;
`
export default SmallGnb
