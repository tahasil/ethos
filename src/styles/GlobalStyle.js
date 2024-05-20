import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Collapse, Card } from "antd";
// export const Theme = {
//   colors: {
//     white: "#fff",
//     fontPoppins: `'Poppins', sans-serif`,
//   },
//   media: { mobile: "768px", tab: "998px" },
// };
export const Wrapper = styled.section`
  position: relative;
  width: 90%;
  margin: 0px auto;
`;
export const Hero = styled.section`
  margin: 0px;
  background: rgba(58, 127, 208, 0.05) !important;
  .heroInner {
    width: 100%;
    position: relative;
    background: url("/images/hero-right-bg.svg") no-repeat bottom right;
  }
  h1 {
    margin: 0px;
    font-weight: 400;
    font-size: 60px;
    line-height: 80px;
    text-transform: uppercase;
    padding: 20% 0%;
  }
  .heroRight {
    padding: 2% 40% 0% 2%;
    border-left: 1px solid #ffffff;
    p {
      margin: 0px;
      font-weight: 800;
      font-size: 20px;
      line-height: 30px;
      text-transform: uppercase;
      color: #ffffff;
    }
  }
  .heroButton {
    background: linear-gradient(90deg, #51b29c 0%, #234c43 100%);
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.15);
    padding: 5px 15px;
    display: inline-block;
    font-weight: 800;
    font-size: 16px;
    line-height: 30px;
    text-transform: uppercase;
    color: #ffffff;
  }
`;
export const WhatWeDo = styled.section`
  width: 100%;
  position: relative;
  padding: 60px 0px;
`;
export const TitleSub = styled.h2`
  margin: 0px;
  font-weight: 900;
  font-size: 18px;
  line-height: 30px;
  text-transform: uppercase;
  color: #ffffff;
`;
export const Title = styled.h1`
  margin: 0px;
  font-weight: 800;
  font-size: 40px;
  line-height: 80px;
  text-transform: uppercase;
  color: #ffffff;
  span {
    background: linear-gradient(
      90deg,
      #fcad00 0%,
      #fcad00 30.5%,
      #4b7bb4 66%,
      #51b29c 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;
export const XCardProject = styled.section`
  background: #161825;
  border: none;
  border-radius: 0px;
  height: 100%;
  &:hover {
    background: #3a7fd0;
    transition: background 0.5s;
  }
  img {
    margin: 0px auto;
  }
  h3 {
    margin: 0px;
    font-weight: 400;
    font-size: 22px;
    line-height: 24px;
    color: #ffffff;
  }
  p {
    margin: 0px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #fff;
  }
`;
export const XMission = styled.section`
  position: relative;
  width: 100%;
  .missionDataWrap {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 30px;
    overflow: hidden;
    .count {
      font-weight: 800;
      font-size: 14px;
      line-height: 20px;
      color: #ffffff;
    }
    h1 {
      margin: 0px;
      font-weight: 900;
      font-size: 24px;
      line-height: 30px;
      color: #ffffff;
    }
    p {
      margin: 0px;
      font-weight: 400;
      font-size: 16px;
      line-height: 30px;
      color: #ffffff;
    }
  }
`;
export const CollspanWrap = styled.section`
  position: relative;
  width: 100%;
  background: #3a7fd0;
`;
export const XCollapse = styled(Collapse)`
  position: relative;
  width: 100%;
  background: transparent;
  .ant-collapse-header {
    padding: 10px 0px !important;
    font-weight: 800;
    font-size: 24px;
    line-height: 30px;
    color: #ffffff !important;
  }
  .ant-collapse-content-box {
    padding: 10px 0px 30px 0px !important;
    p {
      margin: 0px;
      font-weight: 400;
      font-size: 16px;
      line-height: 30px;
      color: #ffffff !important;
    }
  }
`;
