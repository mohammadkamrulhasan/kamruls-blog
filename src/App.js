import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import Home from './Pages/Home/Home';
import Single from './Pages/Single/Single';
import Write from './Pages/Write/Write';
import SignIn from './Pages/SignIn/SignIn';
import Register from './Pages/Register/Register';
import Settings from './Pages/Settings/Settings';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <Router>
    <NavBar></NavBar>
    <Register></Register>
    {/* <SignIn></SignIn>
    <Settings></Settings>
    <Write></Write>
    <Single></Single>
    < Home></Home> */}
    <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route exact path="/Register">
            <Register />
          </Route>
          <Route path="/SignIn">
            <SignIn />
          </Route>
          {/* <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route> */}
          <Route path="/Write">
            <Write />
          </Route>
          
        </Switch>
    </Router>
  );
}

export default App;
