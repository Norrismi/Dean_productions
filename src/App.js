import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Testimonials from "./Components/Testimonials/Testimonials";
import contactComplete from "./Components/ContactComplete/ContactComplete";
import NotFound from './Components/NotFound/NotFound'
//import Admin from "./Components/Fire/Admin";


function App() {
  return (
  
      <Router>
        <Switch>
          {/* <Route path="/admin" component={Admin} /> */}
          <Route path="/contact" component={Contact} />
          <Route path="/contactComplete" component={contactComplete} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/" exact component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
  
  );
}

export default App;
