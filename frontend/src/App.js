import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import { createBrowserHistory } from "history";
import * as React from "react";
import LoginScreen from "./pages/login/LoginScreen";
import itTeam from "./pages/it_team/itTeam";
import register from "./pages/register/register";
import TopNav from "./components/topNav";
import Bachelors from "./pages/bachelors/Bachelors";
import Masters from "./pages/masters/Masters";
import Engineering from "./pages/engineering/engineering";
import Home from "./pages/home/Home";
import down from './pages/down/down';
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
