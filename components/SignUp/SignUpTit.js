import styled from "styled-components"

export default function SignUpTit() {
  return (
    <MemberTit>
      <Agree>회원가입</Agree>
      <Ol>
        <OlList>
          <ListNumber>01</ListNumber> 약관동의 >
          <span>
            <AgreeIcon src="https://image.flaticon.com/icons/svg/32/32213.svg"></AgreeIcon>
          </span>
        </OlList>
        <OlList>
          <ListNumber>02</ListNumber> 정보동의 >
          <span>
            <AgreeIcon src="https://image.flaticon.com/icons/svg/32/32213.svg"></AgreeIcon>
          </span>
        </OlList>
        <OlList>
          <ListNumber>03</ListNumber> 가입완료
        </OlList>
      </Ol>
    </MemberTit>
  )
}
const Agree = styled.div`
  font-weight: bold;
  font-size: 30px;
`

const MemberTit = styled.div`
  padding: 0 !important;
  margin: 0 0 20px 0;
  border: 0;
  text-align: center;
  overflow: hidden;
`
const Ol = styled.ol`
  line-height: 30px;
  font-weight: 300px;
  line-height: 62px;
  float: right;
  list-style: none;
`
const OlList = styled.li`
  float: left;
`
const ListNumber = styled.span`
  color: #000000;
  font-weight: bold;
`
const AgreeIcon = styled.img`
  padding: 0 14px;
  max-width: 100%;
  width: 10px;
  height: auto;
  vertical-align: 0 !important;
`
