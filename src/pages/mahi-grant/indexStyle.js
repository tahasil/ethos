import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Collapse, Card } from "antd";

export const MahiWrap = styled.section`
  width: 100%;
  position: relative;
  background: #000;
`;
export const MahiStory = styled.section`
  background: #000 url("/images/mahi-bg.svg") no-repeat top center;
  background-size: 100% 107%;
  @media only screen and (max-width: 576.99px) {
    background-size: 130% 160%;
  }
  h1 {
    margin: 0px;
    font-weight: 800 !important;
    font-size: 48px;
    line-height: 55px;
    color: #ffffff;
    @media only screen and (max-width: 768.99px) {
      font-size: 30px;
      line-height: 37px;
    }
    @media only screen and (max-width: 575.99px) {
      padding: 15px 0px;
    }
  }
  h2 {
    margin: 0px;
    font-size: 40px;
    line-height: 46px;
    text-align: center;
    color: #ffffff;
    @media only screen and (max-width: 768.99px) {
      font-size: 26px;
      line-height: 37px;
    }
  }
`;
export const XCollapse = styled(Collapse)`
  width: 100%;
  position: relative;
  border: none;
  .ant-collapse-header {
    background: none;
    border: 1px solid #1d201c;
    border-bottom: none;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    color: #ffffff;
    @media only screen and (max-width: 768.99px) {
      font-size: 18px;
      line-height: 18px;
    }
  }
  .ant-collapse-header-text {
    color: #fff;
  }
  .ant-collapse-item {
    margin-bottom: 30px;
    border-color: #1d201c;
    &:last-child {
      border-bottom: 1px solid #1d201c;
      border-radius: 0px;
      .ant-collapse-header,
      .ant-collapse-content {
        border-radius: 0px;
      }
    }
  }
  .ant-collapse-content {
    background: none;
    color: #fff;
    border: 1px solid #1d201c;
    p {
      margin: 0px 0px 15px 0px;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
      opacity: 0.8;
      @media only screen and (max-width: 768.99px) {
        font-size: 14px;
        line-height: 20px;
      }
      span {
        font-weight: 600;
      }
    }
    ul {
      margin: 0px;
      padding: 0px;
    }
    ul li {
      margin-left: 15px;
      display: list-item;
      list-style-type: disc;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #ffffff;
      opacity: 0.8;
      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #ffffff;
        opacity: 0.8;
        span {
          font-weight: 600;
        }
      }
      &:last-child {
        margin-bottom: 15px;
      }
    }
  }
  .ant-collapse-content-active {
    border-bottom: none;
  }
  .ant-collapse-expand-icon {
    color: #fff;
  }
`;
export const XCard = styled(Card)`
  width: 100%;
  position: relative;
  background: linear-gradient(
    90deg,
    rgba(170, 67, 206, 0) 0%,
    #4b7bb4 30.5%,
    #fcad00 66%,
    #51b29c 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid #363935;
  border-radius: 0px;
  h1 {
    font-weight: 800;
    font-size: 32px;
    line-height: 50px;
    color: #ffffff;
    @media only screen and (max-width: 768.99px) {
      font-size: 22px;
      line-height: 30px;
      text-align: center;
    }
  }
`;
const StoryStyle = () => {};
export default StoryStyle;
