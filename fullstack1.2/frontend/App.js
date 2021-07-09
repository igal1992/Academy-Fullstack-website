import './App.css';
import {Router, Route, Switch, NavLink} from 'react-router-dom';
import LoginScreen from "./LoginScreen";
import itTeam from "./itTeam";
import register from "./register";
import NavigationBar from "./NavigationBar";
import createHistory from "history/createBrowserHistory";
import * as React from "react";
import Home from "./Home";
import logo from "./logo.png";
import NavigationBar2 from "./NavigationBar2";
export const history = createHistory();


class App extends React.Component{
  render() {
    return(
        <Router history={history}>
            <NavigationBar/>
            <NavLink to = {"/"}  exact ={true}><img id = "logo" src = {logo} alt = {"Logo"}/></NavLink>
            <NavigationBar2/>
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
