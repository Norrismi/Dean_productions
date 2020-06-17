import React, { Component } from "react";
import app from "./Base";
import ShowMessage from "../Message/ShowMessage";
import Home from "../Home/Home";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    app.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  };
  render() {
    console.log(this.state.user);
    return (
      <div>
        <div className="filler"></div>
        {this.state.user ? <ShowMessage /> : <Home />}
      </div>
    );
  }
}

export default Auth;

// export const AuthContext = React.createContext();

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState([], () => {
//     const localData = localStorage.getItem("userData");
//     return localData ? JSON.parse(localData) : [];
//   });

//   useEffect(() => {
//     app.auth().onAuthStateChanged(setCurrentUser);
//     localStorage.setItem("userData", JSON.stringify(currentUser));
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         currentUser,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
