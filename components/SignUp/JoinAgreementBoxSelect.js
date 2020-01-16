import React, { Component } from "react"
import styled from "styled-components"
import Checkbox from "./CheckBox"

class JoinAgreementBoxSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name,
      id: this.props.key,
      para: this.props.para,
      bold: this.props.bold,
      leftTitle: this.props.leftTitle,
      rightTitle: this.props.rightTitle,
      checked: false
    }
  }

  render() {
    const { name, id, para, bold, leftTitle, rightTitle } = this.state
    return (
      <>
        <JoinAgreementBox>
          <FormElement>
            <FormElementLabel>
              <Checkbox
                name={this.props.name}
                checked={this.props.abc}
                onClick={this.props.select}
                bad={this.props.bad}
                id={this.props.id}
              />
              <LabelEm>
                <strong>{bold}</strong>
                {name}
              </LabelEm>
            </FormElementLabel>
            <AgreementChoiceBox>
              <AgreeTable>
                <Thead>
                  <Tr>
                    <ThLeft>{leftTitle}</ThLeft>
                    <ThRight>{rightTitle}</ThRight>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <TdLeft>선택</TdLeft>
                    <TdRight>{para}</TdRight>
                  </Tr>
                </Tbody>
              </AgreeTable>
            </AgreementChoiceBox>
          </FormElement>
        </JoinAgreementBox>
      </>
    )
  }
}

export default JoinAgreementBoxSelect

const JoinAgreementBox = styled.div`
  margin: 0 0 30px 0;
`
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
const FormElement = styled.form`
  display: inline-block;
  overflow: hidden;
  position: relative;
`
const LabelEm = styled.em`
  font: normal;
`
const ParaBox = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: 89px;
  margin: 10px 0 0;
  padding: 20px;
  border: 1px solid #e6e6e6;
  border-top: 1px solid #999999;
  line-height: 18px;
`
const AgreementChoiceBox = styled.div`
  padding: 10px 0 0 0;
`
const AgreeTable = styled.table`
  width: 100%;
`
const Thead = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
`
const Tr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`
const TdLeft = styled.td`
  padding: 20px 0 20px 10px;
  border-top: 1px solid #dcdcdc;
  border-left: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
`
const TdRight = styled.td`
  padding: 20px 0 20px 10px;
  border-top: 1px solid #dcdcdc;
  border-left: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
`
const ThLeft = styled.th`
  padding: 20px 0;
  border-top: 1px solid #999999;
  background: #fbfbfb;
  border-left: none;
  width: 100px;
`
const Tbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`
const ThRight = styled.th`
  padding: 20px 0;
  border-top: 1px solid #999999;
  border-left: 1px solid #dcdcdc;
  background: #fbfbfb;
  width: 100px;
`
