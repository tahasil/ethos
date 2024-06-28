import React, { useState } from "react";
import Header3 from "../../component/header/header3";
import Footer3 from "../../component/footer/footer3";
import { Row, Col, Form, Input, Button, Modal, notification } from "antd";
import { Wrapper, XButton } from "../../styles/GlobalStyle3";
import Joinus from "../../component/joinus/index";
import Gallery from "../../component/gallery/index";
import Connect from "../../component/connect/index";
import { MahiWrap, MahiStory, XCollapse, XCard } from "./indexStyle";
import ScrollAnimation from "react-animate-on-scroll";
//import { LazyLoadImage } from "react-lazy-load-image-component";

const collapseData = [
  {
    key: "1",
    label: "1. Reason for the grant and objectives",
    children: (
      <>
        <p>
          Cambridge Innovation Center (CIC)’s mission is to “fix the world
          through innovation”. We believe that we can make a difference by
          helping innovators bring their ideas to fruition, and that 1,000s of
          innovations by CIC based innovators will collectively lead to a very
          different world.
        </p>
        <p>
          One of our roles is to connect people who have technical abilities
          with people who have identified important real world needs, and to
          support them to work together to address those needs.
        </p>
        <p>
          Today we are seeking to make an impact on public health in another
          way, leveraging the AI revolution to make a meaningful impact on
          improving public health.  We have established this grant to help fund
          this work.
        </p>
        <p>
          The objective of the grant is to improve public health in
          Massachusetts.  The grant will be in the form of technical resources
          (coders, UI designers etc) able to analyze and build and implement a
          software solution (e.g. an app) to address an important identified
          need.
        </p>
        <p>
          The value of the grant from CIC is $500,000, which will be allocated
          to the selected project or possibly utilized for more than one project
          (based on the demonstrated need for the projects).  In some
          circumstances, other organizations may wish also to contribute to the
          project, extending the resources available to address the need.
        </p>
        <p>
          Please note that a public health authority in Massachusetts must
          support the proposed project in order for it to be eligible to receive
          the funding.  This support can be solicited and confirmed following
          initial project selection by the committee.
        </p>
        <p>
          We will work closely with the awarded grantees to agree on roles and
          responsibilities for each side necessary to achieve a successful
          outcome of the project. CIC does not expect to be paid by the grantee
          in any way for this work, and will cover the cost of initial hosting
          and testing, but the awardee should have a proposal for how it can be
          responsible for any long-term third party hosting, maintenance,
          enhancement and similar costs that go beyond the funds in the grant. 
          Depending on the scope of the app, this cost could be minimal or
          significant.
        </p>
      </>
    ),
  },
  {
    key: "2",
    label: "2. Examples of innovation in Public Health using AI",
    children: (
      <>
        <p>
          A community ideation session held by CIC and Æthos at Venture Cafe on
          May 30th, 2024 produced a number of ideas regarding what could
          constitute innovation leveraging AI to solve Public Health issues.
        </p>
        <p>Examples of problems suggested include:</p>
        <ul>
          <li>
            Financial inequities and inefficiencies: i.e. overcharging, medical
            debt, failure to reimburse, lack of transparency on
            provider-negotiated rates.
          </li>
          <li>Inadequate electronic medical record (EMR) systems</li>
          <li>Time to accurate mental health diagnoses</li>
          <li>Physician burnout</li>
          <li>
            Provider shortages and lack of appropriate patient-provider matching
            systems
          </li>
          <li>
            Inequities in access to public health education: i.e. identifying
            nutritional value of packed food, improving reproductive health
            literacy etc.
          </li>
        </ul>
        <p>
          A grant committee established by CIC will evaluate each proposed idea
          in terms of its impact on Massachusetts public health, and will select
          those projects that it deems in its sole discretion have the highest
          potential for impact.
        </p>
      </>
    ),
  },
  {
    key: "3",
    label: "3. Resources available",
    children: (
      <>
        <p>
          CIC intends to dedicate the full capabilities of its well regarded
          internal, Poland-based technology team (CIC Technology) to deliver the
          agreed upon solution CIC Technology’s core skill-sets include:
        </p>
        <ul>
          <li>
            Business a UX analysis for the new product.
            <p>
              This portion of the project includes market / UX research,
              interviews with stakeholders, creating personas and use cases.
              Later it may result in detailed product functionality descriptions
              and detailed product mockups, which can be tested with the users.
              At the end of this process, the chosen scope will be translated
              into a series of planned small development steps (tasks) for
              execution.
            </p>
          </li>
          <li>
            App/Software development
            <p>
              This refers to the process of the development of the
              application/software product to address the chosen scope.
              Beginning with setting up the process, planning architecture and
              then going into writing code, building the hosting environment,
              and testing the completed product. The work will be delivered in
              small increments, employing Scrum and agile methodologies.
            </p>
          </li>
          <li>
            Software hosting & maintenance
            <p>
              Choosing the right provider of the hosting for the solution being
              built, building CI/CD, building the scalable hosting environment
              for the product.
            </p>
          </li>
          <li>
            Membership in Æthos
            <p>
              Æthos is CIC’s partner in administering the applications for this
              grant and a community for AI located within CIC at 1 Broadway in
              Kendall Square. Grant recipients (if desired) will receive
              membership and access to the Æthos Station shared AI coworking
              community while they are receiving assistance from CIC Technology.
            </p>
          </li>
        </ul>
      </>
    ),
  },
  ,
  {
    key: "4",
    label: "4. Timeline and process",
    children: (
      <>
        <p>Intended schedule:</p>
        <p>
          Formal announcement of the grant: <span>June 27</span>
          <br />
          Applications will close: <span>July 26th</span>
          <br />
          Applications will close: <span>July 26th</span>
          <br />
          Announcement of the initially selected projects:{" "}
          <span>August 12th</span>
        </p>
        <p>
          Confirmation of support by a Massachusetts public health authority:
          following initial selection
        </p>
        <p>
          Note that CIC may modify this schedule based on the quality and nature
          of the submitted projects.
        </p>
      </>
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
  return (
    <>
      <MahiWrap className="pb-5">
        <MahiStory>
          <Header3 onJoinUsClick={() => handleModalOpen("join")} />
          <Wrapper>
            <Row>
              <Col xs={24} sm={24} lg={24} className="text-center">
                <h1>Massachusetts AI Health Innovation</h1>
              </Col>
              <Col
                xs={24}
                sm={24}
                lg={{ span: 14, offset: 5 }}
                className="text-center my-0 my-lg-4"
              >
                <h2>(MAHI) Grant</h2>
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
                    src="/images/image-33.png"
                    alt=""
                  />
                </ScrollAnimation>
              </Col>
            </Row>
          </Wrapper>
        </MahiStory>
        <Wrapper>
          <Row className="mt-5">
            <Col xs={24}>
              <XCollapse
                collapsible="header"
                defaultActiveKey={["1"]}
                items={collapseData}
                expandIconPosition="right"
                accordion={true}
              />
            </Col>
          </Row>
        </Wrapper>

        <Wrapper className="my-4">
          <XCard className="p-2 p-sm-4">
            <Row gutter={[15, 15]} align="middle">
              <Col xs={24} sm={18} lg={20}>
                <h1>Massachusetts AI Health Innovation</h1>
              </Col>
              <Col xs={24} sm={6} lg={4} className="text-center text-sm-end">
                <XButton>APPLY NOW</XButton>
              </Col>
            </Row>
          </XCard>
        </Wrapper>
      </MahiWrap>
      {/* <Joinus
        contactUs={contactUs}
        handleModalOpen={handleModalOpen}
        handleCancel={handleCancel}
      /> */}
      <Footer3 />
    </>
  );
}
