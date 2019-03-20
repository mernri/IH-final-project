// import React, { Component } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// import ListingCard from "./ListingCard.js";
// import "bulma/css/bulma.css";


// class Listing extends Component {
//   constructor() {
//     super();
//     this.state = { listOfWorkspaces: [] };
//   }

//   getAllWorkspaces = () => {
//     // axios.get(`http://localhost:5000/api/workspaces`)  envoi comme réponse un tableau
//     axios.get(`http://localhost:5000/api/workspaces`).then(responseFromApi => {
//       this.setState({
//         listOfWorkspaces: responseFromApi.data
//       });
//     });
//   };

//   render() {
//     return (
//       <div>

//         <div>
//           {this.state.listOfWorkspaces.map(workspace => {
//             return (
//               <div key={workspace._id}>
//                 <Link to={`/workspaces/${workspace._id}`}>
//                   <h3>{workspace.name}</h3>
//                 </Link>
//                 {/* <p style={{maxWidth: '400px'}} >{workspace.description} </p> */}
//               </div>
//             );
//           })}
//         </div>
//         <div style={{ width: "40%", float: "right" }}>
//           <ListingCard
//             name={this.workspace.name}
//             getData={() => this.getAllWorkspaces()}
//           />
//         </div>

//         {console.log(this.state.listOfWorkspaces)}
//       </div>
//     );
//   }
// }

// export default Listing;
