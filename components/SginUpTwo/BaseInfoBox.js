import React, { Component } from "react"
import styled from "styled-components"
import DaumPostcode from "react-daum-postcode"
import Link from "next/link"
import Router from "next/router"
// import next from "next"
// import { Router } from "express"
// import { API_URL } from "../../config"
export default class BaseInfoBox extends Component {
  constructor() {
    super()
    this.state = {
      active: false,
      address: "",
      postCode: "",
      name: "",
      pw: "",
      passwordError: false,
      passwordCheckError: false,
      passwordCheck: ""
    }
  }
  // next = () => {
  //   Router.push("/")
  // }
  submitHandler = () => {
    if (this.state.name !== undefined && this.state.pw !== undefined)
      console.log(`name:${this.state.name}\nPW:${this.state.pw}`)
    fetch("http://10.58.3.184:8001/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        password: this.state.pw
      })
    })
      .then((res) => res.json())
      // 성공 시 메세지 : "SUCCESS" 를 출력
      // 실패 : 그냥 error
      .then((res) => {
        Router.push("/SignIn")
      })
  }

  onSubmit = (e) => {
    e.preventDefault()
    // 검증
    if (this.state.pw !== this.state.passwordCheck) {
      this.setState({ passwordError: true })
    }
    console.log(name, pw)
  }
  onChangeId = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  onChangePassword = (e) => {
    this.setState({
      pw: e.target.value
    })
    this.setState({
      passwordError: e.target.value.length < 5
    })
  }
  onChangePasswordChk = (e) => {
    //비밀번호를 입력할때마다 password 를 검증하는 함수
    this.setState({ passwordCheckError: e.target.value !== this.state.pw })
    this.setState({ passwordCheck: e.target.value })
  }
  seAddress = () => {
    this.setState({
      active: !this.state.active
    })
  }
  handleData = (data) => {
    this.setState({
      active: !this.state.active,
      address: data.address,
      postCode: data.postcode
    })
    console.log(data)
  }
  render() {
    const {
      active,
      address,
      postCode,
      name,
      pw,
      passwordError,
      passwordCheck,
      passwordCheckError
    } = this.state
    console.log(this.state.active)
    return (
      <MainContainer>
        <MainTitle>
          <h3>기본정보</h3>
          <p>* 표시는 반드시 입력하셔야 하는 항목입니다</p>
        </MainTitle>
        <Article>
          <TitleId>
            <TitlePara>* 아이디</TitlePara>
          </TitleId>
          <TitleIdInput
            name="user"
            value={name}
            onChange={this.onChangeId}
          ></TitleIdInput>
        </Article>
        <Article>
          <TitleId>
            <TitlePara>* 비밀번호</TitlePara>
          </TitleId>
          <TitleIdInputSmall
            name="userPw"
            value={pw}
            onChange={this.onChangePassword}
            type="password"
          ></TitleIdInputSmall>
          {passwordError && <Warning>5자리 이상 작성해 주세요.</Warning>}
        </Article>
        <Article>
          <TitleId>
            <TitlePara>* 비밀번호 확인</TitlePara>
          </TitleId>
          <TitleIdInputSmall
            name="userPwCheck"
            value={passwordCheck}
            onChange={this.onChangePasswordChk}
            type="password"
          ></TitleIdInputSmall>
          {passwordCheckError && <Warning>비밀번호가 일치하지 않습니다.</Warning>}
        </Article>
        <Article>
          <TitleId>
            <TitlePara>주소</TitlePara>
          </TitleId>
          <AddressTitle>
            <SerchAddress>
              <TitleIdInputSmall value={postCode}></TitleIdInputSmall>
              <AddressBtn onClick={this.seAddress}>우편번호검색</AddressBtn>
              <Modal>
                {active && <DaumPostcode onComplete={this.handleData} />}
              </Modal>
            </SerchAddress>
            <AddressInput value={address}></AddressInput>
            <AddressInput></AddressInput>
          </AddressTitle>
        </Article>
        <BtnCenterBox>
          <Link href="/">
            <CancelBtn>취소</CancelBtn>
          </Link>
          <BtnJoin type="submit" onClick={this.submitHandler}>
            회원가입
          </BtnJoin>
        </BtnCenterBox>
      </MainContainer>
    )
  }
}

const MainContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`
const MainTitle = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #999999;
`
const Article = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid lightgrey;
`
const TitleId = styled.div`
  width: 150px;
  background-color: #fbfbfb;
`
const TitlePara = styled.div`
  padding: 30px 20px;
  font-weight: 500;
`
const TitleIdInput = styled.input`
  width: 380px;
  margin-left: 20px;
  padding: 0 10px;
  outline: none;
  font-size: 12px;
  height: 31px;
  color: #333333;
  border: 1px solid #d6d6d6;
  line-height: 31px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`
const TitleIdInputSmall = styled.input`
  width: 125px;
  margin-left: 20px;
  padding: 0 10px;
  outline: none;
  font-size: 12px;
  height: 31px;
  color: #333333;
  border: 1px solid #d6d6d6;
  line-height: 31px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`
const AddressTitle = styled.div`
  display: flex;
  flex-direction: column;
`
const SerchAddress = styled.div`
  margin: 5px 0px;
`
const Warning = styled.div`
  color: red;
  font-size: 10px;
  margin-left: 20px;
`

const AddressInput = styled(TitleIdInput.withComponent("input"))`
  margin: 5px 0 5px 20px;
`
const AddressBtn = styled.button`
  margin: 0 0 0 5px;
  padding: 5px 10px 5px 10px;
  border: 1px solid #989898;
  cursor: pointer;
  font-size: 14px;
`
const Modal = styled.div`
  position: fixed;
  width: 500px;
  top: 0;
  margin-top: 100px;
`
const BtnCenterBox = styled.div`
  margin: 35px 0 0 0;
  text-align: center;
`
const CancelBtn = styled.button`
  width: 150px;
  height: 45px;
  color: #3e3d3c;
  font-weight: bold;
  font-size: 13px;
  border: 1px solid #cccccc;
  background: #fff;
  cursor: pointer;
`
const BtnJoin = styled.button`
  border: 1px solid #999999;
  background: #999999;
  width: 150px;
  height: 45px;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
  margin-left: 10px;
`
