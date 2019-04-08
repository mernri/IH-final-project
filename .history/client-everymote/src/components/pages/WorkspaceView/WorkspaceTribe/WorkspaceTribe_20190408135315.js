import React, { Component } from "react";
import axios from "axios";
import AuthService from "../../AuthPages/Authservices.js";
import TribeMemberCard from "./TribeMemberCard.js";

class WorkspaceTribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInTribe: false
    };
  }

  service = new AuthService();

  componentWillMount() {
    this.getWorkspaceTribe().then(() => {
      this.isUserInTribe()
      console.log(this.state)

    })
  }

  getWorkspaceTribe =  async () => {
    await axios
      .get(
        `http://localhost:5000/api/workspace/${this.props.workspaceId}/tribe`
      )
      .then(responseFromApi => {
        const theTribe = responseFromApi.data;
        this.setState(theTribe);
      })
      .catch(err => {
        console.log(err);
      });
      await this.isUserInTribe()
  };



  joinTheTribe = () => {
    this.service
      .loggedin()
      .then(user => {
        return user._id;
      })
      .then(userId => {
        axios
          .put(
            `http://localhost:5000/api/workspace/${
              this.props.workspaceId
            }/tribe/${userId}`
          )
          .then(tribeUsers => {
            this.setState(tribeUsers)
            this.setState({userInTribe: true}) ;
          });
      });
  };

  isUserInTribe = () => {
    this.service
      .loggedin()
      .then(user => {
        this.setState({user: user})
        console.log('this state user', this.state.user)
        return user._id;
      }).then(userId => {
        this.state.users.includes(userId) ? this.setState({userInTribe: true}) : this.setState({userInTribe: false})
        console.log("this.state.userintribe", this.state.userInTribe)
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        {/* Manque une condition : si l'utilisateur n'est pas connecté et qu'il clique sur "Join the tribe" il faut le rediriger vers le login */}
        <div className="join-tribe-button">
        {
          (!this.state.userInTribe && this.state.user) ? 
          (<div className="button" onClick={() => {this.joinTheTribe()}}>
            Join the Tribe
          </div>) : (<div >
            <strong> You're either in a tribe or your not connected. whatever, I don't care.</strong>
          </div>)
          
        }        
        </div>

        <div> 
          <TribeMemberCard user={this.props.user[0]}/>
        </div>




        
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
