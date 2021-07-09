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
        axios.post("http://localhost:8080/login",null,{
            params: {
                username: this.state.username,
                password: this.state.password,
            }
        }).then((response) => {
            if (response.data.success) {
                alert("User logged in successfully")
            }
        })
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
        return <div class = {"login-register-component"} align = {"left"}>
                <div id = {"login"}>
                    <h1>Personal Info Portal</h1>
                    <div align = {"left"} id = {"login-method"}>
                        <button onClick={this.disablePhone} style = {{backgroundColor: this.state.passBack}}>Password</button>
                        <button onClick={this.disablePassword} style = {{backgroundColor: this.state.phoneBack}}>Phone</button>
                    </div>
                    <br/>
                    <div id = {"password-method"} style = {{display: this.state.passMeth}}>
                        <input name = {"username"} placeholder={"Enter User Name"} onChange={this.update} value = {this.state.username}/>
                        <br/>
                        <br/>
                        <input name = {"password"} placeholder={"Enter password"} type={"password"} onChange={this.update} value = {this.state.password}/>
                        <br/>
                        <br/>
                    </div>
                    <div id = {"phone-method"} style = {{display: this.state.phoneMeth}}>
                        <input name = {"phone"} placeholder={"Enter phone Number"} onChange={this.update} value = {this.state.phone}/>
                        <br/>
                        <br/>
                    </div>
                    <button id = {"login-register"} onClick={this.login}>Login</button>
                </div>
                <div id = {"text"}>
                    <h2>
                        Notice when Logging in!
                    </h2>
                    <p>Make sure all your Entered Details are Correct,</p>
                    <br/>
                    <p>also Make sure you're a Student in our University.</p>
                    <br/>
                    <p>alas Contact our IT team with the link:</p>
                    <br/>
                    <br/>
                    <p>Retrieve Password or Username <strong>--></strong>  </p>
                    <NavLink className = {"navBar"} to ={"/it-team"} exact ={true}>IT-Support</NavLink>
                    <br/>
                    <br/>
                    <p>Register With Password or Phone <strong>--></strong>  </p>
                    <NavLink className = {"navBar"} to ={"/register"} exact ={true}>Register</NavLink>
                </div>
        </div>
    }
}
export default LoginScreen;