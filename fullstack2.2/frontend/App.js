import './App.css';
import {Router, Route, Switch, NavLink} from 'react-router-dom';
import LoginScreen from "./LoginScreen";
import itTeam from "./itTeam";
import register from "./register";
import TopNav from "./topNav";
import { createBrowserHistory } from "history";
import * as React from "react";
import Home from "./Home";
import logo from "./logo.png";
export const history = createBrowserHistory();


class App extends React.Component{
  render() {
    return(
        <Router history={history}>
            <TopNav/>
            <NavLink to = {"/"}  exact ={true}><img id = {"logo"} src = {logo} alt = {"Logo"}/></NavLink>
            <Switch>
                <Route path={"/"} component={Home} exact={true}/>
                <Route path={"/login"} component={LoginScreen} />
                <Route path ={"/it-team"} component={itTeam}/>
                <Route path ={"/register"} component={register}/>
            </Switch>
        </Router>
    );
  }
}



export default App;
