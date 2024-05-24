import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Button, Carousel, Card, Input, Collapse } from "antd";
export const Theme = {
  // colors: {
  //   white: "#fff",
  //   fontPoppins: `'Poppins', sans-serif`,
  // },
  // media: { mobile: "768px", tab: "998px" },
};
export const Wrapper = styled.section`
  position: relative;
  width: 90% !important;
  margin: 0px auto;
  @media only screen and (max-width: 991.99px) {
    width: 95% !important;
  }
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
    @media only screen and (max-width: 991.99px) {
      font-size: 40px;
      line-height: 60px;
    }
    @media only screen and (max-width: 768.99px) {
      padding: 18% 0%;
      font-size: 26px;
      line-height: 40px;
    }
    @media only screen and (max-width: 768px) {
      padding: 10% 0%;
    }
  }
  .heroRight {
    padding: 4% 40% 0% 4%;
    border-left: 1px solid #ffffff;
    @media only screen and (max-width: 991.99px) {
      padding: 4% 20% 0% 4%;
    }
    @media only screen and (max-width: 768.99px) {
      padding: 4% 40% 0% 4%;
      margin-bottom: 30px;
    }
    @media only screen and (max-width: 576.99px) {
      padding: 4%;
    }
    &:after {
      background-image: green;
      position: absolute;
      top: 0;
      left: 8px;
      display: inline-block;
      width: 10%;
      height: 1px;
      content: "";
      border-top: 1px solid #fff;
    }
    p {
      margin: 0px;
      font-weight: 800;
      font-size: 20px;
      line-height: 30px;
      text-transform: uppercase;
      color: #ffffff;
      @media only screen and (max-width: 991.99px) {
        font-size: 18px;
        line-height: 28px;
      }
    }
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
  @media only screen and (max-width: 991.99px) {
    font-size: 16px;
    line-height: 30px;
  }
  &:after {
    content: "";
    display: inline-block;
    background: #fff;
    width: 5px;
    height: 5px;
    margin-left: 10px;
    margin-bottom: 4px;
  }
`;
export const Title = styled.h1`
  margin: 0px;
  font-weight: 800;
  font-size: 40px;
  line-height: 80px;
  text-transform: uppercase;
  color: #ffffff;
  @media only screen and (max-width: 991.99px) {
    font-size: 26px;
    line-height: 40px;
  }
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
export const XCardProject = styled(Card)`
  background: #161825;
  border: none;
  height: 100%;
  border-radius: 30px 0px 0px 0px;
  &:hover {
    background: #3a7fd0;
    transition: background 0.5s;
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
  overflow: hidden;
  &:hover .missionDataWrap {
    opacity: 1;
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }
  .missionDataWrap {
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: -10px;
    margin: 0;
    padding: 0;
    color: #666c74;
    line-height: 27px;
    opacity: 1;
    -webkit-transform: translateY(45px);
    transform: translateY(45px);
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: opacity 0.3s, transform 0.3s;
    transition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;

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
      min-height: 60px;
    }
  }
`;
export const CollspanWrap = styled.section`
  position: relative;
  width: 100%;
  background: #161825;
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
    @media only screen and (max-width: 991.99px) {
      font-size: 20px;
      line-height: 28px;
    }
  }
  .ant-collapse-item {
    border-bottom: 1px solid #2a2f3d;
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
export const XCardMember = styled(Card)`
  position: relative;
  width: 100%;
  border: none;
  border-radius: 0px;
  padding: 0% 6%;
  background: linear-gradient(
    90deg,
    rgba(170, 67, 206, 0) 0%,
    #4b7bb4 30.5%,
    #fcad00 66%,
    #51b29c 100%
  );
  p {
    margin: 0px;
    font-weight: 800;
    font-size: 32px;
    line-height: 48px;
    text-transform: uppercase;
    color: #ffffff;
    @media only screen and (max-width: 991.99px) {
      font-size: 18px;
      line-height: 26px;
    }
  }
`;
export const XCardSubscribe = styled(Card)`
  position: relative;
  width: 100%;
  background: #161825;
  border: none;
  .ant-card-body {
    padding: 10px;
  }
  .ant-input {
    height: 50px;
    border: none;
    background: transparent;
    color: rgba(255, 255, 255, 0.5);
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    &::-webkit-input-placeholder {
      color: rgba(255, 255, 255, 0.5) !important;
    }
    &:placeholder {
      color: rgba(255, 255, 255, 0.5) !important;
    }
    :placeholder {
      color: rgba(255, 255, 255, 0.5) !important;
    }
    ::-webkit-input-placeholder {
      color: rgba(255, 255, 255, 0.5) !important;
    }
    &:focus {
      box-shadow: none;
    }
  }
  button {
    height: 50px;
    background: linear-gradient(90deg, #51b29c 0%, #234c43 100%);
    border-radius: 0px;
    border: 0px;
    box-shadow: none;
    &:hover {
      background: linear-gradient(90deg, #51b29c 0%, #234c43 100%) !important;
    }
    span {
      display: block;
      margin-top: -2px;
    }
  }
`;
export const XFooter = styled.section`
  width: 100%;
  position: relative;
  .para1 {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.5);
  }
  a {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.5);
  }
  ul.socialLinks {
    margin: 0px;
    @media only screen and (max-width: 575.99px) {
      margin-top: 15px;
    }
  }
  ul.socialLinks li {
    display: inline-block;
    list-style-type: none;
    margin: 0px 15px;
    &:first-child {
      margin-left: 0px;
    }
  }
  ul.socialLinks li a {
    border: 1px solid #2a2f3d;
    padding: 10px;
    svg {
      color: #fff;
      width: 20px;
      height: 20px;
    }
    &:hover {
      background: #fff;
      transition: background 0.5s;
      svg {
        color: #2a2f3d;
      }
    }
  }
`;
