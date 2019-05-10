import React, { Component } from "react";
import { activeModal, deletePost } from "../actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="post" key={this.props.post}>
        <span className="post-index"> {this.props.index} </span>{" "}
        <span className="post-detail"> {this.props.post.body} </span>{" "}
        <div className="button-container">
          <Link to={"/post/" + this.props.post.id}>
            <div className="btn-detail"> DETAY </div>{" "}
          </Link>{" "}
          <div
            className="btn-edit"
            onClick={() => this.props.activeModal(this.props.post)}
          >
            {" "}
            DÜZENLE{" "}
          </div>{" "}
          <div
            className="btn-delete"
            onClick={() => this.props.deletePost(this.props.post)}
          >
            {" "}
            SİL{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      activeModal,
      deletePost
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(Post);
