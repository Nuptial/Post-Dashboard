import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserDetail } from "../actions/index";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
      user: ""
    };
  }

  componentWillMount() {
    axios
      .get(
        "http://jsonplaceholder.typicode.com/posts/" +
          this.props.match.params.id
      )
      .then(response => {
        this.setState({
          post: response.data
        });
        axios
          .get(
            "http://jsonplaceholder.typicode.com/users/" + response.data.userId
          )
          .then(response => {
            this.setState({
              user: response.data
            });
          });
      });
  }

  render() {
    return (
      <div>
        <div className="post-detail-title"> {this.state.post.title} </div>{" "}
        <div className="post-detail-body"> {this.state.post.body} </div>{" "}
        <Link to={"/profile/" + this.state.user.id}>
          <div className="post-detail-user"> {this.state.user.name} </div>{" "}
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    userDetail: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getUserDetail
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
