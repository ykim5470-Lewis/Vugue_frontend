import { CommonSection } from "../../styles/Common"
import styled from "styled-components"
import Router from "next/router"

const Registration = () => {
  const moveMain = () => {
    Router.push("/")
  }
  return (
    <CommonSection>
      {/* <Form
        encType="multipart/form-data"
        method="post"
        action="http://10.58.5.67:8000/article/image"
      >
        <Text type="text" name="title"></Text>
        <File name="filename" type="file"></File>
        <Submit type="submit">등록</Submit>
      </Form> */}
      <Comment_layout>
        <Title_header> POSTING</Title_header>
        <div>
          <Reply_Title>UPLOAD</Reply_Title>
        </div>
        <Form
          encType="multipart/form-data"
          method="post"
          action=" http://13.209.16.32:8000/article/image"
        >
          <Text type="text" name="title"></Text>
          <File name="filename" type="file"></File>
          <SubmitBtn onClick={moveMain}>Post Comment</SubmitBtn>
        </Form>
      </Comment_layout>
    </CommonSection>
  )
}

const Form = styled.form``
const Text = styled.input`
  border: 1px solid black;
`
const File = styled.input`
  border: 1px solid black;
`
const Submit = styled.button`
  border: 1px solid black;
`
const Comment_layout = styled.div`
  margin: 0 auto;
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
  display: inline-block;
  border: 2px solid #161616;
  background: transparent;
  color: #161616;
  font-size: 12px;
  width: auto;
  padding: 10px 20px;
  margin: 50px auto;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0 0 20px 0;
  display: block;
  font-weight: 700;
`
export default Registration
