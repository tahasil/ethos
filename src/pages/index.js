import React, { useState, useEffect } from "react";
import Header3 from "../component/header/header3";
import Footer3 from "../component/footer/footer3";
import { Row, Col, Form, Input, Button, Modal, notification } from "antd";
import {
  Wrapper,
  Hero,
  XBecomeMember,
  XPara1,
  XButton,
  XBGImg,
  XTitle2,
  XTitle3,
  XCardTrsap,
  FreeSample,
  XAIInnovators,
  XContactModal,
  XInputModal,
  XButtonModal,
} from "../styles/GlobalStyle3";
import { LeftOutlined } from "@ant-design/icons";
import Lottie from "lottie-react";
import icon1 from "../../public/jsons/watering-can.json";
import icon2 from "../../public/jsons/sun.json";
import icon3 from "../../public/jsons/planting.json";
import Tree from "../../public/jsons/tree.json";
import Infographic from "../../public/jsons/arrow_infographic.json";

import Joinus from "../component/joinus/index";
import ScrollAnimation from "react-animate-on-scroll";
export default function Home() {
  const [contactUs, setContactUs] = useState([false, ""]);

  const handleModalOpen = (content) => {
    setContactUs([true, content]);
  };

  const handleCancel = () => {
    setContactUs([false, ""]);
  };

  return (
    <>
      <div className="heroFocus">
        <Header3 onJoinUsClick={() => handleModalOpen("join")} />
        <Hero>
          <Wrapper>
            <div
              className="scrollDown"
              onClick={() => window.scrollTo({ top: 1100, behavior: "smooth" })}
            >
              <span>
                <LeftOutlined /> Scroll
              </span>
            </div>
            <Row>
              <Col
                xs={24}
                sm={{ span: 20, offset: 2 }}
                lg={{ span: 16, offset: 4 }}
              >
                {/* <ScrollAnimation duration={1} animateIn="bounceInUp"> */}
                <h1>Global Communities for Advancing AI</h1>
                {/* </ScrollAnimation>/ */}
              </Col>
              <Col className="mt-5" xs={24}>
                {/* <img
                  className="img-fluid m-auto"
                  src="/images/hero-3.svg"
                  alt=""
                /> */}
                <Lottie
                  className="treeAnimation m-auto"
                  animationData={Tree}
                  loop={false}
                />
              </Col>
            </Row>
          </Wrapper>
        </Hero>
      </div>
      <XBecomeMember>
        <Wrapper className="py-5">
          <Row gutter={[15, 15]} className="py-4">
            <Col
              xs={24}
              sm={24}
              lg={{ span: 16, offset: 4 }}
              className="text-center"
            >
              {/* <ScrollAnimation duration={2} animateIn="bounceInLeft"> */}
              <h2>
                Æthos = the character of shared beliefs held by a community
              </h2>
              {/* </ScrollAnimation> */}
            </Col>
          </Row>
        </Wrapper>
      </XBecomeMember>
      <div className="animationFocus">
        <XBGImg className="py-5">
          <Wrapper>
            <Row gutter={[15, 15]} className="align-items-center">
              <Col xs={24}>
                {/* <ScrollAnimation duration={1} animateIn="bounceInUp"> */}
                <XTitle2>Our Mission</XTitle2>
                {/* </ScrollAnimation> */}
              </Col>

              <Col
                xs={{ span: 24, order: 2 }}
                sm={{ span: 24, order: 2 }}
                lg={{ span: 12, order: 1 }}
              >
                {/* <ScrollAnimation duration={2} animateIn="bounceInUp"> */}
                <p className="mb-4">
                  <span>
                    Æthos gathers leading innovators to invent the future of
                    responsible artificial intelligence for humanity in a
                    trusting, diverse community.
                  </span>
                </p>
                <p className="mb-4">
                  We are creating communities where roughly 100 leading
                  entrepreneurs share values and resources in a single space
                  while building “AI-first” companies that will reshape the
                  world for generation to come.
                </p>
                <p>
                  We do not seek profit and have no shareholders. We take no
                  equity from our members. Æthos seeks to bring resources closer
                  to founders and in return, we ask our members to uphold our
                  values.
                </p>
                {/* </ScrollAnimation> */}
              </Col>
              <Col
                xs={{ span: 24, order: 1 }}
                sm={{ span: 24, order: 1 }}
                lg={{ span: 12, order: 2 }}
                className="text-center my-sm-4"
              >
                <ScrollAnimation
                  animateOnce={true}
                  duration={1}
                  animateIn="fadeIn"
                >
                  <img
                    className="img-fluid m-auto"
                    src="/images/image-11.png"
                    alt=""
                  />
                </ScrollAnimation>
                {/* <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" /> */}
              </Col>
            </Row>

            {/* <ScrollAnimation duration={1} animateIn="fadeInUp"> */}
            <Row gutter={[15, 15]} className="mt-5">
              <Col xs={24} sm={24} lg={8}>
                <XCardTrsap className="text-center">
                  {/* <img className="m-auto mb-4" src="/images/icon-1.svg" /> */}

                  <Lottie
                    style={{ width: "100px" }}
                    className="m-auto"
                    animationData={icon1}
                    loop={true}
                  />

                  <h3 className="my-3">Service Mentality</h3>
                  <p>
                    We ask our members to contribute 2 hours of their time each
                    month to helping others. We prioritize honesty and trust
                    among innovators who are inventing the future, ideals that
                    can only be set in motion by consistently providing helpful
                    resources. The Æthos community takes on leadership through
                    service.
                  </p>
                </XCardTrsap>
              </Col>
              <Col xs={24} sm={24} lg={8}>
                <XCardTrsap className="text-center">
                  {/* <img className="m-auto mb-4" src="/images/icon-1.svg" /> */}
                  <Lottie
                    style={{ width: "100px" }}
                    className="m-auto"
                    animationData={icon2}
                    loop={true}
                  />
                  <h3 className="my-3">Neutrality</h3>
                  <p>
                    Æthos believes the most efficient community to grow in
                    contains deep domain knowledge from diverse fields alongside
                    technical expertise in AI. From energy to medicine, from
                    music to agriculture, Æthos sees AI being horizontally
                    applied with shared pain points arising left and right.
                    What’s more, our mission and structure allow us to partner
                    with otherwise competitive interests from across the
                    innovation ecosystem.
                  </p>
                </XCardTrsap>
              </Col>
              <Col xs={24} sm={24} lg={8}>
                <XCardTrsap className="text-center">
                  {/* <img className="m-auto mb-4" src="/images/icon-1.svg" /> */}
                  <Lottie
                    style={{ width: "100px" }}
                    className="m-auto"
                    animationData={icon3}
                    loop={true}
                  />
                  <h3 className="my-3">Responsible Impact</h3>
                  <p>
                    Æthos seeks founders who are pursuing missions with human
                    stakeholders and an intent to drive AI forward while
                    safeguarding for the downstream impacts of their technology.
                    By concentrating for founders the resources they need to win
                    in an environment characterized by belonging and mutual
                    respect, we believe their approach to technology will
                    increasingly reflect a shared responsibility towards
                    humanity.
                  </p>
                </XCardTrsap>
              </Col>
            </Row>
            {/* </ScrollAnimation> */}
          </Wrapper>
        </XBGImg>
      </div>
      <Wrapper className="py-5">
        <Row gutter={[15, 15]} className="align-items-center">
          <Col
            xs={24}
            sm={24}
            lg={{ span: 16, offset: 4 }}
            className="text-center"
          >
            {/* <ScrollAnimation duration={1} animateIn="slideInLeft"> */}
            <XTitle2 className="mb-3">
              Æthos takes on the innovation ecosystem’s challenges
            </XTitle2>
            <XPara1>
              While we intend to go global with sites in Berlin and Tokyo
              planned, for love of our city as our starting point, we
              interviewed nearly 100 AI founders in and major stakeholders in
              Boston’s innovation ecosystem to understand how we can contribute.
              Here’s some of what we heard:
            </XPara1>
            {/* </ScrollAnimation> */}
          </Col>
        </Row>
      </Wrapper>
      <div className="challengesFocus">
        <Wrapper className="py-5">
          <Row gutter={[15, 15]} className="align-items-center">
            <Col xs={24} sm={24} lg={12}>
              {/* <ScrollAnimation duration={1} animateIn="fadeInUp"> */}
              <XTitle2 className="mb-4">Entrepreneurs’ Interests</XTitle2>
              <ul className="list3">
                <li>Desire for a pre-selected support community of peers</li>
                <li>
                  Consolidated access to resources to focus more on building and
                  talking to customers
                </li>
              </ul>
              {/* </ScrollAnimation> */}
            </Col>
            <Col xs={24} sm={24} lg={12} className="mb-5 mb-lg-0">
              <ScrollAnimation
                animateOnce={true}
                duration={1}
                animateIn="fadeIn"
              >
                <img
                  className="img-fluid m-auto"
                  src="/images/image-12.svg"
                  alt=""
                />
              </ScrollAnimation>
            </Col>
          </Row>
          <Row>
            <Col
              xs={{ span: 10, offset: 7 }}
              sm={{ span: 10, offset: 7 }}
              lg={{ span: 12 }}
            >
              <ScrollAnimation
                animateOnce={true}
                duration={1}
                animateIn="fadeIn"
              >
                <img
                  className="img-fluid m-auto"
                  src="/images/animationLine.svg"
                  alt=""
                />
              </ScrollAnimation>
            </Col>
          </Row>
          <Row gutter={[15, 15]} className="mt-5 align-items-center">
            <Col
              xs={{ span: 24, order: 2 }}
              sm={{ span: 24, order: 2 }}
              lg={{ span: 12, order: 1 }}
            >
              <ScrollAnimation
                animateOnce={true}
                duration={1}
                animateIn="fadeIn"
              >
                <img
                  className="img-fluid m-auto"
                  src="/images/image-13.svg"
                  alt=""
                />
              </ScrollAnimation>
            </Col>
            <Col
              xs={{ span: 24, order: 1 }}
              sm={{ span: 24, order: 1 }}
              lg={{ span: 12, order: 2 }}
            >
              <ScrollAnimation
                animateOnce={true}
                duration={1}
                animateIn="fadeIn"
              >
                <XTitle2 className="mb-4">
                  Perception of Boston’s Innovation Ecosystem
                </XTitle2>
                <ul className="list3">
                  <li>Fragmented players, funding gaps, longer timelines</li>
                  <li>Disconnect between academic and applied spheres</li>
                </ul>
              </ScrollAnimation>
            </Col>
          </Row>
        </Wrapper>
      </div>
      <XAIInnovators className="py-5">
        <Wrapper>
          <Row gutter={[15, 15]} className="align-items-center">
            <Col
              xs={24}
              sm={24}
              lg={{ span: 16, offset: 4 }}
              className="text-center"
            >
              {/* <ScrollAnimation duration={1} animateIn="fadeInUp"> */}
              <XTitle2 className="mb-3">
                Bringing resources closer to AI innovators
              </XTitle2>
              <XPara1>
                Æthos will operate at two levels: the wider Æthos community
                incorporating startups, corporates, investors, academics and
                others, and a physical shared space for AI founders we call
                Aethos Station. Within the station, founders can use the space
                as their work environment, access the community and shared
                resources via relationships with the ecosystem’s biggest
                contributors
              </XPara1>
              {/* </ScrollAnimation> */}
            </Col>
            <Col xs={24} sm={24} lg={24} className="mt-4 text-center">
              {/* <img
                className="img-fluid m-auto"
                src="/images/image-14.svg"
                alt=""
              /> */}
              <ScrollAnimation
                animateOnce={true}
                duration={1}
                animateIn="fadeIn"
              >
                <Lottie
                  className="infographic m-auto"
                  animationData={Infographic}
                  loop={false}
                />
              </ScrollAnimation>
            </Col>
          </Row>
        </Wrapper>
      </XAIInnovators>
      <Wrapper className="py-5">
        <Row gutter={[15, 15]} className="align-items-center">
          <Col xs={24} sm={24} lg={12}>
            {/* <ScrollAnimation duration={1} animateIn="fadeInUp"> */}
            <XTitle2 className="mb-4">Æthos Team</XTitle2>
            <XPara1 className="mb-4">
              The dream team draws on experience in applied machine learning,
              national innovation policy, B2B SaaS, design, VR, philosophy,
              music, finance, management, education, product development, and,
              of course, entrepreneurship. Together we represent 6
              nationalities!
            </XPara1>
            <XPara1>
              We are a still mostly volunteer team of visionaries who enjoy
              spending time together and imagining ways AI can be leveraged to
              uplift humanity. Many of us have our own AI ventures and have come
              together over our shared passion for building community.
            </XPara1>
            {/* </ScrollAnimation> */}
          </Col>
          <Col xs={24} sm={24} lg={12} className="text-center my-4 my-md-0">
            <ScrollAnimation animateOnce={true} duration={1} animateIn="fadeIn">
              <img
                className="img-fluid m-auto"
                src="/images/image-13.png"
                alt=""
              />
            </ScrollAnimation>
          </Col>
        </Row>
      </Wrapper>

      <Joinus
        contactUs={contactUs}
        handleModalOpen={handleModalOpen}
        handleCancel={handleCancel}
      />
      {/* <FreeSample className="py-5">
        <Wrapper>
          <Row gutter={[15, 15]}>
            <Col xs={24} sm={24} lg={24} className="text-center">
              <XTitle3 className="my-3">Join Us.</XTitle3>
            </Col>
            <Col xs={24} sm={24} lg={12}>
              <div className="cardWrap">
                <p>
                  If you’re building with AI in Boston, Berlin, or Tokyo and are
                  looking to find your home, give us a shout! We’d love to get
                  to know you and see whether the Æthos community would be right
                  for you.
                </p>
              </div>
            </Col>
            <Col xs={24} sm={24} lg={12}>
              <div className="cardWrap">
                <p>
                  If you work in AI ethics, represent a corporation, an
                  investor, or a service provider or any other entity on our
                  stakeholder map with resources to bring to founders, tell us a
                  little about yourself! We aspire to be a conduit for your
                  tools to reach the front line of development.
                </p>
              </div>
            </Col>
            <Col xs={24} sm={24} lg={24} className="mt-3 text-center">
              <XButton onClick={() => setContactUs([true, "contact"])}>
                Contact Us
              </XButton>
              <XContactModal
                title={false}
                centered
                open={contactUs[0]}
                onCancel={handleCancel}
                footer={false}
              >
                {contactUs[1] === "contact" && (
                  <Row className="mb-4">
                    <Col xs={24} className="text-center">
                      <h1>Contact Us</h1>
                    </Col>
                  </Row>
                )}
                {contactUs[1] === "join" && (
                  <Row>
                    <Col xs={24} className="text-center">
                      <h1>Join Us</h1>
                    </Col>
                    <Col
                      xs={24}
                      sm={{ span: 16, offset: 4 }}
                      lg={{ span: 16, offset: 4 }}
                      className="text-center mt-2 mb-4"
                    >
                      <p>
                        Join us to be a part of an innovative and dynamic
                        community.
                      </p>
                    </Col>
                  </Row>
                )}
                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                  <Row>
                    <Col xs={24} className="text-center">
                      <Form.Item
                        name="name"
                        rules={[
                          { required: true, message: "Please enter your name" },
                        ]}
                      >
                        <XInputModal size="large" placeholder="Name" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} className="my-4 text-center">
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your email",
                          },
                          {
                            type: "email",
                            message: "Please enter a valid email",
                          },
                        ]}
                      >
                        <XInputModal size="large" placeholder="Email address" />
                      </Form.Item>
                    </Col>
                    <Col xs={24}>
                      <XButtonModal
                        size="large"
                        type="primary"
                        htmlType="submit"
                      >
                        Submit
                      </XButtonModal>
                    </Col>
                  </Row>
                </Form>
              </XContactModal>
            </Col>
          </Row>
        </Wrapper>
      </FreeSample> */}
      <Footer3 />
    </>
  );
}
