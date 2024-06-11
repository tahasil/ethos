import React, { useState, useEffect } from "react";
import { Row, Col, Form, notification } from "antd";
import { Wrapper, XButton } from "../../styles/GlobalStyle3";
import { LargePara } from "../../pages/community/indexStyle";

export default function Home() {
  return (
    <>
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
          <Col xs={24} className="mt-5 text-center">
            <XButton>Let’s Connect</XButton>
          </Col>
        </Row>
      </Wrapper>
    </>
  );
}
