import {NavLink} from "react-router-dom";
import * as React from "react";
import swal from "sweetalert";
import logo from "../assets/Images/logo.png";
import './TopNav.css';
import { withRouter } from 'react-router';
import Cookies from "js-cookie";




class TopNav extends React.Component{
    state = {
        faculties:[],
        Engi:[],
        courses:[],
        loggedIn:false,
        username:"",
        courseOfUser:"",
        departmentOfUser:"",
        lastNameOfUser:"",
        firstNameOfUser:"",
        delete:false,
        password:"",
        clicked:false
    }
    async componentDidMount(){
        let engi_faculty = "Engi Faculty"
        try{
            const response_course = await fetch("http://localhost:8080/api/course/getData");
            const response_coursesByName = await fetch(`http://localhost:8080/api/course/getDataByDepartmentName/`+ engi_faculty); 
            const response_department = await fetch("http://localhost:8080/api/department/getData");
            const json_course = await response_course.json();
            const json_department = await response_department.json();
            const json_coursesByName = await response_coursesByName.json();
            if (Cookies.get("user")){
                const user = JSON.parse(Cookies.get("user"))
                this.setState({
                    loggedIn:true,
                    username:user.username,
                    courseOfUser:user.course,
                    departmentOfUser:user.department,
                    firstNameOfUser:user.first_name,
                    lastNameOfUser:user.last_name,
                })
            }else{
                this.setState({loggedIn:false})
            }
            this.setState({
                courses:json_course,
                faculties:json_department,
                Engi:json_coursesByName,
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
    signOut=()=>{
        Cookies.remove("user");
        var history = this.props.history;
        window.location.reload(history.push(""));
    }
    deleteAccount=()=>{
        this.setState({
            delete:true
        })
    }
    update = (event)=>{
        let input = event.target.name;
        let value = event.target.value;
        this.setState({
            [input]:value
        })
        console.log(this.state.password)
    }
    confirmDelete=()=>{
        const username = JSON.parse(Cookies.get("user")).username
        const loggedIn = {
            username:username,
            password:this.state.password
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials:  "include",
            body: JSON.stringify(loggedIn)
        };
        if(this.state.courseOfUser){
            fetch("http://localhost:8080/api/login/student",requestOptions)
            .then(response => {
                if(response.status === 200){
                    fetch(`http://localhost:8080/user/deleteUser/` + username, { method: 'POST' });
                    Cookies.remove("user");
                    var history = this.props.history;
                    window.location.reload(history.push(""));
                }else{
                    swal("wrong password or username");
                }})
    }else{
        fetch("http://localhost:8080/api/login/instructor",requestOptions)
        .then(response => {
            if(response.status === 200){
                fetch(`http://localhost:8080/user/deleteUser/` + username, { method: 'POST' });
                Cookies.remove("user");
                var history = this.props.history;
                window.location.reload(history.push(""));
            }else{
                swal("wrong password or username");
            }})
    }
}
    cancelDelete=()=>{
        this.setState({
            delete:false,
            password:""
        })
    }
    activateSidePanel=()=>{
        const middleNav = document.getElementById("middle-nav");
        const rightNav = document.getElementById("right-nav");
        if(this.state.clicked){
            middleNav.style.display = "none";
            rightNav.style.display = "none";
            this.setState({
                clicked:false
            })
        }else{
            middleNav.style.display = "grid";
            rightNav.style.display = "grid";
            this.setState({
                clicked:true
            })
        }
    }

    render(){
        return(
            <div  className = {"topNav"} >
                {this.updateFaculties()}
                <div id = {"left-nav"}>
                    <NavLink to = {"/"}  exact ={true}><img src = {logo} alt = {"Logo"} className = {"logo"}/></NavLink>
                </div>
                <ul id={"middle-nav"}>
                    <li><NavLink activeClassName = {"activeNavLink"} className = {"navBar"} to = {"/"} exact ={true}><i className={"fa fa-fw fa-home"}/> Home</NavLink></li>
                    <li><NavLink activeClassName = {"activeNavLink"} className = {"navBar"} to = {"/it-team"}  exact ={true} ><i className={"fa fa-fw fa-envelope"}/> IT Support</NavLink></li>
                    {this.state.loggedIn?"":<li><li><NavLink activeClassName = {"activeNavLink"} className = {"navBar"} to = {"/login"}  exact ={true} ><i className={"fa fa-fw fa-user"}/> Login</NavLink></li><li><NavLink activeClassName = {"activeNavLink"} className = {"navBar"} to = {"/register"}  exact ={true} ><i className={"fa fa-registered"}/> Register</NavLink></li></li>}
                    <li className = {"dropdowns"}>
                        <NavLink activeClassName = {"activeNavLink"} to ={{pathname:"/bachelor",state:{rName:"r1"}}} className = {"navBar"}><i className="fa fa-caret-down"/> Bachelors Degrees</NavLink>
                        <div className = {"subNavBtn"}>
                            {this.state.faculties.map((faculty)=> {return (
                                <div className={"faculty"} key={faculty.department_name}>
                                    <div className={"title"}>
                                        <NavLink to ={{pathname:"/bachelor",state:{rName:faculty.r,schools:true}}}  exact ={true} className={"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/> {faculty.department_name}<p className={"professor"}>{faculty.prof}</p></NavLink>
                                    </div>
                                    {faculty.courses.map((school) => {return(<div className={"styled-buttons"} key={school.course_name}><i className="fa fa-share" aria-hidden="true"/> <strong>B.{school.type}</strong> in {school.course_name}<p className={"professor"}>{school.instructor_name}</p></div>)})}
                                </div>)}
                            )}
                        </div>
                    </li>
                    <li className = {"dropdowns"}>
                        <NavLink activeClassName = {"activeNavLink"} to ={{pathname:"/master",state:{rName:"r1"}}} className = {"navBar"}><i className="fa fa-caret-down"/> Masters Degrees</NavLink>
                        <div className = {"subNavBtn-master"}>
                            {this.state.faculties.map((faculty)=>{return(
                                <div className={"faculty"} key={faculty.department_name}>
                                    <div className={"title"}>
                                        <NavLink to = {{pathname:"/master",state:{rName:faculty.r,schools:true}}} exact ={true} className={"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/> {faculty.department_name}<p className={"professor"}>{faculty.prof}</p></NavLink>
                                    </div>
                                    {faculty.courses.map((school) => {return(<div className={"styled-buttons"} key={school.course_name}><i className="fa fa-share" aria-hidden="true"/> <strong>M.{school.type}</strong> in {school.course_name}<p className={"professor"}>{school.instructor_name}</p></div>)})}
                                </div>
                            )})}
                        </div>
                    </li>
                    <li className = {"dropdowns"}>
                        <NavLink activeClassName = {"activeNavLink"} to = {{pathname:"/engineering",state:{rName:"r1"}}} className = {"navBar"}><i className="fa fa-caret-down"/> Engineering Diplomas</NavLink>
                        <div className = {"subNavBtn-engi"}>
                            <div className={"faculty"}>
                                <div className={"title-engi"}>
                                    {this.state.Engi[0]?<NavLink to = {{pathname:"/engineering",state:{rName:"r1",schools:true}}} className = {"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/>Engineering</NavLink>:""}
                                </div>
                                {this.state.Engi.map((school) => {return(<div className={"styled-buttons"} key={school.course_name}><i className="fa fa-share" aria-hidden="true"/>{school.course_name}<p className={"professor"}>{school.prof}</p></div>)})}
                            </div>
                        </div>
                    </li>
                </ul>
                <div id = {"right-nav"}>
                    {this.state.loggedIn?<div>
                        <p className={"dropdowns"}>{`hello ${this.state.firstNameOfUser}  ${this.state.lastNameOfUser} `}<i className="fa fa-caret-down"/>
                            <ul className = {"subNavBtnLoggedIn"}>
                                <li>{this.state.courseOfUser?`  -  course: ${this.state.courseOfUser} -  `:`  -  department: ${this.state.departmentOfUser} -  `}</li>
                                <li id = {"deleteAccount"} onClick={this.deleteAccount}>{`  -  delete account: ${this.state.username}  -  `}</li>
                                {this.state.delete?<li id={"deleteForm"}><input placeholder="ENTER PASSWORD" name = {"password"} type={"password"} onChange={this.update} value = {this.state.password}></input><button onClick={this.confirmDelete}>accept</button><button onClick={this.cancelDelete}>cancel</button></li>:<li></li>}
                            </ul>
                        </p>
                        <button id = {"logout"} onClick={this.signOut}>sign-out <i className="fa fa-sign-out"/></button>
                    </div>:""}
                </div>
                <div id={"open-side-bar"}>
                        <i class="fa fa-bars" aria-hidden="true" id={"side-bar"} onClick={this.activateSidePanel}/>
                </div>
            </div>
        );
    }
}
export default withRouter(TopNav);