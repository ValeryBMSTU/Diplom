import React from "react";
import * as axios from "axios";
import Profile from "./Profile"

class ProfileAPI extends React.Component {

  componentDidMount() {
    debugger;
    let id = this.props.match.params.id
    if (!id) {
      id = 2
    }
    axios.get("http://localhost:8080/users/"+id+"/profile").then(response => {
      this.props.setProfile(response.data.body.profile);
    });
  }

  addSim = (sim) => {
    this.addSim();
  };

  changeSimTitle = (text) => {
    this.changeSimTitle(text);
  };

  render() {

    return (
      <>
        <Profile profilePage={this.props.profilePage} addSim={this.props.addSim}
                 setNewSimTitle={this.props.setNewSimTitle} setProfile={this.props.setProfile}/>
      </>
    )
  };
};

export default ProfileAPI;