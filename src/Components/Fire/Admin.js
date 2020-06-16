import React, { useContext } from "react";
import { AuthContext } from "./Auth";
import Nav from "../Nav/Nav";
import Login from "./Login";
import SignUp from "./SignUp";
import Logout from "./Logout";

const Admin = () => {
  const { currentUser } = useContext(AuthContext);

  let auth = !currentUser ?   (<SignUp />,  <Login /> ): null;

  let user = currentUser ? <Logout /> : null;

  return (
    <div>
      <Nav />
      {auth}
      {user}
    </div>
  );
};

export default Admin;
