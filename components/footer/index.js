import { Component } from "react"
import styled from "styled-components"

class Footer extends Component {
  render() {
    return (
      <Container>
        <FooterLogo></FooterLogo>
        <Text1>
          WWW.VOGUE.COM Ⓒ CONDÉNAST ASIA PACIFIC. INC. ALL RIGHTS RESERVED. VOGUE.COM
          KOREA IS OPERATED BY DOOSAN MAGAZINE.
        </Text1>
        <Text2>개인정보 처리방침</Text2>
      </Container>
    )
  }
}

export default Footer

const Container = styled.footer`
  max-width: 1300px;
  background-color: #000;
  text-align: center;
  padding: 4%;
  margin: 0 auto;
  font-size: 11px;
  text-align: center;
  font-weight: 300;
  color: #747474;
  @media all and (max-width: 1300px) {
    width: 100%;
  }
  @media all and (max-width: 500px) {
    padding: 30px;
  }
`
const FooterLogo = styled.img.attrs({
  src: "http://www.vogue.co.kr/images/footer_logo.png"
})`
  width: 313px;
  height: 83px;
  @media all and (max-width: 500px) {
    width: 200px;
    height: 51px;
  }
`
const Text1 = styled.div`
  margin-top: 20px;
  width: 100%;
`
const Text2 = styled.div`
  font-size: 13px;
  margin-top: 10px;
`
