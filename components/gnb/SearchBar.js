import React, { Component } from "react"
import styled from "styled-components"
import { SearchIcon } from "../../styles/Common"
import Link from "next/link"

class SearchBar extends Component {
  state = {
    value: ""
  }
  onChangeHandle = (e) => {
    this.setState({
      value: e.target.value
    })
    console.log(this.state.value)
  }
  render() {
    console.log()
    return (
      <InputContainer
        display={this.props.display}
        margin={this.props.margin}
        width={this.props.width}
      >
        <Input
          placeholder="Search ..."
          margin={this.props.margin}
          onChange={this.onChangeHandle}
        ></Input>
        <Link href="/search" as={`/search/${this.state.value}`}>
          <a>
            <InnerSearchIcon></InnerSearchIcon>
          </a>
        </Link>
      </InputContainer>
    )
  }
}

const InputContainer = styled.div`
  display: ${(props) => props.display};
  position: relative;
  width: ${(props) => props.width || "80%"};
  margin: ${(props) => props.margin || "15px auto"};
  z-index: 200;
`
const Input = styled.input`
  width: 100%;
  height: 35px;
  margin: ${(props) => props.margin || "0 auto;"};
  padding-left: 3px;
  border: 3px solid black !important;
`
const InnerSearchIcon = styled(SearchIcon)`
  position: absolute;
  top: 15%;
  right: 1%;
  margin-top: 0;
  cursor: pointer;
`
export default SearchBar
