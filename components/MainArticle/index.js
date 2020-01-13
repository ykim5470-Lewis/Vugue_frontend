import { Component } from "react"
import styled from "styled-components"
import WideArticleItem from "./WideArticleItem"
import axios from "axios"
import SmallArticleItem from "./SmallArticleItem"

class MainArticle extends Component {
  state = {
    data: [],
    scroll: false
  }
  componentDidMount() {
    const dataLoad = async () => {
      const res = await axios.get("http://localhost:3000/data/MainData.json")
      this.setState({
        data: res.data.data
      })
    }
    dataLoad()
    window.addEventListener("scroll", this.handleVideoPlay)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleVideoPlay)
  }

  handleVideoPlay = () => {
    const screenWidth = document.body.offsetWidth
    const currScroll = window.scrollY
    if (screenWidth > 1200) {
      currScroll > 800 && currScroll < 1800
        ? this.videoRef.play()
        : this.videoRef.pause()
    } else if (screenWidth <= 1200 && screenWidth > 800) {
      currScroll > 740 && currScroll < 1500
        ? this.videoRef.play()
        : this.videoRef.pause()
    } else {
      currScroll > 2000 && currScroll < 2400
        ? this.videoRef.play()
        : this.videoRef.pause()
    }
  }
  render() {
    return (
      <Section>
        {this.state.data.map((curr, i) => {
          if (i === 4) {
            return (
              <Wrap>
                <OuterBorder>
                  <InnerBorder></InnerBorder>
                  <Video
                    src="https://vod-progressive.akamaized.net/exp=1578896604~acl=%2A%2F1605764253.mp4%2A~hmac=0bc09e48c568aa12e8ab99ac1d553c87992d95e3a2cf4e9a6b65f7b9eb1a2519/vimeo-prod-skyfire-std-us/01/1509/15/382549314/1605764253.mp4"
                    muted
                    loop
                    ref={(ref) => (this.videoRef = ref)}
                  ></Video>
                </OuterBorder>
              </Wrap>
            )
          } else if (i % 4 === 0) {
            return <WideArticleItem data={curr} key={i}></WideArticleItem>
          } else {
            return <SmallArticleItem data={curr} key={i}></SmallArticleItem>
          }
        })}
      </Section>
    )
  }
}

const Section = styled.section`
  text-align: center;
`
const Wrap = styled.div``
const OuterBorder = styled.div`
  position: relative;
  width: 1185px;
  height: 650px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
  }
`
const Video = styled.video`
  width: 100%;
`
const InnerBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  &:hover {
    border: 13px solid rgba(255, 0, 0);
    transition: 0.5s;
  }
`
export default MainArticle
