import * as React from "react";
import swal from "sweetalert";
import { withRouter } from 'react-router';
import './Login.css';
import Cookies from "js-cookie"

const oneDay = 1000 * 24 * 60 * 60;





class LoginScreen extends React.Component{
    state = {
        studentUsername:"",
        studentPassword:"",
        instructorUsername:"",
        instructorPassword:"",
        instructorButton:"",
        studentButton:"button_active",
        studentMeth:"initial",
        instructorMeth:"none",
    }
    componentDidMount(){
        document.title = "BL Academy - Login";
    }
    update = (event)=>{
        let input = event.target.name;
        let value = event.target.value;
        this.setState({
            [input]:value
        })
    }
    loginInstructor = (e)=>{
        e.preventDefault();
        const loggedIn = {
            username:this.state.instructorUsername,
            password:this.state.instructorPassword
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials:  "include",
            body: JSON.stringify(loggedIn)
        };
        fetch("http://localhost:8080/api/login/instructor",requestOptions)
        .then(response => {
            if(response.status === 200){
                response.json().then(data => {
                    Cookies.set("user",JSON.stringify(data),{expires:1,path:""})
                    var history = this.props.history;
                    window.location.reload(history.push(""));
                });
            }else if(response.status === 406){
                this.setState({
                    instructorPassword:""
                })
                swal("Incorrect password!");
            }else if(response.status === 404){
                this.setState({
                    instructorUsername:"",
                    instructorPassword:""
                    
                })
                swal("username dosent exist!")
            }
        }).catch(()=>{this.props.history.push("/down");})  
       
    }
    loginStudent = (e)=>{
        e.preventDefault();
        const loggedIn = {
            username:this.state.studentUsername,
            password:this.state.studentPassword
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials:  "include",
            body: JSON.stringify(loggedIn)
        };
        fetch("http://localhost:8080/api/login/student",requestOptions)
        .then(response => {
            if(response.status === 200){
                response.json().then(data => {
                    Cookies.set("user",JSON.stringify(data),{expires:1,path:""})
                    var history = this.props.history;
                    window.location.reload(history.push(""));
                })
            }else if(response.status === 406){
                this.setState({
                    studentPassword:""
                })
                swal("Incorrect password!");
            }else if(response.status === 404){
                this.setState({
                    studentUsername:"",
                    studentPassword:""
                })
                swal("username dosent exist!")
            }
        }).catch(()=>{this.props.history.push("/down");})
    }
    disableInstructor = ()=>{
        this.setState({
            instructorMeth:"none",
            studentMeth:"initial",
            studentUsername:"",
            studentPassword:"",
            instructorUsername:"",
            instructorPassword:"",
            instructorButton:"",
            studentButton:"button_active"
        })
    }
    disableStudent = ()=>{
        this.setState({
            studentMeth:"none",
            instructorMeth:"initial",
            studentUsername:"",
            studentPassword:"",
            instructorUsername:"",
            instructorPassword:"",
            instructorButton:"button_active",
            studentButton:""
        })
    }
    render(){
        return <div className = {"login-register-component"}>
                <div className = {"login"}>
                    <h1 className={"login-register-header"}>Login {this.state.studentButton ? " - Student": " - Instructor"}</h1>
                    <div className = {"login-method"}>
                        <button onClick={this.disableInstructor} id = {this.state.studentButton}>Student</button>
                        <button onClick={this.disableStudent} id = {this.state.instructorButton}>Instructor</button>
                    </div>
                    <br/>
                    <form className = {"student-method"} style = {{display: this.state.studentMeth}} onSubmit={this.loginStudent}>
                        <input name = {"studentUsername"} placeholder={"Enter User Name"} type = {"text"} onChange={this.update} value = {this.state.studentUsername} required/><br/><br/>
                        <input name = {"studentPassword"} placeholder={"Enter password"} type={"password"} onChange={this.update} value = {this.state.studentPassword} required/><br/><br/>
                        <input className={"login-register"} type = "submit" value = "Login"/>
                    </form>
                    <form className = {"instructor-method"} style = {{display: this.state.instructorMeth}} onSubmit={this.loginInstructor}>
                        <input name = {"instructorUsername"} placeholder={"Enter User Name"} type = {"text"} onChange={this.update} value = {this.state.instructorUsername} required/><br/><br/>
                        <input name = {"instructorPassword"} placeholder={"Enter password"} type={"password"} onChange={this.update} value = {this.state.instructorPassword} required/><br/><br/>
                        <input className={"login-register"} type = "submit" value = "Login"/>
                    </form>
                </div>
        </div>
    }
}
export default withRouter(LoginScreen);