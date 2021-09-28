import React from "react";
import { useHistory } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import Navbar from "./Navbar";

const Home = () => {
  const history = useHistory();
  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) return null;

  const login = async () => history.push("/login");

  const logout = async () => oktaAuth.signOut();

  const button = authState.isAuthenticated ? (
    <button className="btn btn-primary" onClick={logout}>
      Logout
    </button>
  ) : (
    <button className="btn btn-primary" onClick={login}>
      Login
    </button>
  );

  return (
    <div>
     
            <Navbar />
      <h3>Welcome to Okta Home Page</h3>
      <p className = "lead">OKTA:	Overseas Korean Traders Associations</p>
    </div>
  );
};
export default Home;

