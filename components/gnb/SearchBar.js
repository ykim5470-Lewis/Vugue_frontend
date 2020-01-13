import React, { Component } from "react"
import styled from "styled-components"
import { SearchIcon } from "../../styles/Common"

class SearchBar extends Component {
  render() {
    console.log(this.props.display)
    return (
      <InputContainer display={this.props.display}>
        <Input placeholder="Search ..."></Input>
        <InnerSearchIcon></InnerSearchIcon>
      </InputContainer>
    )
  }
}

const InputContainer = styled.div`
  display: ${(props) => props.display};
  position: relative;
  width: 80%;
  margin: 15px auto;
`
const Input = styled.input`
  width: 100%;
  margin: 15px auto;
  height: 40px;
  padding-left: 3px;
  border: 3px solid black !important;
`
const InnerSearchIcon = styled(SearchIcon)`
  position: absolute;
  top: 30%;
  right: 1%;
  margin-top: 0;
  cursor: pointer;
`
export default SearchBar
