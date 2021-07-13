import * as React from "react";
import bachelor from "./Images/bachelor.jpg";
import {NavLink} from "react-router-dom";
class Bachelors extends React.Component{
    state = {
        r1:true,
        r2:false,
        r3:false,
        r4:false,
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
    swipeRight=()=>{
        if(this.state.r1){
            this.setState({
                r1:false,
                r2:true,
                r3:false,
                r4:false
            })
        }else if(this.state.r2){
            this.setState({
                r1:false,
                r2:false,
                r3:true,
                r4:false
            })
        }else if(this.state.r3){
            this.setState({
                r1:false,
                r2:false,
                r3:false,
                r4:true
            })
        }else if(this.state.r4){
            this.setState({
                r1:true,
                r2:false,
                r3:false,
                r4:false
            })
        }
    }
    swipeLeft=()=>{
        if(this.state.r1){
            this.setState({
                r1:false,
                r2:false,
                r3:false,
                r4:true
            })
        }else if(this.state.r2){
            this.setState({
                r1:true,
                r2:false,
                r3:false,
                r4:false
            })
        }else if(this.state.r3){
            this.setState({
                r1:false,
                r2:true,
                r3:false,
                r4:false
            })
        }else if(this.state.r4){
            this.setState({
                r1:false,
                r2:false,
                r3:true,
                r4:false
            })
        }
    }
    render(){
        return(
            <div>
                <div className={"faculty-logo-container"}>
                    <img id = {"faculty-logo"} src = {bachelor} alt = {"bachelor-logo"} />
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
                            75-90 High School Diploma Average, in Order to Get Accepted in our Faculty
                        </div>
                        <div className = {"slide"}>
                            <strong><NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Business Faculty<br/><br/><p className={"professor"}>Professor Eric Sussman</p></NavLink></strong>
                            <h2 id = {"huge-titles"}><strong>Terms of acceptance</strong></h2>
                            80-90 High School Diploma Average, in Order to Get Accepted in our Faculty
                        </div>
                        <div className = {"slide"}>
                            <strong><NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Science Faculty<br/><br/><p className={"professor"}>Professor Galileo Galilei</p></NavLink></strong>
                            <h2 id = {"huge-titles"}><strong>Terms of acceptance</strong></h2>
                            95-130 High School Diploma Average, and psychometric of 650+ in Order to Get Accepted in our Faculty
                        </div>
                        <div className = {"slide"}>
                            <strong><NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Health Faculty<br/><br/><p className={"professor"}>Professor Amedeo Avigadro</p></NavLink></strong>
                            <h2 id = {"huge-titles"}><strong>Terms of acceptance</strong></h2>
                            100-130 High School Diploma Average, and psychometric of 700+ in Order to Get Accepted in our Faculty
                        </div>
                    </div>
                    <div className={"slides-navigation"}>
                        <label htmlFor={"r1"} className={"bar"} onClick={this.swipe} id = {"r1"} style = {{background:this.state.r1?"black":"white"}}/>
                        <label htmlFor={"r2"} className={"bar"} onClick={this.swipe} id = {"r2"} style = {{background:this.state.r2?"black":"white"}}/>
                        <label htmlFor={"r3"} className={"bar"} onClick={this.swipe} id = {"r3"} style = {{background:this.state.r3?"black":"white"}}/>
                        <label htmlFor={"r4"} className={"bar"} onClick={this.swipe} id = {"r4"} style = {{background:this.state.r4?"black":"white"}}/>
                    </div>
                    <div className={"slides-arrows"}>
                        <i className="fa fa-chevron-right" id = {"right"} aria-hidden="true" onClick={this.swipeRight}/>
                        <i className="fa fa-chevron-left" id = {"left"} aria-hidden="true" onClick={this.swipeLeft}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Bachelors;