import React from "react"
import Gnb from "./gnb"
import Footer from "./footer"
import styled from "styled-components"

const Layout = (props) => (
  <Wrap>
    <Gnb />
    {props.children}
    <Footer />
  </Wrap>
)
const Wrap = styled.div``
export default Layout
