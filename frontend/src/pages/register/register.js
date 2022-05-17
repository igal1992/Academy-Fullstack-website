import * as React from "react";
import swal from 'sweetalert';
import './Register.css';
import { withRouter } from 'react-router';



class register extends React.Component {

    state = {
        username: "",
        password: "",
        studentMeth:"initial",
        instructorMeth:"none",
        instructorButton:"",
        studentButton:"button_active",
        phone: "",
        email: "",
        firstName: "",
        lastName: "",
        class:"none",
        faculties:[],
        courses:[],
        accountDescription:[]

    }
    async componentDidMount(){
        document.title = "BL Academy - Register";
        try{
            const response_course = await fetch("https://64ro0p4yue.execute-api.us-east-2.amazonaws.com/api/course/getData");
            const response_accountDescription = await fetch(`https://64ro0p4yue.execute-api.us-east-2.amazonaws.com/api/accountDescription/getData/`); 
            const response_department = await fetch("https://64ro0p4yue.execute-api.us-east-2.amazonaws.com/api/department/getData");
            const json_course = await response_course.json();
            const json_department = await response_department.json();
            const json_accountDescription = await response_accountDescription.json();
            this.setState({
                courses:json_course,
                faculties:json_department,
                accountDescription:json_accountDescription
            });

        }catch(error){
            this.props.history.push("/down");
        }
    }

    updateFaculties = () =>{
        this.state.faculties.forEach((faculty) =>{
            var tempArray = []
            this.state.courses.forEach((course) =>{
                if (course.department_name === faculty.department_name){
                    tempArray.push(course);
                }
            })
            faculty.courses = tempArray;
        });
    }
    
    
    update = (event) => {
        let input = event.target.name;
        let value = event.target.value;
        this.setState({
            [input]: value
        })
    }

    disableInstructor = ()=>{
        this.setState({
            instructorMeth:"none",
            studentMeth:"initial",
            username: "",
            password: "",
            instructorButton:"",
            studentButton:"button_active"
        })
    }

    disableStudent = ()=>{
        this.setState({
            studentMeth:"none",
            instructorMeth:"initial",
            username: "",
            password: "",
            instructorButton:"button_active",
            studentButton:""
        })
    }

    updateClass = (event) =>{
        let value = event.target.value;
        this.setState({
            class:value
        });
    }

    registerStudent = (e) => {
        e.preventDefault();
                const registered = {
                course:this.state.class,
                email: this.state.email,
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                password: this.state.password,
                phone: this.state.phone,
                username: this.state.username,
            }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(registered)
            };
            fetch("https://64ro0p4yue.execute-api.us-east-2.amazonaws.com/api/register/student",requestOptions)
            .then(response => {
                if (response.ok !== true) {
                    this.setState({
                        username:""
                    })
                    swal("username already exists!");
                } else if(response.status !== 404) {
                    this.setState({
                        username: "",
                        password: "",
                        phone: "",
                        email: "",
                        firstName: "",
                        lastName: "",
                    })
                    swal("Register Complete Proceeds to Login Screen");
                    var history = this.props.history;
                    setTimeout(function (){
                       history.push("/login");
                    },1000);
                }});
    }

    registerInstructor = (e) => {
        e.preventDefault();
                const registered = {
                department_name:this.state.class,
                email: this.state.email,
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                password: this.state.password,
                phone: this.state.phone,
                username: this.state.username
            }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(registered)
            };
            fetch("https://64ro0p4yue.execute-api.us-east-2.amazonaws.com/api/register/instructor",requestOptions)
            .then(response => {
                if (response.ok !== true) {
                    this.setState({
                        username:""
                    })
                    swal("username already exists!");
                } else if(response.status !== 400) {
                    this.setState({
                        username: "",
                        password: "",
                        phone: "",
                        email: "",
                        firstName: "",
                        lastName: "",
                    })
                    swal("Register Complete Proceeds to Login Screen");
                    var history = this.props.history;
                    setTimeout(function (){
                       history.push("/login");
                    },1000);
                }});
    }

    render() {
        return (
            <div className={"register-component"}>
                {this.updateFaculties()}
                <div className={"register"}>
                    <h1 className={"login-register-header"}>Register {this.state.studentButton ? " - Student": " - Instructor"}</h1>
                    <div className = {"login-method"}>
                        <button onClick={this.disableInstructor} id = {this.state.studentButton}>Student</button>
                        <button onClick={this.disableStudent} id = {this.state.instructorButton}>Instructor</button>
                    </div>
                    <br/>
                    <form className = {"student-method"} style = {{display: this.state.studentMeth}} onSubmit = {this.registerStudent}>
                        {this.state.accountDescription.map((account) => {return(
                        <div className={"inputField"} key={account.value}>
                            <input name={account.name} placeholder={account.placeholder} onChange={this.update} value={this.state[account.value]} type={account.type} pattern={account.pattern} required title ={account.hint}/>
                            <div className={"exclamation-cover"}>
                                <i id={"exclamation"} className="fa fa-exclamation-circle" aria-hidden="true"/>
                                <p className={"hint"}>{account.hint}</p>
                            </div><br/><br/>
                        </div>)})}
                        <select name = "courses[]" className = "register_classes" onChange = {this.updateClass} required>
                            <option value ="" disabled selected hidden>choose a class</option>
                            {this.state.faculties.map((faculty) =>{return(
                            <optgroup label = {faculty.department_name} key={faculty.department_name}>
                                    {faculty.courses.map((classes) =>{return(
                                    <option value = {classes.course_name} key={classes.course_name}>{classes.course_name}</option>)})}
                            </optgroup>)})}
                        </select><br/><br/> 
                        <input className={"login-register"} type = "submit" value = "Register"/>
                    </form>
                    <form className = {"instructor-method"} style = {{display: this.state.instructorMeth}} onSubmit={this.registerInstructor}>
                        {this.state.accountDescription.map((account) => {return(
                        <div className={"inputField"} key={account.value}><input name={account.name} placeholder={account.placeholder} onChange={this.update} value={this.state[account.value]} type={account.type} pattern={account.pattern} required title ={account.hint}/>
                        <div className={"exclamation-cover"}><i id={"exclamation"} className="fa fa-exclamation-circle" aria-hidden="true"/><p className={"hint"}>{account.hint}</p></div><br/><br/></div>)})}
                        <select name = "courses[]" className = "register_classes" onChange = {this.updateClass} required>
                            <option value ="" disabled selected hidden>choose a Faculty</option>
                            {this.state.faculties.map((faculty) =>{return(<option value = {faculty.department_name} key={faculty.department_name}>{faculty.department_name}</option>)})}
                        </select><br/><br/> 
                        <input className={"login-register"} type = "submit" value = "Register"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(register);