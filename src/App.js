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
import Post from './components/Post/Post';
import { useContext } from "react";
import { Context } from "./context/Context";




function App() {
  const { user } = useContext(Context);
  // const user=false;
  return (
    <Router>
    <NavBar></NavBar>    
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <SignIn/>}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
          
        </Switch>
    </Router>
  );
}

export default App;
