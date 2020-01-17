import { Component } from "react"
import styled from "styled-components"
import SignUpTit from "../components/SignUp/SignUpTit"
import BaseInfoBox from "../components/SginUpTwo/BaseInfoBox"
import Footer from "../components/footer/index"
import Header from "../components/signNav/SignHeader"
import { CommonSection } from "../styles/Common"
class FinalSignUp extends Component {
  render() {
    return (
      <CommonSection>
        <Container>
          <Contents>
            <LocationWrap>
              <ContentsBox>
                <JoinAgreementWrap>
                  <SignUpTit />
                  <BaseInfoBox />
                </JoinAgreementWrap>
              </ContentsBox>
            </LocationWrap>
          </Contents>
          <Footer></Footer>
        </Container>
      </CommonSection>
    )
  }
}
export default FinalSignUp

const Container = styled.div`
  width: 100%;
`

const Contents = styled.div`
  min-height: 400px;
  padding: 0 0 80px 0;
`
const LocationWrap = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  position: relative;
`
const ContentsBox = styled.div`
  padding: 30px 20px 0;
  width: 100%;
  @media screen and (max-width: 1300px) {
    padding: 30px 20px 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`
const JoinAgreementWrap = styled.div`
  line-height: 1.5;
`
