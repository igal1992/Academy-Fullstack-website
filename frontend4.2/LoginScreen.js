import * as React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";


class LoginScreen extends React.Component{
    state = {
        username:"",
        password:"",
        phone:"",
        passMeth:"initial",
        phoneMeth:"none",
    }
    update = (event)=>{
        let input = event.target.name;
        let value = event.target.value;
        this.setState({
            [input]:value
        })
    }
    login = ()=>{
        const loggedIn = {
            username: this.state.username,
            password: this.state.password,
            phone:this.state.phone
        }
        axios.post("http://localhost:8080/app/login",loggedIn)
            .then((response) => {
                if(response.data.fail != null){
                    this.setState({
                        password:"",
                    })
                    alert(response.data.fail);
                }else if(response.data.success != null){
                    this.setState({
                        username:"",
                        password:"",
                        phone:"",
                        passMeth:"initial",
                        phoneMeth:"none"
                    });
                    alert(response.data.success);
                }else if(response.data.runTime != null){
                    alert(response.data.runTime);
                }else if(response.data.error != null){
                    this.setState({
                        username:"",
                    });
                    alert(response.data.error);
                }});
    }
    disablePhone = ()=>{
        this.setState({
            phoneMeth:"none",
            passMeth:"initial",
            username:"",
            password:"",
            phone:"",
        })
    }
    disablePassword = ()=>{
        this.setState({
            passMeth:"none",
            phoneMeth:"initial",
            username:"",
            password:"",
            phone:"",
        })
    }
    render(){
        return <div className = {"login-register-component"} align = {"left"}>
                <div className = {"login"}>
                    <h1>Personal Info Portal</h1>
                    <div align = {"left"} className = {"login-method"}>
                        <button onClick={this.disablePhone} style = {{backgroundColor: this.state.passBack}}>Password</button>
                        <button onClick={this.disablePassword} style = {{backgroundColor: this.state.phoneBack}}>Phone</button>
                    </div>
                    <br/>
                    <form className = {"password-method"} style = {{display: this.state.passMeth}}>
                        <input name = {"username"} placeholder={"Enter User Name"} onChange={this.update} value = {this.state.username}/><br/><br/>
                        <input name = {"password"} placeholder={"Enter password"} type={"password"} onChange={this.update} value = {this.state.password}/><br/><br/>
                    </form>
                    <form className = {"phone-method"} style = {{display: this.state.phoneMeth}}>
                        <input name = {"phone"} placeholder={"Enter phone Number"} onChange={this.update} value = {this.state.phone}/><br/><br/>
                    </form>
                    <button className = {"login-register"} onClick={this.login}>Login</button>
                </div>
                <div className = {"text"}>
                    <h2>
                        Notice when Logging in!
                    </h2>
                    <p>Make sure all your Entered Details are Correct,</p><br/>
                    <p>also Make sure you're a Student in our Academy.</p><br/>
                    <p>alas Contact our IT team with the link:</p><br/><br/>
                    <p>Retrieve Password or Username <strong>--></strong>  </p>
                    <NavLink className = {"navBar"} to ={"/it-team"} exact ={true}>IT-Support</NavLink><br/><br/>
                    <p>Register With Password or Phone <strong>--></strong>  </p>
                    <NavLink className = {"navBar"} to ={"/register"} exact ={true}>Register</NavLink>
                </div>
        </div>
    }
}
export default LoginScreen;