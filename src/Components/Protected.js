// import React from 'react';
// import Navbar from "./Navbar";
// import { useState, useEffect} from "react";

// const Protected = () => {
//   const [emailId, setEmailId] = useState("")

//   useEffect(() => {
//     const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
//     setEmailId({
//       emailId: idToken.idToken.claims.email,
//     });
//     console.log("dshcdhk", emailId)
//   }, [emailId])
//   return (
//     <div>
//        <Navbar />
//     <h3>Welcome to the Okta React private Page </h3>
//     <h3> Email: {emailId}  </h3>
//     <p> React okta with the widget warpper </p>
//     </div>
//   )
// }

// export default Protected
import React, { Component } from "react";
import Navbar from "./Navbar";

class Protected extends Component {
  state = {
    currentUserEmail: "",
  };

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
    });
  }

  render() {
    const { currentUserEmail } = this.state;

    return (
      <div>
        <Navbar />
        <br ></br>
        <h3> Welcome to Okta private portal</h3>
<hr></hr>
        <h5>Email: {currentUserEmail}</h5>
        <br ></br>
        <p className ="lead text-center w-50 m-auto" >
          Okta is a customizable, secure, and drop-in solution to add
          authentication and authorization services to your applications. Get
          scalable authentication built right into your application without the
          development overhead, security risks, and maintenance that come from
          building it yourself.
        </p>
      </div>
    );
  }
}

export default Protected;
