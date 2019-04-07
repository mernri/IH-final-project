import React, { Component } from "react";
import axios from "axios";


 class WorkspaceTribe extends Component {

//   getWorkspaceTribe = () => {
//     const { params } = this.props.match;
//     console.log("this.props.match", this.props.match)
//     axios
//       .get(`http://localhost:5000/api/tribe/${params.id}`)
//       .then(responseFromApi => {
//         const theWorkspace = responseFromApi.data;
//         this.setState(theWorkspace);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

componentWillMount() {
    console.log("l'id du workspace", this.props.workspaceId)
}


  render() {
    return (
      <div>
        <ul>
          <li>
            > If no one is in the tribe yet, you'll have a "no one in this tribe
            yet :( + button "Join the tribe"
          </li>
          <li>
            > If there are already tribe members : you'll see the tribe members
            + button "join the tribe"
          </li>
          <li>
            > If you're connected and you click on join the tribe : you are
            added to the tribe + you see your card in the first position of the
            tribe
          </li>
          <li>
            > If you're not connected and you click on join the tribe : you are
            redirect to the login page > then to the wokspace one you're logged
            in
          </li>
          <li>
            > If you want to leave a tribe : you can click on the red cross on
            your profile card or remove the tribe from your profile
          </li>
        </ul>
      </div>
    );
  }
}

export default WorkspaceTribe;
