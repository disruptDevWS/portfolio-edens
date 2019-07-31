import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/Basepage";

class Blog extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>This is the Blog page.</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Blog;
