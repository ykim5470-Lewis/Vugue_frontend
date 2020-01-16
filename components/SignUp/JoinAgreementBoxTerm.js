import React, { Component } from "react"
import styled from "styled-components"
import Checkbox from "./CheckBox"

class JoinAgreementBoxTerm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name,
      id: this.props.key,
      para: this.props.para,
      bold: this.props.bold,
      checked: false
    }
  }

  render() {
    const { name, id, para, bold } = this.state
    return (
      <>
        <JoinAgreementBox>
          <FormElement>
            <FormElementLabel>
              <Checkbox
                name={this.props.name}
                checked={this.props.abc}
                onClick={this.props.must}
                good={this.props.good}
                id={this.props.id}
              />
              <LabelEm>
                <strong>{bold}</strong>
                {name}
              </LabelEm>
            </FormElementLabel>
            <ParaBox>{para}</ParaBox>
          </FormElement>
        </JoinAgreementBox>
      </>
    )
  }
}

export default JoinAgreementBoxTerm

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
