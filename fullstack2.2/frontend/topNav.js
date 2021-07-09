import {NavLink} from "react-router-dom";

function TopNav(){
    return(
        <div  className = {"topNav"} >
            <ul className={"leftNav"}>
                <li><NavLink className = {"navBar"} to = {"/"} exact ={true}><i className="fa fa-fw fa-home"/> Home</NavLink></li>
                <li><NavLink className = {"navBar"} to = {"/it-team"}  exact ={true} ><i className="fa fa-fw fa-envelope"/> IT Support</NavLink></li>
                <li><NavLink className = {"navBar"} to = {"/login"}  exact ={true} ><i className="fa fa-fw fa-user"/> Login</NavLink></li>
                <li><NavLink className = {"navBar"} to = {"/register"}  exact ={true} ><i className="fa fa-registered" aria-hidden="true"/> Register</NavLink></li>
            </ul>
            <ul className={"rightNav"}>
                <li className = {"dropdowns"}>
                    <NavLink to = {"/"} exact ={true} className = {"navBar"}> <i className="fa fa-caret-down"/> Bachelors Degrees</NavLink>
                    <ul className = {"subNavBtn"} >
                        <p >course1</p>
                        <p >course2</p>
                        <p >course3</p>
                        <p >course4</p>
                        <p >course5</p>
                    </ul>
                </li>
                <li className = {"dropdowns"}>
                    <NavLink to = {"/"}  exact ={true} className = {"navBar"}> <i className="fa fa-caret-down"/> Masters Degrees</NavLink>
                    <ul className = {"subNavBtn"} >
                        <p >course6</p>
                        <p >course7</p>
                        <p >course8</p>
                        <p >course9</p>
                        <p >course10</p>
                    </ul>
                </li>
                <li className = {"dropdowns"}>
                    <NavLink to = {"/"}  exact ={true} className = {"navBar"}> <i className="fa fa-caret-down"/>Engineering Diplomas</NavLink>
                    <ul className = {"subNavBtn"} >
                        <p >course11</p>
                        <p >course12</p>
                        <p >course13</p>
                        <p >course14</p>
                        <p >course15</p>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
export default TopNav;