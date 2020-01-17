import React, { useEffect } from "react"
import styled from "styled-components"
// import KakaoLogin from "react-kakao-login"
import { API_URL } from "../../config/Constants"
import Router from "next/router"

export default function MemberSns() {
  useEffect(() => {
    console.log(window.Kakao, "window")
    window.Kakao.init("e175fc513b83fa30d669a6c81e54387e")
  }, [])
  // const kakaoHandler = (res) => {
  //   fetch(`${API_URL}/user/kakao`, {
  //     method: "POST",
  //     headers: { Authorization: res.response.access_token },
  //     body: JSON.stringify()
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const token = res.access_token
  //       localStorage.setItem("access_token", token)
  //     })
  // }
  // ---아래가 최종---
  const moving = () => {
    Router.push("/")
  }
  const loginWithKakao = () => {
    // 로그인 창을 띄웁니다.
    window.Kakao.Auth.login({
      success: function(authObj) {
        console.log(authObj)
        const kakaoToken = authObj.access_token
        fetch(`${API_URL}/user/kakao`, {
          method: "POST",
          headers: {
            Authorization: kakaoToken
          }
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("access_token", data.access_token)
            alert("로그인에 성공하였습니다")
            moving()
          })
      },
      fail: function(err) {
        alert(JSON.stringify(err))
      }
    })
  }
  return (
    <MemberSnsLogin>
      <SnsLinkKakao onClick={loginWithKakao}>
        <SnsImage src="https://usefulpa.s3.amazonaws.com/images/2014/kakao_account_login_btn_large_narrow_ov.png"></SnsImage>
      </SnsLinkKakao>
      <SnsLink>
        <SnsImage src="https://developers.naver.com/doc/review_201802/CK_bEFnWMeEBjXpQ5o8N_20180202_7aot50.png"></SnsImage>
      </SnsLink>
    </MemberSnsLogin>
  )
}

const MemberSnsLogin = styled.div`
  cursor: pointer;
  transform: translateY(15px);
  border: none;
`
const SnsLink = styled.a`
  width: 48%;
  display: inline-block;
  margin-right: 5px;
`
const SnsImage = styled.img`
  width: 100%;
`
const SnsLinkKakao = styled.div`
  width: 48%;
  display: inline-block;
  margin-right: 5px;
  border: none;
`
