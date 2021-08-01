import './App.css';
import {Route, BrowserRouter as Router, withRouter} from 'react-router-dom';
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
export const history = createBrowserHistory();


class App extends React.Component{
  render() {
    return(
        <Router>
            <TopNav/>
            <div id = {"container"}>
                <Route exact path={"/"} component={withRouter(Home)}/>
                <Route path={"/login"} component={withRouter(LoginScreen)} />
                <Route path ={"/it-team"} component={withRouter(itTeam)}/>
                <Route path ={"/register"} component={withRouter(register)}/>
                <Route path ={"/bachelor"} component={withRouter(Bachelors)}/>
                <Route path ={"/master"} component={withRouter(Masters)}/>
                <Route path ={"/engineering"} component={withRouter(Engineering)}/>
            </div>
            <footer>&copy;Copyright 2021 all Rights reserved to Igal Mekonen <i className="fa fa-arrow-right" aria-hidden="true"/></footer>
        </Router>
    );
  }
}



export default App;
