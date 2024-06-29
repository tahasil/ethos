import React, { useState } from "react";
import Header3 from "../../component/header/header3";
import Footer3 from "../../component/footer/footer3";
import { Row, Col, Form, Space } from "antd";
import Joinus from "../../component/joinus/index";
import Gallery from "../../component/gallery/index";
import Connect from "../../component/connect/index";
import {
  StationWrap,
  StationBg,
  XCard,
  XSteps,
  StepDataWrapper,
  XFormData,
} from "./indexStyle";
import ScrollAnimation from "react-animate-on-scroll";
import Link from "next/link";
import { UploadOutlined } from "@ant-design/icons";
import {
  Wrapper,
  XInputPage,
  TitleForm,
  XRadio,
  XFormButton,
  XButton,
} from "../../styles/GlobalStyle3";

const steps = [
  {
    title: "Eligibility & Instructions",
    content: (
      <XFormData>
        <Row gutter={[15, 15]}>
          <Col xs={24}>
            <TitleForm>Eligibility</TitleForm>
          </Col>
          <Col xs={24}>
            <ul className="listFirst">
              <li>
                Teams must contain at least one member and no more than five
                members.
              </li>
              <li>
                At least one of the members should be a founder, co-founder or
                executive level employee able to make decisions on product and
                mission.
              </li>
              <li>
                Teams can apply at any stage of their development so long as
                they are committed to growing their venture.
              </li>
              <li>
                Are serious in their pursuit of a sustainable business
                leveraging AI
              </li>
              <li>
                Commit 2 hours a month of service to Æthos Community. The goal
                is to engage in community activities, and support and learn from
                fellow members. This could include office hours, leading
                workshops, making art for the space, or creating media content
                for others.
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row gutter={[15, 15]}>
          <Col xs={24}>
            <TitleForm>Application Instructions</TitleForm>
          </Col>
          <Col xs={24}>
            <ul className="listFirst">
              <li>
                Applicants shall fill out an online application questionnaire
                outlining details about:
                <ul>
                  <li>
                    The problem you are trying to solve and your motivation
                  </li>
                  <li>Information about the team</li>
                  <li>Contribution to Æthos Community</li>
                  <li>Short-term and long-term goals</li>
                </ul>
              </li>
              <li>Submission of pitch deck or any other materials available</li>
              <li>
                Applications will be first assessed by the Æthos team and a
                group of members appointed as our ‘founders council’. A
                shortlist will be invited to the next stage of in person
                interviews.
              </li>
            </ul>
          </Col>
        </Row>
      </XFormData>
    ),
  },
  {
    title: "Personal Details",
    content: (
      <XFormData>
        <Row gutter={[15, 15]}>
          <Col xs={24}>
            <TitleForm>Personal Details</TitleForm>
          </Col>
        </Row>
        <Row gutter={[15, 0]} className="mt-4">
          <Col xs={24} sm={12}>
            <Form.Item>
              <XInputPage placeholder="Full name" size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item>
              <XInputPage placeholder="Last name" size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item>
              <XInputPage placeholder="Email" size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item>
              <XInputPage placeholder="Project name" size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item>
              <XInputPage placeholder="Phone no." size="large" />
            </Form.Item>
          </Col>
        </Row>
      </XFormData>
    ),
  },
  {
    title: "About the startup",
    content: (
      <XFormData>
        <Row gutter={[15, 15]}>
          <Col xs={24}>
            <TitleForm>
              Personal Details <br />
              <br />
              <span>
                Tell us more about the problem you are trying to solve and your
                motivation...
              </span>
            </TitleForm>
          </Col>
        </Row>
        <Row gutter={[15, 0]} className="mt-4">
          <Col xs={24}>
            <Form.Item>
              <XInputPage.TextArea
                style={{
                  background: "none",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                placeholder="Describe the idea and the problem you are trying to solve *"
                size="large"
              />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item>
              <XInputPage.TextArea
                style={{
                  background: "none",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                placeholder="Why do you want to solve this problem? *"
                size="large"
              />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item>
              <XInputPage.TextArea
                style={{
                  background: "none",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                placeholder="What is the solution? *"
                size="large"
              />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item>
              <XInputPage.TextArea
                style={{
                  background: "none",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                placeholder="Why do you think it can become a sustainable business? *"
                size="large"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[15, 15]}>
          <Col xs={24}>
            <TitleForm>Stage of Development *</TitleForm>
          </Col>
          <Col xs={24}>
            <XRadio.Group className="w-100">
              <Row>
                <Col xs={12} sm={6} lg={4}>
                  <XRadio value="Ideation">Ideation</XRadio>
                </Col>
                <Col xs={12} sm={6} lg={4}>
                  <XRadio value="MVP">MVP</XRadio>
                </Col>
                <Col xs={12} sm={6} lg={4}>
                  <XRadio value="Seed Stage">Seed Stage</XRadio>
                </Col>
                <Col xs={12} sm={6} lg={4}>
                  <XRadio value="Early Stage">Early Stage</XRadio>
                </Col>
                <Col xs={12} sm={6} lg={4}>
                  <XRadio value="Growth Stage">Growth Stage</XRadio>
                </Col>
                <Col xs={12} sm={6} lg={4}>
                  <XRadio value="Expansion Stage">Expansion Stage</XRadio>
                </Col>
                <Col xs={12} sm={6} lg={4}>
                  <XRadio value="Exit Stage">Exit Stage</XRadio>
                </Col>
                <Col xs={12} sm={6} lg={4}>
                  <XRadio value="Research Stage">Research Stage</XRadio>
                </Col>
                <Col xs={12} sm={6} lg={4}>
                  <XRadio value="Other">Other</XRadio>
                </Col>
              </Row>
            </XRadio.Group>
          </Col>
          <Col xs={24}>
            <Form.Item>
              <XInputPage.TextArea
                style={{
                  background: "none",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                placeholder="Brief summary about other founders or members of the project that will be at the Æthos Station *"
                size="large"
              />
            </Form.Item>
          </Col>
        </Row>
      </XFormData>
    ),
  },
  {
    title: "Æthos Station and Community",
    content: (
      <XFormData>
        <Row gutter={[15, 15]}>
          <Col xs={24}>
            <TitleForm>
              Æthos Station and Community <br />
              <br />
              <span>
                We want to learn about your goals, your values and how can you
                contribute to the Æthos Community. We differentiate between
                the Æthos Station and Community: The Station is the physical
                space where startups gather and come to work on their project,
                and the Community is the wider network of stakeholders that
                create the Æthos ecosystem.
              </span>
            </TitleForm>
          </Col>
        </Row>
        <Row gutter={[15, 0]} className="mt-4">
          <Col xs={24}>
            <Form.Item>
              <XInputPage.TextArea
                style={{
                  background: "none",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                placeholder="What are the main challenges you are currently facing, and how do you see the Æthos Station could contribute to your project? *"
                size="large"
              />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item>
              <XInputPage.TextArea
                style={{
                  background: "none",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                placeholder="How do you hope to contribute to the Æthos Community, and what value do you expect to receive from it? *"
                size="large"
              />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item>
              <XInputPage.TextArea
                style={{
                  background: "none",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                placeholder="What are your short-term and long-term goals for your startup? *"
                size="large"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[15, 15]}>
          <Col xs={24}>
            <TitleForm>How did you find out about Æthos? *</TitleForm>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24}>
            <XRadio.Group className="w-100">
              <Row>
                <Col xs={24} sm={6} lg={4}>
                  <XRadio value="Events">Events</XRadio>
                </Col>
                <Col xs={24} sm={6} lg={4}>
                  <XRadio value="Linkedin">Linkedin</XRadio>
                </Col>
                <Col xs={24} sm={12} lg={8}>
                  <XRadio value="Referred by a Founding Member">
                    Referred by a Founding Member
                  </XRadio>
                </Col>
                <Col xs={24} sm={12} lg={8}>
                  <XRadio value="Referred by a Member of the community">
                    Referred by a Member of the community
                  </XRadio>
                </Col>
                <Col xs={24} sm={12} lg={4}>
                  <XRadio value="Other">Other</XRadio>
                </Col>
              </Row>
            </XRadio.Group>
          </Col>
        </Row>
        <Row gutter={[15, 0]} className="mt-4">
          <Col xs={24} sm={12} lg={24}>
            <Form.Item>
              <XInputPage.TextArea
                style={{
                  background: "none",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                placeholder="Brief summary about other founders or members of the project that will be at the Æthos Station *"
                size="large"
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={24}>
            <Form.Item>
              <XInputPage
                placeholder="If you were referred by someone, who referred you?"
                size="large"
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={24}>
            <Form.Item>
              <XInputPage.TextArea
                style={{
                  background: "none",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                placeholder="What are the main challenges you are currently facing, and how do you see the Æthos Station could contribute to your project? *"
                size="large"
              />
            </Form.Item>
          </Col>
        </Row>
      </XFormData>
    ),
  },
];
export default function Header({ onJoinUsClick }) {
  const [contactUs, setContactUs] = useState([false, ""]);
  const handleModalOpen = (content) => {
    setContactUs([true, content]);
  };
  const handleCancel = () => {
    setContactUs([false, ""]);
  };
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

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
              <Col xs={24}>
                <XSteps current={current} items={items} />
                <StepDataWrapper>{steps[current].content}</StepDataWrapper>
                <Row className="mt-4 text-end">
                  <Col xs={24}>
                    {current > 0 && (
                      <XButton className="backBtn mr-3" onClick={() => prev()}>
                        Back
                      </XButton>
                    )}
                    {current === steps.length - 1 && (
                      <XButton
                        type="primary"
                        //   onClick={() => message.success("Processing complete!")}
                      >
                        Submit
                      </XButton>
                    )}
                    {current < steps.length - 1 && (
                      <XButton type="primary" onClick={() => next()}>
                        Next
                      </XButton>
                    )}
                  </Col>
                </Row>
              </Col>
            </Row>
          </XCard>
        </Wrapper>
      </StationWrap>
      <Footer3 />
    </>
  );
}
