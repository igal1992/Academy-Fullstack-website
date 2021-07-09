import * as React from "react";
import bachelor from "./bachelor.jpg";
import {NavLink} from "react-router-dom";

function Bachelors(){
    return(
        <div>
            <img id = {"faculty-logo"} src = {bachelor} alt = {"bachelor-logo"}/>

            <div id={"faculty-descriptions"}>
                <h2 id = {"huge-titles"}><strong>Terms of acceptance:</strong></h2>
                <p><strong><NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Business Faculty<br/><br/><p className={"professor"}>Professor Eric Sussman</p></NavLink></strong> <br/><br/> you will need about 80-90 High School Diploma Average, in Order to Get Accepted in our Faculty</p><br/><br/>
                <p><strong><NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Science Faculty<br/><br/><p className={"professor"}>Professor Galileo Galilei</p></NavLink></strong> <br/><br/> you will need about 95-130 High School Diploma Average, and psychometric of 650+ in Order to Get Accepted in our Faculty</p><br/><br/>
                <p><strong><NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Health Faculty<br/><br/><p className={"professor"}>Professor Amedeo Avigadro</p></NavLink></strong> <br/><br/> you will need about 100-130 High School Diploma Average, and psychometric of 700+ in Order to Get Accepted in our Faculty</p><br/><br/>
                <p><strong><NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Social Faculty<br/><br/><p className={"professor"}>Professor Alison Fragale</p></NavLink></strong> <br/><br/> you will need about 75-90 High School Diploma Average, in Order to Get Accepted in our Faculty</p><br/><br/>
            </div>
            <h1 align={"center"}>Further Descriptions in the future</h1>
        </div>
    );
}
export default Bachelors;