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
                .then(response => {
                    if(response.data.fail != null){
                        this.setState({
                            username:"",
                        })
                        alert(response.data.fail);
                    }else if(response.data.success != null){
                        this.setState({
                            username:"",
                            password:"",
                            phone:"",
                            email:"",
                            emailVer:"",
                            firstName:"",
                            lastName:"",
                            validation:true
                        });
                        alert(response.data.success);
                    }else if(response.data.runTime != null){
                        alert(response.data.runTime);
                    }});
        }
    };
    validateUser=()=> {
        const firstNameRe = /^[a-zA-Z]{2,20}$/
        const lastNameRe = /^[a-zA-Z]{2,20}$/
        const userName = /^[a-zA-Z0-9]{2,10}$/
        const passwordRe = /^([a-zA-Z0-9.-@#$%]){4,12}$/
        const emailRe = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
        const phoneRe = /^[0-9]{10}$/
        if(!firstNameRe.test(this.state.firstName)){
            this.setState({
                firstName: "",
                validation:false
            });
        }else if(!phoneRe.test(this.state.phone)){
            this.setState({
                phone: "",
                validation:false
            });
        }else if(!lastNameRe.test(this.state.lastName)){
            this.setState({
                lastName: "",
                validation:false
            });
        }else if(!userName.test(this.state.username)){
            this.setState({
                username: "",
                validation:false
            });
        }else if(!passwordRe.test(this.state.password)){
            this.setState({
                password: "",
                validation:false
            });
        }else if(!emailRe.test(this.state.email)){
            this.setState({
                email: "",
                validation:false
            });
            console.log("Invalid email most include: a-z, A-Z, 0-9 + @ + a-z, A-Z, 0-9 + . + a-z, A-Z");
        }else if(this.state.email !== this.state.emailVer){
            this.setState({
                emailVer:"",
                email: "",
                validation:false
            });
            console.log("First email and Second email dont match please enter again");
        }
    }

    render(){
        return(
            <div align= {"left"}>
                <div className = {"login-register-component"}>
                    <div>
                        <form>
                            <div className={"inputField"}><input name = {"firstName"} placeholder={"Enter First Name"} onChange={this.update} value = {this.state.firstName}/><div className={"exclamation-cover"}><i id = {"exclamation"} className="fa fa-exclamation-circle" aria-hidden="true"/><p className={"hint"}>Length: 2-20, Most include: a-z, A-Z</p></div><br/><br/></div>
                            <div className={"inputField"}><input name = {"lastName"} placeholder={"Enter Last Name"} onChange={this.update} value = {this.state.lastName}/><div className={"exclamation-cover"}><i id = {"exclamation"} className="fa fa-exclamation-circle" aria-hidden="true"/><p className={"hint"}>Length: 2-20, Most include: a-z, A-Z</p></div><br/><br/></div>
                            <div className={"inputField"}><input name = {"username"} placeholder={"Enter User Name"} onChange={this.update} value = {this.state.username}/><div className={"exclamation-cover"}><i id = {"exclamation"} className="fa fa-exclamation-circle" aria-hidden="true"/><p className={"hint"}>Length: 2-10, Most include: a-z, A-Z, 0-9</p></div><br/><br/></div>
                            <div className={"inputField"}><input name = {"password"} placeholder={"Enter password"} type={"password"} onChange={this.update} value = {this.state.password}/><div className={"exclamation-cover"}><i id = {"exclamation"} className="fa fa-exclamation-circle" aria-hidden="true"/><p className={"hint"}>Length: 4-12 Most include: a-z, A-Z, 0-9</p></div><br/><br/></div>
                            <div className={"inputField"}><input name = {"email"} placeholder={"Enter Email"} onChange={this.update} value = {this.state.email}/><div className={"exclamation-cover"}><i id = {"exclamation"} className="fa fa-exclamation-circle" aria-hidden="true"/><p className={"hint"}>Most include: a-z, A-Z, 0-9 + @ + a-z, A-Z, 0-9 + . + a-z, A-Z</p></div><br/><br/></div>
                            <div className={"inputField"}><input name = {"emailVer"} placeholder={"Enter Email Again"} onChange={this.update} value = {this.state.emailVer}/><div className={"exclamation-cover"}><i id = {"exclamation"} className="fa fa-exclamation-circle" aria-hidden="true"/><p className={"hint"}>Most include: a-z, A-Z, 0-9 + @ + a-z, A-Z, 0-9 + . + a-z, A-Z</p></div><br/><br/></div>
                            <div className={"inputField"}><input name = {"phone"} placeholder={"Enter phone Number"} onChange={this.update} value = {this.state.phone}/><div className={"exclamation-cover"}><i id = {"exclamation"} className="fa fa-exclamation-circle" aria-hidden="true"/><p className={"hint"}>Length: 10, Most include: 0-9</p></div><br/><br/></div>
                        </form>
                        <button className = {"login-register"} onClick={this.register}>Register</button>
                    </div>
                    <div className = {"text"} >
                        <h2>
                            Notice when Registering!
                        </h2>
                        <p>Make sure all your Entered Details are Correct,</p><br/>
                        <p>also Make sure you're a qualified Student in our Academy.</p><br/>
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