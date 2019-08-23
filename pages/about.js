import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { Row, Col } from "reactstrap";

class About extends React.Component {

  render() {
    return (
      <BaseLayout
        title="Matt Edens | About"
        {...this.props.auth}>
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Greetings, Friend</h1>
                <h4 className="subTitle fadein">Welcome to my About Page</h4>
                <p className="subsubTitle fadein">
                  My name (according to legal documents and whatnot) is Matthew Edens, and I'm a JavaScript/React Developer. Learn a little about me personally, my status as Idaho's 173rd ranked most-eligible
                  bachelor, or about work stuff. Your choice.
                </p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <h2>Mathias Tiberius Edens: A Homegrown Treasure</h2>
                <h3>Who I Am</h3>
                <p>Born on Guam to a couple of salty sailors, Idaho has been my primary home since the age of two. My formative years were pretty much dedicated to football and existing as an awkward human being frightened by most social interactions (and sharks...yep). After high school, I experienced a humbling failure of a year in college (discipline, people, you gotta have it). In 2002, I enlisted in the U.S. Marines, going on to serve nine years on active duty and spending time stationed in South Carolina, Japan, and Iraq.</p>
                <p>I separated from the Marines in 2011 to pursue a college education. During summer breaks, I worked for the Bureau of Land Management as a wildland firefighter; I saw some beautiful wilderness as a result. After completing Idaho State University's Paramedic Science Program, I was hired as a paramedic by Ada County's only EMS transport agency. While employed there, I was able to obtain my bachelor's degree, teach at Idaho State University's Paramedic Science Program, and I was selected to the Tactical Paramedic Team, a specialty team of nine Ada County paramedics who respond to various missions with the county's SWAT units.</p>
                <p>Now, I code. After dedicating much of my young adulthood to serving my community, I'm pursuing my passion. I love to code. It's a challenging profession, with ever-evolving technology requiring a persistent devotion to learning. Building something as complex as an application is immensely satisfying. While I am a relative new-comer to the web development scene, I am confident that my zeal for improvement and knowledge will lead to me becoming an exceptional and complete developer.</p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;