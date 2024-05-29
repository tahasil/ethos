import React, { useState, useEffect } from "react";
import Header3 from "../../component/header/header3";
import Footer2 from "../../component/footer/footer2";
import { Row, Col, Space } from "antd";
import {
  Wrapper,
  Hero,
  XInputHero,
  XHeroButton,
  XBecomeMember,
  XTags,
  XTitle,
  XPara1,
  XPara2,
  XPara3,
  XPara4,
  XButton,
  XBGImg,
  TitleSub,
  XTitle2,
  XTitle3,
  XCardTrsap,
  FreeSample,
} from "../../styles/GlobalStyle3";
import { LeftOutlined } from "@ant-design/icons";
//import AnimatedCursor from "../../component/cursor1.js";

export default function Home() {
  return (
    <>
      <div className="heroFocus">
        <Header3 />
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
                <h1>Global Communities for Advancing AI</h1>
              </Col>
              <Col className="mt-5" xs={24}>
                <img
                  className="img-fluid m-auto"
                  src="/images/hero-3.svg"
                  alt=""
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
              <h2>
                Æthos = the character of shared beliefs held by a community
              </h2>
            </Col>
          </Row>
        </Wrapper>
      </XBecomeMember>
      <div className="animationFocus">
        <XBGImg className="py-5">
          <Wrapper>
            <Row gutter={[15, 15]} className="align-items-center">
              <Col xs={24}>
                <XTitle2>Our Mission</XTitle2>
              </Col>
              <Col
                xs={{ span: 24, order: 2 }}
                sm={{ span: 24, order: 2 }}
                lg={{ span: 12, order: 1 }}
              >
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
              </Col>
              <Col
                xs={{ span: 24, order: 1 }}
                sm={{ span: 24, order: 1 }}
                lg={{ span: 12, order: 2 }}
                className="text-center my-sm-4"
              >
                <img
                  className="img-fluid m-auto"
                  src="/images/image-11.png"
                  alt=""
                />
              </Col>
            </Row>
            <Row gutter={[15, 15]} className="mt-5">
              <Col xs={24} sm={24} lg={8}>
                <XCardTrsap className="text-center">
                  <img className="m-auto mb-4" src="/images/icon-1.svg" />
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
                  <img className="m-auto mb-4" src="/images/icon-1.svg" />
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
                  <img className="m-auto mb-4" src="/images/icon-1.svg" />
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
          </Col>
        </Row>
      </Wrapper>
      <div className="challengesFocus">
        <Wrapper className="py-5">
          <Row gutter={[15, 15]} className="align-items-center">
            <Col xs={24} sm={24} lg={12}>
              <XTitle2 className="mb-4">Entrepreneurs’ Interests</XTitle2>
              <ul className="list3">
                <li>Desire for a pre-selected support community of peers</li>
                <li>
                  Consolidated access to resources to focus more on building and
                  talking to customers
                </li>
              </ul>
            </Col>
            <Col xs={24} sm={24} lg={12}>
              <img
                className="img-fluid m-auto"
                src="/images/image-12.svg"
                alt=""
              />
            </Col>
          </Row>
          <Row gutter={[15, 15]} className="mt-5 align-items-center">
            <Col
              xs={{ span: 24, order: 2 }}
              sm={{ span: 24, order: 2 }}
              lg={{ span: 12, order: 1 }}
            >
              <img
                className="img-fluid m-auto"
                src="/images/image-13.svg"
                alt=""
              />
            </Col>
            <Col
              xs={{ span: 24, order: 1 }}
              sm={{ span: 24, order: 1 }}
              lg={{ span: 12, order: 2 }}
            >
              <XTitle2 className="mb-4">
                Perception of Boston’s Innovation Ecosystem
              </XTitle2>
              <ul className="list3">
                <li>Fragmented players, funding gaps, longer timelines</li>
                <li>Disconnect between academic and applied spheres</li>
              </ul>
            </Col>
          </Row>
        </Wrapper>
      </div>
      <Wrapper className="py-5">
        <Row gutter={[15, 15]} className="align-items-center">
          <Col
            xs={24}
            sm={24}
            lg={{ span: 16, offset: 4 }}
            className="text-center"
          >
            <XTitle2 className="mb-3">
              Bringing resources closer to AI innovators
            </XTitle2>
            <XPara1>
              Æthos will operate at two levels: the wider Æthos community
              incorporating startups, corporates, investors, academics and
              others, and a physical shared space for AI founders we call Aethos
              Station. Within the station, founders can use the space as their
              work environment, access the community and shared resources via
              relationships with the ecosystem’s biggest contributors
            </XPara1>
          </Col>
          <Col xs={24} sm={24} lg={24} className="text-center">
            <h1 style={{ lineHeight: "400px", fontSize: "60px" }}>image</h1>
          </Col>
        </Row>
      </Wrapper>
      <Wrapper className="py-5">
        <Row gutter={[15, 15]} className="align-items-center">
          <Col xs={24} sm={24} lg={12}>
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
          </Col>
          <Col xs={24} sm={24} lg={12} className="text-center my-4 my-md-0">
            <img
              className="img-fluid m-auto"
              src="/images/image-13.png"
              alt=""
            />
          </Col>
        </Row>
      </Wrapper>

      <FreeSample className="py-5">
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
                  If you’re building with AI in Boston, Berlin, or Tokyo and are
                  looking to find your home, give us a shout! We’d love to get
                  to know you and see whether the Æthos community would be right
                  for you.
                </p>
              </div>
            </Col>
            <Col xs={24} sm={24} lg={24} className="mt-3 text-center">
              <XButton>Contact Us</XButton>
            </Col>
          </Row>
        </Wrapper>
      </FreeSample>
      <Footer2 />
    </>
  );
}
