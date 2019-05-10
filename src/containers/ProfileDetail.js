import React, { Component } from "react";
//import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import axios from "axios";

export default class ProfileDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/users/" +
          this.props.match.params.id
      )
      .then(response => {
        this.setState({
          user: response.data
        });
      });
  }

  render() {
    /*
    const MapWithAMarker = withGoogleMap(props => (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{
          lat: -34.397,
          lng: 150.644
        }}
      >
        <Marker
          position={{
            lat: -34.397,
            lng: 150.644
          }}
        />{" "}
      </GoogleMap>
    ));
            <MapWithAMarker
              containerElement={
                <div
                  style={{
                    height: `258px`
                  }}
                />
              }
              mapElement={
                <div
                  style={{
                    height: `258px`
                  }}
                />
              }
            />*/

    return (
      <div>
        {" "}
        {this.state.user ? (
          <div>
            <div className="profile-detail-user"> {this.state.user.name} </div>{" "}
            <div className="profile-detail-city">
              {" "}
              {this.state.user.address.city}{" "}
            </div>{" "}
            <div className="profile-details">
              <div className="profile-details-left">
                <div> Username </div> <div> Email </div> <div> Phone </div>{" "}
                <div> Website </div> <div> Company </div>{" "}
              </div>{" "}
              <div className="profile-details-right">
                <div> {this.state.user.username} </div>{" "}
                <div> {this.state.user.email} </div>{" "}
                <div> {this.state.user.phone} </div>{" "}
                <div className="profile-details-website">
                  {" "}
                  {this.state.user.website}{" "}
                </div>{" "}
                <div> {this.state.user.company.name} </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="line" />
            <div className="profile-detail-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum has been the industry 's standard dummy text
              ever since the 1500 s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.It has survived
              not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.It was popularised in
              the 1960 s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.{" "}
            </div>{" "}
          </div>
        ) : (
          ""
        )}{" "}
      </div>
    );
  }
}
