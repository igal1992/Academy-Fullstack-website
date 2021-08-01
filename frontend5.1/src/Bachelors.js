import * as React from "react";
import bachelor from "./Images/bachelor.jpg";
import {NavLink} from "react-router-dom";
import {scienceFaculty,healthFaculty,socialFaculty,buisnessFaculty} from "./Lists";

class Bachelors extends React.Component{
    state = {
        r1:false,
        r2:false,
        r3:false,
        r4:false
    }
    constructor(props) {
        super(props);
        if(this.props.location.state){
            this.state[this.props.location.state.rName] = true;
            window.scrollTo({top:document.body.scrollHeight, behavior: 'smooth'});
        }else{
            this.state.r1 = true;
        }
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
        let name = "temp"
        if(this.state.r1){
            name = "r2"
        }else if(this.state.r2){
            name = "r3"
        }else if(this.state.r3){
            name = "r4"
        }else if(this.state.r4){
            name = "r1"
        }
        this.setState({
            r1:false,
            r2:false,
            r3:false,
            r4:false,
            [name]:true
        })
    }
    swipeLeft=()=>{
        let name = "temp"
        if(this.state.r1){
            name = "r4"
        }else if(this.state.r2){
            name = "r1"
        }else if(this.state.r3){
            name = "r2"
        }else if(this.state.r4){
            name = "r3"
        }
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
            <div className={"faculties-outer"}>
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
                            <strong><div className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Social Faculty<br/><br/><p className={"professor"}>Professor Alison Fragale</p></div></strong>
                            <div className={"faculty-class-outer"}>
                                {socialFaculty.map((faculty)=>(
                                    <div className={"faculty-class-inner"}>
                                        <div className={"faculty-class-inner-inner"}>
                                            <h3 className={"medium-titles"}>{faculty.class}</h3>
                                            <p className={"professor"}>{faculty.prof}</p>
                                            <i className="fa fa-caret-right"/>
                                        </div>
                                        <div className={"faculty-class-dropdown"}>
                                            <h5>Description</h5>
                                            <p>bla bla bla bla</p>
                                            <h5>Terms of acceptance</h5>
                                            <p>another bla bla bla</p>
                                        </div>
                                    </div>
                                    ))}
                            </div>
                        </div>
                        <div className = {"slide"}>
                            <strong><div className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Business Faculty<br/><br/><p className={"professor"}>Professor Eric Sussman</p></div></strong>
                        </div>
                        <div className = {"slide"}>
                            <strong><div className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Science Faculty<br/><br/><p className={"professor"}>Professor Galileo Galilei</p></div></strong>
                        </div>
                        <div className = {"slide"}>
                            <strong><div className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Health Faculty<br/><br/><p className={"professor"}>Professor Amedeo Avigadro</p></div></strong>
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