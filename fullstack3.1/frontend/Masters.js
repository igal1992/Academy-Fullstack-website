import * as React from "react";
import master from "./master.jpg";
import {NavLink} from "react-router-dom";

function Masters(){
    return(
        <div>
            <img id = {"faculty-logo"} src = {master} alt = {"master-logo"}/>

            <div id={"faculty-descriptions"}>
                <h2 id = {"huge-titles"}><strong>Terms of acceptance:</strong></h2>
                <p><strong><NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Business Faculty<br/><br/><p className={"professor"}>Professor Eric Sussman</p></NavLink></strong> <br/><br/> you will need about 80+ B.A. Average, in Order to Get Accepted in our Faculty</p><br/><br/>
                <p><strong><NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Science Faculty<br/><br/><p className={"professor"}>Professor Galileo Galilei</p></NavLink></strong> <br/><br/> you will need about 87+ B.Sc. Average,  in Order to Get Accepted in our Faculty</p><br/><br/>
                <p><strong><NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Health Faculty<br/><br/><p className={"professor"}>Professor Amedeo Avigadro</p></NavLink></strong> <br/><br/> you will need about 90+ B.S.N. Average,  in Order to Get Accepted in our Faculty</p><br/><br/>
                <p><strong><NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Social Faculty<br/><br/><p className={"professor"}>Professor Alison Fragale</p></NavLink></strong> <br/><br/> you will need about 75+ B.A.Average, in Order to Get Accepted in our Faculty</p><br/><br/>
            </div>
            <h1 align={"center"}>Further Descriptions in the future</h1>
        </div>
    );
}
export default Masters;