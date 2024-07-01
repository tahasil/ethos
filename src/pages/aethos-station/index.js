import React, { useState } from "react";
import Header3 from "../../component/header/header3";
import Footer3 from "../../component/footer/footer3";
import { Row, Col, Form, Space, notification, Upload } from "antd";
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
const { Dragger } = Upload;


export default function Header({ onJoinUsClick }) {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({});
  const [contactUs, setContactUs] = useState([false, ""]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);

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
                  Æthos Station members are innovating AI technologies that extend
                  beyond the capabilities of pre-existing, out-of-the-box models,
                  adding new functionalities or improving performance in novel use
                  cases.
                </li>
                <li>
                  Preference is given to applicants that show potential to address
                  unsolved problems of significance to society.
                </li>
                <li>
                  Principal applicants should possess either technical expertise
                  in building with AI or deep domain knowledge in fields relevant
                  to their project.
                </li>
                <li>
                  Teams may not have more than five members using any given
                  Station as their primary workspace.
                </li>
                <li>
                  At least one Station member from each team should be a founder,
                  co-founder or executive level employee able to make decisions on
                  product and mission.
                </li>
                <li>
                  Teams can apply at any stage of development. That said, they
                  must commit time and effort to advancing their mission.
                  Applicants are encouraged to demonstrate this by submitting a
                  simple roadmap and detailing the number of hours they invest
                  each week.
                </li>
                <li>
                  Commit 2 hours a month of service to other members of the Æthos
                  Community. This could take the form of leading technical
                  workshops, creative activities, sharing expertise, making art
                  for the space, researching key AI developments, or creating
                  media content for others.
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
                  Applicants are requested to review the Æthos{" "}
                  <Link href="/visions">Vision Statement.</Link>
                  <ul>
                    <li>
                      The problem you are trying to solve and your motivation
                    </li>
                    <li>Information about the team.</li>
                    <li>Contribution to Æthos Community</li>
                    <li>Short-term and long-term goals</li>
                  </ul>
                </li>
                <li>Submission of pitch deck or any other materials available</li>
                <li>
                  The ethical and impact dimensions of applications will be first
                  assessed by the Æthos team and a group of members to be
                  appointed as our ‘founders council’. A shortlist will be invited
                  to the next stage of in person interviews.
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
              <Form.Item
                name="fname"
                rules={[
                  { required: true, message: "Please enter your first name" },
                ]}
              >
                <XInputPage placeholder="Full name" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="lname"
                rules={[
                  { required: true, message: "Please enter your last name" },
                ]}
              >
                <XInputPage placeholder="Last name" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <XInputPage placeholder="Email" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="project_name"
                rules={[
                  { required: true, message: "Please enter your project name" },
                ]}
              >
                <XInputPage placeholder="Project name" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="phone"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                ]}
              >
                <XInputPage placeholder="Phone no." size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="linkedin"
                rules={
                  [
                    { required: true, message: "Please enter your linkedin" },
                  ]
                }
              >
                <XInputPage placeholder="LinkedIn" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item
                name="team"
                rules={
                  [
                    { required: true, message: "Please enter your team" },
                  ]
                }
              >
                <XInputPage
                  placeholder="How many people on your team, yourself included, would like to make the Station their primary workspace?"
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item
                name="when_aethos"
                rules={
                  [
                    { required: true, message: "Please enter when would you like to move" },
                  ]
                }
              >
                <XInputPage
                  placeholder="When would you (ideally) want to move into the Station?"
                  size="large"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[15, 15]}>
            <Col xs={24}>
              <TitleForm>Are you currently member(s) of CIC? *</TitleForm>
            </Col>
            <Col xs={24}>
              <Form.Item
                name="cic_member"
                rules={
                  [
                    { required: true, message: "Please select option" },
                  ]
                }
              >
                <XRadio.Group className="w-100">
                  <XRadio className="me-4" value="Yes">
                    Yes
                  </XRadio>
                  <XRadio value="No">No</XRadio>
                </XRadio.Group>
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
                About the startup <br />
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
              <Form.Item
                name="problem_statement"
                rules={[
                  {
                    required: true,
                    message:
                      "Please describe the problem you are trying to solve",
                  },
                ]}
              >
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
              <Form.Item
                name="solution_description"
                rules={[
                  { required: true, message: "Please describe why do you want to solve this problem?" },
                ]}
              >
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
              <Form.Item
                name="sustainable_business"
                rules={[
                  {
                    required: true,
                    message:
                      "Please describe how it can become a sustainable business",
                  },
                ]}
              >
                <XInputPage.TextArea
                  style={{
                    background: "none",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                  placeholder="What is the solution and why do you think it can become a sustainable business? *"
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item
                name="gaps"
                rules={[
                  {
                    required: true,
                    message:
                      "Please describe what knowledge and/or capacity gaps are you currently facing?",
                  },
                ]}
              >
                <XInputPage.TextArea
                  style={{
                    background: "none",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                  placeholder="What knowledge and/or capacity gaps are you currently facing?"
                  size="large"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[15, 15]}>
            <Col xs={24}>
              <TitleForm>What resources are you looking for? *</TitleForm>
            </Col>
            <Col xs={24}>
              <Form.Item
                name="resources"
                rules={[
                  {
                    required: true,
                    message: "Please select resource",
                  },
                ]}
              >
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
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[15, 0]} className="mt-4">
            <Col xs={24}>
              <Form.Item
                name="yourself"
                rules={[
                  {
                    required: true,
                    message: "Please tell us a little bit more about yourself and any others on your team",
                  },
                ]}
              >
                <XInputPage.TextArea
                  style={{
                    background: "none",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                  placeholder="Please tell us a little bit more about yourself and any others on your team who wish to be joining you at the Æthos Station."
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item
                name="hours_spend"
                rules={[
                  {
                    required: true,
                    message: "Please enter how many hours per week are you and your team currently able to spend on your venture?",
                  },
                ]}
              >
                <XInputPage
                  placeholder="How many hours per week are you and your team  currently able to spend on your venture?"
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <TitleForm>
                {`We estimate monthly operating costs at roughly $1,000/mo per
                person. Our goal as a non profit, however, is to cover initial
                expenses of the space as we raise sponsorship. As an anchor,
                floating desks in regular CIC co-working (not part of any
                community) start at $550/mo and fixed desks approach
                $750-900/month. We aspire to sponsor each team's costs according
                to their needs. What would you be comfortable contributing towards
                your membership in the Station in USD/person/month?`}
              </TitleForm>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} className="mt-4">
              <Form.Item
                name="usd"
                rules={[
                  {
                    required: true,
                    message: "Please enter USD/person/month",
                  },
                ]}
              >
                <XInputPage placeholder="Enter USD/person/month" size="large" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[15, 15]}>
            <Col xs={24}>
              <TitleForm>
                While not required, please submit any pitch decks, white papers,
                websites, or other relevant content that will help us understand
                what you are building!
              </TitleForm>
            </Col>
            <Col xs={24} className="mt-2">
              <Form.Item
                name="upload"
                rules={[
                  {
                    required: true,
                    validator: (_, value) => {
                      if (fileList.length === 0) {
                        return Promise.reject(
                          new Error("Please select a file!")
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
              <Form.Item
                name="why_aethos"
                rules={[
                  {
                    required: true,
                    message: "Please enter what resonates with you the most about Project Æthos?",
                  },
                ]}
              >
                <XInputPage.TextArea
                  style={{
                    background: "none",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                  placeholder="What resonates with you the most about Project Æthos? What stood out to you in the vision statement as particularly meaningful?"
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item
                name="contribution"
                rules={[
                  {
                    required: true,
                    message:
                      "Please describe one or more ways you anticipate contributing with your 2 hours a month based on your interests and expertise",
                  },
                ]}
              >
                <XInputPage.TextArea
                  style={{
                    background: "none",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                  placeholder="As described in the vision statement, we are fostering a community of giving and sharing. Please describe one or more ways you anticipate contributing with your 2 hours a month based on your interests and expertise. Options raised during interviews included having 'on duty listening hours', creating artwork, making content to highlight other members, leading workshops, etc."
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item
                name="goals"
                rules={[
                  { required: true, message: "Please describe your goals" },
                ]}
              >
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
            <Col xs={24}>
              <Form.Item
                name="joining"
                rules={[
                  { required: true, message: "Please enter how do you imagine joining the Station contributing to this path?" },
                ]}
              >
                <XInputPage.TextArea
                  style={{
                    background: "none",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                  placeholder="How do you imagine joining the Station contributing to this path?"
                  size="large"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[15, 15]}>
            <Col xs={24}>
              <TitleForm>How did you find out about Æthos? *</TitleForm>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24}>
              <Form.Item
                name="aethos_found"
                rules={[{ required: true, message: "Please select where you found us" }]}
              >
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
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[15, 0]} className="mt-4">
            <Col xs={24} sm={12} lg={24}>
              <Form.Item
                name="referred"
                rules={[
                  { required: true, message: "Please enter who referred you" },
                ]}
              >
                <XInputPage
                  placeholder="If you were referred by someone, who referred you?"
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} lg={24}>
              <Form.Item
                name="relevant_info"
                rules={[
                  { required: true, message: "Please enter who relevant info" },
                ]}
              >
                <XInputPage.TextArea
                  style={{
                    background: "none",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                  placeholder="If you have any other relevant information for us or feedback, please leave us your thoughts!"
                  size="large"
                />
              </Form.Item>
            </Col>
          </Row>
        </XFormData>
      ),
    },
  ];


  const handleModalOpen = (content) => {
    setContactUs([true, content]);
  };

  const handleCancel = () => {
    setContactUs([false, ""]);
  };

  const next = () => {
    form
      .validateFields()
      .then((values) => {
        setFormData({ ...formData, ...values });
        setCurrent(current + 1);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

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

  const onFinish = async (values) => {
    const finalData = { ...formData, ...values };
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
      const { upload, ...restValues } = finalData;

      const response = await fetch("/api/v1/form/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...restValues,
          fileLink: fileLinks.length > 0 ? fileLinks[0] : "",
        }),
        // body: JSON.stringify(finalData),
      });
      notification.success({
        message: "Your application has been submitted successfully!",
      });
      setLoading(false);
      form.resetFields();
      setFormData({});
      setCurrent(0);
    } catch (error) {
      setLoading(false);
      console.error("Form submission error:", error);
      form.resetFields();
      setFormData({});
      notification.error({
        message: "There was an error submitting your application.",
      });
    }
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
              <Col xs={24}>
                <Form form={form} layout="vertical" onFinish={onFinish}>
                  <XSteps current={current} items={items} />
                  <StepDataWrapper>{steps[current].content}</StepDataWrapper>
                  <Row className="mt-4 text-end">
                    <Col xs={24}>
                      {current > 0 && (
                        <XButton
                          className="backBtn mr-3"
                          onClick={() => prev()}
                        >
                          Back
                        </XButton>
                      )}
                      {current === steps.length - 1 && (
                        <XButton
                          type="primary"
                          htmlType="submit"
                          loading={loading}
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
                </Form>
              </Col>
            </Row>
          </XCard>
        </Wrapper>
      </StationWrap>
      <Footer3 />
    </>
  );
}
