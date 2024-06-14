import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Button, Card, Input, Modal } from "antd";

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

const StoryStyle = () => {};
export default StoryStyle;
