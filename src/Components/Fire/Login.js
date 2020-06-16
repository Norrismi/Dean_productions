import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./Base";
import { AuthContext } from "./Auth";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      let adminEmail = 'dean26mason@gmail.com'

      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
          //if(email != adminEmail) throw(error) 'sorry not an Admin';
        history.push("/showMessage");
      }

      catch (error) {
        alert(error);
      }
    },
    [history]
  );



  const { currentUser } = useContext(AuthContext); ///
  console.log(currentUser);

  //   if (currentUser.email !== 'dean26mason@gmail') {
  //     return <Redirect to="/" />;
  //   }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      {/* <div className="logout">
                    <button onClick={this.logout}>Log Out</button>
                </div> */}
    </div>
  );
};

export default withRouter(Login);
