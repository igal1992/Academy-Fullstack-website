import {NavLink} from "react-router-dom";
import bachelor from "./bachelor.jpeg";
import masterDegree from "./master.jpg";
import engineering from "./engineering.jpg";

function NavigationBar2(){
    return(
            <dl className = {"navBar2"}>
                <dt><NavLink to = {"/"} exact ={true}><img id = {"img"} src = {bachelor} alt = {"Bachelor Degrees"}/></NavLink></dt>
                <dt><NavLink to = {"/"}  exact ={true} ><img id = {"img"} src = {masterDegree} alt = {"Master Degrees"}/></NavLink></dt>
                <dt><NavLink to = {"/"}  exact ={true} ><img id = {"img"} src = {engineering} alt = {"Engineering  Diploma"}/></NavLink></dt>
            </dl>
    );
}
export default NavigationBar2;