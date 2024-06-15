import React, { useState } from "react";
import Header3 from "../../component/header/header3";
import Footer3 from "../../component/footer/footer3";
import { Row, Col, Form, Input, Button, Modal, notification } from "antd";
import { Wrapper } from "../../styles/GlobalStyle3";
import Joinus from "../../component/joinus/index";
import Gallery from "../../component/gallery/index";
import Connect from "../../component/connect/index";
import {
  StoryWrap,
  HeroStory,
  Title,
  TitleSub,
  Para1,
  FullCards,
  SubSection,
} from "./indexStyle";
import ScrollAnimation from "react-animate-on-scroll";

export default function Header({ onJoinUsClick }) {
  const [contactUs, setContactUs] = useState([false, ""]);
  const handleModalOpen = (content) => {
    setContactUs([true, content]);
  };
  const handleCancel = () => {
    setContactUs([false, ""]);
  };
  return (
    <>
      <StoryWrap className="mb-5">
        <HeroStory>
          <Header3 onJoinUsClick={() => handleModalOpen("join")} />
          <Wrapper>
            <Row>
              <Col
                xs={24}
                sm={24}
                lg={{ span: 14, offset: 5 }}
                className="text-center"
              >
                <h1>Our Stories</h1>
                <p className="my-2">
                  Discover the journey and impact of our AI community members
                </p>
              </Col>
              <Col xs={24} className="text-center">
                <ScrollAnimation
                  animateOnce={true}
                  duration={2}
                  animateIn="fadeIn"
                >
                  <img
                    className="img-fluid m-auto"
                    src="/images/hero-story.svg"
                    alt=""
                  />
                </ScrollAnimation>
              </Col>
            </Row>
          </Wrapper>
        </HeroStory>
        <div className="storySub">
          <Wrapper className="my-5">
            <Row gutter={[15, 15]} className="align-items-center">
              <Col xs={24} sm={24} lg={{ span: 12, offset: 12 }}>
                {/* <ScrollAnimation duration={1} animateIn="slideInUp"> */}
                  <TitleSub>LOREM IPSUM</TitleSub>
                {/* </ScrollAnimation> */}
                {/* <ScrollAnimation duration={2} animateIn="slideInUp"> */}
                  <Title className="my-1 my-sm-3">
                    Quis enim lobortis scelerisque fermentum dui
                  </Title>
                {/* </ScrollAnimation> */}
                {/* <ScrollAnimation duration={3} animateIn="slideInUp"> */}
                  <Para1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Para1>
                {/* </ScrollAnimation> */}
              </Col>
            </Row>
            <Row gutter={[15, 15]} className="align-items-center mt-5">
              <Col xs={24} sm={24} lg={12}>
                {/* <ScrollAnimation duration={1} animateIn="slideInUp"> */}
                  <TitleSub>LOREM IPSUM</TitleSub>
                {/* </ScrollAnimation> */}
                {/* <ScrollAnimation duration={2} animateIn="slideInUp"> */}
                  <Title className="my-1 my-sm-3">
                    Quis enim lobortis scelerisque fermentum dui
                  </Title>
                {/* </ScrollAnimation> */}
                {/* <ScrollAnimation duration={3} animateIn="slideInUp"> */}
                  <Para1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Para1>
                {/* </ScrollAnimation> */}
              </Col>
            </Row>
          </Wrapper>
        </div>
        {/* <ScrollAnimation duration={3} animateIn="slideInUp"> */}
          <FullCards className="py-5">
            <Wrapper>
              <Row gutter={[15, 15]}>
                <Col
                  xs={24}
                  sm={{ span: 20, offset: 2 }}
                  lg={{ span: 12, offset: 6 }}
                  className="text-center"
                >
                  <h1>Quis enim lobortis scelerisque fermentum dui</h1>
                </Col>
              </Row>
              <Row gutter={[15, 15]} className="mt-5">
                <Col xs={24} sm={24} lg={8} className="text-center">
                  <div className="cardWrapper">
                    <img
                      className="img-fluid m-auto mb-5"
                      src="/images/icon-5.svg"
                      alt=""
                    />
                    <h3 className="mb-3">Lorem ipsum dolor</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </Col>
                <Col xs={24} sm={24} lg={8} className="text-center">
                  <div className="cardWrapper">
                    <img
                      className="img-fluid m-auto mb-5"
                      src="/images/icon-5.svg"
                      alt=""
                    />
                    <h3 className="mb-3">Lorem ipsum dolor</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </Col>
                <Col xs={24} sm={24} lg={8} className="text-center">
                  <div className="cardWrapper">
                    <img
                      className="img-fluid m-auto mb-5"
                      src="/images/icon-5.svg"
                      alt=""
                    />
                    <h3 className="mb-3">Lorem ipsum dolor</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </Col>
              </Row>
            </Wrapper>
          </FullCards>
        {/* </ScrollAnimation> */}

        <SubSection>
          <Wrapper className="py-5">
            <Row gutter={[15, 15]} className="align-items-center mb-5">
              <Col xs={24} sm={24} lg={{ span: 12, offset: 12 }}>
                {/* <ScrollAnimation duration={1} animateIn="slideInUp"> */}
                  <TitleSub>LOREM IPSUM</TitleSub>
                {/* </ScrollAnimation> */}
                {/* <ScrollAnimation duration={2} animateIn="slideInUp"> */}
                  <Title className="my-1 my-sm-3">
                    Quis enim lobortis scelerisque fermentum dui
                  </Title>
                {/* </ScrollAnimation> */}
                {/* <ScrollAnimation duration={3} animateIn="slideInUp"> */}
                  <Para1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Para1>
                {/* </ScrollAnimation> */}
              </Col>
            </Row>
            <Row gutter={[15, 15]} className="align-items-center mb-5">
              <Col xs={24} sm={24} lg={12}>
                {/* <ScrollAnimation duration={1} animateIn="slideInUp"> */}
                  <TitleSub>LOREM IPSUM</TitleSub>
                {/* </ScrollAnimation> */}
                {/* <ScrollAnimation duration={2} animateIn="slideInUp"> */}
                  <Title className="my-1 my-sm-3">
                    Quis enim lobortis scelerisque fermentum dui
                  </Title>
                {/* </ScrollAnimation> */}
                {/* <ScrollAnimation duration={3} animateIn="slideInUp"> */}
                  <Para1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Para1>
                {/* </ScrollAnimation> */}
              </Col>
            </Row>
            <Row gutter={[15, 15]} className="py-5">
              <Col
                xs={24}
                sm={{ span: 20, offset: 2 }}
                lg={{ span: 12, offset: 6 }}
                className="text-center"
              >
                {/* <ScrollAnimation duration={1} animateIn="slideInLeft"> */}
                  <h1>Quis enim lobortis scelerisque fermentum dui</h1>
                {/* </ScrollAnimation> */}
              </Col>
            </Row>
            <Row gutter={[15, 15]}>
              <Col xs={24} sm={24} lg={12}>
                {/* <ScrollAnimation duration={1} animateIn="slideInLeft"> */}
                  <div className="cardBg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                {/* </ScrollAnimation> */}
              </Col>
              <Col xs={24} sm={24} lg={12}>
                {/* <ScrollAnimation duration={1} animateIn="slideInRight"> */}
                  <div className="cardBg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                {/* </ScrollAnimation> */}
              </Col>
            </Row>
          </Wrapper>
        </SubSection>
        <Gallery />
      </StoryWrap>
      <Connect />
      <Joinus
        contactUs={contactUs}
        handleModalOpen={handleModalOpen}
        handleCancel={handleCancel}
      />
      <Footer3 />
    </>
  );
}
