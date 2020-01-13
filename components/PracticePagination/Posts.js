import React from "react"
import styled from "styled-components"

const Posts = (props) => {
  const moreVeiw = props.CommerceArray
  const MoreVeiw1 = props.CommerceArray1

  if (moreVeiw === undefined) return <></>
  return (
    <WidgetWrap>
      <RecommendationLayout>
        <InterestedPostTitle>
          <PostTitle>주의 깊게 읽은 기사</PostTitle>
        </InterestedPostTitle>
        <TableListWrap>
          <TableList>
            <Table>
              {moreVeiw.map((post) => (
                <TableContent key={post.id} className="listGroupItem">
                  <ThumbnailLink href={post.url}>
                    <ThumbnailWrap>
                      <Thumbnail src={post.image} />
                      <ThumbnailTitle>{post.title}</ThumbnailTitle>
                    </ThumbnailWrap>
                  </ThumbnailLink>
                </TableContent>
              ))}
            </Table>
          </TableList>
        </TableListWrap>
      </RecommendationLayout>
    </WidgetWrap>
  )
}

export default Posts

const WidgetWrap = styled.div`
  overflow: hidden;
  width: 1px;
  min-width: 100%;
  position: relative;
  color: #000;
  background: #fff;
  font: 12px/1.2 "Apple SD Gothic Neo", "맑은 고딕", NanumGothic, "돋움", sans-serif;
  text-align: left;
`

const RecommendationLayout = styled.div`
  padding: 0;
  margin: 0 5px;
`

const InterestedPostTitle = styled.h1`
  font-size: 23px;
  line-height: 25px;
  color: #161616;
  font-weight: 600;
  background-color: #fff;
  text-align: center;
  border: none;
  padding-bottom: 20px;
  letter-spacing: -0.05em;
`

const PostTitle = styled.span`
  border-bottom: 1px solid #161616;
  font-size: 23px;
  line-height: 25px;
  color: #161616;
  font-weight: 600;
  background-color: #fff;
  text-align: center;
  letter-spacing: -0.05em;
`
const TableListWrap = styled.div`
  padding: 0;
  margin-top: ${(props) => (props.marginTop ? "2%" : null)};
`

const Table = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  vertical-align: inherit;
  border-color: inherit;
  justify-content: center;
`

const TableContent = styled.div`
  width: 30%;
  text-align: left;
  margin: 0;
  padding: 0;
  color: #000;
  font: 12px/1.2 "Apple SD Gothic Neo", "맑은 고딕", NanumGothic, "돋움", sans-serif;
  text-align: left;
  vertical-align: top;
  /* display: table-cell; */
`

const ThumbnailLink = styled.a`
  margin: 0 15px 0 0;
  font-size: 12px;
  display: block;
  cursor: pointer;
  text-decoration: none;
`

const ThumbnailWrap = styled.div`
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 62.5%;
  border: 1px solid #eee;
  position: relative;
`

const Thumbnail = styled.img`
  top: 0;
  left: 0;
  width: 100% !important;
  min-height: 100%;
  max-width: 100%;
  vertical-align: middle;
  position: absolute;
`

const ThumbnailTitle = styled.div`
  font-size: 16px;
  height: 20%;
  line-height: 1.4em;
  color: #000;
  text-align: left;
  font-family: Roboto, "Nanum Barun Gothic", "Apple SD Gothic Neo", Sans-serif, Dotum,
    arial !important;
  max-height: 41px;
  overflow: hidden;
  padding-bottom: 10px;
  word-wrap: break-word;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  background-color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
`

const TableList = styled.div`
  width: 100%;
  /* table-layout: fixed; */
  border-spacing: 0;
  border-collapse: collapse;
  /* display: block; */
  border: none;
`
