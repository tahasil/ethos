import React, { useState, useEffect } from "react";
import Header3 from "../../component/header/header3";
import Footer3 from "../../component/footer/footer3";
import Select from "react-dropdown-select";
import { Row, Col, Input, Card } from "antd";
import { Wrapper, XButton } from "../../styles/GlobalStyle3";
import Joinus from "../../component/joinus/index";
import Connect from "../../component/connect/index";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import {
  StoryWrap,
  HeroStory,
  DropdownDiv,
  DropdownMainContainer,
  UpcomingEventMainContainer,
  CardMainContainer,
  cardTag,
  CardDateContainer,
  DateTxt,
  CardTitle,
  MonthTxt,
  cardTimeImg,
  timeIcon,
  timeTxt,
  locationImg,
  InputContainer,
  InnerInputDiv,
  UpcomingEventsTxt,
  CardTimeImg,
  CardDateMainContainer,
  XCard,
  TreeImgContainer,
  TimeTxt,
  LocationContainer,
  LocationTxt,
  TextWrapper,
  Phrase,
  XInput,
  CardContainer,
} from "./indexStyle";

import "./index.css";

export default function Header({ onJoinUsClick }) {
  const [contactUs, setContactUs] = useState([false, ""]);
  const [values, setValues] = useState("");
  const handleModalOpen = (content) => {
    setContactUs([true, content]);
  };
  const handleCancel = () => {
    setContactUs([false, ""]);
  };

  const data = [
    {
      title: "Quis enim lobortis scelerisque fermentum dui",
      dateTime: "Thursday, June 6, 2024 | 4:00 PM - 9:00 PM (JST)",
      location: "One Broadway, Cambridge, MA, USA",
      cardImg: "/images/cardImg.png",
    },
    {
      title: "Quis enim lobortis scelerisque fermentum dui",
      dateTime: "Thursday, June 6, 2024 | 4:00 PM - 9:00 PM (JST)",
      location: "One Broadway, Cambridge, MA, USA",
      cardImg: "/images/cardImg2.png",
    },
    {
      title: "Quis enim lobortis scelerisque fermentum dui",
      dateTime: "Thursday, June 6, 2024 | 4:00 PM - 9:00 PM (JST)",
      location: "One Broadway, Cambridge, MA, USA",
      cardImg: "/images/cardImg3.png",
    },
    {
      title: "Quis enim lobortis scelerisque fermentum dui",
      dateTime: "Thursday, June 6, 2024 | 4:00 PM - 9:00 PM (JST)",
      location: "One Broadway, Cambridge, MA, USA",
      cardImg: "/images/cardImg4.png",
    },
    {
      title: "Quis enim lobortis scelerisque fermentum dui",
      dateTime: "Thursday, June 6, 2024 | 4:00 PM - 9:00 PM (JST)",
      location: "One Broadway, Cambridge, MA, USA",
      cardImg: "/images/cardImg5.png",
    },
    {
      title: "Quis enim lobortis scelerisque fermentum dui",
      dateTime: "Thursday, June 6, 2024 | 4:00 PM - 9:00 PM (JST)",
      location: "One Broadway, Cambridge, MA, USA",
      cardImg: "/images/cardImg6.png",
    },
  ];
  const StyledRow = styled(Row)`
    @media only screen and (max-width: 576px) {
      flex-direction: column-reverse;
      align-items: center;
    }
  `;

  const StyledCol = styled(Col)`
    @media only screen and (max-width: 576px) {
      text-align: center;
      margin-top: 20px;
    }
  `;

  const StyledDropdownContainer = styled.div`
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

  const Image = styled.img`
    width: 100%;
    max-height: 500px;
    padding: 50px;
  `;

  const Title = styled.h1`
    font-size: 24px;
    @media only screen and (max-width: 576px) {
      font-size: 20px;
    }
  `;

  const Paragraph = styled.p`
    font-size: 17px;
    fontsize: 15px;
    margintop: 20px;
  `;

  const options = [
    {
      id: 1,
      name: "Option 1",
    },
    {
      id: 2,
      name: "Option 2",
    },
  ];

  return (
    <div>
      <StoryWrap className="mb-5" style={{ overflowX: "hidden" }}>
        <HeroStory style={{ backgroundColor: "#020412" }}>
          <Header3 onJoinUsClick={() => handleModalOpen("join")} />
          <Wrapper>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <TreeImgContainer>
                  <Image src="/images/white-tree.png" alt="" />
                </TreeImgContainer>
              </Col>

              <Col
                xs={24}
                sm={12}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div style={{ padding: "20px" }}>
                  <ScrollAnimation
                    animateOnce={true}
                    duration={1}
                    animateIn="fadeIn"
                  >
                    <Title>Quis enim lobortis scelerisque fermentum dui</Title>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateOnce={true}
                    duration={1}
                    animateIn="fadeIn"
                  >
                    <Paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Paragraph>
                  </ScrollAnimation>
                </div>
              </Col>
            </Row>

            <XCard>
              <Row gutter={[15, 15]}>
                <Col xs={24} sm={24} lg={8}>
                  <div>
                    <Phrase>PHRASE</Phrase>
                    <XInput
                      className="inp"
                      placeholder="Search"
                      bordered={false}
                      size="large"
                    />
                  </div>
                </Col>
                <Col xs={24} sm={24} lg={8}>
                  <div>
                    <Phrase>DATE RANGE</Phrase>
                    <XInput
                      className="inp"
                      placeholder="Choose date range"
                      bordered={false}
                      size="large"
                    />
                  </div>
                </Col>
                <Col xs={24} sm={24} lg={8}>
                  <div>
                    <Phrase>LOCATION</Phrase>
                    <XInput
                      className="inp"
                      placeholder="All locations"
                      bordered={false}
                      size="large"
                    />
                  </div>
                </Col>
              </Row>
            </XCard>
          </Wrapper>
        </HeroStory>
      </StoryWrap>
      <div style={{}}>
        <Wrapper>
          <Row gutter={[0, 15]} style={{ marginBottom: "40px" }}>
            <Col xs={24} sm={24} lg={14}>
              <UpcomingEventsTxt>Upcoming Events</UpcomingEventsTxt>
            </Col>
            <Col xs={24} sm={24} lg={10}>
              <Row gutter={[15, 15]}>
                <Col xs={24} sm={24} lg={8}>
                  <DropdownDiv>
                    <Select
                      options={options}
                      labelField="name"
                      valueField="id"
                      onChange={(values) => setValues(values)}
                      style={{ border: "none", color: "gray" }}
                      placeholder="Weekdays"
                    />
                  </DropdownDiv>
                </Col>
                <Col xs={24} sm={24} lg={8}>
                  <DropdownDiv>
                    <Select
                      options={options}
                      labelField="name"
                      valueField="id"
                      onChange={(values) => setValues(values)}
                      style={{ border: "none", color: "gray" }}
                      placeholder="Event Type"
                    />
                  </DropdownDiv>
                </Col>
                <Col xs={24} sm={24} lg={8}>
                  <DropdownDiv>
                    <Select
                      options={options}
                      labelField="name"
                      valueField="id"
                      onChange={(values) => setValues(values)}
                      style={{ border: "none", color: "gray" }}
                      placeholder="Any Category"
                    />
                  </DropdownDiv>
                </Col>
              </Row>
            </Col>
          </Row>
        </Wrapper>

        <CardMainContainer>
          <CardContainer>
            <ScrollAnimation animateOnce={true} duration={1} animateIn="fadeIn">
              <Row gutter={[15, 15]} style={{ justifyContent: "space-evenly" }}>
                {data.map((event, index) => (
                  <Col
                    key={index}
                    xs={24}
                    sm={12}
                    lg={7}
                    style={{ marginBottom: "20px" }}
                  >
                    <Card
                      style={cardTag}
                      cover={<img alt="example" src={event.cardImg} />}
                    >
                      <CardDateMainContainer>
                        <CardDateContainer>
                          <DateTxt>06</DateTxt>
                          <MonthTxt>Jun</MonthTxt>
                        </CardDateContainer>
                        <CardTitle>{event.title}</CardTitle>
                      </CardDateMainContainer>

                      <CardTimeImg>
                        <img style={timeIcon} src="/images/time.png" alt="" />
                        <TimeTxt>{event.dateTime}</TimeTxt>
                      </CardTimeImg>
                      <LocationContainer>
                        <img
                          style={locationImg}
                          src="/images/location.png"
                          alt=""
                        />
                        <LocationTxt>{event.location}</LocationTxt>
                      </LocationContainer>
                    </Card>
                  </Col>
                ))}
              </Row>
            </ScrollAnimation>
            <Col xs={24} className="mt-5 text-center">
              <XButton>Load More</XButton>
            </Col>
          </CardContainer>
        </CardMainContainer>
      </div>
      <Connect content={false} button={false} />
      <Joinus
        contactUs={contactUs}
        handleModalOpen={handleModalOpen}
        handleCancel={handleCancel}
      />
      <Footer3 />
    </div>
  );
}
