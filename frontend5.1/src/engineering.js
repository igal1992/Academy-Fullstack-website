import * as React from "react";
import engineering from "./Images/engineering.jpg";
class Engineering extends React.Component{
    state = {
        r1:false,
        r2:false,
        r3:false,
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
            name = "r1"
        }
        this.setState({
            r1:false,
            r2:false,
            r3:false,
            [name]:true
        })
    }
    swipeLeft=()=>{
        let name = "temp"
        if(this.state.r1){
            name = "r3"
        }else if(this.state.r2){
            name = "r1"
        }else if(this.state.r3){
            name = "r2"
        }
        this.setState({
            r1:false,
            r2:false,
            r3:false,
            [name]:true
        })
    }
    render(){
        return(
            <div  className={"faculties-outer"}>
                <div className={"faculty-logo-container"}>
                    <img id = {"faculty-logo"} src = {engineering} alt = {"engineering-logo"} />
                </div>
                <div className= {"faculties middle"}>
                    <div className={"slides"}>
                        <input type={"radio"} name = {"r"} className = {"r1"} checked = {this.state.r1}/>
                        <input type={"radio"} name = {"r"} className = {"r2"} checked = {this.state.r2}/>
                        <input type={"radio"} name = {"r"} className = {"r3"} checked = {this.state.r3}/>
                        <div className = {"slide s1"}>
                            <strong><div className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Geotechnical Engineering <br/><br/><p className={"professor"}>Professor Albert Einstein</p></div></strong>
                            <h2 id = {"huge-titles"}><strong>Terms of acceptance</strong></h2>
                            90+ HighSchool Diploma Average, in Order to Get Accepted in our Faculty
                        </div>
                        <div className = {"slide"}>
                            <strong><div  className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Environmental Engineering <br/><br/><p className={"professor"}>Professor Marie Curie</p></div></strong>
                            <h2 id = {"huge-titles"}><strong>Terms of acceptance</strong></h2>
                            87+ HighSchool Diploma Average,  in Order to Get Accepted in our Faculty
                        </div>
                        <div className = {"slide"}>
                            <strong><div  className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Architectural Engineering <br/><br/><p className={"professor"}>Professor Alexander Graham Bell</p></div></strong>
                            <h2 id = {"huge-titles"}><strong>Terms of acceptance</strong></h2>
                            90+ HighSchool Diploma Average,  in Order to Get Accepted in our Faculty
                        </div>
                    </div>
                    <div className={"slides-navigation"}>
                        <label htmlFor={"r1"} className={"bar"} onClick={this.swipe} id = {"r1"} style = {{background:this.state.r1?"black":"white"}}/>
                        <label htmlFor={"r2"} className={"bar"} onClick={this.swipe} id = {"r2"} style = {{background:this.state.r2?"black":"white"}}/>
                        <label htmlFor={"r3"} className={"bar"} onClick={this.swipe} id = {"r3"} style = {{background:this.state.r3?"black":"white"}}/>
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
export default Engineering;