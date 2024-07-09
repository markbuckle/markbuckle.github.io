import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon4 from '../assets/img/nav-icon4.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* Below comment needs to be turned on if the Form and Newsletter are brought back in */}
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6} >
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={4} className="social-icon-layout">
            <div className="social-icon">
                <p class="email">{'markbuckle92@gmail.com'}</p>
                <a href="https://github.com/markbuckle"><img src={navIcon4} alt="" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}