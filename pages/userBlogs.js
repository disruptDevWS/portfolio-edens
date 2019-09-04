import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import withAuth from "../components/hoc/withAuth";
import { Link, Router } from "../routes";
import { Container, Row, Col, Button } from "reactstrap";
import { getUserBlogs, updateBlog, deleteBlog } from "../actions";
import PortButtonDropdown from "../components/ButtonDropdown";

class UserBlogs extends React.Component {
  static async getInitialProps({ req }) {
    let blogs = [];
    try {
      blogs = await getUserBlogs(req);
    } catch (err) {
      console.error(err);
    }
    return { blogs };
  }

  changeBlogStatus(status, blogId) {
    updateBlog({ status }, blogId)
      .then(() => {
        Router.pushRoute("/userBlogs");
      })
      .catch(err => {
        console.error(err.message);
      });
  }

  deleteBlogWarning(blogId) {
    const res = confirm("Delete Blog?");

    if (res) {
      this.deleteBlog(blogId);
    }
  }

  deleteBlog(blogId) {
    deleteBlog(blogId)
      .then(status => {
        Router.pushRoute("/userBlogs");
      })
      .catch(err => console.error(err.message));
  }

  separateBlogs(blogs) {
    const published = [];
    const drafts = [];

    blogs.forEach(blog => {
      blog.status === "draft" ? drafts.push(blog) : published.push(blog);
    });

    return { published, drafts };
  }

  createStatus(status) {
    return status === "draft"
      ? { view: "Publish", value: "published" }
      : { view: "Draft", value: "draft" };
  }

  dropdownOptions = blog => {
    const status = this.createStatus(blog.status);
    return [
      {
        text: status.view,
        handlers: {
          onClick: () => this.changeBlogStatus(status.value, blog._id)
        }
      },
      {
        text: "Delete",
        handlers: { onClick: () => this.deleteBlogWarning(blog._id) }
      }
    ];
  };

  renderBlogs(blogs) {
    return (
      <ul className="user-blogs-list">
        {blogs.map((blog, index) => (
          <li key={index}>
            <Link route={`/blogs/${blog._id}/edit`}>
              <a>{blog.title}</a>
            </Link>
            <PortButtonDropdown items={this.dropdownOptions(blog)} />
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { blogs } = this.props;
    const { published, drafts } = this.separateBlogs(blogs);

    return (
      <BaseLayout
        {...this.props.auth}
        headerType={"landing"}
        className="blog-user-header"
      >
        <div
          className="masthead"
          style={{
            backgroundImage: "url('../static/images/flame-uploading.png')"
          }}
        >
          <div className="overlay" />
          <Container>
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Blog Dashboard</h1>
                  <span className="subheading">Mathias Tiberius Edens</span>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <BasePage className="blog-user-page">
          <Row>
            <Col
              sm="12"
              md={{ size: 6, offset: 3 }}
              className="mx-auto text-center"
            >
              <Link route="/blogs/new">
                <Button className="btn-outline-info dash-blog-btn">
                  Create New Blog
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col md="6" className="mx-auto text-center">
              <h2>Published Blogs</h2>
              {this.renderBlogs(published)}
            </Col>
            <Col md="6" className="mx-auto text-center">
              <h2>Drafts</h2>
              {this.renderBlogs(drafts)}
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth("siteOwner")(UserBlogs);
