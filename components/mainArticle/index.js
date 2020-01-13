import { Component } from "react"
import styled from "styled-components"
import WideArticleItem from "./WideArticleItem"
import axios from "axios"
import SmallArticleItem from "./SmallArticleItem"
import {
  CommonArticleWrap,
  CommonArticleOutBorder,
  CommonArticleInBorder
} from "../../styles/Common"
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
    //네비바 축소에 따른 마진값 조절
    if (window.scrollY > 10) {
      this.setState({ scroll: true })
    } else {
      this.setState({ scroll: false })
    }
    //비디오 플레이존
    if (this.videoRef !== undefined) {
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
  }
  render() {
    const { scroll } = this.state
    return (
      <Section marginTop={scroll}>
        {this.state.data.map((curr, i) => {
          if (i === 4) {
            return (
              <CommonArticleWrap>
                <VideoOutBorder>
                  <CommonArticleInBorder></CommonArticleInBorder>
                  <Video
                    src="https://vod-progressive.akamaized.net/exp=1578913584~acl=%2A%2F1605764253.mp4%2A~hmac=d0995d177a1eb9e37a5128871210478dd852bf5942977153d665c543e348fdbe/vimeo-prod-skyfire-std-us/01/1509/15/382549314/1605764253.mp4"
                    muted
                    loop
                    autoPlay
                    ref={(ref) => (this.videoRef = ref)}
                  ></Video>
                </VideoOutBorder>
              </CommonArticleWrap>
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
  margin-top: ${(props) => (props.marginTop ? "50px" : "180px")};
  z-index: 1;
  @media (max-width: 800px) {
    margin-top: 70px;
  }
`
const VideoOutBorder = styled(CommonArticleOutBorder)`
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

export default MainArticle
