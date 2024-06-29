import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Button, Card, Input, Modal, Radio, Upload } from "antd";
export const Wrapper = styled.section`
  position: relative;
  width: 80% !important;
  margin: 0px auto;
  @media only screen and (max-width: 991.99px) {
    width: 95% !important;
  }
  ul.list3 {
    margin: 0px;
  }
  ul.list3 li {
    display: list-item;
    list-style-type: none;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
    opacity: 0.7;
    padding-left: 20px;
    margin-bottom: 10px;
    &::before {
      position: absolute;
      content: "";
      left: 0px;
      margin-top: 6px;
      width: 12px;
      height: 12px;
      line-height: 50%;
      border-radius: 15px;
      background: #ffffff;
      opacity: 0.7;
    }
  }
`;
export const Hero = styled.section`
  padding: 4% 0% 4% 0%;
  width: 100%;
  position: relative;
  .treeAnimation {
    width: 80%;
    @media only screen and (max-width: 768.99px) {
      width: 100%;
    }
  }
  h1 {
    margin: 0px;
    font-weight: 800;
    font-size: 70px;
    line-height: 70px;
    text-align: center;
    color: #ffffff;
    @media only screen and (max-width: 768.99px) {
      font-size: 40px;
      line-height: 40px;
    }
  }
  .scrollDown {
    position: absolute;
    top: 50%;
    left: 0;
    font-weight: 800;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.4);
    transform: rotate(-90deg);
  }
`;
export const XInputHero = styled(Input)`
  width: 75%;
  background: transparent;
  mix-blend-mode: normal;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  color: #fff;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  @media only screen and (max-width: 400.99px) {
    width: 60%;
  }
  &::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.2) !important;
  }
  &:placeholder {
    color: rgba(255, 255, 255, 0.2) !important;
  }
  :placeholder {
    color: rgba(255, 255, 255, 0.2) !important;
  }
  ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.2) !important;
  }
  &:focus,
  &:hover {
    border-color: #fff;
    background: transparent;
    box-shadow: none;
  }
`;
export const XHeroButton = styled(Button)`
  width: 20%;
  float: right;
  border: none;
  background: linear-gradient(90deg, #3a7fd0 0%, #51b29c 100%);
  border-radius: 30px;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.25px;
  color: #ffffff;
  @media only screen and (max-width: 400.99px) {
    width: 30%;
  }
  &:focus,
  &:hover {
    background: linear-gradient(90deg, #3a7fd0 0%, #51b29c 100%) !important;
    color: #fff !important;
    box-shadow: none;
  }
`;
export const XBecomeMember = styled.section`
  width: 100%;
  position: relative;
  h2 {
    margin: 0px;
    font-weight: 800;
    font-size: 48px;
    line-height: 55px;
    text-align: center;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
export const XTags = styled.span`
  font-weight: 800;
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
  background: rgba(58, 127, 208, 0.2);
  box-shadow: 0px 1px 2px rgba(105, 81, 255, 0.05);
  border-radius: 36px;
  padding: 5px 15px;
`;
export const XTitle = styled.h1`
  margin: 0px;
  font-weight: 800;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: -0.02em;
  color: #ffffff;
  @media only screen and (max-width: 768.99px) {
    font-size: 30px;
    line-height: 40px;
  }
`;
export const XPara1 = styled.p`
  margin: 0px;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #a6a6a6;
  span {
    color: #fff;
  }
`;
export const XPara2 = styled.p`
  margin: 0px;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  color: #a6a6a6;
`;
export const XPara3 = styled.p`
  margin: 0px;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  color: #a6a6a6;
  span {
    color: #fff;
  }
`;
export const XPara4 = styled.p`
  margin: 0px;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #a6a6a6;
  mix-blend-mode: normal;
