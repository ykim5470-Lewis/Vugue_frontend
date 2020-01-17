import { Component } from "react"
import styled from "styled-components"
import WideArticleItem from "./WideArticleItem"
import axios from "axios"
import SmallArticleItem from "./SmallArticleItem"
import { API_URL } from "../../config/Constants"
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
    const videoData = {
      title: "",
      video_url: "/mainVideo.mp4",
      detail_id: 1400
    }
    const dataLoad = async () => {
      const res = await axios.get(`${API_URL}/article/main`)
      //비디오 데이터 추가하기
      res.data.data.splice(4, 0, videoData)
      this.setState({
        data: res.data.data
      })
      console.log(this.state.data)
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
      <Section marginTop={scroll ? "100px" : "200px"}>
        {this.state.data.map((curr, i) => {
          if (i === 4) {
            return (
              <>
                <CommonArticleWrap key={i}>
                  <VideoOutBorder>
                    <CommonArticleInBorder></CommonArticleInBorder>
                    <Video
                      src={curr.video_url}
                      muted
                      loop
                      autoPlay
                      ref={(ref) => (this.videoRef = ref)}
                    ></Video>
                  </VideoOutBorder>
                </CommonArticleWrap>
              </>
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
  margin-top: ${(props) => props.marginTop || "200px"};
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
