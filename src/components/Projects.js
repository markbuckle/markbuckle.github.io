import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import colorSharp2 from "../assets/img/color-sharp2.png"

export const Projects = () => {

const projects1 = [
  {
    title: "FeedFlo",
    description: "User Feedback Tool",
    imgUrl: projImg1,
    url: "https://saas-dashboard-seven.vercel.app/"
  },
];

  const projects2 = [
    {
      title: "Ai-Doc-Chatbot",
      description: "AI Chatbot using Retrieval-Augmented Generation (RAG)",
      imgUrl: projImg2,
      url: "https://podcastaichatbot.website/"
    },
  ];

  const projects3 = [
    {
      title: "LabGevity (Coming soon)",
      description: "Personalized Health Tracker",
      imgUrl: projImg3,
      // url: ""
    }
  ];

  return (
    <section class="project" id="projects">
      <Container>
        <Row class="row" id="row">
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Projects</h2><br></br>
                <p>Please check out 3 of my favourite projects I have built to date.</p>
                <p>If you hover over the photo and click on the title it will take you to that project!</p><br></br>
                {/* Copy, paste and modify below from react boostrap "Pills" section */}
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
                      <p>This B2B SaaS app allows for businesses (small or large) to seamlessly integrate feedback from their users. The app enables users to collect feedback from their websites and the feedback collection widget is easy to embed. It will also include an admin dashboard and a subscription model.</p>
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
                      <br></br><p>Built with NextJs, TypeScript, Shadcn-UI, Clerk, Supabase, Drizzle and Stripe</p>
                      <p>Deployed with Vercel</p>
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
                      <br></br><p>Built with Python, Shadcn-UI, FastAPI, Docker, & AWS</p>
                      <p>Deployed with AWS Hosted Zones</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>LabGevity is an interactive dashboard that allows the user to own and make sense of their health data.</p>
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
                      <br></br><p>Built with Webflow</p>
                      <p>Deployed with...</p>
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