import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import "../styles/main.scss";
import Axios from "axios";
import Link from "next/link";

class Portfolios extends React.Component {
  static async getInitialProps() {
    let posts = {};

    try {
      const response = await Axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      posts = response.data;
    } catch (err) {
      console.log(err);
    }

    return { posts: posts.splice(0, 10) };
  }

  renderPosts(posts) {
    return posts.map((post, index) => {
      return (
        <li key={index}>
          <Link as={`/portfolio/${post.id}`} href={"/portfolio/[id]"}>
            <a> {post.title} </a>
          </Link>
        </li>
      );
    });
  }

  render() {
    const { posts } = this.props;
    return (
      <BaseLayout>
        <h1>This is the portfolio page.</h1>
        <ul>{this.renderPosts(posts)}</ul>
      </BaseLayout>
    );
  }
}

export default Portfolios;
