import React from "react"
import styled from "styled-components"

const Checkbox = ({ className, checked, good, bad, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} good={good} bad={bad} {...props} />
    <StyledCheckbox checked={checked} good={good} bad={bad}>
      <Icon viewBox="0 0 30 24">
        <polyline points="25 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-top: 6px;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
`

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 10px;
  background: ${(props) =>
    props.checked || props.good || props.bad ? "orange" : "powderblue"};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px black;
  }

  ${Icon} {
    visibility: ${(props) =>
      props.checked || props.good || props.bad ? "visible" : "hidden"};
  }
`

export default Checkbox
