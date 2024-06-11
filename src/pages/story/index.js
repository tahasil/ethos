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
                <img
                  className="img-fluid m-auto"
                  src="/images/hero-story.svg"
                  alt=""
                />
              </Col>
            </Row>
          </Wrapper>
        </HeroStory>
        <div className="storySub">
          <Wrapper className="my-5">
            <Row gutter={[15, 15]} className="align-items-center">
              <Col xs={24} sm={24} lg={{ span: 12, offset: 12 }}>
                <TitleSub>LOREM IPSUM</TitleSub>
                <Title className="my-1 my-sm-3">
                  Quis enim lobortis scelerisque fermentum dui
                </Title>
                <Para1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Para1>
              </Col>
            </Row>
            <Row gutter={[15, 15]} className="align-items-center mt-5">
              <Col xs={24} sm={24} lg={12}>
                <TitleSub>LOREM IPSUM</TitleSub>
                <Title className="my-1 my-sm-3">
                  Quis enim lobortis scelerisque fermentum dui
                </Title>
                <Para1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Para1>
              </Col>
            </Row>
          </Wrapper>
        </div>
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
            <Row gutter={[100, 15]} className="mt-5">
              <Col xs={24} sm={24} lg={8} className="text-center">
                <img
                  className="img-fluid m-auto mb-5"
                  src="/images/icon-5.svg"
                  alt=""
                />
                <h3 className="mb-3">Lorem ipsum dolor</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
              <Col xs={24} sm={24} lg={8} className="text-center">
                <img
                  className="img-fluid m-auto mb-5"
                  src="/images/icon-5.svg"
                  alt=""
                />
                <h3 className="mb-3">Lorem ipsum dolor</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
              <Col xs={24} sm={24} lg={8} className="text-center">
                <img
                  className="img-fluid m-auto mb-5"
                  src="/images/icon-5.svg"
                  alt=""
                />
                <h3 className="mb-3">Lorem ipsum dolor</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
            </Row>
          </Wrapper>
        </FullCards>

        <SubSection>
          <Wrapper className="py-5">
            <Row gutter={[15, 15]} className="align-items-center mb-5">
              <Col xs={24} sm={24} lg={{ span: 12, offset: 12 }}>
                <TitleSub>LOREM IPSUM</TitleSub>
                <Title className="my-1 my-sm-3">
                  Quis enim lobortis scelerisque fermentum dui
                </Title>
                <Para1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Para1>
              </Col>
            </Row>
            <Row gutter={[15, 15]} className="align-items-center mb-5">
              <Col xs={24} sm={24} lg={12}>
                <TitleSub>LOREM IPSUM</TitleSub>
                <Title className="my-1 my-sm-3">
                  Quis enim lobortis scelerisque fermentum dui
                </Title>
                <Para1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Para1>
              </Col>
            </Row>
            <Row gutter={[15, 15]} className="py-5">
              <Col
                xs={24}
                sm={{ span: 20, offset: 2 }}
                lg={{ span: 12, offset: 6 }}
                className="text-center"
              >
                <h1>Quis enim lobortis scelerisque fermentum dui</h1>
              </Col>
            </Row>
            <Row gutter={[15, 15]}>
              <Col xs={24} sm={24} lg={12}>
                <div className="cardBg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </Col>
              <Col xs={24} sm={24} lg={12}>
                <div className="cardBg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
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
