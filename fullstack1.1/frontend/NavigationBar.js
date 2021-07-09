import {NavLink} from "react-router-dom";
function NavigationBar(){
    return(
        <div style={{backgroundColor:"lightblue"}}>
            <NavLink className = "navBar" to = {"/"} exact ={true}>Home</NavLink>
            <NavLink className = "navBar" to = {"/login"}  exact ={true} >Login</NavLink>
            <NavLink className = "navBar" to = {"/register"}  exact ={true} >Register</NavLink>
            <NavLink className = "navBar" to = {"/it-team"}  exact ={true} >IT Support</NavLink>
        </div>
    );
}
export default NavigationBar;