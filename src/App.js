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




function App() {
  const user=false;
  return (
    <Router>
    <NavBar></NavBar>
    <Home />
      <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route  path="/Register"> {user? <Home/> : <Register/>} </Route>
          <Route path="/login">  {user? <Home/> : <SignIn />}</Route>
          {/* <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route> */}
          <Route path="/Write"> {user? <Write /> : <Register/>} </Route>
          <Route path="/Settings"> {user? <Settings/> : <Register/>} </Route>
          <Route path="/post/:postId">
            <Single/>
          </Route>
          
        </Switch>
    </Router>
  );
}

export default App;
