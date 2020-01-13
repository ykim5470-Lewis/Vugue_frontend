import React, { Component } from "react"
import Link from "next/link"
import styled from "styled-components"

class Social extends Component {
  render() {
    return (
      <Link href={this.props.link}>
        <a style={{ lineHeight: "20px", width: "20px" }}>
          <SocialItem
            imgUrl={this.props.imgUrl}
            alt=""
            width={this.props.width}
            height={this.props.height}
            margin={this.props.margin}
          ></SocialItem>
        </a>
      </Link>
    )
  }
}
const SocialItem = styled.span`
  display: inline-block;
  width: ${(props) => props.width || "18px"};
  height: ${(props) => props.height || "18px"};
  margin: ${(props) => props.margin || "0px 10px 10px;"};
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
`
export default Social
