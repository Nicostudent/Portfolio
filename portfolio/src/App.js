import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import './App.css';
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import NavBar from "./NavBar";
import Skills from "./Skills";


function App() {
  return (
    <Router>
    <div className="app">      
       <NavBar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route  path='/About' component={About}/>
          <Route  path='/Skills' component={Skills}/>
          <Route  path='/Contact' component={Contact}/>
        </Switch>
       <Footer/>
    </div>
    </Router>
  );
}

export default App;