`;
export const XButton = styled(Button)`
  background: linear-gradient(90deg, #3a7fd0 0%, #51b29c 100%);
  filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.15));
  border-radius: 30px;
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  color: #f0fdf4;

  &:hover,
  &:focus {
    background: linear-gradient(90deg, #3a7fd0 0%, #51b29c 100%) !important;
    color: #f0fdf4 !important;
  }
`;
export const XBGImg = styled.section`
  width: 100%;
  position: relative;
  background: url("/images/image-10.svg") no-repeat top center;
  background-size: cover;
  p {
    margin: 0px;
    font-weight: 800;
    font-size: 18px;
    line-height: 28px;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.8;
  }
`;
export const TitleSub = styled.h2`
  margin: 0px;
  font-weight: 800;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
`;
export const XTitle2 = styled.h1`
  font-weight: 800;
  font-size: 36px;
  line-height: 52px;
  letter-spacing: -0.4px;
  color: #ffffff;
  @media only screen and (max-width: 768.99px) {
    font-size: 30px;
    line-height: 40px;
  }
`;
export const XTitle3 = styled.h1`
  font-weight: 700;
  font-size: 58px;
  line-height: 60px;
  letter-spacing: -1px;
  color: #ffffff;
  @media only screen and (max-width: 768.99px) {
    font-size: 30px;
    line-height: 40px;
  }
`;
export const XCardTrsap = styled(Card)`
  background: rgba(255, 255, 255, 0.1);
  mix-blend-mode: normal !important;
  border-radius: 10px;
  border: none;
  color: #fff;
  height: 100%;
  .ant-card-body {
    padding: 60px 30px;
  }
  h3 {
    margin: 0px;
    font-weight: 800;
    font-size: 22px;
    line-height: 32px;
    color: #ffffff;
  }
  p {
    margin: 0px;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.7;
  }
`;
export const FreeSample = styled.section`
  width: 100%;
  position: relative;
  ${"" /* background: url("/images/noise.png"); */}
  .cardWrap {
    width: 100%;
    position: relative;
    height: 100%;
    background: rgba(255, 255, 255, 0.09);
    mix-blend-mode: normal;
    border-radius: 10px;
    padding: 30px;
  }
  &::before {
    content: "";
    background: linear-gradient(95.83deg, #3a7fd0 0%, #51b29c 100%);
    position: absolute;
    top: 0;
    left: 0;
    roght: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
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
  ul.socialLinks li {
    display: inline-block;
    list-style-type: none;
    margin: 0px 15px;
    &:first-child {
      margin-left: 0px;
    }
  }
  ul.socialLinks li a {
    border: 2px solid #2a2f3d;
    padding: 10px;
    border-radius: 50px;
    svg {
      color: #fff;
      width: 15px;
      height: 15px;
    }
    &:hover {
      background: #fff;
      border: 2px solid #fff;
      transition: background 0.5s;
      svg {
        color: #2a2f3d;
      }
    }
  }
`;
export const XFooter2 = styled.section`
  width: 100%;
  position: relative;
  background: #000;
  border-top: 1px solid #363935;
  h6 {
    margin: 0px;
    font-weight: 500;
    font-size: 22px;
    line-height: 32px;
    color: #ffffff;
  }
  p {
    margin: 0px;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
  }
  h4 {
    margin: 0px;
    font-weight: 800;
    font-size: 18px;
    line-height: 28px;
    color: #ffffff;
  }
  ul.footerLinks {
    margin: 0px;
    @media only screen and (max-width: 575.99px) {
    }
  }
  ul.footerLinks li {
    display: list-item;
    list-style-type: none;
    margin: 15px 0px;
  }
  ul.footerLinks li a {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
  }
  ul.socialLinks {
    margin: 0px;
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
    border: 2px solid #2a2f3d;
    padding: 10px;
    border-radius: 50px;
    svg {
      color: #fff;
      width: 15px;
      height: 15px;
    }
    &:hover {
      background: #fff;
      border: 2px solid #fff;
      transition: background 0.5s;
      svg {
        color: #2a2f3d;
      }
    }
  }
  ul.termsLinks {
    margin: 0px;
    padding: 0px;
  }
  ul.termsLinks li {
    display: inline-block;
    list-style-type: none;
    margin: 0px 15px;
    &:first-child {
      margin-left: 0px;
    }
  }
  ul.termsLinks li a {
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    color: #ffffff;
  }
  /*****************/
  ul.footerLinks {
    margin: 0px;
  }
  ul.footerLinks li {
    display: inline;
    margin-right: 24px;
  }
  ul.footerLinks li a {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
  }
  .copyWriter {
    font-size: 14px;
    color: #fff;
    margin-top: 15px;
  }
`;
export const XAIInnovators = styled.section`
  background: linear-gradient(
    180deg,
    rgba(58, 127, 208, 0.2) 0%,
    rgba(0, 0, 0, 0) 52.5%,
    rgba(58, 127, 208, 0.2) 100%
  );
  .infographic {
    width: 50%;
  }
  @media only screen and (max-width: 768.99px) {
    .infographic {
      width: 100%;
    }
  }
`;
export const MahiSection = styled.section`
  width: 100%;
  position: relative;
  background: #161825;
  @media only screen and (max-width: 768.99px) {
    .infographic {
      width: 100%;
    }
  }
  .link {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #51b29c;
  }
`;
export const XContactModal = styled(Modal)`
  .ant-modal-content {
    background: #010302;
    border-radius: 20px;
    z-index: 999999;
    cursor: default !important;
    padding: 45px;
    @media only screen and (max-width: 768.99px) {
      padding: 20px;
    }
  }
  h1 {
    cursor: default !important;
    margin: 0px;
    font-weight: 800;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  p {
    cursor: default !important;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
  }
  .ant-modal-content button {
    cursor: pointer !important;
  }
  svg {
    cursor: pointer !important;
    color: #fff;
  }
`;
export const XInputModal = styled(Input)`
  cursor: auto !important;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: #fff;
  &::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.2) !important;
  }
  &:placeholder {
    color: rgba(255, 255, 255, 0.2) !important;
  }
  :placeholder {
    color: rgba(255, 255, 255, 0.2) !important;
  }
  ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.2) !important;
  }
  &:hover,
  &:focus,
  &:focus-within,
  &:not(.ant-input-disabled) {
    background: transparent !important;
    border-color: rgba(255, 255, 255, 0.5) !important;
  }
