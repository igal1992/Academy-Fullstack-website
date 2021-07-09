import * as React from "react";
import {NavLink} from "react-router-dom";
import engineering from "./engineering.jpg";
class Engineering extends React.Component{
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
                    <img id = {"faculty-logo"} src = {engineering} alt = {"engineering-logo"} />
                </div>
                <div className= {"faculties middle"}>
                    <div className={"slides"}>
                        <input type={"radio"} name = {"r"} className = {"r1"} checked = {this.state.r1}/>
                        <input type={"radio"} name = {"r"} className = {"r2"} checked = {this.state.r2}/>
                        <input type={"radio"} name = {"r"} className = {"r3"} checked = {this.state.r3}/>
                        <input type={"radio"} name = {"r"} className = {"r4"} checked = {this.state.r4}/>
                        <div className = {"slide s1"}>
                            <strong><NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Geotechnical Engineering <br/><br/><p className={"professor"}>Professor Albert Einstein</p></NavLink></strong>
                            <h2 id = {"huge-titles"}><strong>Terms of acceptance</strong></h2>
                            90+ HighSchool Diploma Average, in Order to Get Accepted in our Faculty
                        </div>
                        <div className = {"slide"}>
                            <strong><NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Environmental Engineering <br/><br/><p className={"professor"}>Professor Marie Curie</p></NavLink></strong>
                            <h2 id = {"huge-titles"}><strong>Terms of acceptance</strong></h2>
                            87+ HighSchool Diploma Average,  in Order to Get Accepted in our Faculty
                        </div>
                        <div className = {"slide"}>
                            <strong><NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Architectural Engineering <br/><br/><p className={"professor"}>Professor Alexander Graham Bell</p></NavLink></strong>
                            <h2 id = {"huge-titles"}><strong>Terms of acceptance</strong></h2>
                            90+ HighSchool Diploma Average,  in Order to Get Accepted in our Faculty
                        </div>
                        <div className = {"slide"}>
                            <strong><NavLink to = {"/bachelor"} exact ={true} className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Chemical Engineering <br/><br/><p className={"professor"}>Professor Neil Armstrong</p></NavLink></strong>
                            <h2 id = {"huge-titles"}><strong>Terms of acceptance</strong></h2>
                            100+ HighSchool Diploma, in Order to Get Accepted in our Faculty
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
export default Engineering;