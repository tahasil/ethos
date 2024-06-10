import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Button, Card, Input, Modal } from "antd";
export const Wrapper = styled.section`
  position: relative;
  width: 90% !important;
  margin: 0px auto;
  @media only screen and (max-width: 991.99px) {
    width: 95% !important;
  }
`;
export const HeroCommunity = styled.section`
  background: #000 url("/images/hero-community.svg") no-repeat top center;
  background-size: 100% 150%;
  h1 {
    margin: 0px;
    font-weight: 800;
    font-size: 48px;
    line-height: 55px;
    color: #ffffff;
  }
  p {
    margin: 0px;
    font-weight: 800;
    font-size: 20px;
    line-height: 36px;
    text-align: center;
    color: #ffffff;
  }
  @media only screen and (max-width: 991.99px) {
  }
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
  font-size: 36px;
  line-height: 48px;
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
export const CommunityPolicies = styled.section`
  background: transparent url("/images/community-policies.svg") no-repeat left
    bottom;
  background-size: 25% 70%;
  @media only screen and (max-width: 991.99px) {
  }
`;
export const Para1 = styled.p`
  margin: 0px;
  font-weight: 800;
  font-size: 16px;
  line-height: 30px;
  color: #ffffff;
  @media only screen and (max-width: 991.99px) {
  }
`;
export const CardHover = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  background: #161825;
  padding: 170px 30px 50px 30px;
  transition: 0s background;
  span {
    position: absolute;
    top: 20px;
    right: 30px;
  }
  .innerWrap {
    width: 100%;
    position: relative;
    p {
      margin: 0px;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #ffffff;
    }
    h4 {
      margin: 0px;
      font-weight: 800;
      font-size: 22px;
      line-height: 24px;
      color: #ffffff;
    }
  }
  &:hover {
    background: linear-gradient(104.79deg, #51b29c 0%, #3a7fd0 100%);
    transition-delay: 1s;
  }
  @media only screen and (max-width: 991.99px) {
  }
`;
export const CardFull = styled.section`
  background: #161825;
  @media only screen and (max-width: 991.99px) {
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
export const TreeCard = styled.section`
  width: 100%;
  @media only screen and (max-width: 991.99px) {
  }
`;
export const StationCard = styled.section`
  width: 100%;
  position: relative;
  h6 {
    margin: 0px;
    font-weight: 900;
    font-size: 18px;
    line-height: 20px;
    color: #ffffff;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
    opacity: 0.6;
  }
  @media only screen and (max-width: 991.99px) {
  }
`;
export const XPhotoButton = styled(Button)`
  width: 100%;
  height: 100% !important;
  background: #161825;
  border-radius: 0px;
  border: none;
  color: #3a7fd0;
  svg {
    font-size: 14px;
  }
  span {
    margin-right: 10px;
    font-weight: 800;
    font-size: 20px;
    line-height: 48px;
    background: linear-gradient(104.79deg, #51b29c 0%, #3a7fd0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  &:hover {
    background: #161825 !important;
  }
  @media only screen and (max-width: 991.99px) {
  }
`;
export const LargePara = styled.p`
  font-weight: 800;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  color: #7b7b7b;
  span {
    color: #fff;
  }
  @media only screen and (max-width: 991.99px) {
  }
`;
