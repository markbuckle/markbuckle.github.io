// To turn the ProjectCard on, head to ./src/components/Navbar.js and include it there

import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={7}>
      <div className="proj-imgbx">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={imgUrl} alt=""/></a>
        <div className="proj-txtx">
          <h4>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}</a></h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}