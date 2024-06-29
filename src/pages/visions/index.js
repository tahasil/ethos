import React, { useState } from "react";
import Header3 from "../../component/header/header3";
import Footer3 from "../../component/footer/footer3";
import { Row, Col, Form, Input, Button, Modal, notification } from "antd";
import { Wrapper, XButton } from "../../styles/GlobalStyle3";
import Joinus from "../../component/joinus/index";
import Gallery from "../../component/gallery/index";
import Connect from "../../component/connect/index";
import { MahiWrap, MahiStory, XCollapse } from "./indexStyle";
import ScrollAnimation from "react-animate-on-scroll";
import Link from "next/link";
//import { LazyLoadImage } from "react-lazy-load-image-component";

const collapseData = [
  {
    key: "1",
    label: "1. Preamble",
    children: (
      <>
        <p>
          ‘Æthos’ is the character of shared beliefs held by a community. We are
          creating a community where entrepreneurs share values, principles, and
          single space while building 'AI-first" companies that will reshape the
          world for generations to come." We call this community Project Æthos.
        </p>
        <p>
          At Project Æthos, we are assembling a diverse group of innovators
          passionate about solving problems by leveraging AI and deep domain
          expertise. Our first initiative and inaugural physical hub, the Æthos
          ‘Station’ at 1 Broadway, Kendall Square, intends to gather
          approximately 100 top entrepreneurs to work on groundbreaking AI
          applications. This space fosters interactions that enable members to
          embody shared values of honesty, diversity, and service mentality,
          thereby building a community that learns from, supports, and trusts
          each other.
        </p>
        <p>
          Our second initiative, Café Æthos, to be located in the glass box
          outside 245 Main St, is anticipated as one key gateway between the
          technology and innovation communities and the wider public. It
          provides a chance to showcase the contributions technology can make to
          society, to celebrate milestones and inspire new collaborations.
        </p>
        <p>
          This document serves as a foundational outline of our mission,
          principles, and expectations for members of our initial community as
          we embark together on this journey.
        </p>
      </>
    ),
  },
  {
    key: "2",
    label: "2. Vision for Project Æthos",
    children: (
      <>
        <p>
          We are building a center of gravity for applied AI, bringing essential
          resources closer to founders and their teams. We enable them to focus
          more on building great products and less on the logistics of
          entrepreneurship. Our hypothesis is that the most valuable resource we
          can provide will be the exchange of technical expertise and deep
          domain knowledge across the many fields and backgrounds our members
          represent. We see this dynamic establishing an epicenter for AI
          innovation, drawing in a broad range of investors, community builders,
          corporates, AI infrastructure players, and service providers eager to
          support each other. Bringing ethical frameworks and tools for
          derisking AI from academic environments onto the frontline of
          development is one way we can assist in the responsible development
          and deployment of these technologies. We believe entrepreneurs are
          most likely to follow such guidelines when empowered by abundant
          resources.
        </p>
        <p>
          We are a not-profit-seeking enterprise. Registered as a Massachusetts
          benefit corporation formed to support AI innovators, we have no
          shareholders and take no equity from our members. We prioritize
          collaboration and maintain our neutrality by working with a broad and
          diverse range of sponsors and partners. Once our first two initiatives
          (separate entities wholly owned by Project Aethos, Inc.) prove their
          sustainability and impact, we intend to extend our community to
          innovation ecosystems around the world. Active dialogues on
          initiatives in Berlin and Tokyo are in the works.
        </p>
      </>
    ),
  },
  {
    key: "3",
    label: "3. Our Mission",
    children: (
      <>
        <p>
          Project Æthos gathers leading innovators to invent the future of
          responsible artificial intelligence for humanity in a trusting,
          diverse community.
        </p>
      </>
    ),
  },
  ,
  {
    key: "4",
    label: "4. Community Principles",
    children: (
      <>
        <p>
          These values derive from dozens of interviews with founders and other
          stakeholders across the innovation ecosystem of Greater Boston. They
          are the cornerstones of our ‘Æthos’ and act in concert to produce a
          sense of belonging. Belonging breeds respect and respect breeds
          responsibility. These values will come alive through shared
          experiences. For instance, here are a few ways they inform the
          programming and membership criteria for Æthos Station.
        </p>
        <ul>
          <li>
            <strong>Service Mentality: </strong> we seek to establish a culture
            of giving with our 2 hours of contributions per month to other
            members
          </li>
          <li>
            <strong>Honesty and Trust: </strong> honesty and open source culture
            thrive when vulnerability to share pain points and the ups and downs
            of one’s entrepreneurial journey is well facilitated, for instance,
            over dinners, demo nights or simply via active listening.
          </li>
          <li>
            <strong>Impact: </strong> we define ourselves as innovators who
            demonstrate potential to harness AI to uplift humanity.
          </li>
          <li>
            <strong>Responsibility: </strong> we can help mitigate the risks of
            AI by establishing ‘responsibility standards’ in collaboration with
            leading ethical thinkers and academics who we bring to the front
            lines of AI development where builders can benefit from their
            expertise.
          </li>
          <li>
            <strong>Growth and Consistency: </strong> we propose Station members
            set goals at the beginning of their time to allow the Æthos team and
            fellow members to assist in and track their success. We foresee that
            many successful teams will outgrow the space, making way for new
            members. This cycle of gradual renewal balances the growth of our
            members' ventures with a desire to keep a consistent culture.
          </li>
          <li>
            <strong>Proximity: </strong> repeated exposure to each other in a
            space where regular, spontaneous communication can take place is
            thought to be the best way to build trust and collaboration.
          </li>
          <li>
            <strong>Diversity: </strong> cross-pollination of ideas is most
            helpful when leveraging diverse perspectives representing many
            backgrounds and skillsets.
          </li>
          <li>
            <strong>Fun and Creativity: </strong> as innovators, we emphasize
            the value of self-expression and playfulness as we solve problems.
            The right to take a break by picking up an instrument or playing a
            game in our space is essential.
          </li>
          <li>
            <strong>Neutrality: </strong> By not taking equity in our members,
            by not seeking profits ourselves nor having owners we seek to be
            honest brokers acting in the interests of both our founders and
            society.
          </li>
        </ul>
      </>
    ),
  },
  {
    key: "5",
    label: "5. Station Membership Criteria, Terms, and Expectations",
    children: (
      <>
        <p>
          Æthos will operate at two levels: the wider Æthos community
          incorporating startups. corporates, investors, academics and others,
          and a physical shared space for AI founders we call Aethos Station.
          Station will have its own more specific principles.
        </p>
        <p>
          Any stakeholder in the innovation ecosystem may apply to join the
          wider Project Æthos community and may engage in various ways depending
          on who they are and what kind of entity they represent.
        </p>
        <p>Membership in the Station is open only to those who:</p>
        <ul>
          <li>
            Are a founding team member (or a solo founder) of an AI startup or
            otherwise able to make decisions on product and mission, for
            instance as an executive level employee.
          </li>
          <li>
            Are serious in their pursuit of a consequential business leveraging
            AI. They must be ‘all-in’ in the pursuit of their mission. Teams can
            apply at any stage of their development so long as they are fully
            committed to growing their venture.
          </li>
          <li>
            Have at least one member of any given team in a leadership capacity
            who is empowered to shape the product and mission.
          </li>
          <li>
            Are still small. In order to prevent the shared physical space from
            being dominated by any one organization, no more than 5 individuals
            per team are permitted to work directly in the Station core space,
            however we will have extensions to station dedicated to individual
            larger teams.
          </li>
          <li>
            Are prepared to commit to at least 2 hours of service to other
            members per month. This could include office hours, leading
            workshops, making art for the space, or creating media content for
            others. We will make guidelines more specific as we observe what
            members value.
          </li>
          <li>
            Intend to engage in community activities and to support and learn
            from fellow members.
          </li>
        </ul>
        <p>The Station application process is anticipated to include:</p>
        <ul>
          <li>
            Submission of a pitch deck and/or other materials explaining the
            applicant's work (publications, past projects etc) and a cover
            letter outlining intentions and expectations, including measurable
            goals for where the applicant sees their venture in 1 year’s time.
            They should also mention a few ways they anticipate contributing
            with their 2 hours a month. Allowances will be made applicants to
            maintain confidential elements of their plans as needed.
          </li>
          <li>
            Applications are first assessed by the Æthos team and a group of
            members appointed as our ‘founders council’ and a shortlist is
            invited to spend a couple days at the Station. There, they will
            interact with current members who would then be invited to give
            input at the end of this long-form ‘interview’
          </li>
          <li>
            Acceptance offers would then be extended and new members would sign
            a CIC service agreement (from our space host) and agree to follow
            Project Æthos’ values.
          </li>
          <li>
            Any team that is no longer actively contributing to the community
            will be asked to relocate to nearby general co-working space
            provided by CIC (C3) and are welcome to remain part of the wider
            Aethos community. These rules may evolve over time as we explore the
            best way to form and advance this community
          </li>
        </ul>
        <p>A note on diversity:</p>
        <p>
          Combining people of different fields, experience levels, identities
          and backgrounds provides a richer environment for learning to take
          place. These factors will be taken into account when evaluating the
          applicant pool. We are working on creating an identity map to provide
          fair and transparent standards for this process and will welcome
          feedback and criticism when it is ready.
        </p>
        <p>A note on terms, conditions, and community governance:</p>
        <ul>
          <li>
            As soon as practical, Project Æthos intends to cover Station's space
            costs via sponsorship and rely less on members to cover these costs.
            In the near term, however, we must quickly establish the community
            and determine what early members can contribute towards covering the
            cost of the space.
          </li>
          <li>
            Members will be asked to sign service agreements with the management
            of our space host organization (CIC) that include a code of conduct.
            Members can terminate such agreement with one month’s notice, and
            that will also constitute termination of membership at Station.
          </li>
          <li>
            Given it is new and experimental, the Station starts with few rules
            and will refine its policies as deemed necessary over time. The
            founders council shall be elected by the community and will be asked
            to advise Project Æthos officials and strategic advisors on matters
            of member selection for Station or new policies, for instance.
          </li>
        </ul>
      </>
    ),
  },
  {
    key: "6",
    label: "6. Programming and Amenities",
    children: (
      <>
        <p>
          The Æthos Station has leaned on its members to contribute ideas and is
          determined to turn them into reality. Some ideas raised during
          interviews for internal programming include:
        </p>
        <ul>
          <li>Demo Nights for show and tell with fellow innovators.</li>
          <li>
            Genius nights for intimate discussions with renowned experts and
            tech leaders
          </li>
          <li>
            Storytelling Dinners, where members share experiences and insights.
          </li>
          <li>
            Art and Music Sessions to explore and develop creative expression
            with AI.
          </li>
          <li>Workshops to enhance technical or domain specific skills.</li>
        </ul>
        <p>
          To provide a protected space for our members, we intend to separate
          internal programming at the Station from public events held in spaces
          throughout CIC, such as on the 5th floor at Venture Café. The benefit
          to members is that instead of having to travel across the city to
          network, resources come to be close to them. We anticipate coproducing
          these events with our network of community builders and sponsors such
          as investors, accelerators, and service providers. As an example, our
          first public event on AI and Public Health will be held in Venture
          Café on May 2nd, 2024.
        </p>
        <p>
          We seek to design the Station space such that it inspires both
          visually and interactively. Elements requested in interviews include a
          laundry service, a mocktail bar, a recreational room for music,
          screens to exhibit AI art, roaming social media assistants, access to
          datasets for LLM exploration, and access via sponsors to GPU
          resources.
        </p>
        <p>
          We are already in discussions around the last three suggestions and
          are eager to make more of these reality as funding comes together.
        </p>
      </>
    ),
  },
  {
    key: "7",
    label: "7. Roadmap",
    children: (
      <>
        <p>
          So far, we are an experiment based on the contributions of a rockstar
          group who have volunteered their time to get Project Æthos off the
          ground. While articles of incorporation have been filed, a website
          domain acquired, and work on KPIs and design has commenced, we need to
          meet the following short term goals to stabilize our vision:
        </p>
        <ul>
          <li>
            Rapid Onboarding: commencing member relocation to the Station within
            the next week to begin building the initial community.
          </li>
          <li>
            Soft Launch: hosting a dumpling dinner for the inner circle of early
            Station members to discuss the vision.
          </li>
          <li>
            Public Announcement: presenting Project Æthos to the world at our
            first public event on May 2nd at Venture Café on AI and Public
            Health.
          </li>
          <li>
            Obtain larger sponsorship: push active dialogues with sponsors
            quickly forward. If we can secure funds to cover the costs of 30
            initial members, the space will be locked in for us and we are in
            the clear to keep building.
          </li>
          <li>
            Open applications: start the application process and appoint the
            founders council.
          </li>
        </ul>
      </>
    ),
  },
  {
    key: "8",
    label: "8. Call to Action",
    children: (
      <>
        <p>
          If you are reading this, thank you for taking the time. If you are
          eager to support Project Æthos by joining the inner circle at Station,
          please fill out the survey here:
        </p>
        <Link
          className="links"
          target="_blanck"
          href="https://forms.gle/uwpiSsrwNH9Gyzva6"
        >
          https://forms.gle/uwpiSsrwNH9Gyzva6
        </Link>
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
                <h1>Vision Statement</h1>
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
                    src="/images/image-36.png"
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
