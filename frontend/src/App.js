import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import LoginScreen from "./LoginScreen";
import itTeam from "./itTeam";
import register from "./register";
import TopNav from "./topNav";
import Bachelors from "./Bachelors";
import Masters from "./Masters";
import Engineering from "./engineering";
import { createBrowserHistory } from "history";
import * as React from "react";
import Home from "./Home";
import down from './down';
export const history = createBrowserHistory();

class App extends React.Component{
  render() {
    return(
        <Router history = {history}>
            <Route path ={"/down"} component ={(down)}/>
            <TopNav/>
            <div id = {"container"}>
                <Route exact path={"/"} component={(Home)}/>
                <Route path={"/login"} component={(LoginScreen)} />
                <Route path ={"/it-team"} component={(itTeam)}/>
                <Route path ={"/register"} component={(register)}/>
                <Route path ={"/bachelor"} component={(Bachelors)}/>
                <Route path ={"/master"} component={(Masters)}/>
                <Route path ={"/engineering"} component={(Engineering)}/>
            </div>
            <footer>&copy;Copyright 2021 all Rights reserved to Igal Mekonen<i className="fa fa-arrow-right" aria-hidden="true" id ={"footer-arrow"}/></footer>
        </Router>
    );
  }
}



export default App;
