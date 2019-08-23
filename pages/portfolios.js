import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import "../styles/main.scss";
import { Col, Row, Button } from "reactstrap";
import PortfolioCard from "../components/portfolios/PortfolioCard";
import { Router } from "../routes";
import { getPortfolios, deletePortfolio } from "../actions";

class Portfolios extends React.Component {
  static async getInitialProps() {
    let portfolios = [];

    try {
      portfolios = await getPortfolios();
    } catch (err) {
      console.error(err);
    }
    return { portfolios };
  }

  navigateToEdit(portfolioId, event) {
    event.stopPropagation();
    Router.pushRoute(`/portfolios/${portfolioId}/edit`);
  }

  displayDeleteWarning(portfolioId, event) {
    event.stopPropagation();
    const isConfirm = confirm(
      "Not every masterpiece is timeless.  Confirm delete."
    );
    if (isConfirm) {
      this.deletePortfolio(portfolioId);
    }
  }

  deletePortfolio(portfolioId) {
    deletePortfolio(portfolioId)
      .then(() => {
        Router.pushRoute("/portfolios");
      })
      .catch(err => console.error(err));
  }

  renderPortfolios(portfolios) {
    const { isAuthenticated, isSiteOwner } = this.props.auth;

    return portfolios.map((portfolio, index) => {
      return (
        <Col key={index} md="4">
          <PortfolioCard portfolio={portfolio}>
            {isAuthenticated && isSiteOwner && (
              <React.Fragment>
                <Button
                  onClick={event => this.navigateToEdit(portfolio._id, event)}
                  className="btn-outline-info edit-port-btn"
                >
                  Edit
                </Button>
                <Button
                  onClick={event =>
                    this.displayDeleteWarning(portfolio._id, event)
                  }
                  className="btn-outline-info delete-port-btn"
                >
                  Delete
                </Button>
              </React.Fragment>
            )}
          </PortfolioCard>
        </Col>
      );
    });
  }

  render() {
    const { portfolios } = this.props;
    const { isAuthenticated, isSiteOwner } = this.props.auth;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="portfolio-page" title="Portfolio">
          {isAuthenticated && isSiteOwner && (
            <Button
              onClick={() => Router.pushRoute("/portfolionew")}
              className="create-port-btn btn-outline-info"
            >
              Create Portfolio
            </Button>
          )}
          <Row>{this.renderPortfolios(portfolios)}</Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Portfolios;
