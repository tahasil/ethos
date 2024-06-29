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
  background-size: 300% 300%;
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
export const XCard = styled(Card)`
  width: 100%;
  position: relative;
  background: #161825;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  input,
  textarea {
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    background: none;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.4) !important;
  }
  input:-moz-placeholder,
  textarea:-moz-placeholder {
    color: rgba(255, 255, 255, 0.4) !important;
  }
  input::-moz-placeholder,
  textarea::-moz-placeholder {
    color: rgba(255, 255, 255, 0.4) !important;
  }
  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.4) !important;
  }
  h1 {
    font-weight: 400;
    font-size: 26px;
    line-height: 40px;
    color: #ffffff;
  }
  @media only screen and (max-width: 768.99px) {
  }
`;
const StoryStyle = () => {};
export default StoryStyle;
