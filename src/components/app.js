import React, { Component } from "react";
import PostList from "../containers/PostList";
import PostDetail from "../containers/PostDetail";
import ProfileDetail from "../containers/ProfileDetail";
import Modal from "../containers/Modal";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="nav-bar">
          <div className="nav-bar-left">
            <Router>
              <Link to={"/"}>
                <div alt="logo" className="logo" />
              </Link>{" "}
            </Router>{" "}
            <div className="Posts"> Posts </div>{" "}
          </div>{" "}
          <div className="lgn-btn"> Login </div>{" "}
        </div>{" "}
        <Router>
          <div className="container">
            <Route path="/" exact component={PostList} />{" "}
            <Route path="/post/:id" component={PostDetail} />{" "}
            <Route path="/profile/:id" component={ProfileDetail} />{" "}
          </div>{" "}
        </Router>{" "}
        <div className="footer">
          <div className="footer-text-container">
            <div className="footer-text1"> Thank you for supporting us! </div>{" "}
            <div className="footer-text2">
              {" "}
              Let 's get in touch on any of these platforms.{" "}
            </div>{" "}
          </div>{" "}
          <div className="icons-container">
            <div className="icon">
              {" "}
              <i className="fab fa-twitter"> </i>{" "}
            </div>{" "}
            <div className="icon">
              {" "}
              <i className="fab fa-facebook"> </i>{" "}
            </div>{" "}
            <div className="icon">
              {" "}
              <i className="fab fa-dribbble"> </i>{" "}
            </div>{" "}
            <div className="icon">
              {" "}
              <i className="fab fa-github"> </i>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="line"> </div>{" "}
        <div className="footer-bottom-container">
          <div className="copyright">
            {" "}
            © 2018 <span className="company-name"> Şikayetvar </span>{" "}
          </div>{" "}
          <div className="footer-posts"> Posts </div>{" "}
        </div>{" "}
        {this.props.activePost ? (
          <Modal activePost={this.props.activePost} />
        ) : (
          ""
        )}{" "}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activePost: state.modal.activePost
  };
}

export default connect(mapStateToProps)(App);
