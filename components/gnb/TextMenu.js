import React, { Component } from "react"
import styled from "styled-components"
import Link from "next/link"

class TextMenu extends Component {
  render() {
    const { wheel, title, searchClicked } = this.props
    console.log(searchClicked)
    return (
      <Link href="/">
        <a>
          <Text font={wheel ? "12px" : "16px"}>{title}</Text>
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
