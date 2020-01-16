import styled from "styled-components"

export const Menu = ["FASHION", "BEAUTY", "LIVING", "PEOPLE", "VIDEO", "RUNWAY"]

export const Logo = styled.div`
  display: ${(props) => props.display || "none"};
  background-image: url(${(props) =>
    props.imageUrl ||
    "http://img.vogue.co.kr/vogue/2018/02/style_5a83e4245454d.png"});
  height: ${(props) => props.height || "26px"};
  width: ${(props) => props.width || "100px"};
  margin: ${(props) => props.margin || "0"};
  background-size: cover;
`

export const SearchIcon = styled.div`
  display: ${(props) => props.display || "block"};
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDdr40bUMZstelWonpxfu8FIDXVGs_h2FcSmjWw4wU4HMkCtom&s");
  background-size: cover;
  margin-top: 4px;
  width: 25px;
  height: 25px;
  text-align: center;
  cursor: pointer;
`
export const CommonArticleWrap = styled.div``
export const CommonArticleOutBorder = styled.div`
  position: relative;
`
export const CommonArticleInBorder = styled.div`
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
export const CommonArticleImage = styled.div`
  background-image: url(${(props) => props.image_url});
  background-size: cover;
  background-position: 50% 50%;
  width: 100%;
  height: 100%;
`
export const CommonArticleTitle = styled.div`
  width: 100%;
  position: absolute;
  bottom: 10%;
  text-align: center;
  z-index: 999;
  font-size: 30px;
  color: white;
  font-weight: 400;
`
