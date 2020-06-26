import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Testimonials from "./Components/Testimonials/Testimonials";
import NotFound from './Components/NotFound/NotFound'
//import Admin from "./Components/Fire/Admin";


function App() {
  return (
  
      <Router>
        <Switch>
          {/* <Route path="/admin" component={Admin} /> */}
          <Route path="/contact" component={Contact} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/" exact component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
  
  );
}

export default App;
