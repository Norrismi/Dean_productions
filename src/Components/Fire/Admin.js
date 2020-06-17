import React, { Component } from "react";
import Nav from "../Nav/Nav";
// import Login from "./Login";
// import SignUp from "./SignUp";
// import Logout from "./Logout";
// import app from "./Base";
import ShowMessage from "../Message/ShowMessage";
import { auth, provider } from "./Base";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
    email:{}
    };
  }
  login = () => {
    auth.signInWithPopup(provider).then((result) => {
      this.setState({
        user: result.user,
      });
    });
  };
  logout = () => {
    auth.signOut()
  };
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      console.log(user.email)
      if (user) {
        this.setState( {email: user.email, user} );
      }
    });
  }
  render() {
    const {email} = this.state
    const admin_dean = 'dean26mason@gmail.com'
    let authButton = this.state.user ? (
      <button onClick={this.logout}>Log Out</button>
    ) : (
      <button onClick={this.login}>Log In</button>
    );
    let admin = email === admin_dean ? (
      <ShowMessage />
    ) : (
      <h4>Log in for Admin tools</h4>
    );
    return (
      <div>
        <Nav />
        {authButton}
        {admin}
      </div>
    );
  }
}

export default Admin;
