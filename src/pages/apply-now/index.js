import React, { useState } from "react";
import Header3 from "../../component/header/header3";
import Footer3 from "../../component/footer/footer3";
import { Row, Col, Form, Space, Upload, message, notification } from "antd";
import Joinus from "../../component/joinus/index";
import Gallery from "../../component/gallery/index";
import Connect from "../../component/connect/index";
import { MahiWrap, MahiStory, XCard, XCollapse } from "./indexStyle";
import ScrollAnimation from "react-animate-on-scroll";
import Link from "next/link";
import { UploadOutlined } from "@ant-design/icons";
import {
  Wrapper,
  XInputPage,
  TitleForm,
  XRadio,
  XFormButton,
  XCheckbox,
} from "../../styles/GlobalStyle3";

const { Dragger } = Upload;

const collapseData = [
  {
    key: "1",
    label: "1. Reason for the grant and objectives",
    children: (
      <>
        <p>
          Æthos is helping Cambridge Innovation Center to reach talented
          researchers and innovators working on AI solutions to public health
          issues facing Massachusetts. Cambridge Innovation Center (CIC)’s
          mission is to “fix the world through innovation”. We believe that we
          can make a difference by helping innovators bring their ideas to
          fruition, and that 1,000s of innovations by CIC based innovators will
          collectively lead to a very different world.
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
  const [form] = Form.useForm();
  const [contactUs, setContactUs] = useState([false, ""]);
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSignedUrl = async (fileData, ext) => {
    const response = await fetch(
      `/api/v1/form/get-signed-url?action=putObject&folder_name=uploads&file_name=${fileData.originFileObj.name}&ext=${ext}&id=${fileData.originFileObj.uid}`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data.response;
  };

  const uploadFileToS3 = async (file, signedUrl) => {
    const response = await fetch(signedUrl, {
      method: "PUT",
      headers: {
        "Content-Type": file.type,
      },
      body: file.originFileObj,
    });
    if (!response.ok) {
      throw new Error("Failed to upload file to S3");
    }
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      let fileLinks = [];
      if (fileList.length > 0) {
        await Promise.all(
          fileList.map(async (fileData) => {
            let get_ext = fileData.originFileObj.name.split(".");
            let ext = get_ext[get_ext.length - 1];
            const signedUrl = await getSignedUrl(fileData, ext);
            await uploadFileToS3(fileData, signedUrl);
            fileLinks.push(signedUrl.split("?")[0]);
          })
        );
      }

      // Remove the upload field from the form values
      const { upload, ...restValues } = values;

      const response = await fetch("/api/v1/form/mahi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...restValues,
          fileLink: fileLinks.length > 0 ? fileLinks[0] : "",
        }),
        // body: JSON.stringify({ ...values,  fileLink: fileLinks.length > 0 ? fileLinks[0] : '', }),
      });

      if (!response.ok) {
        setLoading(false);
        throw new Error("Failed to submit form");
      }

      notification.success({
        message: "Form submitted successfully!",
      });
      setLoading(false);
      form.resetFields();
      setFileList([]);
    } catch (error) {
      setLoading(false);
      form.resetFields();
      setFileList([]);
      console.error("Form submission error:", error);
      notification.error({
        message: "Form submission failed. Please try again.",
      });
    }
  };

  // const handleSubmit = async (values) => {
  //   try {
  //     const response = await fetch("/api/v1/form/mahi", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ ...values }),
  //     });
  //     console.log('Form submitted:', response.data);
  //     notification.success({
  //       message: "Form submitted successfully!",
  //     });
  //     form.resetFields();
  //   } catch (error) {
  //     console.error('Form submission error:', error);
  //     notification.error({
  //       message: "There was an error submitting the form. Please try again.",
  //     });
  //     form.resetFields();
  //   }
  // };

  const handleModalOpen = (content) => {
    setContactUs([true, content]);
  };

  const handleCancel = () => {
    setContactUs([false, ""]);
  };

  const handleUploadChange = ({ fileList: newFileList }) => {
    if (newFileList.length > 1) {
      newFileList = newFileList.slice(-1); // Keep only the last file
    }
    setFileList(newFileList);
  };

  const beforeUpload = (file) => {
    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
      notification.error({
        message: "File must be smaller than 10MB!",
      });
    }
    return isLt10M;
  };

  return (
    <>
      <MahiWrap>
        <MahiStory className="pb-5">
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
                className="text-center my-0 my-lg-3"
              >
                <h2>(MAHI) Grant</h2>
              </Col>
            </Row>
          </Wrapper>
        </MahiStory>
        <Wrapper className="pb-5">
          <XCard>
            <Row>
              <Col xs={24} className="text-center">
                <h1>Apply Now</h1>
              </Col>
            </Row>
            <Form form={form} onFinish={handleSubmit}>
              <Row className="mt-5">
                <Col xs={24}>
                  <XCollapse
                    collapsible="header"
                    defaultActiveKey={["0"]}
                    items={collapseData}
                    expandIconPosition="right"
                    accordion={true}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
                  <XCheckbox value="I have read and affirm that my application conforms to the terms and requirements of the grant.">
                    I have read and affirm that my application conforms to the
                    terms and requirements of the grant.
                  </XCheckbox>
                </Col>
              </Row>
              <Row gutter={[15, 0]} className="mt-5">
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="name"
                    rules={[
                      { required: true, message: "Please enter your name" },
                    ]}
                  >
                    <XInputPage placeholder="Full name" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "Please enter a valid email",
                      },
                    ]}
                  >
                    <XInputPage placeholder="Email" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name="problem_statement"
                    rules={[
                      {
                        required: true,
                        message: "Please describe the problem statement",
                      },
                    ]}
                  >
                    <XInputPage.TextArea
                      style={{
                        background: "none",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                      placeholder="What problem do you want to address in public health using AI?"
                      size="large"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name="solution_description"
                    rules={[
                      {
                        required: true,
                        message: "Please describe your solution",
                      },
                    ]}
                  >
                    <XInputPage.TextArea
                      style={{
                        background: "none",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                      placeholder="Please describe your solution. How would you describe the expected outcome of this solution?"
                      size="large"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name="technical_elements"
                    rules={[
                      {
                        required: true,
                        message: "Please describe the technical elements",
                      },
                    ]}
                  >
                    <XInputPage.TextArea
                      style={{
                        background: "none",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                      placeholder="In as much depth as you can, please outline the technical elements required to build your solution so that the CIC Technology team can evaluate its feasibility."
                      size="large"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[15, 15]} className="mt-0">
                <Col xs={24}>
                  <TitleForm>
                    What option best describes the stage of your idea
                  </TitleForm>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name="stage"
                    rules={[
                      {
                        required: true,
                        message: "Please select the stage of your idea",
                      },
                    ]}
                  >
                    <XRadio.Group>
                      <Space direction="vertical">
                        <XRadio value="Building a company with a team and an MVP">
                          Building a company with a team and an MVP
                        </XRadio>
                        <XRadio value="Working towards building a team and an MVP">
                          Working towards building a team and an MVP
                        </XRadio>
                        <XRadio value="Working towards the solution from within an existing organisation">
                          Working towards the solution from within an existing
                          organisation
                        </XRadio>
                        <XRadio value="Conducting research pointing towards the solution">
                          Conducting research pointing towards the solution
                        </XRadio>
                        <XRadio value="Developing the idea on the side">
                          Developing the idea on the side
                        </XRadio>
                        <XRadio value="It's just an idea!">
                          {"It's just an idea!"}
                        </XRadio>
                      </Space>
                    </XRadio.Group>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[15, 15]} className="mt-4">
                <Col xs={24}>
                  <TitleForm>
                    Given the resources available via this grant, are you
                    prepared to take primary responsibility for driving this
                    solution forward and gathering any other necessary
                    resources? *
                  </TitleForm>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name="responsibility_consent"
                    rules={[
                      {
                        required: true,
                        message: "Please select your preparedness",
                      },
                    ]}
                  >
                    <XRadio.Group>
                      <Space direction="vertical">
                        <XRadio value="Yes">Yes</XRadio>
                        <XRadio value="No">No</XRadio>
                      </Space>
                    </XRadio.Group>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[15, 15]} className="mt-4">
                <Col xs={24}>
                  <TitleForm>
                    Who are the primary stakeholders you will need to work with
                    to build the solution
                  </TitleForm>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name="stakeholders"
                    rules={[
                      {
                        required: true,
                        message: "Please select primary stakeholders",
                      },
                    ]}
                  >
                    <XRadio.Group>
                      <Space direction="vertical">
                        <XRadio value="Policy makers">Policy makers</XRadio>
                        <XRadio value="Practicioners">Practicioners</XRadio>
                        <XRadio value="The public">The public</XRadio>
                        <XRadio value="Institutions">Institutions</XRadio>
                        <XRadio value="Other">Other</XRadio>
                      </Space>
                    </XRadio.Group>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[15, 15]} className="mt-4">
                <Col xs={24}>
                  <TitleForm>
                    Submit a pitch deck, white paper, website, research study,
                    or other media form that explains your solution.
                  </TitleForm>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name="upload"
                    rules={[
                      {
                        required: true,
                        validator: (_, value) => {
                          if (fileList.length === 0) {
                            return Promise.reject(
                              new Error("Please upload at least one document!")
                            );
                          }
                          return Promise.resolve();
                        },
                      },
                    ]}
                  >
                    <Dragger
                      className="antdDragger"
                      beforeUpload={beforeUpload}
                      onChange={handleUploadChange}
                      maxCount={1}
                      onRemove={() => setFileList([])}
                    >
                      <p className="ant-upload-drag-icon">
                        <img
                          className="img-fluid m-auto"
                          src="/images/upload-icon.svg"
                          alt=""
                        />
                      </p>
                      <p className="ant-upload-para">Upload File</p>
                    </Dragger>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[15, 15]}>
                <Col xs={24}>
                  {/* <TitleForm>
                    Are you prepared to take questions about your solution on
                    June 27th at Venture Café in Cambridge from 6:00 to 7:00 pm?
                  </TitleForm> */}
                </Col>
                <Col xs={24}>
                  {/* <Form.Item
                    name="question_consent"
                    rules={[
                      {
                        required: true,
                        message:
                          "Please select your preparedness to take questions",
                      },
                    ]}
                  >
                    <XRadio.Group>
                      <Space direction="vertical">
                        <XRadio value="Yes">Yes</XRadio>
                        <XRadio value="No">No</XRadio>
                      </Space>
                    </XRadio.Group>
                  </Form.Item> */}
                  <Col xs={24}>
                    <Form.Item
                      // name="problem_statement"
                      rules={[
                        {
                          required: true,
                          // message: "Please describe the problem statement",
                        },
                      ]}
                    >
                      <XInputPage.TextArea
                        style={{
                          background: "none",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                        placeholder="As stated in the grant description, for the grant to be issued, it must have the support of a Massachusetts Public Health authority. While this support does not need to be documented at the time of the application, please briefly outline your plan for securing such support."
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                </Col>
              </Row>
              <Row gutter={[15, 15]} className="mt-4">
                <Col xs={24} className="text-center">
                  <XFormButton
                    loading={loading}
                    type="submit"
                    htmlType="submit"
                  >
                    Submit
                  </XFormButton>
                </Col>
              </Row>
            </Form>
          </XCard>
        </Wrapper>
      </MahiWrap>
      <Footer3 />
    </>
  );
}
