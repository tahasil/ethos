import React, { useState } from "react";
import Header from "../component/header/header";
import { Row, Col } from "antd";
import {
  Wrapper,
  Hero,
  WhatWeDo,
  TitleSub,
  Title,
  XCardProject,
  XMission,
  CollspanWrap,
  XCollapse,
} from "../../src/styles/GlobalStyle";
export default function Home() {
  const collapseData = [
    {
      key: "1",
      label: "General Public",
      children: (
        <p>
          Learn about Project Æthos’ mission and vision. If they are one of the
          following stakeholders, it should show them how they can get involved.
          If they are not involved in any of these groups and don’t know much
          about artificial intelligence, they should be informed by the website
          of the technological possibilities and risks.
        </p>
      ),
      showArrow: false,
    },
    {
      key: "2",
      label: "AI Entrepreneurs",
      children: (
        <p>
          Learn about Project Æthos’ mission and vision. If they are one of the
          following stakeholders, it should show them how they can get involved.
          If they are not involved in any of these groups and don’t know much
          about artificial intelligence, they should be informed by the website
          of the technological possibilities and risks.
        </p>
      ),
      showArrow: false,
    },
    {
      key: "3",
      label: "AI Foundational Companies",
      children: (
        <p>
          Learn about Project Æthos’ mission and vision. If they are one of the
          following stakeholders, it should show them how they can get involved.
          If they are not involved in any of these groups and don’t know much
          about artificial intelligence, they should be informed by the website
          of the technological possibilities and risks.
        </p>
      ),
      showArrow: false,
    },
  ];

  return (
    <>
      <div className="heroFocus">
        <Header />
        <Hero>
          <Wrapper className="borderRight">
            <div className="heroInner">
              <Row gutter={[15, 15]} className="align-items-center">
                <Col xs={24} sm={12} md={12} lg={12}>
                  <h1>Character of shared beliefs held by a community</h1>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12}>
                  <div className="heroRight">
                    <p className="mb-3">
                      We are creating a community where entrepreneurs share
                      values
                    </p>
                    <a href="#" className="heroButton" type="link">
                      BECOME MEMBER
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </Wrapper>
        </Hero>
      </div>
      <div className="missionFocus">
        <Wrapper className="borderRight">
          <WhatWeDo>
            <TitleSub>WHAT WE DO</TitleSub>
            <Title className="mb-3">
              At Project <span>Æthos</span>
            </Title>
            <p className="para1">
              Æthos’ is the character of shared beliefs held by a community.  We
              are creating a community where entrepreneurs share values,
              principles, and single space while building 'AI-first" companies
              that will reshape the world for generations to come."  We call
              this community Project Æthos.
            </p>

            <Row className="my-2">
              <Col xs={24}>
                <a href="#" className="exploreLink">
                  Explore
                </a>
              </Col>
            </Row>

            <Row gutter={[15, 15]} className="mt-5">
              <Col xs={24} sm={12} md={8} lg={8}>
                <XCardProject>
                  <p className="text-end">01</p>
                  <img
                    className="img-fluid"
                    src="/images/project-img.svg"
                    alt=""
                  />
                  <h3 className="my-3">General Public</h3>
                  <p>
                    learn about Project Æthos’ mission and vision. If they are
                    one of the following stakeholders, it should show them how
                    they can get involved. If they are not involved in any of
                    these groups and don’t know much about artificial
                    intelligence, they should be informed by the website of the
                    technological possibilities and risks.
                  </p>
                </XCardProject>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8}>
                <XCardProject>
                  <p className="text-end">02</p>
                  <img
                    className="img-fluid"
                    src="/images/project-img.svg"
                    alt=""
                  />
                  <h3 className="my-3">AI Entrepreneurs</h3>
                  <p>
                    learn about the community: its policies, its resources, and
                    the space we offer for founders. The draft criteria for
                    application should also be spelled out. They should be able
                    to pre-register their interest in joining.
                  </p>
                </XCardProject>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8}>
                <XCardProject>
                  <p className="text-end">03</p>
                  <img
                    className="img-fluid"
                    src="/images/project-img.svg"
                    alt=""
                  />
                  <h3 className="my-3">AI Foundational Companies</h3>
                  <p>
                    learn about the companies in the community applying key AI
                    models at the application tier in industry verticals.
                  </p>
                </XCardProject>
              </Col>
            </Row>
          </WhatWeDo>
        </Wrapper>
        <Wrapper className="borderRight pb-5">
          <TitleSub>our mission</TitleSub>
          <Title className="mb-3">Lorem ipsum dolor sit amet</Title>
          <p className="para1">
            Project Æthos gathers leading innovators to invent the future of
            responsible artificial intelligence for humanity in a trusting,
            diverse community.
          </p>
          <Row gutter={[15, 15]} className="mt-5">
            <Col xs={24} sm={24} md={12} lg={12}>
              <XMission>
                <img className="w-100" src="/images/image-1.png" alt="" />
                <div className="missionDataWrap">
                  <div className="count">01</div>
                  <h1 className="my-2">Service Mentality</h1>
                  <p>
                    We seek to establish a culture of giving with our 2 hours of
                    contributions per month to other members.
                  </p>
                </div>
              </XMission>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <XMission>
                <img className="w-100" src="/images/image-2.png" alt="" />
                <div className="missionDataWrap">
                  <div className="count">02</div>
                  <h1 className="my-2">Honesty and Trust</h1>
                </div>
              </XMission>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <XMission>
                <img className="w-100" src="/images/image-3.png" alt="" />
                <div className="missionDataWrap">
                  <div className="count">03</div>
                  <h1 className="my-2">Impact</h1>
                </div>
              </XMission>
            </Col>
          </Row>
        </Wrapper>
      </div>
      <CollspanWrap className="py-5">
        <Wrapper>
          <Row gutter={[15, 15]}>
            <Col xs={24} sm={24} md={8} lg={6}>
              <TitleSub>Objectives</TitleSub>
              <Title
                className="mb-3 text-capitalize"
                style={{ lineHeight: "50px" }}
              >
                Expertise You Can Trust
              </Title>
            </Col>
            <Col xs={24} sm={24} md={16} lg={18}>
              <XCollapse
                items={collapseData}
                bordered={false}
                defaultActiveKey={["1"]}
                accordion
              />
            </Col>
          </Row>
        </Wrapper>
      </CollspanWrap>
      <div style={{ height: "500px" }}>Footer</div>
    </>
  );
}
