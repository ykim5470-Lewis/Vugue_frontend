import { Component } from "react"
import styled from "styled-components"
import Checkbox from "./CheckBox"
import Data from "./MustData"
import JoinAgreementBoxTerm from "./JoinAgreementBoxTerm"
import JoinAgreementBoxSelect from "./JoinAgreementBoxSelect"
import Link from "next/link"
import Router from "next/router"

export default class JoinAgreementCont extends Component {
  constructor() {
    super()
    this.state = {
      checked: false, //상위
      mustcheck: {}, //필수
      slectChecked: {}, // 선택
      errorMessage: ""
    }
  }
  move = () => {
    Router.push("/SignUpTwo")
  }
  errorMessage = (e) => {
    e.preventDefault()
    if (
      this.state.mustcheck.이용약관 === true &&
      this.state.mustcheck.개인정보 === true
    ) {
      this.move()
    } else if (this.state.checked === true) {
      this.move()
    } else {
      alert("필수 항목 체크하세요")
    }
  }
  setChecked = (name) => {
    console.log(name, "checked")
    name.map((el) => {
      this.setState({
        mustcheck: Object.assign(this.state.mustcheck, { [el.name]: false })
      })
    })
  }
  mustCheck = (e) => {
    this.setState({
      mustcheck: {
        ...this.state.mustcheck,
        [e.target.name]: !this.state.mustcheck[e.target.name]
      }
    })
  }
  slectCheck = (e) => {
    this.setState(
      {
        slectChecked: {
          ...this.state.slectChecked,
          [e.target.name]: !this.state.slectChecked[e.target.name]
        }
      },
      () => console.log("pass20", this.state)
    )
  }
  //전체를 관리하는 함수
  handleCheckboxChange = (e) => {
    const {
      target: { checked }
    } = e
    this.setState({ checked })
    this.setState({
      checked: !this.state.checked
    })
  }
  //must 관리 함수
  mustCheckChn = (e) => {}
  componentDidMount() {
    this.setChecked(Data.must)
  }
  render() {
    console.log(this.state.mustcheck.이용약관)
    // console.log(this.state.mustcheck.개인정보)
    return (
      <JoinAgreementWrap>
        <JoinAgreementBox>
          <FormElement>
            <FormElementLabel>
              <Checkbox
                checked={this.state.checked}
                onClick={this.handleCheckboxChange}
              />
              <LabelEm>매거진샵의 모든 약관을 확인하고 전체 동의합니다.</LabelEm>
            </FormElementLabel>
            <LabelSpan>(전체동의, 선택항목도 포함됩니다.)</LabelSpan>
          </FormElement>
        </JoinAgreementBox>
        {Data.must.map((current, index) => (
          <JoinAgreementBoxTerm
            id={index}
            abc={this.state.checked}
            key={current.id}
            name={current.name}
            para={current.para}
            bold={current.bold}
            must={this.mustCheck}
            good={this.state.mustcheck[current.name]}
          />
        ))}
        {Data.pick.map((current, index) => (
          <JoinAgreementBoxSelect
            abc={this.state.checked}
            name={current.name}
            para={current.para}
            bold={current.bold}
            id={index}
            leftTitle={current.leftTitle}
            rightTitle={current.rightTitle}
            key={current.id}
            select={this.slectCheck}
            bad={this.state.slectChecked[current.name]}
          />
        ))}
        <BtnCenterBox>
          <Link href="/">
            <BtnPrevStep>이전단계</BtnPrevStep>
          </Link>
          <BtnNextStep onClick={this.errorMessage}>다음단계</BtnNextStep>
        </BtnCenterBox>
      </JoinAgreementWrap>
    )
  }
}

const JoinAgreementWrap = styled.div`
  padding: 30px 0 0 0;
  border-top: 1px solid #999999;
`
const JoinAgreementBox = styled.div`
  margin: 0 0 30px 0;
`

const FormElement = styled.div`
  display: inline-block;
  overflow: hidden;
  position: relative;
`
// const FormElementInput = styled.div`
//   position: absolute;
//   top: 3px;
//   left: 1px;
//   width: 0;
//   z-index: -1;
//   visibility: hidden;
// `
const FormElementLabel = styled.label`
  position: relative;
  top: 0;
  left: 0;
  display: inline-block;
  min-width: 20px;
  min-height: 20px;
  padding: 0 0 0 27px;
  /* background-image: url("https://image.flaticon.com/icons/svg/25/25235.svg"); */
  background-repeat: no-repeat;
  background-position-x: 1px;
  background-position-y: top;
  background-size: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  background-size: 20px;
`

const LabelEm = styled.em`
  font-weight: bold;
  font-style: normal;
`
const LabelSpan = styled.span`
  color: #717171;
  font-size: 11px;
`
const BtnCenterBox = styled.div`
  margin: 35px 0 0 0;
  text-align: center;
`
const BtnPrevStep = styled.button`
  width: 150px;
  height: 45px;
  margin: 35px 0 0 0;
  color: #3e3d3c;
  font-size: 14px;
  border: 1px solid #cccccc;
  background: #ffffff;
  cursor: pointer;
`
const BtnNextStep = styled.button`
  border: 1px solid #666666;
  background: #666666;
  width: 150px;
  height: 45px;
  margin-left: 10px;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
`
