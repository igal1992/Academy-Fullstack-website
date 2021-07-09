import * as React from "react";
import master from "./master.jpg";
import {NavLink} from "react-router-dom";
class Masters extends React.Component{
    state = {
        r1:true,
        r2:false,
        r3:false,
        r4:false
    }
    swipe=(event)=>{
        let name = event.target.id;
        this.setState({
            r1:false,
            r2:false,
            r3:false,
            r4:false,
            [name]:true
        })
    }
    render(){
        return(
            <div>
                <div className={"faculty-logo-container"}>
                    <img id = {"faculty-logo"} src = {master} alt = {"master-logo"} />
                </div>
                <div className= {"faculties middle"}>
                    <div className={"slides"}>
                        <input type={"radio"} name = {"r"} className = {"r1"} checked = {this.state.r1}/>
                        <input type={"radio"} name = {"r"} className = {"r2"} checked = {this.state.r2}/>
                        <input type={"radio"} name = {"r"} className = {"r3"} checked = {this.state.r3}/>
                        <input type={"radio"} name = {"r"} className = {"r4"} checked = {this.state.r4}/>
                        <div className = {"slide s1"}>
                            <strong><NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Social Faculty<br/><br/><p className={"professor"}>Professor Alison Fragale</p></NavLink></strong>
                            <h2 id = {"huge-titles"}><strong>Terms of acceptance</strong></h2>
                           75+ B.A.Average, in Order to Get Accepted in our Faculty
                        </div>
                        <div className = {"slide"}>
                            <strong><NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Business Faculty<br/><br/><p className={"professor"}>Professor Eric Sussman</p></NavLink></strong>
                            <h2 id = {"huge-titles"}><strong>Terms of acceptance</strong></h2>
                            80+ B.A. Average, in Order to Get Accepted in our Faculty
                        </div>
                        <div className = {"slide"}>
                            <strong><NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Science Faculty<br/><br/><p className={"professor"}>Professor Galileo Galilei</p></NavLink></strong>
                            <h2 id = {"huge-titles"}><strong>Terms of acceptance</strong></h2>
                            87+ B.Sc. Average,  in Order to Get Accepted in our Faculty
                        </div>
                        <div className = {"slide"}>
                            <strong><NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Health Faculty<br/><br/><p className={"professor"}>Professor Amedeo Avigadro</p></NavLink></strong>
                            <h2 id = {"huge-titles"}><strong>Terms of acceptance</strong></h2>
                            90+ B.S.N. Average,  in Order to Get Accepted in our Faculty
                        </div>
                    </div>
                    <div className={"slides-navigation"}>
                        <label htmlFor={"r1"} className={"bar"} onClick={this.swipe} id = {"r1"}/>
                        <label htmlFor={"r2"} className={"bar"} onClick={this.swipe} id = {"r2"}/>
                        <label htmlFor={"r3"} className={"bar"} onClick={this.swipe} id = {"r3"}/>
                        <label htmlFor={"r4"} className={"bar"} onClick={this.swipe} id = {"r4"}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Masters;