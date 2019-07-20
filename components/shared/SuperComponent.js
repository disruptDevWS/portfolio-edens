import React from "react";
import BaseLayout from "../layouts/BaseLayout";

class SuperComponent extends React.Component {
  constructor() {
    super();

    this.someVariable = "Just some variable";
  }

  alertName() {
    alert();
  }
  render() {
    return (
      <BaseLayout>
        <h1>This is the Blog page.</h1>
      </BaseLayout>
    );
  }
}

export default Blog;
