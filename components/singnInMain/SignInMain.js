import styled from "styled-components"
import React, { Component } from "react"
import SignSnsLogin from "./SignSnsLogin"
import { API_URL, TOKEN } from "../../config/Constants"
// import Link from "next/link"
// const emailRegex = RegExp(
//   /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
// )
const formValid = (formErrors) => {
  let vaild = true
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (vaild = false)
  })
  return vaild
}
export default class SignInMain extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      password: "",
      formErrors: {
        name: "",
        password: ""
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit = (e) => {
    console.log(`Name:${this.state.name}\nPW:${this.state.password}`)
    e.preventDefault()
    const login_info = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }
    fetch(`${API_URL}/user/auth`, login_info)
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        const token = json.access_token
        window.localStorage.setItem(TOKEN, token)
        //스테이트에 유저정보를 저장한다.
        // this.setState({
        //   name: '',
        //   password: ''
        // });
        alert("로그인 성공")
      })
      .catch((err) => {
        console.log(err.response)
        alert("로그인실패")
      })
  }

  handleChange = (e) => {
    e.preventDefault()
    const regExp = /^[A-za-z]{5,15}/g
    const { name, value } = e.target
    let formErrors = this.state.formErrors

    switch (name) {
      case "name":
        formErrors.name = regExp.test(value)
          ? ""
          : "영문 5자리 형식으로 작성해 주세요"
        break
      case "password":
        formErrors.password =
          value.length < 5 && value.length > 0
            ? "최소 5자리 이상으로 작성해 주세요"
            : ""
        break
      default:
        break
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state))
  }

  render() {
    const { formErrors } = this.state
    return (
      <MainContainer>
        <Content>
          <ContentBox>
            <MeMberWrap>
              <MemberTitle>
                <MemberTitlePara>로그인</MemberTitlePara>
              </MemberTitle>
              <MemberCount>
                <FormSignIn onSubmit={this.handleSubmit}>
                  <MemberSignInBox>
                    <MemberServeTitle>회원 로그인</MemberServeTitle>
                    <MemberInput>
                      <div>
                        <MemberId
                          placeholder="name"
                          type="name"
                          name="name"
                          // value={this.state.name}
                          onChange={this.handleChange}
                        ></MemberId>
                        {formErrors.name.length > 0 && (
                          <Warning>{formErrors.name}</Warning>
                        )}
                        <MemberPw
                          placeholder="password"
                          type="password"
                          name="password"
                          // value={this.state.password}
                          onChange={this.handleChange}
                        ></MemberPw>
                        {formErrors.password.length > 0 && (
                          <Warning>{formErrors.password}</Warning>
                        )}
                      </div>
                      {/* <Link href="javascript:loginWithKakao()"> */}
                      <SignBtn type="submit">로그인</SignBtn>
                      {/* </Link> */}
                    </MemberInput>
                  </MemberSignInBox>
                  <SignSnsLogin />
                  <BtnSignBox>
                    <BtnSignUl>
                      <BtnSignLi>
                        <BtnSignFirst>회원가입</BtnSignFirst>
                      </BtnSignLi>
                      <BtnSignLi>
                        <BtnSign>아이디 찾기</BtnSign>
                      </BtnSignLi>
                      <BtnSignLi>
                        <BtnSign>비밀번호 찾기</BtnSign>
                      </BtnSignLi>
                    </BtnSignUl>
                  </BtnSignBox>
                </FormSignIn>
              </MemberCount>
            </MeMberWrap>
          </ContentBox>
        </Content>
      </MainContainer>
    )
  }
}

const MainContainer = styled.div`
  margin-top: -1px;
  border-top: 1px solid #cccccc;
`
const Content = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  padding: 0;
  position: relative;

  @media screen and(max-width:860px) {
    padding: 0 0 30px 0;
  }
`
const ContentBox = styled.div`
  padding: 30px 20px 0;
  box-sizing: border-box;
  @media screen and(max-width: 860px) {
    padding: 20px 10px 0;
  }
`
const MeMberWrap = styled.div`
  width: 100%;
  margin: auto 0;
  @media screen and(max-width: 860px) {
    width: 100%;
  }
`
const MemberTitle = styled.div`
  padding: 0 !important;
  margin: 0 0 20px 0 !important;
  border: 0 !important;
  text-align: center !important;
`
const MemberTitlePara = styled.p`
  margin: 0 !important;
  font-weight: 400 !important;
  font-size: 28px;
  @media screen and(max-width:860px) {
    text-align: center;
    font-size: 16px;
  }
`
const MemberCount = styled.div`
  width: 100% !important;
  padding: 30px 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #dbdbdb;
`
const FormSignIn = styled.form`
  width: 50%;
  margin: 0 auto;
  @media screen and(max-width:860px) {
    width: 100%;
    padding: 0 20px;
  }
`
const MemberSignInBox = styled.div`
  display: static;
`
const MemberServeTitle = styled.div`
  font-weight: normal;
  font-size: 18px;
  text-align: center;
  color: #222222;
`
const MemberInput = styled.div`
  display: flex;
  justify-content: center;
`
const MemberId = styled.input`
  display: block;
  width: 292px;
  height: 36px;
  margin: 15px 0 10px 0;
  padding: 0 0 0 8px;
  border: 1px solid #d0d0d0;
  color: #979d9d;
`
const MemberPw = styled.input`
  display: block;
  width: 292px;
  height: 36px;
  margin: 15px 0 10px 0;
  padding: 0 0 0 8px;
  border: 1px solid #d0d0d0;
  color: #979d9d;
`
const SignBtn = styled.button`
  border: 1px solid #000;
  background: #000;
  height: 87px;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  width: 100px;
  margin: 15px 0 0 25px;
  :hover {
    background: white;
    color: black;
  }
`

const BtnSignBox = styled.div`
  margin: 20px 0 0 0;
  padding: 20px 0 0 0;
  border-top: 1px solid #dcdcdc;
`
const BtnSignUl = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  padding: 0px;
`

const BtnSignLi = styled.li`
  width: 33%;
  text-align: center;
`

const Warning = styled.span`
  color: red;
  font-size: 11px;
`

const BtnSign = styled.button`
  height: 45px;
  width: 95%;
  color: #3e3d3c;
  font-weight: bold;
  font-size: 13px;
  border: 1px solid #cccccc;
  background: #fff;
  cursor: pointer;
`
const BtnSignFirst = styled.button`
  color: #ffffff;
  font-size: 14px;
  width: 95%;
  height: 45px;
  border: 1px solid #666666;
  background: #666666;
  cursor: pointer;
  font-weight: bold;
`
