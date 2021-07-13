import {NavLink} from "react-router-dom";
import * as React from "react";
import logo from "./Images/logo.png";
import {buisnessFaculty, scienceFaculty, socialFaculty, healthFaculty, engiFaculty} from "./Lists.js";

function TopNav(){
    return(
        <div  className = {"topNav"} >
            <div>
                <NavLink to = {"/"}  exact ={true}><img src = {logo} alt = {"Logo"} className = {"logo"}/></NavLink>
            </div>
            <ul className={"middle-nav"}>
                <li><NavLink className = {"navBar"} id = {"active-navBar"} to = {"/"} exact ={true}><i className="fa fa-fw fa-home"/> Home</NavLink></li>
                <li><NavLink className = {"navBar"} to = {"/it-team"}  exact ={true} ><i className="fa fa-fw fa-envelope"/> IT Support</NavLink></li>
                <li><NavLink className = {"navBar"} to = {"/login"}  exact ={true} ><i className="fa fa-fw fa-user"/> Login</NavLink></li>
                <li><NavLink className = {"navBar"} to = {"/register"}  exact ={true} ><i className="fa fa-registered" aria-hidden="true"/> Register</NavLink></li>
                <li className = {"dropdowns"}>
                    <NavLink to ={"/bachelor"} className = {"navBar"}><i className="fa fa-caret-down"/> Bachelors Degrees</NavLink>
                    <div className = {"subNavBtn"}>
                        <div className={"faculty"}>
                            <div className={"title"}>
                                <NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/> Business Faculty<br/><br/><p className={"professor"}>Professor Eric Sussman</p></NavLink><br/>
                            </div>
                            {buisnessFaculty.map((school) => (<NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>B.A.</strong> in {school.class}<br/><br/><p className={"professor"}>{school.prof}</p><br/></NavLink>))}
                        </div>
                        <div className={"faculty"}>
                            <div className={"title"}>
                                <NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/> Science Faculty<br/><br/><p className={"professor"}>Professor Galileo Galilei</p></NavLink><br/>
                            </div>
                            {scienceFaculty.map((school) => (<NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>B.Sc.</strong> in {school.class}<br/><br/><p className={"professor"}>{school.prof}</p><br/></NavLink>))}
                        </div>
                        <div className={"faculty"}>
                            <div className={"title"}>
                                <NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/> Social Faculty<br/><br/><p className={"professor"}>Professor Amedeo Avogadro</p></NavLink><br/>
                            </div>
                            {socialFaculty.map((school) => (<NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>B.A.</strong> in {school.class}<br/><br/><p className={"professor"}>{school.prof}</p><br/></NavLink>))}
                        </div>
                        <div className={"faculty"}>
                            <div className={"title"}>
                                <NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/> Health Faculty<br/><br/><p className={"professor"}>Professor Alison Fragale</p></NavLink><br/>
                            </div>
                            {healthFaculty.map((school) => (<NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>B.S.N.</strong> in {school.class}<br/><br/><p className={"professor"}>{school.prof}</p><br/></NavLink>))}
                        </div>
                    </div>
                </li>
                <li className = {"dropdowns"}>
                    <NavLink to ={"/master"} className = {"navBar"}><i className="fa fa-caret-down"/> Masters Degrees</NavLink>
                    <div className = {"subNavBtn"}>
                        <div className={"faculty"}>
                            <div className={"title"}>
                                <NavLink to = {"/master"} exact ={true} className={"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/> Business Faculty<br/><br/><p className={"professor"}>Professor Eric Sussman</p></NavLink><br/>
                            </div>
                            {buisnessFaculty.map((school) => (<NavLink to = {"/master"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>M.A.</strong> in {school.class}<br/><br/><p className={"professor"}>{school.prof}</p><br/></NavLink>))}
                        </div>
                        <div className={"faculty"}>
                            <div className={"title"}>
                                <NavLink to = {"/master"} exact ={true} className={"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/> Science Faculty<br/><br/><p className={"professor"}>Professor Galileo Galilei</p></NavLink><br/>
                            </div>
                            {scienceFaculty.map((school) => (<NavLink to = {"/master"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>M.Sc.</strong> in {school.class}<br/><br/><p className={"professor"}>{school.prof}</p><br/></NavLink>))}
                        </div>
                        <div className={"faculty"}>
                            <div className={"title"}>
                                <NavLink to = {"/master"} exact ={true} className={"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/> Social Faculty<br/><br/><p className={"professor"}>Professor Amedeo Avogadro</p></NavLink><br/>
                            </div>
                            {socialFaculty.map((school) => (<NavLink to = {"/master"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>M.A.</strong> in {school.class}<br/><br/><p className={"professor"}>{school.prof}</p><br/></NavLink>))}
                        </div>
                        <div className={"faculty"}>
                            <div className={"title"}>
                                <NavLink to = {"/master"} exact ={true} className={"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/> Health Faculty<br/><br/><p className={"professor"}>Professor Alison Fragale</p></NavLink><br/>
                            </div>
                            {healthFaculty.map((school) => (<NavLink to = {"/master"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>M.S.N.</strong> in {school.class}<br/><br/><p className={"professor"}>{school.prof}</p><br/></NavLink>))}
                        </div>
                    </div>
                </li>
                <li className = {"dropdowns"}>
                    <NavLink to = {"/engineering"} className = {"navBar"}><i className="fa fa-caret-down"/> Engineering Diplomas</NavLink>
                    <div className = {"subNavBtn"}>
                        <div className={"faculty"}>
                            {engiFaculty.map((school) => (<NavLink to = {"/engineering"} exact ={true} className={"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/>{school.class}<br/><br/><p className={"professor"}>{school.prof}</p><br/></NavLink>))}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}
export default TopNav;