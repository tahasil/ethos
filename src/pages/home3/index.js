import React, { useState } from "react";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import { Row, Col, Space, Input, Button } from "antd";
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
  XCardMember,
  XCardSubscribe,
  XFooter,
} from "../../styles/GlobalStyle";
import {
  ArrowRightOutlined,
  XOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
export default function Home() {
  const collapseData = [
    {
      key: "1",
      label: "General Public",
      children: (
        <p>
          Learn about Project Æthos` mission and vision. If they are one of the
          following stakeholders, it should show them how they can get involved.
          If they are not involved in any of these groups and don`t know much
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
          Learn about Project Æthos` mission and vision. If they are one of the
          following stakeholders, it should show them how they can get involved.
          If they are not involved in any of these groups and don`t know much
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
          Learn about Project Æthos` mission and vision. If they are one of the
          following stakeholders, it should show them how they can get involved.
          If they are not involved in any of these groups and don`t know much
          about artificial intelligence, they should be informed by the website
          of the technological possibilities and risks.
        </p>
      ),
      showArrow: false,
    },
    {
      key: "4",
      label: "Students, Academia and Responsible AI Institutes",
      children: (
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry`s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets.
        </p>
      ),
      showArrow: false,
    },
    {
      key: "5",
      label: "Non Profit Community Builders",
      children: (
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry`s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets.
        </p>
      ),
      showArrow: false,
    },
    {
      key: "6",
      label: "Service Providers",
      children: (
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry`s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets.
        </p>
      ),
      showArrow: false,
    },
    {
      key: "7",
      label: "Investors and Accelerators",
      children: (
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry`s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets.
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
                <Col xs={24} sm={24} md={12} lg={12}>
                  <h1>Character of shared beliefs held by a community</h1>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
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
            <TitleSub>core principal</TitleSub>
            <Title className="mb-3">
              At Project <span>Æthos</span>
            </Title>
            <p className="para1">
              Æthos is the character of shared beliefs held by a community. We
              are creating a community where entrepreneurs share values,
              principles, and single space while building AI-first companies
              that will reshape the world for generations to come. We call
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
              <Col xs={24} sm={24} md={8} lg={8}>
                <XCardProject>
                  <p className="text-end">01</p>
                  <img className="img-fluid" src="/images/image-4.svg" alt="" />
                  <h3 className="my-3">Lorem ipsum</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </XCardProject>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8}>
                <XCardProject className="rounded-0">
                  <p className="text-end">02</p>
                  <img className="img-fluid" src="/images/image-5.svg" alt="" />
                  <h3 className="my-3">Lorem ipsum</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </XCardProject>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8}>
                <XCardProject className="rounded-0">
                  <p className="text-end">03</p>
                  <img className="img-fluid" src="/images/image-6.svg" alt="" />
                  <h3 className="my-3">Lorem ipsum</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </XMission>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <XMission>
                <img className="w-100" src="/images/image-3.png" alt="" />
                <div className="missionDataWrap">
                  <div className="count">03</div>
                  <h1 className="my-2">Impact</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
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
      <Wrapper className="py-5 borderRight borderBottom">
        <XCardMember>
          <Row gutter={[15, 15]} className="align-items-center">
            <Col
              xs={24}
              sm={16}
              md={16}
              lg={18}
              className="text-center text-lg-start"
            >
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </Col>
            <Col xs={24} sm={8} md={8} lg={6} className="text-center">
              <a href="#" className="heroButton" type="link">
                BECOME MEMBER
              </a>
            </Col>
          </Row>
        </XCardMember>
      </Wrapper>
      <Wrapper className="py-5 borderRight borderBottom">
        <Row gutter={[30, 15]}>
          <Col xs={24} sm={24} lg={16}>
            <h1 className="subscribeHead">Begin Your Journey With Æthos</h1>
            <p className="para2 my-4">
              Subscribe to the Flow Research Collective`s newsletter
            </p>
            <Row>
              <Col xs={24} sm={24} lg={12}>
                <XCardSubscribe>
                  <Space.Compact
                    style={{
                      width: "100%",
                    }}
                  >
                    <Input placeholder="Enter email address" />
                    <Button type="primary">
                      <ArrowRightOutlined />
                    </Button>
                  </Space.Compact>
                </XCardSubscribe>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} lg={8}>
            <ul className="subscribeList">
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">the station</a>
              </li>
              <li>
                <a href="#">public programming</a>
              </li>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Wrapper>
      <Footer />
    </>
  );
}
