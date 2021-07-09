import * as React from "react";
import logo from "./logo.png";
import {NavLink} from "react-router-dom";
import axios from "axios";


class register extends React.Component{
    state = {
        username:"",
        password:"",
        phone:"",
        email:"",
        emailVer:"",
        firstName:"",
        lastName:""
    }
    update = (event)=>{
        let input = event.target.name;
        let value = event.target.value;
        this.setState({
            [input]:value
        })
    }
    register=()=> {
        if (this.state.emailVer === this.state.email) {
            axios.post("http://localhost:8080/register",null,{
                params: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    username: this.state.username,
                    password: this.state.password,
                    email: this.state.email,
                    phone: this.state.phone
                }
            }).then((response) => {
                if (response.data.success) {
                    alert("User registered successfully")
                }
            })
         }else{
            alert("Email dosen't Match Enter Again!")
            this.setState({
                email:"",
                emailVer:"",
            })
        }
        this.setState({
            username:"",
            password:"",
            phone:"",
            email:"",
            emailVer:"",
            firstName:"",
            lastName:""
        })
    };

    render(){
        return(
            <div align= {"left"}>
                <div className = {"login-register-component"}>
                    <div>
                        <input name = {"firstName"} placeholder={"Enter First Name"} onChange={this.update} value = {this.state.firstName}/>
                        <br/>
                        <br/>
                        <input name = {"lastName"} placeholder={"Enter Last Name"} onChange={this.update} value = {this.state.lastName}/>
                        <br/>
                        <br/>
                        <input name = {"username"} placeholder={"Enter User Name"} onChange={this.update} value = {this.state.username}/>
                        <br/>
                        <br/>
                        <input name = {"password"} placeholder={"Enter password"} type={"password"} onChange={this.update} value = {this.state.password}/>
                        <br/>
                        <br/>
                        <input name = {"email"} placeholder={"Enter Email"} onChange={this.update} value = {this.state.email}/>
                        <br/>
                        <br/>
                        <input name = {"emailVer"} placeholder={"Enter Email Again"} onChange={this.update} value = {this.state.emailVer}/>
                        <br/>
                        <br/>
                        <input name = {"phone"} placeholder={"Enter phone Number"} onChange={this.update} value = {this.state.phone}/>
                        <br/>
                        <br/>
                        <button id = {"login-register"} onClick={this.register}>Register</button>
                    </div>
                    <div id = {"text"} >
                        <h2>
                            Notice when Registering!
                        </h2>
                        <p>Make sure all your Entered Details are Correct,</p>
                        <br/>
                        <p>also Make sure you're a qualified Student in our University.</p>
                        <br/>
                        <p>alas Contact our IT team with the link:</p>
                        <br/>
                        <br/>
                        <p>Retrieve Password or Username <strong>--></strong>  </p>
                        <NavLink className = {"navBar"} to ={"/it-team"} exact ={true}>IT-Support</NavLink>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}
export default register;