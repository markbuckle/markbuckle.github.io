// import meter1 from "../assets/img/meter1.svg";
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'react-multi-carousel/lib/styles.css';
import { Bootstrap } from 'react-bootstrap-icons';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"


// import colorSharp from "../assets/img/color-sharp.png"
// import colorSharp2 from "../assets/img/color-sharp2.png"

export const Skills2 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="skill-bx">
                    <h1 class="skill">Skills</h1>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                    <Carousel.Item>
                    <div className="item">
                          <div class="skill2">
                              <p><h2>Frontend Development</h2></p>
                              <p><h3>HTML</h3>
                                <span class="bar"><span class="html"></span></span>
                              </p>
                              <p><h3>CSS</h3>
                                <span class="bar"><span class="css"></span></span>
                              </p>
                              <p><h3>Javascript</h3>
                                <span class="bar"><span class="javascript"></span></span>
                              </p>
                              <p><h3>React</h3>
                                <span class="bar"><span class="react"></span></span>
                              </p>
                          </div>
                      </div>
                      </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                          <div class="skill2">
                              <p><h2>Backend Development</h2></p>
                              <p><h3>Python</h3>
                                <span class="bar"><span class="python"></span></span>
                              </p>
                              <p><h3>NodeJS</h3>
                                <span class="bar"><span class="nodejs"></span></span>
                              </p>
                              <p><h3>php</h3>
                                <span class="bar"><span class="php"></span></span>
                              </p>
                          </div>
                      </div>
                      </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                          <div class="skill2">
                              <p><h2>Project Management</h2></p>
                              <p><h3>Project Controls</h3>
                                <span class="bar"><span class="pc"></span></span>
                              </p>
                              <p><h3>Scrum / Agile Development</h3>
                                <span class="bar"><span class="scrum"></span></span>
                              </p>
                              <p><h3>Waterfall Method</h3>
                                <span class="bar"><span class="waterfall"></span></span>
                              </p>
                          </div>
                      </div>
                      </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                          <div class="skill2">
                              <p><h2>Other</h2></p>
                              <p><h3>Automation / Scripting</h3>
                                <span class="bar"><span class="automation"></span></span>
                              </p>
                              <p><h3>Machine Learning</h3>
                                <span class="bar"><span class="ml"></span></span>
                              </p>
                          </div>
                        </div>
                      </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
    <img className="background-image-left" src={colorSharp} alt="imgLeft" />
    <img className="background-image-right" src={colorSharp} alt="imgRight"/>
</section>
)
}