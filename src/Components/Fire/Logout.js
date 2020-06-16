import React, { useCallback, useContext } from "react";
import { AuthContext } from "./Auth";
import app from "./Base";

let Logout = () => {
  const { currentUser } = useContext(AuthContext);

  const logout = useCallback(async (event) => {
    event.preventDefault();
    try {
      await app.auth().signOut();
    } catch (error) {
      alert(error);
    }
  }, []);
  console.log(currentUser);

//   if (currentUser){
//       return  <button onClick={logout}>Log Out</button>
//   }

  return (
    <div className="logout">
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Logout;
