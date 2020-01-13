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
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDdr40bUMZstelWonpxfu8FIDXVGs_h2FcSmjWw4wU4HMkCtom&s");
  background-size: cover;
  margin-top: 4px;
  width: 30px;
  height: 30px;
  text-align: center;
  cursor: pointer;
`
