import React, { Component } from "react"
import styled from "styled-components"
import Link from "next/link"

class TextMenu extends Component {
  render() {
    return (
      <Link href="/">
        <a>
          <Text font={this.props.wheel ? "12px" : "16px"}>{this.props.title}</Text>
        </a>
      </Link>
    )
  }
}
const Text = styled.span`
  display: inline-block;
  font-size: ${(props) => props.font || "16px"};
  font-weight: 700;
  line-height: 40px;
  text-align: left;
  padding-right: 45px;
  color: black;
`

export default TextMenu
