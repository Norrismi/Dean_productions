import React, { Component, useCallback, useContext } from "react";
//import { AuthContext } from "./Auth";
import app from "./Base";

// let Logout = () => {
//   const { currentUser } = useContext(AuthContext);

//   const logout = useCallback(async (event) => {
//     event.preventDefault();
//     try {
//       await app.auth().signOut();
//     } catch (error) {
//       alert(error);
//     }
//   }, []);
//   console.log(currentUser);

//   if (currentUser){
//       return  <button onClick={logout}>Log Out</button>
//   }

//   return (
//     <div className="logout">
//       <button onClick={logout}>Log Out</button>
//     </div>
//   );
// };

// export default Logout;

class Logout extends Component {
  logout() {
    app.auth().signOut();
  }
  render() {
    return (
      <div className="logout">
        <button onClick={this.logout}>Log Out</button>
      </div>
    );
  }
}

export default Logout;
