import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";


const Navbar = () => {
  const history = useHistory();
  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) return null;

  const login = async () => history.push("/login");

  const logout = async () => oktaAuth.signOut();

  const signin = async () => history.push("/login");

  const signOut = async () => oktaAuth.signOut();

  const button = authState.isAuthenticated ? (
    <button className="btn btn-secondary" onClick={logout}>
      Logout
    </button>
  ) : (
    <button className="btn btn-primary" onClick={login}>
      Login
    </button>
  );

  
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light  bg-dark container">
        <Link className="navbar-brand text-white" to="#">
          OktaApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active ">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/unAuth">
              unauthorizedUser
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/protected">
                Protected
              </Link>
            </li>
            <li className = "nav-item">
              <Link className = "nav-link text-white" to = "/signinform">
                custom sign in
              </Link>

            </li>
            {/* <li className="nav-item   mr-2    ">
               {signinbtn}
            </li> */}
            <li className="nav-item ">{button} </li>
           
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
