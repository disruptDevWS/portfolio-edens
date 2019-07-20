import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import "../styles/main.scss";
import Axios from "axios";

class Index extends React.Component {
  render() {
    return (
      <BaseLayout>
        <h1>This is the Index.js Page</h1>
      </BaseLayout>
    );
  }
}

export default Index;
