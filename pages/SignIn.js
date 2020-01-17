import { Component } from "react"
import styled from "styled-components"
import SignHeader from "../components/signNav/SignHeader"
import SignInMain from "../components/singnInMain/SignInMain"
import { CommonSection } from "../styles/Common"

class SignIn extends Component {
  render() {
    return (
      <CommonSection>
        <LoginContainer>
          {/* <SignHeader /> */}
          {/* header_warp*/}

          <SignInMain />
        </LoginContainer>
      </CommonSection>
    )
  }
}

const LoginContainer = styled.div`
  min-width: auto;
  background: #ffffff;
  position: relative;
  height: 1000px;
`

export default SignIn