`;
export const XButtonModal = styled(Button)`
  width: 100%;
  height: auto;
  cursor: pointer !important;
  padding: 8px 15px;
  border: none;
  background: linear-gradient(104.79deg, #51b29c 0%, #3a7fd0 100%);
  border-radius: 10px;
  font-weight: 800;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  span {
    cursor: pointer !important;
  }
  &:hover,
  &:focus {
    background: linear-gradient(104.79deg, #51b29c 0%, #3a7fd0 100%) !important;
    color: #ffffff !important;
  }
`;
export const XInputNewsLetter = styled(Input)`
  background: none !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: 30px;
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  padding-right: 30px;
  &::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.2) !important;
  }
  &:placeholder {
    color: rgba(255, 255, 255, 0.2) !important;
  }
  :placeholder {
    color: rgba(255, 255, 255, 0.2) !important;
  }
  ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.2) !important;
  }
  &:hover,
  &:focus {
    background: transparent !important;
    border-color: rgba(255, 255, 255, 0.1) !important;
  }
`;
export const XButtonNews = styled(Button)`
  margin-left: -30px;
  background: linear-gradient(90deg, #3a7fd0 0%, #51b29c 100%);
  filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.15));
  border-radius: 30px;
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  color: #f0fdf4;
  &:hover,
  &:focus {
    background: linear-gradient(90deg, #3a7fd0 0%, #51b29c 100%) !important;
    color: #f0fdf4 !important;
  }
`;
export const TitleCopy = styled.section`
  background: rgba(255, 255, 255, 0.1);
  padding: 15px 0px;
  .copy {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    opacity: 0.8;
  }
`;
export const XInputPage = styled(Input)`
  background: none !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: 10px;
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  &:hover,
  &:focus {
    background: transparent !important;
    border-color: rgba(255, 255, 255, 0.1) !important;
  }
`;
export const TitleForm = styled.p`
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  margin: 15px 0px 0px 0px;
  span {
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;
    opacity: 0.6;
  }
`;
export const XRadio = styled(Radio)`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  opacity: 0.8;
  margin: 5px 0px;
  .ant-radio-inner {
    background: none;
  }
  .ant-radio-checked .ant-radio-inner {
    background: #fff;
    border-color: #fff;
    opacity: 0.8;
  }
  .ant-radio-checked .ant-radio-inner:after {
    background-color: #161825;
  }
`;
export const XFormButton = styled(Button)`
  background: linear-gradient(90deg, #3a7fd0 0%, #51b29c 100%);
  filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.15));
  border-radius: 30px;
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  color: #f0fdf4;

  &:hover,
  &:focus {
    background: linear-gradient(90deg, #3a7fd0 0%, #51b29c 100%) !important;
    color: #f0fdf4 !important;
  }
`;
export const VideoPlayerWrap = styled.section`
  .playeHeight {
    width: 100% !important;
    height: 338px !important;
  }
  @media only screen and (max-width: 768.99px) {
    iframe {
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
`;
