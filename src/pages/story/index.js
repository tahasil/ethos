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
  LargePara,
  SocialWrap,
  XTimeline,
  XTimelineMob,
} from "./indexStyle";
import ScrollAnimation from "react-animate-on-scroll";
//import { LazyLoadImage } from "react-lazy-load-image-component";

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
      <StoryWrap className="pb-5">
        <HeroStory>
          <Header3 onJoinUsClick={() => handleModalOpen("join")} />
          <Wrapper>
            <Row>
              <Col xs={24} sm={24} lg={24} className="text-center">
                <h1 className="w-100 d-block">Our Stories</h1>
              </Col>
              <Col
                xs={24}
                sm={24}
                lg={{ span: 14, offset: 5 }}
                className="text-center my-4"
              >
                <p>How Æthos came to be and where we are going</p>
              </Col>
              <Col xs={24} className="text-center mt-2">
                <ScrollAnimation
                  animateOnce={true}
                  duration={2}
                  animateIn="fadeIn"
                >
                  <img
                    className="img-fluid m-auto"
                    width={1237}
                    height={767}
                    src="/images/hero-story.png"
                    alt=""
                  />
                </ScrollAnimation>
              </Col>
            </Row>
          </Wrapper>
        </HeroStory>
        {/* <div className="storySub mb-5">
          <Wrapper className="my-5">
            <Row className="mb-5">
              <Col
                xs={24}
                sm={24}
                md={{ span: 22, offset: 1 }}
                lg={{ span: 20, offset: 2 }}
              >
                <LargePara>
                  <span>Lorem ipsum dolor sit amet,</span> consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </LargePara>
              </Col>
            </Row>
          </Wrapper>
          <div className="storySocialBg">
            <Wrapper>
              <SocialWrap>
                <Row>
                  <Col xs={24} sm={24} md={24} lg={{ span: 18, offset: 3 }}>
                    <img
                      className="img-fluid"
                      src="/images/story-social.png"
                      alt=""
                    />
                    <div className="socialData">
                      <h6>Lorem Ipsum</h6>
                      <p className="my-2">Lorem ipsum is placeholder text</p>
                      <a href="#" target="_blank">
                        <img
                          className="img-fluid"
                          src="/images/linkedin.svg"
                          alt="linkedin"
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
              </SocialWrap>
            </Wrapper>
          </div>
        </div> */}
        <div className="timelineFocys my-5">
          <Wrapper>
            <Row>
              <Col xs={24} sm={24} md={24} lg={24}>
                <XTimeline
                  className="d-none d-sm-block"
                  mode="alternate"
                  items={[
                    {
                      label: (
                        <Row className="py-5">
                          <Col xs={24}>
                            <img
                              className="img-fluid"
                              src="/images/image-24.png"
                              alt=""
                            />
                          </Col>
                        </Row>
                      ),
                      children: (
                        <div className="timelineData">
                          <Row>
                            <Col xs={24}>
                              <h6>March 17th</h6>
                              <p>
                                Sam returns to Boston from Vienna and births the
                                idea
                              </p>
                            </Col>
                          </Row>
                        </div>
                      ),
                      color: "#FFF",
                    },
                    {
                      label: (
                        <Row className="py-5">
                          <Col xs={24}>
                            <img
                              className="img-fluid"
                              src="/images/image-25.png"
                              alt=""
                            />
                          </Col>
                        </Row>
                      ),
                      children: (
                        <div className="timelineData">
                          <Row>
                            <Col xs={24}>
                              <h6>Late March - early April</h6>
                              <p>
                                Sam interviews 50 AI founders who tell him about
                                what Æthos can be, this number would grow and
                                also include several members of the current
                                team!
                              </p>
                            </Col>
                          </Row>
                        </div>
                      ),
                      color: "#FFF",
                    },
                    {
                      label: (
                        <Row className="py-5">
                          <Col xs={24}>
                            <img
                              className="img-fluid"
                              src="/images/image-26.png"
                              alt=""
                            />
                          </Col>
                        </Row>
                      ),
                      children: (
                        <div className="timelineData">
                          <Row>
                            <Col xs={24}>
                              <h6>April 16</h6>
                              <p>
                                A team joins, Æthos incorporates as a
                                Massachusetts Benefit Corporation with no
                                shareholders, buys aethos.org, picks a logo
                              </p>
                            </Col>
                          </Row>
                        </div>
                      ),
                      color: "#FFF",
                    },
                    {
                      label: (
                        <Row className="py-5">
                          <Col xs={24}>
                            <img
                              className="img-fluid"
                              src="/images/image-27.png"
                              alt=""
                            />
                          </Col>
                        </Row>
                      ),
                      children: (
                        <div className="timelineData">
                          <Row>
                            <Col xs={24}>
                              <h6>April 24</h6>
                              <p>
                                Café Æthos is approved by the Cambridge
                                Redevelopment Authority to go in Kendall Square
                                , licensing and installation expected to last
                                the summer
                              </p>
                            </Col>
                          </Row>
                        </div>
                      ),
                      color: "#FFF",
                    },
                    {
                      label: (
                        <Row className="py-5">
                          <Col xs={24}>
                            <img
                              className="img-fluid"
                              src="/images/image-28.png"
                              alt=""
                            />
                          </Col>
                        </Row>
                      ),
                      children: (
                        <div className="timelineData">
                          <Row>
                            <Col xs={24}>
                              <h6>Early May</h6>
                              <p>
                                Socioeconomic and financing differences average
                                out to an initial mean of just $5 under what we
                                anticipated in operational costs each month! The
                                radio head model works!
                              </p>
                              <a href="#">
                                Read the full vision statement here
                              </a>
                            </Col>
                          </Row>
                        </div>
                      ),
                      color: "#FFF",
                    },
                    {
                      label: (
                        <Row className="py-5">
                          <Col xs={24}>
                            <img
                              className="img-fluid"
                              src="/images/image-29.png"
                              alt=""
                            />
                          </Col>
                        </Row>
                      ),
                      children: (
                        <div className="timelineData">
                          <Row>
                            <Col xs={24}>
                              <h6>May 14</h6>
                              <p>
                                The 7th floor space opens as Æthos Station
                                ground zero and first members begin signing up
                                and moving in!
                              </p>
                            </Col>
                          </Row>
                        </div>
                      ),
                      color: "#FFF",
                    },
                    {
                      label: (
                        <Row className="py-5">
                          <Col xs={24}>
                            <img
                              className="img-fluid"
                              src="/images/image-30.png"
                              alt=""
                            />
                          </Col>
                        </Row>
                      ),
                      children: (
                        <div className="timelineData">
                          <Row>
                            <Col xs={24}>
                              <h6>May 30th</h6>
                              <p>
                                Æthos leads a community ideation session on AI
                                in Public Health, our first public event at
                                Venture Café
                              </p>
                            </Col>
                          </Row>
                        </div>
                      ),
                      color: "#FFF",
                    },
                    {
                      label: (
                        <Row className="py-5">
                          <Col xs={24}>
                            <img
                              className="img-fluid"
                              src="/images/image-31.png"
                              alt=""
                            />
                          </Col>
                        </Row>
                      ),
                      children: (
                        <div className="timelineData">
                          <Row>
                            <Col xs={24}>
                              <h6>June 20th</h6>
                              <p>
                                First Community night with a demo from storyfave
                              </p>
                            </Col>
                          </Row>
                        </div>
                      ),
                      color: "#FFF",
                    },
                    {
                      label: (
                        <Row className="py-5">
                          <Col xs={24}>
                            <img
                              className="img-fluid"
                              src="/images/image-32.png"
                              alt=""
                            />
                          </Col>
                        </Row>
                      ),
                      children: (
                        <div className="timelineData">
                          <Row>
                            <Col xs={24}>
                              <h6>June 27th</h6>
                              <p>
                                Part II of AI for public health at Venture Café.
                                CIC announces grant programme to support ai
                                innovation towards public health and Æthos
                                announces early collaborations with (list of
                                first sponsors)
                              </p>
                            </Col>
                          </Row>
                        </div>
                      ),
                      color: "#FFF",
                    },
                  ]}
                />
                <XTimelineMob
                  className="d-block d-sm-none"
                  items={[
                    {
                      children: (
                        <div className="timelineData">
                          <Row>
                            <Col xs={24}>
                              <img
                                className="img-fluid"
                                src="/images/image-24.png"
                                alt=""
                              />
                            </Col>
                            <Col xs={24}>
                              <h6>March 17th</h6>
                              <p>
                                Sam returns to Boston from Vienna and births the
                                idea
                              </p>
                            </Col>
                          </Row>
                        </div>
                      ),
                      color: "#FFF",
                    },
                    {
                      children: (
                        <div className="timelineData">
                          <Row>
                            <Col xs={24}>
                              <img
                                className="img-fluid"
                                src="/images/image-25.png"
                                alt=""
                              />
                            </Col>
                            <Col xs={24}>
                              <h6>Late March - early April</h6>
                              <p>
                                Sam interviews 50 AI founders who tell him about
                                what Æthos can be, this number would grow and
                                also include several members of the current
                                team!
                              </p>
                            </Col>
                          </Row>
                        </div>
                      ),
                      color: "#FFF",
                    },
                    {
                      children: (
                        <div className="timelineData">
                          <Row>
                            <Col xs={24}>
                              <img
                                className="img-fluid"
                                src="/images/image-26.png"
                                alt=""
                              />
                            </Col>
                            <Col xs={24}>
                              <h6>April 16</h6>
                              <p>
                                A team joins, Æthos incorporates as a
                                Massachusetts Benefit Corporation with no
                                shareholders, buys aethos.org, picks a logo
                              </p>
                            </Col>
                          </Row>
                        </div>
                      ),
                      color: "#FFF",
                    },
                    {
                      children: (
                        <div className="timelineData">
                          <Col xs={24}>
                            <img
                              className="img-fluid"
                              src="/images/image-27.png"
                              alt=""
                            />
                          </Col>
                          <Row>
                            <Col xs={24}>
                              <h6>April 24</h6>
                              <p>
                                Café Æthos is approved by the Cambridge
                                Redevelopment Authority to go in Kendall Square
                                , licensing and installation expected to last
                                the summer
                              </p>
                            </Col>
                          </Row>
                        </div>
                      ),
                      color: "#FFF",
                    },
                    {
                      children: (
                        <div className="timelineData">
                          <Col xs={24}>
                            <img
                              className="img-fluid"
                              src="/images/image-28.png"
                              alt=""
                            />
                          </Col>
                          <Row>
                            <Col xs={24}>
                              <h6>Early May</h6>
                              <p>
                                Socioeconomic and financing differences average
                                out to an initial mean of just $5 under what we
                                anticipated in operational costs each month! The
                                radio head model works!
                              </p>
                              <a href="#">
                                Read the full vision statement here
                              </a>
                            </Col>
                          </Row>
                        </div>
                      ),
                      color: "#FFF",
                    },
                    {
                      children: (
                        <div className="timelineData">
                          <Row>
                            <Col xs={24}>
                              <img
                                className="img-fluid"
                                src="/images/image-29.png"
                                alt=""
                              />
                            </Col>
                            <Col xs={24}>
                              <h6>May 14</h6>
                              <p>
                                The 7th floor space opens as Æthos Station
                                ground zero and first members begin signing up
                                and moving in!
                              </p>
                            </Col>
                          </Row>
                        </div>
                      ),
                      color: "#FFF",
                    },
                    {
                      children: (
                        <div className="timelineData">
                          <Row>
                            <Col xs={24}>
                              <img
                                className="img-fluid"
                                src="/images/image-30.png"
                                alt=""
                              />
                            </Col>
                            <Col xs={24}>
                              <h6>May 30th</h6>
                              <p>
                                Æthos leads a community ideation session on AI
                                in Public Health, our first public event at
                                Venture Café
                              </p>
                            </Col>
                          </Row>
                        </div>
                      ),
                      color: "#FFF",
                    },
                    {
                      children: (
                        <div className="timelineData">
                          <Col xs={24}>
                            <img
                              className="img-fluid"
                              src="/images/image-31.png"
                              alt=""
                            />
                          </Col>
                          <Row>
                            <Col xs={24}>
                              <h6>June 20th</h6>
                              <p>
                                First Community night with a demo from storyfave
                              </p>
                            </Col>
                          </Row>
                        </div>
                      ),
                      color: "#FFF",
                    },
                    {
                      children: (
                        <div className="timelineData">
                          <Row>
                            <Col xs={24}>
                              <img
                                className="img-fluid"
                                src="/images/image-32.png"
                                alt=""
                              />
                            </Col>
                            <Col xs={24}>
                              <h6>June 27th</h6>
                              <p>
                                Part II of AI for public health at Venture Café.
                                CIC announces grant programme to support ai
                                innovation towards public health and Æthos
                                announces early collaborations with (list of
                                first sponsors)
                              </p>
                            </Col>
                          </Row>
                        </div>
                      ),
                      color: "#FFF",
                    },
                  ]}
                />
              </Col>
            </Row>
          </Wrapper>
        </div>
        {/* <Gallery /> */}
      </StoryWrap>
      {/* <Connect /> */}
      <Joinus
        contactUs={contactUs}
        handleModalOpen={handleModalOpen}
        handleCancel={handleCancel}
      />
      <Footer3 />
    </>
  );
}
