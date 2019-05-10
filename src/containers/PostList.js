import React, { Component } from "react";
import Post from "./Post";
import { fetchPosts } from "../actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class PostList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        {" "}
        {this.props.posts
          ? this.props.posts.map((post, index) => {
              return <Post post={post} key={post.body} index={index + 1} />;
            })
          : ""}{" "}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchPosts
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
