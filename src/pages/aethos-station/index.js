import React, { useState } from "react";
import Header3 from "../../component/header/header3";
import Footer3 from "../../component/footer/footer3";
import { Row, Col, Form, Space, Upload } from "antd";
import Joinus from "../../component/joinus/index";
import Gallery from "../../component/gallery/index";
import Connect from "../../component/connect/index";
import { StationWrap, StationBg, XCard } from "./indexStyle";
import ScrollAnimation from "react-animate-on-scroll";
import Link from "next/link";
import { UploadOutlined } from "@ant-design/icons";
import {
  Wrapper,
  XInputPage,
  TitleForm,
  XRadio,
  XFormButton,
} from "../../styles/GlobalStyle3";

const { Dragger } = Upload;
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
      <StationWrap>
        <StationBg className="pb-5">
          <Header3 onJoinUsClick={() => handleModalOpen("join")} />
          <Wrapper>
            <Row gutter={[15, 15]}>
              <Col xs={24} sm={24} lg={24} className="mt-4 text-center">
                <img className="img-fluid" src="/images/image-34.png" alt="" />
              </Col>
              <Col xs={24} sm={24} lg={24} className="mt-4 text-center">
                <h1>JOIN ÆTHOS STATION</h1>
              </Col>
              <Col
                xs={24}
                sm={24}
                lg={{ span: 16, offset: 4 }}
                className="text-center my-3"
              >
                <p>
                  At Æthos Station, we welcome innovators passionate about
                  solving problems by leveraging AI and deep domain expertise
                  who represent as many fields and backgrounds as possible.
                </p>
              </Col>
            </Row>
          </Wrapper>
        </StationBg>
        <Wrapper className="pb-5">
          <XCard>
            <Row>
              <Col xs={24}>WIP</Col>
            </Row>
          </XCard>
        </Wrapper>
      </StationWrap>
      <Footer3 />
    </>
  );
}
