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
import Link from "next/link";
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
              {/* <Col xs={24} className="text-center mt-2">
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
              </Col> */}
            </Row>
          </Wrapper>
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
          <div className="timelineFocys mt-5">
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
                                  Sam Rowe lands back in Cambridge from Vienna
                                  and begins exploring what it would take to
                                  build a values based community for AI
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
                                  Sam interviews 50+ AI founders who tell him
                                  about their experience building in Boston and
                                  how they imagine a community could support
                                  them on their journey. Several members of the
                                  current team emerge from this process!
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
                                  The name Æthos is chosen, a volunteer team
                                  forms, Æthos incorporates as a Massachusetts
                                  Benefit Corporation with no shareholders, a
                                  domain is purchased and a logo is picked.
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
                                  Redevelopment Authority to go in Kendall
                                  Square, licensing and installation will
                                  hopefully complete in early Fall.
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
                                  Before raising any sponsorship, to cover the
                                  initial costs of the Station, Æthos surveys 25
                                  early movers to see what they could
                                  contribute. The initial average lands $5 under
                                  our target.
                                </p>
                                <Link href="/visions">
                                  Read the full vision statement here
                                </Link>
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
                                  Venture Café (2 Floors below the Station)
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
                                  The first community dinner in the Station
                                  brings together the early movers over temaki
                                  sushi and a demo from Storyfave
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
                                  Æthos hosts the second part of the AI for
                                  public health event series and opens
                                  applications to the CIC MAHI grant{" "}
                                  <Link href="/apply-now">
                                    https://aethos.org/apply-now.
                                  </Link>{" "}
                                  Early collaborators are announced such as
                                  Forum VC, Google Cloud, and Augmentation Lab.
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
                                  Sam Rowe lands back in Cambridge from Vienna
                                  and begins exploring what it would take to
                                  build a values based community for AI
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
                                  Sam interviews 50+ AI founders who tell him
                                  about their experience building in Boston and
                                  how they imagine a community could support
                                  them on their journey. Several members of the
                                  current team emerge from this process!
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
                                  The name Æthos is chosen, a volunteer team
                                  forms, Æthos incorporates as a Massachusetts
                                  Benefit Corporation with no shareholders, a
                                  domain is purchased and a logo is picked.
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
                                  Redevelopment Authority to go in Kendall
                                  Square, licensing and installation will
                                  hopefully complete in early Fall.
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
                                  Before raising any sponsorship, to cover the
                                  initial costs of the Station, Æthos surveys 25
                                  early movers to see what they could
                                  contribute. The initial average lands $5 under
                                  our target.
                                </p>
                                <Link href="/visions">
                                  Read the full vision statement here
                                </Link>
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
                                  Venture Café (2 Floors below the Station)
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
                                  The first community dinner in the Station
                                  brings together the early movers over temaki
                                  sushi and a demo from Storyfave
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
                                  Æthos hosts the second part of the AI for
                                  public health event series and opens
                                  applications to the CIC MAHI grant{" "}
                                  <Link href="/apply-now">
                                    https://aethos.org/apply-now.
                                  </Link>{" "}
                                  Early collaborators are announced such as
                                  Forum VC, Google Cloud, and Augmentation Lab.
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
                <Col xs={24} className="text-center mt-5">
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
          </div>
        </HeroStory>
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
