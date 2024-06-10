import React, { useState, useEffect } from "react";
import Header3 from "../../component/header/header3";
import Footer3 from "../../component/footer/footer3";
import { Row, Col, Form, Input, Button, Modal, notification } from "antd";
import { Wrapper } from "../../styles/GlobalStyle3";
import { RightOutlined } from "@ant-design/icons";
import {
  HeroCommunity,
  CommunityPolicies,
  Title,
  TitleSub,
  Para1,
  CardHover,
  CardFull,
  XMission,
  TreeCard,
  StationCard,
  XPhotoButton,
  LargePara,
} from "./indexStyle";
import Joinus from "../../component/joinus/index";
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
      <HeroCommunity>
        <Header3 onJoinUsClick={() => handleModalOpen("join")} />
        <Wrapper>
          <Row>
            <Col
              xs={24}
              sm={24}
              lg={{ span: 14, offset: 5 }}
              className="text-center"
            >
              <h1>Æthos Community</h1>
              <p className="my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
            <Col xs={24} className="text-center mt-4">
              <img
                className="img-fluid w-100"
                src="/images/image-15.png"
                alt=""
              />
            </Col>
          </Row>
        </Wrapper>
      </HeroCommunity>

      <CommunityPolicies className="py-5">
        <Wrapper>
          <Row>
            <Col xs={24}>
              <TitleSub>Community policies and values</TitleSub>
              <Title className="my-1 my-sm-3">Lorem ipsum dolor sit amet</Title>
              <Para1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Para1>
            </Col>
          </Row>
          <Row gutter={[15, 15]} className="mt-4">
            <Col xs={24} sm={24} lg={8}>
              <CardHover>
                <span>01</span>
                <div className="innerWrap">
                  <h4 className="mb-3">Lorem ipsum</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </CardHover>
            </Col>
            <Col xs={24} sm={24} lg={8}>
              <CardHover>
                <span>01</span>
                <div className="innerWrap">
                  <h4 className="mb-3">Lorem ipsum</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </CardHover>
            </Col>
            <Col xs={24} sm={24} lg={8}>
              <CardHover>
                <span>01</span>
                <div className="innerWrap">
                  <h4 className="mb-3">Lorem ipsum</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </CardHover>
            </Col>
          </Row>
        </Wrapper>
      </CommunityPolicies>

      <CardFull className="py-5">
        <Wrapper>
          <Row>
            <Col xs={24}>
              <Title className="mb-1 mb-sm-3">Lorem ipsum dolor sit amet</Title>
              <Para1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Para1>
            </Col>
          </Row>
          <Row gutter={[15, 15]} className="mt-5">
            <Col xs={24} sm={24} md={24} lg={12}>
              <XMission>
                <img className="w-100" src="/images/image-1.png" alt="" />
                <div className="missionDataWrap">
                  <div className="count">01</div>
                  <h1 className="my-2">Lorem ipsum dolor</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </XMission>
            </Col>
            <Col xs={24} sm={12} md={12} lg={6}>
              <XMission>
                <img className="w-100" src="/images/image-2.png" alt="" />
                <div className="missionDataWrap">
                  <div className="count">02</div>
                  <h1 className="my-2">Lorem ipsum dolor</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </XMission>
            </Col>
            <Col xs={24} sm={12} md={12} lg={6}>
              <XMission>
                <img className="w-100" src="/images/image-3.png" alt="" />
                <div className="missionDataWrap">
                  <div className="count">03</div>
                  <h1 className="my-2">Lorem ipsum dolor</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </XMission>
            </Col>
          </Row>
        </Wrapper>
      </CardFull>

      <div className="treeFocus">
        <TreeCard className="py-5">
          <Wrapper>
            <Row gutter={[15, 15]} className="align-items-center">
              <Col xs={24} sm={24} lg={16}>
                <TitleSub>Map of stakeholders</TitleSub>
                <Title className="mt-1 mt-sm-3">
                  Lorem ipsum dolor sit amet
                </Title>
              </Col>
              <Col xs={24} sm={24} lg={8}>
                <Para1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Para1>
              </Col>
            </Row>
            <Row>
              <Col xs={24}>
                <img
                  className="img-fluid w-100"
                  src="/images/image-16.svg"
                  alt=""
                />
              </Col>
            </Row>
          </Wrapper>
          <Wrapper>
            <Row gutter={[15, 15]}>
              <Col xs={24} className="mb-5">
                <TitleSub>THE STATION</TitleSub>
                <Title className="mt-3">Lorem ipsum dolor sit amet</Title>
              </Col>
              <Col xs={24} sm={24} lg={6}>
                <img
                  className="img-fluid w-100"
                  src="/images/image-17.png"
                  alt=""
                />
                <StationCard>
                  <h6 className="my-3">Coworking</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </StationCard>
              </Col>
              <Col xs={24} sm={24} lg={12}>
                <img
                  className="img-fluid w-100"
                  src="/images/image-18.png"
                  alt=""
                />
              </Col>
              <Col xs={24} sm={24} lg={6}>
                <img
                  className="img-fluid w-100"
                  src="/images/image-19.png"
                  alt=""
                />
              </Col>

              <Col xs={12} sm={12} lg={6}>
                <img
                  className="img-fluid w-100"
                  src="/images/image-20.png"
                  alt=""
                />
              </Col>
              <Col xs={12} sm={12} lg={6}>
                <img
                  className="img-fluid w-100"
                  src="/images/image-21.png"
                  alt=""
                />
              </Col>
              <Col xs={12} sm={12} lg={6}>
                <img
                  className="img-fluid w-100"
                  src="/images/image-22.png"
                  alt=""
                />
              </Col>
              <Col xs={12} sm={12} lg={6}>
                <XPhotoButton icon={<RightOutlined />} iconPosition="right">
                  <span>View All Photos</span>
                </XPhotoButton>
              </Col>
            </Row>
          </Wrapper>
        </TreeCard>
      </div>
      <Wrapper className="pb-5">
        <Row>
          <Col
            xs={24}
            sm={24}
            lg={{ span: 20, offset: 2 }}
            className="text-center"
          >
            <LargePara>
              <span>Lorem ipsum dolor sit amet,</span> consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </LargePara>
          </Col>
          <Col xs={24} className="mt-5">
            <img
              className="img-fluid w-100"
              src="/images/image-23.png"
              alt=""
            />
          </Col>
        </Row>
      </Wrapper>

      <Joinus
        contactUs={contactUs}
        handleModalOpen={handleModalOpen}
        handleCancel={handleCancel}
      />
      <Footer3 />
    </>
  );
}
