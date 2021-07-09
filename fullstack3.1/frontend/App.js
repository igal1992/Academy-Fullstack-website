import './App.css';
import {Router, Route, Switch, NavLink} from 'react-router-dom';
import LoginScreen from "./LoginScreen";
import itTeam from "./itTeam";
import register from "./register";
import TopNav from "./topNav";
import Bachelors from "./Bachelors";
import Masters from "./Masters";
import { createBrowserHistory } from "history";
import * as React from "react";
import Home from "./Home";
import logo from "./logo.png";
export const history = createBrowserHistory();


class App extends React.Component{
  render() {
    return(
        <Router history={history}>
            <div className = {"logo"}>
                <NavLink to = {"/"}  exact ={true}><img src = {logo} alt = {"Logo"}/></NavLink>
            </div>
            <TopNav/>
            <Switch>
                <Route path={"/"} component={Home} exact={true}/>
                <Route path={"/login"} component={LoginScreen} />
                <Route path ={"/it-team"} component={itTeam}/>
                <Route path ={"/register"} component={register}/>
                <Route path ={"/bachelor"} component={Bachelors}/>
                <Route path ={"/master"} component={Masters}/>
            </Switch>
        </Router>
    );
  }
}



export default App;
