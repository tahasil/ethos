import React, { useState, useEffect } from "react";
import { Wrapper } from "../../styles/GlobalStyle3";
import { Row, Col } from "antd";
import {
  Title,
  TitleSub,
  StationCard,
  XPhotoButton,
} from "../../pages/community/indexStyle";
import { RightOutlined } from "@ant-design/icons";
import ScrollAnimation from "react-animate-on-scroll";

export default function Home() {
  return (
    <Wrapper>
      <Row gutter={[15, 15]}>
        <Col xs={24} className="mb-5">
          {/* <ScrollAnimation duration={1} animateIn="slideInLeft"> */}
          <TitleSub>THE STATION</TitleSub>
          {/* </ScrollAnimation> */}
          {/* <ScrollAnimation duration={2} animateIn="slideInLeft"> */}
          <Title className="mt-3">Lorem ipsum dolor sit amet</Title>
          {/* </ScrollAnimation> */}
        </Col>
        <Col xs={24} sm={24} lg={6}>
          <ScrollAnimation animateOnce={true} duration={1} animateIn="fadeIn">
            <img
              className="img-fluid w-100"
              src="/images/image-17.png"
              alt=""
            />
            <StationCard>
              <h6 className="my-3">Coworking</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </StationCard>
          </ScrollAnimation>
        </Col>
        <Col xs={24} sm={24} lg={12}>
          <ScrollAnimation animateOnce={true} duration={1} animateIn="fadeIn">
            <img
              className="img-fluid w-100"
              src="/images/image-18.png"
              alt=""
            />
          </ScrollAnimation>
        </Col>
        <Col xs={24} sm={24} lg={6}>
          <ScrollAnimation animateOnce={true} duration={1} animateIn="fadeIn">
            <img
              className="img-fluid w-100"
              src="/images/image-19.png"
              alt=""
            />
          </ScrollAnimation>
        </Col>

        <Col xs={12} sm={12} lg={6}>
          <ScrollAnimation animateOnce={true} duration={1} animateIn="fadeIn">
            <img
              className="img-fluid w-100"
              src="/images/image-20.png"
              alt=""
            />
          </ScrollAnimation>
        </Col>
        <Col xs={12} sm={12} lg={6}>
          <ScrollAnimation animateOnce={true} duration={1} animateIn="fadeIn">
            <img
              className="img-fluid w-100"
              src="/images/image-21.png"
              alt=""
            />
          </ScrollAnimation>
        </Col>
        <Col xs={12} sm={12} lg={6}>
          <ScrollAnimation animateOnce={true} duration={1} animateIn="fadeIn">
            <img
              className="img-fluid w-100"
              src="/images/image-22.png"
              alt=""
            />
          </ScrollAnimation>
        </Col>
        <Col xs={12} sm={12} lg={6}>
          <XPhotoButton icon={<RightOutlined />} iconPosition="right">
            <span>View All Photos</span>
          </XPhotoButton>
        </Col>
      </Row>
    </Wrapper>
  );
}
