import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Timeline, Card, Input, Modal } from "antd";

export const StoryWrap = styled.section`
  width: 100%;
  position: relative;
  background: #000;
`;
export const HeroStory = styled.section`
  background: #000 url("/images/story-bg.svg") no-repeat top center;
  background-size: 100% 107%;
  @media only screen and (max-width: 576.99px) {
    background-size: 130% 160%;
  }
  h1 {
    margin: 0px;
    font-weight: 800;
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
  p {
    margin: 0px;
    font-weight: 800;
    font-size: 20px;
    line-height: 36px;
    text-align: center;
    color: #ffffff;
    @media only screen and (max-width: 768.99px) {
      font-size: 18px;
      line-height: 34px;
    }
  }
`;
export const TitleSub = styled.h2`
  margin: 0px;
  font-weight: 900;
  font-size: 18px;
  line-height: 30px;
  text-transform: uppercase;
  color: #ffffff;
  @media only screen and (max-width: 768.99px) {
    font-size: 16px;
    line-height: 20px;
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
  font-size: 48px;
  line-height: 60px;
  letter-spacing: -0.02em;
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
export const Para1 = styled.p`
  margin: 0px;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #7b7b7b;
`;
export const FullCards = styled.section`
  width: 100%;
  position: relative;
  background: #161825;
  h1 {
    margin: 0px;
    font-weight: 800;
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #ffffff;
    @media only screen and (max-width: 768.99px) {
      font-size: 30px;
      line-height: 40px;
    }
  }
  h3 {
    margin: 0px;
    font-weight: 800;
    font-size: 22px;
    line-height: 32px;
    text-align: center;
    color: #ffffff;
    @media only screen and (max-width: 768.99px) {
      font-size: 20px;
      line-height: 30px;
    }
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
  .cardWrapper {
    width: 100%;
    position: relative;
    padding: 30px;
    @media only screen and (max-width: 768.99px) {
      padding: 30px 0px;
    }
  }
`;
export const SubSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  background: url("/images/story-sub-section.svg") no-repeat center right;
  background-size: 40% 150%;

  h1 {
    margin: 0px;
    font-weight: 800;
    font-size: 40px;
    line-height: 50px;
    letter-spacing: -0.02em;
    color: #ffffff;
    @media only screen and (max-width: 768.99px) {
      font-size: 30px;
      line-height: 40px;
    }
  }
  .cardBg {
    background: #161825;
    padding: 30px;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #7b7b7b;
  }
`;
export const LargePara = styled.p`
  font-weight: 800;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  color: #7b7b7b;
  @media only screen and (max-width: 768.99px) {
    font-size: 24px;
    line-height: 34px;
  }
  span {
    color: #fff;
  }
`;
export const SocialWrap = styled.div`
  text-align: center;
  img {
    margin: 0px auto;
  }
  .socialData {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 160px;
    @media only screen and (max-width: 650px) {
      position: relative;
      bottom: auto;
      margin-top: 20px;
    }
    h6 {
      margin: 0px;
      font-weight: 800;
      font-size: 20px;
      line-height: 20px;
      text-align: center;
      color: #ffffff;
      @media only screen and (max-width: 650px) {
        font-size: 16px;
        line-height: 16px;
      }
    }
    p {
      margin: 0px;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #ffffff;
      opacity: 0.6;
      @media only screen and (max-width: 650px) {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
  @media only screen and (max-width: 768.99px) {
    font-size: 24px;
    line-height: 34px;
  }
`;
export const XTimeline = styled(Timeline)`
  width: 100%;
  position: relative;
  height: 100%;
  .ant-timeline-item-left img {
    float: right;
    padding-right: 20px;
  }
  .ant-timeline-item-left,
  .ant-timeline-item-right {
    &:hover {
      img {
        filter: url("data:image/svg+xml;utf8,&lt;svg xmlns='http://www.w3.org/2000/svg'&gt;&lt;filter id='grayscale'&gt;&lt;feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/&gt;&lt;/filter&gt;&lt;/svg&gt;#grayscale"); /* Firefox 10+, Firefox on Android */
        filter: gray; /* IE6-9 */
        -webkit-filter: grayscale(100%);
      }
    }
  }
  .ant-timeline-item-right img {
    float: left;
    padding-left: 20px;
  }
  .timelineData {
    width: 100%;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 15px;
  }
  .ant-timeline-item-label {
    position: relative !important;
  }
  .ant-timeline-item-content {
    position: absolute;
    height: 100%;
    top: 0%;
    inset-inline-start: calc(50% - -10px) !important;
    transform: translateY(50%);
    height: 50%;
  }
  .ant-timeline-item-head {
    top: 50%;
    width: 20px;
    height: 20px;
    background: linear-gradient(90deg, #3a7fd0 0%, #51b29c 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
  .ant-timeline-item-tail {
    border-inline-start: 8px solid rgba(255, 255, 255, 0.09);
    height: 100%;
  }
  .ant-timeline-item-last > .ant-timeline-item-tail {
    display: block;
  }
  .ant-timeline-item {
    padding: 0px;
  }
  .ant-timeline-item-right .ant-timeline-item-content {
    inset-inline-start: 0px !important;
  }
  .ant-timeline-item-right .timelineData {
    display: grid;
    padding-right: 15px;
  }
  h6 {
    font-weight: 900;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    color: #ffffff;
    margin: 0px 0px 15px 0px;
    @media only screen and (max-width: 768.99px) {
      font-size: 12px;
      line-height: 16px;
    }
    &:before {
      content: "";
      display: inline-block;
      background: #fff;
      width: 5px;
      height: 5px;
      margin-right: 10px;
      margin-bottom: 4px;
    }
  }
  ${
    "" /* .ant-timeline-item-right h6 {
    font-weight: 900;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    color: #ffffff;
    margin: 0px 0px 15px 0px;
    &:before {
      content: "";
      display: inline-block;
      background: #fff;
      width: 5px;
      height: 5px;
      margin-right: 10px;
      margin-bottom: 4px;
    }
  } */
  }
  p {
    margin: 0px;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: -0.02em;
    color: #ffffff;
    opacity: 0.8;
    @media only screen and (max-width: 768.99px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
  a {
    font-weight: 400;
    font-size: 18px;
    line-height: 36px;
    color: #51b29c;
    @media only screen and (max-width: 768.99px) {
      font-size: 16px;
      line-height: 28px;
    }
  }
`;

export const XTimelineMob = styled(Timeline)`
  width: 100%;
  position: relative;
  height: 100%;
  .timelineData {
    width: 100%;
    position: relative;
    ${"" /* padding: 30px 0px; */}
  }
  h6 {
    font-weight: 900;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    color: #ffffff;
    margin: 0px 0px 15px 0px;
    @media only screen and (max-width: 768.99px) {
      margin-top: 20px;
      font-size: 12px;
      line-height: 16px;
    }
    &:before {
      content: "";
      display: inline-block;
      background: #fff;
      width: 5px;
      height: 5px;
      margin-right: 10px;
      margin-bottom: 4px;
    }
  }
  p {
    margin: 0px;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: -0.02em;
    color: #ffffff;
    opacity: 0.8;
    @media only screen and (max-width: 768.99px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
  a {
    font-weight: 400;
    font-size: 18px;
    line-height: 36px;
    color: #51b29c;
    @media only screen and (max-width: 768.99px) {
      font-size: 16px;
      line-height: 28px;
    }
  }
  .ant-timeline-item img {
    margin-top: 50px;
  }
  .ant-timeline-item-head {
    top: 50%;
    width: 10px;
    height: 10px;
    background: linear-gradient(90deg, #3a7fd0 0%, #51b29c 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
  .ant-timeline-item-tail {
    border-inline-start: 8px solid rgba(255, 255, 255, 0.09);
    height: 100%;
    inset-inline-start: 1px;
  }
  .ant-timeline-item-last > .ant-timeline-item-tail {
    display: block;
  }
  .ant-timeline-item {
    padding: 0px;
  }
`;

const StoryStyle = () => {};
export default StoryStyle;
