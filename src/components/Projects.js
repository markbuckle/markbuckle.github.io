import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import colorSharp2 from "../assets/img/color-sharp2.png"

export const Projects = () => {

const projects3 = [
    {
      title: "HealthLync",
      description: "Personalized Health Tracker",
      imgUrl: projImg3,
      url: "https://healthdashboard.webflow.io/"
    }
  ];

const projects2 = [
  {
    title: "AiDocChatbot",
    description: "AI Chatbot using Retrieval-Augmented Generation (RAG)",
    imgUrl: projImg2,
    url: "https://podcastaichatbot.website/"
  },
];

const projects1 = [
  {
    title: "FeedFlo",
    description: "User Feedback Tool",
    imgUrl: projImg1,
    url: "https://saasdashboard.vercel.app/"
  },
];

  return (
    <section className="project" id="projects">
      <Container>
        <Row class="row" id="row">
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Projects</h2><br></br>
                <p>This web portfolio was built with React and Animate CSS. It was deployed with Cloudflare.</p>
                <p>Please check out three of my favourite projects I have built to date below. If you hover over the photo and click on the title it will take you to that project.</p><br></br>
                {/* Copy, paste and modify below from react bootstrap "Pills" section */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                      <p>This B2B SaaS app allows for businesses to seamlessly integrate feedback from their users. The app enables users to collect feedback from their websites and the feedback collection widget is easy to embed. It also includes an admin dashboard and a subscription model.</p>
                      <Row>
                        {
                          // For each project and index, return project title before we create the card
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <br></br><p>Dashboard built with NextJs, TypeScript, Shadcn-UI, Clerk, Supabase/PostgresSQL, Drizzle and Stripe</p>
                      <p>Widget built with React, Vite, Shadcn-UI, and Lucide</p>
                      <p>Deployed with Vercel</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>HealthLync is an interactive dashboard that allows the user to make sense of their health data.</p>
                      <Row>
                        {
                          // For each project and index, return project title before we create the card
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <br></br><p>Built and deployed with WebFlow (Html, CSS, & JavaScript)</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>This AI Chatbot uses Retrieval-Augmented Generation (RAG). Large Language Models (LLMs) are great at generating text but they lack information about the users projects as most AI databases are not open-sourced. RAGs = LLM + project specific knowledge database. RAGs allow for more specific and accurate responses from the AI Chatbot. </p>
                      <Row>
                        {
                          // For each project and index, return project title before we create the card
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <br></br><p>Backend built with Python, NextJS, Shadcn-UI, FastAPI, Docker, & AWS(Bedrock, API Gateway, S3, EC2, Lambda, DynamoDB, CloudFormation & CloudWatch) </p>
                      <p>Frontend built with NextJS, TailwindCSS, Shadcn-UI</p>
                      <p>Deployed with AWS Hosted Zones (Route 53 & Amplify)</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2} alt="Image2"/> */}
    </section>
  )
}