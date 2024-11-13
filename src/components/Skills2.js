import Carousel from 'react-bootstrap/Carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills2 = () => {
  const responsive = {
    superLargeDesktop: {
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
              <h1 className="skill">Skills</h1>
              <p className="skill-subheading">
                * Note: These ratings are subjective as it is near impossible to know 100% of any programming language or PM skillset. These bars illustrate my best attempt at providing an unbiased review on my overall experience level with each category.
              </p>
              <Carousel interval={null} touch={false} responsive={responsive} infinite={true} className="skill-slider skill2">
                <Carousel.Item>
                  <div className="item">
                    <div className="skill2">
                      <p><h2>Frontend Development</h2></p>
                      <p><h3>HTML</h3>
                        <span className="bar"><span className="skill-html"></span></span>
                      </p>
                      <p><h3>Handlebars</h3>
                        <span className="bar"><span className="handlebars"></span></span>
                      </p>
                      <p><h3>CSS</h3>
                        <span className="bar"><span className="css"></span></span>
                      </p>
                      <p><h3>Javascript</h3>
                        <span className="bar"><span className="javascript"></span></span>
                      </p>
                      <p><h3>React</h3>
                        <span className="bar"><span className="react"></span></span>
                      </p>
                      <p><h3>Ruby on Rails</h3>
                        <span className="bar"><span className="ruby"></span></span>
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="item">
                    <div className="skill2">
                      <p><h2>Backend Development</h2></p>
                      <p><h3>Python</h3>
                        <span className="bar"><span className="python"></span></span>
                      </p>
                      <p><h3>Java</h3>
                        <span className="bar"><span className="java"></span></span>
                      </p>
                      <p><h3>NodeJS</h3>
                        <span className="bar"><span className="nodejs"></span></span>
                      </p>
                      <p><h3>ExpressJS/PassportJS</h3>
                        <span className="bar"><span className="ep"></span></span>
                      </p>
                      <p><h3>PHP</h3>
                        <span className="bar"><span className="php"></span></span>
                      </p>
                      <p><h3>C# & Blazor</h3>
                        <span className="bar"><span className="Csharp"></span></span>
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="item">
                    <div className="skill2">
                      <p><h2>Databases</h2></p>
                      <p><h3>MongoDB</h3>
                        <span className="bar"><span className="mongo"></span></span>
                      </p>
                      <p><h3>DynamoDB</h3>
                        <span className="bar"><span className="dynamo"></span></span>
                      </p>
                      <p><h3>PostgresSQL</h3>
                        <span className="bar"><span className="postgreSQL"></span></span>
                      </p>
                      <p><h3>MySQL</h3>
                        <span className="bar"><span className="mySQL"></span></span>
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="item">
                    <div className="skill2">
                      <p><h2>Cloud Computing</h2></p>
                      <p><h3>Amazon Web Services</h3>
                        <span className="bar"><span className="amazon"></span></span>
                      </p>
                      <p><h3>Microsoft Azure</h3>
                        <span className="bar"><span className="azure"></span></span>
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="item">
                    <div className="skill2">
                      <p><h2>Project Management</h2></p>
                      <p><h3>Data Analysis</h3>
                        <span className="bar"><span className="pc"></span></span>
                      </p>
                      <p><h3>Scrum / Agile Development</h3>
                        <span className="bar"><span className="scrum"></span></span>
                      </p>
                      <p><h3>Waterfall Method</h3>
                        <span className="bar"><span className="waterfall"></span></span>
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="item">
                    <div className="skill2">
                      <p><h2>Other</h2></p>
                      <p><h3>WebFlow</h3>
                        <span className="bar"><span className="webflow"></span></span>
                      </p>
                      <p><h3>Automation / Scripting</h3>
                        <span className="bar"><span className="automation"></span></span>
                      </p>
                      <p><h3>Machine Learning</h3>
                        <span className="bar"><span className="ml"></span></span>
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
  );
}
