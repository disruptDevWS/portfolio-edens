import React from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import BasePage from "../../components/BasePage";
import { withRouter } from "next/router";
import Axios from "axios";

class Portfolio extends React.Component {
  static async getInitialProps(context) {
    let post = {};
    const postId = context.query.id;

    try {
      const response = await Axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      post = response.data;
    } catch (err) {
      console.log(err);
    }

    return { post };
  }

  render() {
    const { post } = this.props;

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1> {post.title} </h1>
          <h2>{post.body}</h2>
          <p>{post.id}</p>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);
