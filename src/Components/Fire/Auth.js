import React, { useEffect, useState } from "react";
import app from "./Base";

//store auth status and update react componentry (status change)

// export const AuthContext = React.createContext();

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState('');  ////////

//   useEffect(() => {
//     app.auth().onAuthStateChanged(setCurrentUser);
//   }, []);

//   return (
//     <AuthContext.Provider value={{ currentUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState([], () => {
    const localData = localStorage.getItem("userData");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
    localStorage.setItem("userData", JSON.stringify(currentUser));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
