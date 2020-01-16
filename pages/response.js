import React, { useState, useEffect } from "react"
import styled from "styled-components"
import ImageUpload from "../components/Upload/Upload"

const Response = (props) => {
  const ImagePreview = props.Preview
  console.log(ImagePreview)
  const [ReviewNum, SetReviewNum] = useState(0)
  const PersonalInfo = ["COMMENT", "NAME", "EMAIL", "PICTURE"]

  const ReplyTextBox = PersonalInfo.map((el, idx) => (
    <Common_p_tag>
      <Common_p_label key={idx}>{el}</Common_p_label>
      <TextArea></TextArea>
    </Common_p_tag>
  ))

  const PostComment = () => {
    SetReviewNum(ReviewNum + 1)
  }

  return (
    <>
      <Comment_layout>
        <Title_header>{ReviewNum} RESPONSE</Title_header>
        <div>
          <Reply_Title>LEAVE A REPLY</Reply_Title>
        </div>
        <Comment_form>
          <Common_p_tag>Your email address wull not be published</Common_p_tag>
          <div>{ReplyTextBox}</div>
        </Comment_form>
        <div>
          <ImageUpload />
        </div>
        <div>
          <SubmitBtn onClick={PostComment}>Post Comment</SubmitBtn>
        </div>
      </Comment_layout>
    </>
  )
}

export default Response

const Comment_layout = styled.div`
  max-width: 625px;
`

const Title_header = styled.h3`
  border-bottom: 5px solid #161616;
  color: #161616;
  padding-bottom: 10px;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  font-family: "Oswald", sans-serif;
  @media only screen and (min-width: 768px) {
    font-size: 24px;
    margin: 0 0 40px;
  }
`
const Reply_Title = styled.h3`
  color: #161616;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 0 0 20px 0;
  font-family: "Oswald", sans-serif;
  font-size: 1.17em;
  line-height: 1.3;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  text-rendering: optimizelegibility;
  margin-inline-end: 0px;
`
const Comment_form = styled.form`
  display: block;
  margin-top: 0em;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  line-height: 1.8;
  -webkit-font-smoothing: antialiased;
  color: #484848;
`

const Common_p_tag = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`

const Common_p_label = styled.label`
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0 0 20px 0;
  display: block;
  font-weight: 700;
  color: #161616;
`
const TextArea = styled.textarea`
  font-size: 15px;
  background: #f2f2f2;
  color: #858585;
  height: 50px;
  width: 100%;
  border: 0;
  padding: 20px;
  overflow: auto;
  font: inherit;
  margin: 0;
  text-rendering: auto;
  color: -internal-light-dark-color(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-appearance: textarea;
  background-color: -internal-light-dark-color(white, black);
  -webkit-rtl-ordering: logical;
  flex-direction: column;
  resize: auto;
  cursor: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  border-width: 1px;
  border-style: solid;
  border-color: initial;
  border-image: initial;
`
const SubmitBtn = styled.button`
  border: 2px solid #161616;
  background: transparent;
  color: #161616;
  font-size: 12px;
  width: auto;
  padding: 10px 20px;
  margin: 50px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0 0 20px 0;
  display: block;
  font-weight: 700;
`
