import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon5 from '../assets/img/nav-icon5.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* Below comment needs to be turned on if the Form and Newsletter are brought back in */}
          {/* <MailchimpForm /> */}
          <Col  >
            <img src={logo} alt="Logo" />
          </Col>
          <Col className="social-icon-layout">
            <div className="social-icon">
                  <a href="https://www.linkedin.com/in/mark-buckle-146316326"><img src={navIcon1} alt="" /></a>
                  <a href="https://github.com/markbuckle/markbuckle.github.io"><img src={navIcon5} alt="" /></a>
              </div>
            <div class="email2">{'markbuckle92@gmail.com'}</div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

/* <Container>
        <Row className="align-items-center">
      //     <Col  >
      //       <img src={logo} alt="Logo" />
      //     </Col>
      //     <Col className="social-icon-layout">
      //       <div className="social-icon">
      //             <a href="https://www.linkedin.com/in/mark-buckle-146316326"><img src={navIcon1} alt="" /></a>
      //             <a href="https://github.com/markbuckle/markbuckle.github.io"><img src={navIcon5} alt="" /></a>
      //         </div>
      //       <p class="email2">{'markbuckle92@gmail.com'}</p>
      //     </Col>
      //   </Row>
      // </Container> */