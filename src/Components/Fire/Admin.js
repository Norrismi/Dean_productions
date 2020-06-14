import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Login from './Login'
import SignUp from './SignUp'

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Nav />
        <SignUp/>
        <Login/>
      </div>
    );
  }
}

export default Admin;
