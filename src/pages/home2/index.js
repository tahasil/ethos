import React, { useState } from "react";
import Header2 from "../../component/header/header2";
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
} from "../../styles/GlobalStyle2";
export default function Home() {
  return (
    <>
      <div className="heroFocus">
        <Header2 />
        <Hero>
          <Wrapper>
            <Row>
              <Col
                xs={24}
                sm={{ span: 20, offset: 2 }}
                lg={{ span: 16, offset: 4 }}
              >
                <h1>Building a network of entrepreneurs_</h1>
              </Col>
              <Col
                className="mt-4"
                xs={24}
                sm={{ span: 20, offset: 2 }}
                lg={{ span: 10, offset: 7 }}
                xl={{ span: 8, offset: 8 }}
              >
                <p>
                  We are creating a community where entrepreneurs share values
                </p>
              </Col>
              <Col
                className="mt-4"
                xs={24}
                sm={{ span: 16, offset: 4 }}
                // md={{ span: 10, offset: 7 }}
                lg={{ span: 10, offset: 7 }}
                xl={{ span: 8, offset: 8 }}
              >
                <XInputHero size="large" placeholder="Your email" />
                <XHeroButton size="large">Send</XHeroButton>
              </Col>
            </Row>
          </Wrapper>
        </Hero>
      </div>
      <div className="animationFocus">
        <XBecomeMember>
          <Wrapper className="py-5">
            <Row gutter={[15, 15]} className="py-4">
              <Col xs={24} sm={24} lg={12} className="text-center">
                <img
                  className="img-fluid imgOverlay1"
                  src="/images/animation-1.svg"
                  alt=""
                />
              </Col>
            </Row>
            <Row gutter={[15, 15]} className="align-items-center">
              <Col xs={24} sm={24} lg={12}>
                <img
                  className="img-fluid m-auto"
                  src="/images/image-8.png"
                  alt=""
                />
              </Col>
              <Col xs={24} sm={24} lg={12}>
                <XTags>LOREM IPSUM</XTags>
                <XTitle className="my-4">
                  Quis enim lobortis scelerisque fermentum dui
                </XTitle>
                <XPara1>
                  Project Æthos gathers leading innovators to invent the future
                  of responsible artificial intelligence for humanity in a
                  trusting, diverse community.
                </XPara1>
                <XButton className="headerBtn mt-4">BECOME MEMBER</XButton>
              </Col>
            </Row>
          </Wrapper>

          <Wrapper className="pb-5">
            <Row gutter={[15, 15]}>
              <Col xs={24}>
                <img
                  className="img-fluid m-auto imgOverlay2"
                  src="/images/animation-2.svg"
                  alt=""
                />
              </Col>
            </Row>
            <Row gutter={[15, 15]} className="align-items-center">
              <Col
                xs={24}
                sm={{ span: 24, order: 2 }}
                lg={{ span: 12, order: 1 }}
              >
                <XTags>LOREM IPSUM</XTags>
                <XTitle className="my-4">
                  Quis enim lobortis scelerisque fermentum dui
                </XTitle>
                <XPara1>
                  Project Æthos gathers leading innovators to invent the future
                  of responsible artificial intelligence for humanity in a
                  trusting, diverse community.
                </XPara1>
              </Col>
              <Col
                xs={24}
                sm={{ span: 24, order: 1 }}
                lg={{ span: 12, order: 2 }}
                order="2"
              >
                <img
                  className="img-fluid m-auto"
                  src="/images/image-9.png"
                  alt=""
                />
              </Col>
            </Row>
          </Wrapper>
        </XBecomeMember>
      </div>
      <XBGImg className="py-5">
        <Wrapper>
          <Row>
            <Col xs={24} className="text-center">
              <TitleSub>lorem ipsum</TitleSub>
              <XTitle2 className="my-3">Community Principles</XTitle2>
            </Col>
            <Col
              xs={24}
              sm={24}
              lg={{ span: 12, offset: 6 }}
              className="text-center"
            >
              <XPara2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </XPara2>
            </Col>
          </Row>
          <Row gutter={[15, 15]} className="mt-5">
            <Col xs={24} sm={24} lg={8}>
              <XCardTrsap className="text-center">
                <img className="m-auto mb-4" src="/images/icon-1.svg" />
                <h3 className="my-3">Lorem ipsum dolor</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <XButton className="mt-4">Learn More</XButton>
              </XCardTrsap>
            </Col>
            <Col xs={24} sm={24} lg={8}>
              <XCardTrsap className="text-center">
                <img className="m-auto mb-4" src="/images/icon-1.svg" />
                <h3 className="my-3">Lorem ipsum dolor</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <XButton className="mt-4">Learn More</XButton>
              </XCardTrsap>
            </Col>
            <Col xs={24} sm={24} lg={8}>
              <XCardTrsap className="text-center">
                <img className="m-auto mb-4" src="/images/icon-1.svg" />
                <h3 className="my-3">Lorem ipsum dolor</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <XButton className="mt-4">Learn More</XButton>
              </XCardTrsap>
            </Col>
          </Row>
        </Wrapper>
      </XBGImg>
      <div className="missionFocus py-5">
        <Wrapper className="borderBottom py-5">
          <Row gutter={[15, 15]} className="align-items-center">
            <Col xs={24} sm={24} lg={14}>
              <XTags>LOREM IPSUM</XTags>
              <XTitle2 className="my-4">Our Mission</XTitle2>
              <XPara3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </XPara3>
            </Col>
            <Col xs={24} sm={24} lg={10}>
              <img
                className="img-fluid m-auto"
                src="/images/image-11.png"
                alt=""
              />
            </Col>
          </Row>
        </Wrapper>
        <Wrapper className="py-5">
          <Row gutter={[15, 15]} className="align-items-center">
            <Col xs={24} sm={24} lg={8}>
              <img className="img-fluid" src="/images/icon-2.svg" alt="" />
              <XPara3 className="my-3">
                <span>Service Mentality</span>
              </XPara3>
              <XPara4>
                Easily change and tweak your content when you need to, however
                you want. No more third party vendor lock-in.
              </XPara4>
            </Col>
            <Col xs={24} sm={24} lg={8}>
              <img className="img-fluid" src="/images/icon-3.svg" alt="" />
              <XPara3 className="my-3">
                <span>Honesty and Trust</span>
              </XPara3>
              <XPara4>
                Pay once and it’s yours forever. Use it to build as many sites
                as you need; long form, presen-tations, splash sites, and more.
              </XPara4>
            </Col>

            <Col xs={24} sm={24} lg={8}>
              <img className="img-fluid" src="/images/icon-4.svg" alt="" />
              <XPara3 className="my-3">
                <span>Impact</span>
              </XPara3>
              <XPara4>
                Edit content in a comfortable manner. It’s as simple as copy
                and paste.
              </XPara4>
            </Col>
          </Row>
        </Wrapper>
      </div>
      <FreeSample className="py-5">
        <Wrapper>
          <Row>
            <Col
              xs={24}
              sm={24}
              lg={{ span: 12, offset: 6 }}
              className="text-center"
            >
              <TitleSub>lorem ipsum</TitleSub>
              <XTitle3 className="my-3">
                Volutpat est velit egestas dui id ornare
              </XTitle3>
              <XPara1>
                <span>
                  Volutpat est velit egestas dui id ornare. Sit amet aliquam id
                  diam maecenas ultricies mi. Luctus venenatis lectus magna
                  fringilla urna porttitor rhoncus. Sem nulla pharetra diam sit
                  amet nisl suscipit.
                </span>
              </XPara1>
              <XButton className="mt-4">BECOME MEMBER</XButton>
            </Col>
          </Row>
        </Wrapper>
      </FreeSample>
      <Footer2 />
    </>
  );
}
