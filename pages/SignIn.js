import { Component } from "react"
import styled from "styled-components"
import SignHeader from "../components/signNav/SignHeader"
import SignInMain from "../components/singnInMain/SignInMain"

class SignIn extends Component {
  render() {
    return (
      <LoginContainer>
        <SignHeader />
        {/* header_warp*/}
        <SignInMain />
      </LoginContainer>
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
