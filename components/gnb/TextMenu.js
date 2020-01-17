import React, { Component } from "react"
import styled from "styled-components"
import Link from "next/link"

class TextMenu extends Component {
  render() {
    const { wheel, title, id } = this.props
    return (
      <Link href="/category/[id]" as={`/category/${title}${id}`}>
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
  &:hover {
    color: red;
  }
`

export default TextMenu
