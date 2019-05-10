import React, { Component } from "react";
import { updatePost, closeModal } from "../actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postTitle: this.props.activePost.title,
      postBody: this.props.activePost.body
    };
  }

  onPostTitleChange(value) {
    this.setState({
      postTitle: value
    });
  }

  onPostBodyChange(value) {
    this.setState({
      postBody: value
    });
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-title"> Düzenle </div>{" "}
        <div className="modal-header-title"> Title </div>{" "}
        <input
          className="modal-title-input"
          value={this.state.postTitle}
          onChange={e => this.onPostTitleChange(e.target.value)}
        />{" "}
        <div className="modal-header-body"> Body </div>{" "}
        <textarea
          className="modal-body-input"
          value={this.state.postBody}
          onChange={e => this.onPostBodyChange(e.target.value)}
        />{" "}
        <div className="line" />
        <div
          className="modal-update-button"
          onClick={() =>
            this.props.updatePost(
              {
                body: this.state.postBody,
                title: this.state.postTitle
              },
              this.props.activePost
            )
          }
        >
          {" "}
          GÜNCELLE{" "}
        </div>{" "}
        <div
          className="modal-close-button"
          onClick={() => this.props.closeModal()}
        >
          &#10006;
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updatePost, closeModal }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(Modal);
