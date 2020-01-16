import styled from "styled-components"
import { Component } from "react"
import JoinAgreementCont from "./JoinAgreementCont"

export default class MemberCont extends Component {
  render() {
    return (
      <MemberContes>
        <LocationWrap>
          <AgreeTitle>약관동의</AgreeTitle>
          <JoinAgreementCont />
        </LocationWrap>
      </MemberContes>
    )
  }
}

const MemberContes = styled.div`
  width: 743px;
  margin: 0 auto;
  border: none;
`
const LocationWrap = styled.form``

const AgreeTitle = styled.h3`
  padding: 0 0 17px 0;
  font-weight: normal;
  font-size: 18px;
  color: #222222;
`
