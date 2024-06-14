import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Button, Card, Input, Modal } from "antd";

export const StoryWrap = styled.section`
  width: 100%;
  position: relative;
  background: #000;
`;
export const HeroStory = styled.section`
  background: #000 url("/images/event-BI.png") no-repeat top center;
  background-size: 100% 90%;
  @media only screen and (max-width: 576.99px) {
    background-size: 100% 80%;
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
      padding: 30px 0px;
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
  }
  h3 {
    margin: 0px;
    font-weight: 800;
    font-size: 22px;
    line-height: 32px;
    text-align: center;
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

export const StyledDropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  width: 80%;
  margin: auto;

  @media only screen and (max-width: 576px) {
    margin-bottom: 20px;
    justify-content: center; /* Adjust alignment for smaller screens */
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 500px;
  padding: 50px;
`;

export const TextWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin-top: 100px;
`;

export const Title = styled.h1`
  font-size: 24px;
  @media only screen and (max-width: 576px) {
    font-size: 20px;
  }
`;

export const CardTitle = styled.h1`
  font-weight: 800;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-left: 10px;
  // @media only screen and (max-width: 768.99px) {
  //   font-size: 16px;
  //   line-height: 20px;
  // }
`;

// export const dropdownContainer = styled.h1`
//   font-weight: 800;
//   font-size: 18px;
//   line-height: 24px;
//   letter-spacing: -0.02em;
//   color: #ffffff;
//   margin-left: 10px;
// @media only screen and (max-width: 768.99px) {
//   font-size: 16px;
//   line-height: 20px;
// }
// `;

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
  @media only screen and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
export const UpcomingEventMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center, @media only screen and (max-width: 576px) {
    margin-bottom: 20px;
  }
`;

export const CardMainContainer = styled.div`
  display: flex;
  // justify-content: center;
  // margin-bottom: 3%;
  justify-content: center;
`;

export const DropdownMainContainer = styled.div`
  // display: flex;
  // justify-content: center;
  // margin-bottom: 3%;
`;

export const DropdownDiv = styled.div`
  border-radius: 50px;
  padding-left: 20px;
  padding-right: 20px;
  background: #161825;
  // margin-right: 15px;
  width: 100%;
`;

export const XCard = styled(Card)`
  background-color: #161825;
  border: none;
  width: 100%;
  border-radius: 20px;
  .ant-card-body {
    padding: 40px;
  }
  input {
    border-radius: 0px !important;
  }
`;
export const XInput = styled(Input)`
  border-bottom: 1px solid gray;
  background-color: #161825;
  color: white;
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const InnerInputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margintop: 10px;
`;

export const UpcomingEventsTxt = styled.h1`
  font-size: 30px;
`;

export const CardDateContainer = styled.div`
  height: 50px;
  width: 60px;
  border-radius: 10px;
  background-color: #3a7fd0;
  justify-content: center;
  align-item: center;
  margin-bottom: 18px;
`;

export const DateTxt = styled.h1`
  text-align: center;
  color: white;
  font-size: 30px;
`;

export const MonthTxt = styled.h1`
  text-align: center;
  color: white;
  font-size: 10px;
`;

export const CardTimeImg = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 18px;
`;

export const CardDateMainContainer = styled.div`
  display: flex;
`;

export const TreeImgContainer = styled.div`
  margin-left: 20%;
  min-width: 70%;
  max-width: 350px;
  height: auto;
  margin-bottom: 40px;
  text-align: center;
`;
export const TimeTxt = styled.p`
  color: gray;
  fontsize: 12px;
`;

export const LocationContainer = styled.div`
  display: flex;
  margintop: 10px;
`;

export const LocationTxt = styled.p`
  color: gray;
  fontsize: 12px;
`;

export const CardContainer = styled.div`
  width: 85%;
`;

export const menuStyle = {
  boxShadow: "none",
};

export const PharseTxt = styled.h3`
  color: white;
`;

export const InputTitle = styled.h3`
  color: white;
  marginbottom: 8px;
`;

export const Phrase = styled.h3`
  color: white;
  margin-bottom: 8px;
  margin-left: 10px;
`;

export const cardTag = {
  backgroundColor: "#161825",
  borderRadius: "10px",
  border: "none",
  // width: "100%",
  // minWidth: "380px",
};

export const locationImg = {
  height: "15px",
  marginRight: "10px",
  filter: "saturate(0.1) brightness(50%)",
};
export const timeIcon = {
  height: "15px",
  marginRight: "10px",
  filter: "saturate(0.1) brightness(50%)",
};
