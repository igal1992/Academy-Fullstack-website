import {NavLink} from "react-router-dom";
import * as React from "react";

function TopNav(){
    return(
        <div  className = {"topNav"} >
            <ul className={"leftNav"}>
                <li><NavLink className = {"navBar"} id = {"active-navBar"} to = {"/"} exact ={true}><i className="fa fa-fw fa-home"/> Home</NavLink></li>
                <li><NavLink className = {"navBar"} to = {"/it-team"}  exact ={true} ><i className="fa fa-fw fa-envelope"/> IT Support</NavLink></li>
                <li><NavLink className = {"navBar"} to = {"/login"}  exact ={true} ><i className="fa fa-fw fa-user"/> Login</NavLink></li>
                <li><NavLink className = {"navBar"} to = {"/register"}  exact ={true} ><i className="fa fa-registered" aria-hidden="true"/> Register</NavLink></li>
            </ul>
            <ul className={"rightNav"}>
                <li className = {"dropdowns"}>
                    <NavLink to ={"/bachelor"} className = {"navBar"}> <i className="fa fa-caret-down"/> Bachelors Degrees</NavLink>
                    <div className = {"subNavBtn"}>
                        <div className={"faculty"}>
                            <div className={"title"}>
                                <NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/> Business Faculty<br/><br/><p className={"professor"}>Professor Eric Sussman</p></NavLink><br/>
                            </div>
                            <NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>B.A.</strong> in Economics and logistics<br/><br/><p className={"professor"}>Professor Alison Fragale</p></NavLink><br/>
                            <NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>B.A.</strong> in Economics and Capital market<br/><br/><p className={"professor"}>Professor Sharon Oster</p></NavLink><br/>
                            <NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>B.A.</strong> in Economics and Accounting<br/><br/><p className={"professor"}>Professor Shane Dikolli</p> </NavLink><br/>
                        </div>
                        <div className={"faculty"}>
                            <div className={"title"}>
                                <NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/> Science Faculty<br/><br/><p className={"professor"}>Professor Galileo Galilei</p></NavLink><br/>
                            </div>
                            <NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>B.Sc.</strong> in Chemistry<br/><br/><p className={"professor"}>Professor Galileo Galilei</p></NavLink><br/>
                            <NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>B.Sc.</strong> in Computers Science<br/><br/><p className={"professor"}>Professor William Gilbert</p></NavLink><br/>
                            <NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>B.Sc.</strong> in Biology<br/><br/><p className={"professor"}>Professor Hans Lippershey</p> </NavLink><br/>
                        </div>
                        <div className={"faculty"}>
                            <div className={"title"}>
                                <NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/> Social Faculty<br/><br/><p className={"professor"}>Professor Amedeo Avogadro</p></NavLink><br/>
                            </div>
                            <NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>B.A.</strong> in Criminology<br/><br/><p className={"professor"}>Professor Amedeo Avogadro</p></NavLink><br/>
                            <NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>B.A.</strong> in Sociology and Anthropology<br/><br/><p className={"professor"}>Professor Robert Boyle</p></NavLink><br/>
                            <NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>B.A.</strong> in psychology<br/><br/><p className={"professor"}>Professor Rachel Carson</p> </NavLink><br/>
                        </div>
                        <div className={"faculty"}>
                            <div className={"title"}>
                                <NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/> Health Faculty<br/><br/><p className={"professor"}>Professor Alison Fragale</p></NavLink><br/>
                            </div>
                            <NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>B.A.</strong> in Public Health Care<br/><br/><p className={"professor"}>Professor Alison Fragale</p></NavLink><br/>
                            <NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>B.S.N.</strong> in Nursing<br/><br/><p className={"professor"}>Professor Sharon Oster</p></NavLink><br/>
                            <NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>B.Sc.</strong> in Nutrition Science<br/><br/><p className={"professor"}>Professor Shane Dikolli</p> </NavLink><br/>
                        </div>
                    </div>
                </li>
                <li className = {"dropdowns"}>
                    <NavLink to ={"/master"} className = {"navBar"}> <i className="fa fa-caret-down"/> Masters Degrees</NavLink>
                    <div className = {"subNavBtn"}>
                        <div className={"faculty"}>
                            <div className={"title"}>
                                <NavLink to = {"/master"} exact ={true} className={"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/> Business Faculty<br/><br/><p className={"professor"}>Professor Eric Sussman</p></NavLink><br/>
                            </div>
                            <NavLink to = {"/master"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>M.A.</strong> in Economics and logistics<br/><br/><p className={"professor"}>Professor Alison Fragale</p></NavLink><br/>
                            <NavLink to = {"/master"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>M.A.</strong> in Economics and Capital market<br/><br/><p className={"professor"}>Professor Sharon Oster</p></NavLink><br/>
                            <NavLink to = {"/master"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>M.A.</strong> in Economics and Accounting<br/><br/><p className={"professor"}>Professor Shane Dikolli</p> </NavLink><br/>
                        </div>
                        <div className={"faculty"}>
                            <div className={"title"}>
                                <NavLink to = {"/master"} exact ={true} className={"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/> Science Faculty<br/><br/><p className={"professor"}>Professor Galileo Galilei</p></NavLink><br/>
                            </div>
                            <NavLink to = {"/master"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>M.Sc.</strong> in Chemistry<br/><br/><p className={"professor"}>Professor  Galileo Galilei</p></NavLink><br/>
                            <NavLink to = {"/master"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>M.Sc.</strong> in Computers Science<br/><br/><p className={"professor"}>Professor William Gilbert</p></NavLink><br/>
                            <NavLink to = {"/master"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>M.Sc.</strong> in Biology<br/><br/><p className={"professor"}>Professor Hans Lippershey</p> </NavLink><br/>
                        </div>
                        <div className={"faculty"}>
                            <div className={"title"}>
                                <NavLink to = {"/master"} exact ={true} className={"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/> Social Faculty<br/><br/><p className={"professor"}>Professor Amedeo Avogadro</p></NavLink><br/>
                            </div>
                            <NavLink to = {"/master"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>M.A.</strong> in Criminology<br/><br/><p className={"professor"}>Professor Amedeo Avogadro</p></NavLink><br/>
                            <NavLink to = {"/master"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>M.A.</strong> in Sociology and Anthropology<br/><br/><p className={"professor"}>Professor Robert Boyle</p></NavLink><br/>
                            <NavLink to = {"/master"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>M.A.</strong> in psychology<br/><br/><p className={"professor"}>Professor Rachel Carson</p> </NavLink><br/>
                        </div>
                        <div className={"faculty"}>
                            <div className={"title"}>
                                <NavLink to = {"/master"} exact ={true} className={"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/> Health Faculty<br/><br/><p className={"professor"}>Professor Alison Fragale</p></NavLink><br/>
                            </div>
                            <NavLink to = {"/master"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>M.A.</strong> in Public Health Care<br/><br/><p className={"professor"}>Professor Alison Fragale</p></NavLink><br/>
                            <NavLink to = {"/master"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>M.S.N.</strong> in Nursing<br/><br/><p className={"professor"}>Professor Sharon Oster</p></NavLink><br/>
                            <NavLink to = {"/master"} exact ={true} className={"styled-buttons"}><i className="fa fa-share" aria-hidden="true"/> <strong>M.Sc.</strong> in Nutrition Science<br/><br/><p className={"professor"}>Professor Shane Dikolli</p> </NavLink><br/>
                        </div>
                    </div>
                </li>
                <li className = {"dropdowns"}>
                    <NavLink to = {"/"} className = {"navBar"}> <i className="fa fa-caret-down"/>Engineering Diplomas</NavLink>
                    <div className = {"subNavBtn"}>
                        <div className={"faculty"}>
                            <NavLink to = {"/"} exact ={true} className={"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/> Geotechnical Engineering<br/><br/><p className={"professor"}>Professor Sunil Agrawal</p></NavLink><br/>
                            <NavLink to = {"/"} exact ={true} className={"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/> Environmental Engineering<br/><br/><p className={"professor"}>Professor Mohamed Abdou</p></NavLink><br/>
                            <NavLink to = {"/"} exact ={true} className={"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/> Architectural Engineering<br/><br/><p className={"professor"}>Professor J.Keith Nisbett</p></NavLink><br/>
                            <NavLink to = {"/"} exact ={true} className={"styled-buttons"}><i className="fa fa-university" aria-hidden="true"/> Chemical Engineering Degrees<br/><br/><p className={"professor"}>Professor William Dunn</p></NavLink><br/>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}
export default TopNav;