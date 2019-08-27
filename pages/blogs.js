import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/Basepage";
import { Col, Row, Container } from "reactstrap";
import { Link } from "../routes";
import moment from "moment";
import { getBlogs } from "../actions";
import { shortenText } from "../helpers/utils";

class Blogs extends React.Component {
  static async getInitialProps({ req }) {
    let blogs = [];

    try {
      blogs = await getBlogs(req);
    } catch (err) {
      console.error(err);
    }
    return { blogs };
  }

  renderBlogs = blogs =>
    blogs.map((blog, index) => (
      <div key={index} className="post-preview">
        <Link route={`/blogs/${blog.slug}`}>
          <a>
            <h2 className="post-title">{blog.title}</h2>
            <h3 className="post-subtitle">{shortenText(blog.subTitle)}</h3>
          </a>
        </Link>
        <p className="post-meta">
          Posted by
          <a href="#"> {blog.author} </a>
          {moment(blog.createdAt).format("LL")}
        </p>
      </div>
    ));

  render() {
    const { blogs } = this.props;

    return (
      <BaseLayout
        {...this.props.auth}
        headerType={"landing"}
        className="blog-listing-page"
        title="Thunderdome Blog"
      >
        <div
          className="masthead"
          style={{
            backgroundImage: "url('../static/images/flame-success.png')"
          }}
        >
          <div className="overlay" />
          <Container>
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>The Thunderdome</h1>
                  <span className="subheading">
                    Web Development • Life Musings • Karate Chops
                  </span>
                  <p className="blogs-img-citation">
                    Illustration by &nbsp;
                    <a href="https://icons.8.com" target="_blank">
                      Ouch.pics
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <BasePage className="blog-body">
          <Row>
            <Col md="10" lg="8" className="mx-auto">
              {this.renderBlogs(blogs)}
              <div className="clearfix">
                <a className="btn btn-primary float-right" href="#">
                  Older Posts &rarr;
                </a>
              </div>
            </Col>
          </Row>

          <footer>
            <Container>
              <Row>
                <div className="col-lg-8 col-md-10 mx-auto">
                  <ul className="list-inline text-center">
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="fa-stack fa-lg">
                          <i className="fas fa-circle fa-stack-2x" />
                          <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="fa-stack fa-lg">
                          <i className="fas fa-circle fa-stack-2x" />
                          <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="fa-stack fa-lg">
                          <i className="fas fa-circle fa-stack-2x" />
                          <i className="fab fa-github fa-stack-1x fa-inverse" />
                        </span>
                      </a>
                    </li>
                  </ul>
                  <p className="copyright text-muted">
                    Copyright &copy; Matthew Edens 2019 |
                  </p>
                </div>
              </Row>
            </Container>
          </footer>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Blogs;
