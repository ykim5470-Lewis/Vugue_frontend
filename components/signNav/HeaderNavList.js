import React, { Component } from "react"
import styled, { css } from "styled-components"

class HeaderNavList extends Component {
  render() {
    const { hidden, url, text } = this.props
    return (
      <HeaderInnerList hide={hidden}>
        <HeaderUl>
          <HeaderLi>
            <HeaderInnerLink href={url}>{text}</HeaderInnerLink>
          </HeaderLi>
        </HeaderUl>
      </HeaderInnerList>
    )
  }
}

const HeaderInnerList = styled.div`
  float: right;
  display: ${(props) => (props.hide ? "block" : "none")};
`
const HeaderUl = styled.ul`
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  padding: 0px;
`

const HeaderLi = styled.li`
  list-style: none;
`
const HeaderInnerLink = styled.a`
  font-size: 12px;
  font-weight: 400;
  display: inline-block;
  padding: 0 8px;
  color: #666666;
  text-decoration: none;
`
export default HeaderNavList
