import * as React from "react";
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
        lastName:"",
        validation:true
    }

    update = (event)=>{
        let input = event.target.name;
        let value = event.target.value;
        this.setState({
            [input]:value
        })
    }
    register=()=> {
        this.validateUser();
        if (this.state.validation) {
            const registered = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                phone: this.state.phone
            }
            axios.post("http://localhost:8080/app/register",registered)
                .then(response => console.log(response.data))
         }
        this.setState({
            username:"",
            password:"",
            phone:"",
            email:"",
            emailVer:"",
            firstName:"",
            lastName:"",
            validation:true
        })
    };
    validateUser=()=> {
        const firstNameRe = /^[a-zA-Z]{2,20}$/
        const lastNameRe = /^[a-zA-Z]{2,20}$/
        const userName = /^[a-zA-Z0-9]{2,10}$/
        const passwordRe = /^[a-zA-Z0-9.-@#$%]{4,12}$/
        const emailRe = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
        const phoneRe = /^[0-9]{10}$/
        if(!firstNameRe.test(this.state.firstName)){
            alert("Invalid First Name length: 2-20, most include: a-z, A-Z");
            this.setState({
                validation:false
            });
        }else if(!phoneRe.test(this.state.phone)){
            alert("Invalid Phone Number length: 10, most include: 0-9");
            this.setState({
                validation:false
            });
        }else if(!lastNameRe.test(this.state.lastName)){
            alert("Invalid last Name length: 2-20, most include: a-z, A-Z");
            this.setState({
                validation:false
            });
        }else if(!userName.test(this.state.username)){
            alert("Invalid user Name length: 2-10, most include: a-z, A-Z, 0-9");
            this.setState({
                validation:false
            });
        }else if(!passwordRe.test(this.state.password)){
            alert("Invalid Password length: 4-12 most include: a-z, A-Z, 0-9");
            this.setState({
                validation:false
            });
        }else if(!emailRe.test(this.state.email)){
            alert("Invalid email most include: a-z, A-Z, 0-9 + @ + a-z, A-Z, 0-9 + . + a-z, A-Z");
            this.setState({
                validation:false
            });
        }else if(this.state.email !== this.state.emailVer){
            alert("First email and Second email dont match please enter again");
            this.setState({
                validation:false
            });
        }
    }

    render(){
        return(
            <div align= {"left"}>
                <div className = {"login-register-component"}>
                    <form>
                        <input name = {"firstName"} placeholder={"Enter First Name"} onChange={this.update} value = {this.state.firstName}/><br/><br/>
                        <input name = {"lastName"} placeholder={"Enter Last Name"} onChange={this.update} value = {this.state.lastName}/><br/><br/>
                        <input name = {"username"} placeholder={"Enter User Name"} onChange={this.update} value = {this.state.username}/><br/><br/>
                        <input name = {"password"} placeholder={"Enter password"} type={"password"} onChange={this.update} value = {this.state.password}/><br/><br/>
                        <input name = {"email"} placeholder={"Enter Email"} onChange={this.update} value = {this.state.email}/><br/><br/>
                        <input name = {"emailVer"} placeholder={"Enter Email Again"} onChange={this.update} value = {this.state.emailVer}/><br/><br/>
                        <input name = {"phone"} placeholder={"Enter phone Number"} onChange={this.update} value = {this.state.phone}/><br/><br/>
                        <button id = {"login-register"} onClick={this.register}>Register</button>
                    </form>
                    <div id = {"text"} >
                        <h2>
                            Notice when Registering!
                        </h2>
                        <p>Make sure all your Entered Details are Correct,</p><br/>
                        <p>also Make sure you're a qualified Student in our University.</p><br/>
                        <p>alas Contact our IT team with the link:</p><br/><br/>
                        <p>Retrieve Password or Username <strong>--></strong>  </p>
                        <NavLink className = {"navBar"} to ={"/it-team"} exact ={true}>IT-Support</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
export default register;