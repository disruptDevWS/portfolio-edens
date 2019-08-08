import React from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import BasePage from "../../components/BasePage";
import { withRouter } from "next/router";
import Axios from "axios";

class Portfolio extends React.Component {
  static async getInitialProps({ query }) {
    const portfolioId = query.id;
    let portfolio = {};

    try {
      const response = await Axios.get(
        `https://localhost:3000/api/v1/portfolios/${portfolioId}`
      );
      portfolio = response.data;
    } catch (err) {
      console.error(err);
    }

    return { portfolio };
  }

  render() {
    const { portfolio } = this.props;

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1> {portfolio.title} </h1>
          <p> BODY: {portfolio.body} </p>
          <p> ID: {portfolio.id} </p>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);
