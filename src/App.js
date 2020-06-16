import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Testimonials from './Components/Testimonials/Testimonials'
import contactComplete from './Components/ContactComplete/ContactComplete'
import ShowMessage from './Components/Message/ShowMessage'
//import PrivateRoute from './Components/Fire/PrivateRoute'
import Admin from './Components/Fire/Admin'
import { AuthProvider } from './Components/Fire/Auth'
// import Login from './components/fire/Login'
// import SignUp from './components/fire/SignUp'

//import { AuthProvider } from "./components/fire/Auth";
// import PrivateRoute from './components/fire/PrivateRoute'

function App() {
  return (
    <AuthProvider>
  
      <Router>
        <div>

          {/* <PrivateRoute path="/messageFetch" component={MessageFetch} /> */}
          {/* <Route path="/Login" component={Login} /> */}
          {/* <Route path="/SignUp" component={SignUp} /> */}
          <Route path="/ShowMessage" component={ShowMessage} />
          <Route path="/admin" component={Admin} />
          <Route path="/contact" component={Contact} />
          <Route path="/contactComplete" component={contactComplete} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/" exact component={Home} />
          {/* <Route path="*" component={() => "404 path not found"} /> */}
        </div>
      </Router>
    </AuthProvider>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function contact() {
//   return <h2>contact</h2>;
// }

// function testimonials() {
//   return <h2>testimonials</h2>;
// }

export default App;
