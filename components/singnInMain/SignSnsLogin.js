import styled from "styled-components"

export default function MemberSns() {
  return (
    <MemberSnsLogin>
      <SnsLink href="/">
        <SnsImage src="https://developers.naver.com/doc/review_201802/CK_bEFnWMeEBjXpQ5o8N_20180202_7aot50.png"></SnsImage>
      </SnsLink>
      <SnsLink href="/">
        <SnsImage src="https://usefulpa.s3.amazonaws.com/images/2014/kakao_account_login_btn_large_narrow_ov.png"></SnsImage>
      </SnsLink>
    </MemberSnsLogin>
  )
}
const MemberSnsLogin = styled.div`
  cursor: pointer;
  transform: translateY(15px);
`
const SnsLink = styled.a`
  width: 48%;
  display: inline-block;
  margin-right: 5px;
`
const SnsImage = styled.img`
  width: 100%;
`
