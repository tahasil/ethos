import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Card, Steps } from "antd";

export const StationWrap = styled.section`
  width: 100%;
  position: relative;
  background: #000;
`;
export const StationBg = styled.section`
  background: #000 url("/images/mahi-bg.svg") no-repeat top center;
  background-size: 100% 120%;
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
export const XSteps = styled(Steps)`
  width: 100%;
  position: relative;
  .ant-steps-item-active .ant-steps-item-icon,
  .ant-steps-item-finish .ant-steps-item-icon {
    background: linear-gradient(104.79deg, #51b29c 0%, #3a7fd0 100%) !important;
  }
  .ant-steps-item-icon {
    background: rgba(255, 255, 255, 0.1) !important;
    border-color: rgba(255, 255, 255, 0.1) !important;
  }
  .ant-steps-item-title {
    font-weight: 400 !important;
    font-size: 16px !important;
    line-height: 30px !important;
    color: #ffffff !important;
    opacity: 0.8 !important;
    &:after {
      display: none;
    }
  }
  .ant-steps-item-active .ant-steps-item-title {
    color: #fff !important;
    opacity: 1 !important;
  }
  .ant-steps-item-finish .ant-steps-item-title {
    color: #51b29c !important;
    opacity: 1 !important;
  }
  .ant-steps-item-finish .ant-steps-icon,
  .ant-steps-icon {
    color: #fff !important;
  }
  @media only screen and (max-width: 768.99px) {
  }
`;
export const StepDataWrapper = styled.section`
  width: 100%;
  position: relative;
  min-height: 300px !important;
  padding: 15px 0px;
`;
export const XFormData = styled.section`
  hr {
    margin: 30px 0px 15px 0px;
    border-top: 1px dashed rgba(255, 255, 255, 03);
  }
  ul.listFirst {
    margin: 0px;
    padding: 0px;
  }
  ul.listFirst li {
    display: list-item;
    list-style-type: disc;
    margin-left: 15px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;
    opacity: 0.8;
    ul li {
      margin-left: 15px;
    }
  }
  @media only screen and (max-width: 768.99px) {
  }
`;
const StoryStyle = () => {};
export default StoryStyle;
