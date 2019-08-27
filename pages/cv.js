import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/Basepage";
import { Row, Col } from "reactstrap";

class Cv extends React.Component {
  render() {
    return (
      <BaseLayout title="Matt Edens | Printable Resume" {...this.props.auth}>
        <BasePage className="cv-page" title="Printable Resume: Matt Edens">
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <div className="cv-title">
                <a
                  download="matt-edens-dev-resume.pdf"
                  className="btn btn-info"
                  href="/static/matt-edens-dev-resume.pdf"
                >
                  Download
                </a>
              </div>
              <iframe
                style={{ width: "100%", height: "840px" }}
                src="/static/matt-edens-dev-resume.pdf"
              ></iframe>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Cv;
