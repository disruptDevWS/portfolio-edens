import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { Container, Row, Col } from "reactstrap";
import Typed from "react-typed";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipping: false
    };
  }

  componentDidMount() {
    this.animateCard();
  }

  componentWillLeave() {
    this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
  }

  animateCard() {
    this.cardAnimationInterval = setInterval(() => {
      this.setState({
        isFlipping: !this.state.isFlipping
      });
    }, 3000);
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { isFlipping } = this.state;

    return (
      <BaseLayout className="cover" {...this.props.auth} headerType="index">
        <div className="main-section">
          <div className="background-image">
            <img src="../static/images/background-index.png" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? "isFlipping" : ""}`}>
                    <div className="front">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          <p className="hero-img-citation">
                            Illustration by{" "}
                            <a href="https://icons8.com" target="_blank">
                              Ouch.pics
                            </a>
                          </p>
                          <Typed
                            strings={[
                              "Mastering the mystical arts of HTML",
                              "Mastering the mystical arts of CSS, SCSS, and Bootstrap",
                              "Mastering the mystical arts of JavaScript, React, and Next.js",
                              "Mastering the mystical arts of bedazzled denim jackets",
                              "Mastering the mystical arts of Git",
                              "Mastering the mystical arts of WordPress CMS",
                              "Mastering the mystical arts of Bird Law",
                              "Mastering the mystical arts of Node, Express, and MongoDB",
                              "Mastering the mystical arts of PHP and MySQL",
                              "Mastering the mystical arts of roundhouse kicks"
                            ]}
                            typeSpeed={60}
                            backSpeed={30}
                            backDelay={1000}
                            loop
                            smartBackspace
                            className="react-typed"
                          />
                        </div>
                      </div>
                      <img
                        className="image"
                        src="/static/images/section-1.png"
                      />
                      <div className="shadow-custom">
                        <div className="shadow-inner"></div>
                      </div>
                    </div>

                    <div className="back">
                      <div className="hero-section-content">
                        <h2>Have a Project?</h2>
                        <div className="hero-section-content-intro">
                          <h3>Contact me, and let's get to work</h3>
                          <ul>
                            <li>
                              Email @{" "}
                              <a href="mailto:epochws@gmail.com">
                                epochws@gmail.com{" "}
                              </a>
                            </li>
                            <li>
                              Call{" "}
                              <a href="tel:1-208-602-1716">(208) 602-1716</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="shadow-custom">
                        <div className="shadow-inner"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    {isAuthenticated && (
                      <span>
                        <strong>{user.name}</strong>
                      </span>
                    )}
                  </h1>
                  <h2 class="hero-welcome-bio">
                    Welcome to my portfolio site. Explore past work, projects,
                    and learn a little more about 1997's Northwest Regional
                    Municipal Taekwondo 4th place runner-up.
                  </h2>
                </div>
                <div className="hero-welcome-bio">
                  <h2>
                    As Chief Justice Ruth Ginsburg once said, "let us get this
                    bread."
                  </h2>
                  <p>
                    * No quotes were verified prior to placement on this site.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    );
  }
}

export default Index;
