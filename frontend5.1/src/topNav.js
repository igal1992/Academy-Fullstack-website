import {Link} from "react-router-dom";
import * as React from "react";
import logo from "./Images/logo.png";
import {engiFaculty,faculties} from "./Lists.js";

class TopNav extends React.Component{
    render(){
        return(
            <div  className = {"topNav"} >
                <div>
                    <Link to = {"/"}  exact ={true}><img src = {logo} alt = {"Logo"} className = {"logo"}/></Link>
                </div>
                <ul className={"middle-nav"}>
                    <li><Link activeClassName = {"activeNavLink"} className = {"navBar"} to = {"/"} exact ={true}><i className={"fa fa-fw fa-home"}/> Home</Link></li>
                    <li><Link activeClassName = {"activeNavLink"} className = {"navBar"} to = {"/it-team"}  exact ={true} ><i className={"fa fa-fw fa-envelope"}/> IT Support</Link></li>
                    <li><Link activeClassName = {"activeNavLink"} className = {"navBar"} to = {"/login"}  exact ={true} ><i className={"fa fa-fw fa-user"}/> Login</Link></li>
                    <li><Link activeClassName = {"activeNavLink"} className = {"navBar"} to = {"/register"}  exact ={true} ><i className={"fa fa-registered"}/> Register</Link></li>
                    <li className = {"dropdowns"}>
                        <Link activeClassName = {"activeNavLink"} to ={{pathname:"/bachelor",state:{rName:"r1"}}} className = {"navBar"}><i className="fa fa-caret-down"/> Bachelors Degrees</Link>
                        <div className = {"subNavBtn"}>
                            {faculties.map((faculty)=>(
                                <div className={"faculty"}>
                                    <div className={"title"}>
                                        <Link to ={{pathname:"/bachelor",state:{rName:faculty.r}}}  exact ={true} className={"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/> {faculty.facName}<br/><br/><p className={"professor"}>{faculty.prof}</p></Link><br/>
                                    </div>
                                    {faculty.classes.map((school) => (<div className={"styled-buttons"} onClick = {this.goto}><i className="fa fa-share" aria-hidden="true"/> <strong>B.{school.type}</strong> in {school.class}<br/><br/><p className={"professor"}>{school.prof}</p><br/></div>))}
                                </div>
                                ))}
                        </div>
                    </li>
                    <li className = {"dropdowns"}>
                        <Link activeClassName = {"activeNavLink"} to ={{pathname:"/master",state:{rName:"r1"}}} className = {"navBar"}><i className="fa fa-caret-down"/> Masters Degrees</Link>
                        <div className = {"subNavBtn"}>
                            {faculties.map((faculty)=>(
                                <div className={"faculty"}>
                                    <div className={"title"}>
                                        <Link to = {{pathname:"/master",state:{rName:faculty.r}}} exact ={true} className={"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/> {faculty.facName}<br/><br/><p className={"professor"}>{faculty.prof}</p></Link><br/>
                                    </div>
                                    {faculty.classes.map((school) => (<div className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>M.{school.type}</strong> in {school.class}<br/><br/><p className={"professor"}>{school.prof}</p><br/></div>))}
                                </div>
                            ))}
                        </div>
                    </li>
                    <li className = {"dropdowns"}>
                        <Link activeClassName = {"activeNavLink"} to = {{pathname:"/engineering",state:{rName:"r1"}}} className = {"navBar"}><i className="fa fa-caret-down"/> Engineering Diplomas</Link>
                        <div className = {"subNavBtn"}>
                            <div className={"faculty"}>
                                <div className={"title"}>
                                    <Link to = {{pathname:"/engineering",state:{rName:"r1"}}} className = {"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/> Engineering</Link>
                                </div>
                                {engiFaculty.map((school) => (<Link to = {{pathname:"/engineering",state:{rName:school.r}}} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/>{school.class}<br/><br/><p className={"professor"}>{school.prof}</p></Link>))}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
export default TopNav;