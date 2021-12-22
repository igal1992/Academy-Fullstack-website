import * as React from "react";
import bachelor from "./Images/bachelor.jpg";
import { withRouter } from 'react-router';


class Bachelors extends React.Component{
    state = {
        r1:false,
        r2:false,
        r3:false,
        r4:false,
        Business:[],
        Health:[],
        Social:[],
        Science:[]
    }
    constructor(props) {
        super(props);
        if(this.props.location.state.schools === true){
            this.state[this.props.location.state.rName] = true;
            window.scrollTo({top:document.body.scrollHeight, behavior: 'smooth'});
        }else{
            this.state.r1 = true;
        }
    }
    async componentDidMount(){
        document.title = "BL Academy - Bachelor Degrees";
        let health_faculty = "Health Faculty"
        let business_faculty = "Business Faculty"
        let social_faculty = "Social Faculty"
        let science_faculty = "Science Faculty"
        try{
            const response_healthFaculty = await fetch(`https://nodejs-blacknightacademy-site.herokuapp.com/api/course/getDataByDepartmentName/`+ health_faculty); 
            const response_businessFaculty = await fetch(`https://nodejs-blacknightacademy-site.herokuapp.com/api/course/getDataByDepartmentName/`+ business_faculty); 
            const response_socialFaculty = await fetch(`https://nodejs-blacknightacademy-site.herokuapp.com/api/course/getDataByDepartmentName/`+ social_faculty); 
            const response_scienceFaculty = await fetch(`https://nodejs-blacknightacademy-site.herokuapp.com/api/course/getDataByDepartmentName/`+ science_faculty); 
            const json_healthFaculty = await response_healthFaculty.json();
            const json_businessFaculty = await response_businessFaculty.json();
            const json_socialFaculty = await response_socialFaculty.json();
            const json_scienceFaculty = await response_scienceFaculty.json();
            this.setState({
                Business:json_businessFaculty,
                Health:json_healthFaculty,
                Social:json_socialFaculty,
                Science:json_scienceFaculty
            });

        }catch(error){
            this.props.history.push("/down");
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
                                {this.state.Social.map((faculty)=>(
                                    <div className={"faculty-class-inner"}>
                                        <div className={"faculty-class-inner-inner"}>
                                            <h3 className={"medium-titles"}>{faculty.course_name}</h3>
                                            <p className={"professor"}>{faculty.instructor_name}</p>
                                            <i className="fa fa-caret-right"/>
                                        </div>
                                        <div className={"faculty-class-dropdown"}>
                                            <h4>Description</h4>
                                            <p>{faculty.description}</p>
                                            <h4>Terms of acceptance</h4>
                                            <p>{faculty.terms}</p>
                                        </div>
                                    </div>
                                    ))}
                            </div>
                        </div>
                        <div className = {"slide"}>
                            <strong><div className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Business Faculty<br/><br/><p className={"professor"}>Professor Eric Sussman</p></div></strong>
                            <div className={"faculty-class-outer"}>
                                {this.state.Business.map((faculty)=>(
                                    <div className={"faculty-class-inner"}>
                                        <div className={"faculty-class-inner-inner"}>
                                            <h3 className={"medium-titles"}>{faculty.course_name}</h3>
                                            <p className={"professor"}>{faculty.instructor_name}</p>
                                            <i className="fa fa-caret-right"/>
                                        </div>
                                        <div className={"faculty-class-dropdown"}>
                                            <h4>Description</h4>
                                            <p>{faculty.description}</p>
                                            <h4>Terms of acceptance</h4>
                                            <p>{faculty.terms}</p>
                                        </div>
                                    </div>
                                    ))}
                            </div>
                        </div>
                        <div className = {"slide"}>
                            <strong><div className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Science Faculty<br/><br/><p className={"professor"}>Professor Galileo Galilei</p></div></strong>
                            <div className={"faculty-class-outer"}>
                                {this.state.Science.map((faculty)=>(
                                    <div className={"faculty-class-inner"}>
                                        <div className={"faculty-class-inner-inner"}>
                                            <h3 className={"medium-titles"}>{faculty.course_name}</h3>
                                            <p className={"professor"}>{faculty.instructor_name}</p>
                                            <i className="fa fa-caret-right"/>
                                        </div>
                                        <div className={"faculty-class-dropdown"}>
                                            <h4>Description</h4>
                                            <p>{faculty.description}</p>
                                            <h4>Terms of acceptance</h4>
                                            <p>{faculty.terms}</p>
                                        </div>
                                    </div>
                                    ))}
                            </div>
                        </div>
                        <div className = {"slide"}>
                            <strong><div className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Health Faculty<br/><br/><p className={"professor"}>Professor Amedeo Avigadro</p></div></strong>
                            <div className={"faculty-class-outer"}>
                                {this.state.Health.map((faculty)=>(
                                    <div className={"faculty-class-inner"}>
                                        <div className={"faculty-class-inner-inner"}>
                                            <h3 className={"medium-titles"}>{faculty.course_name}</h3>
                                            <p className={"professor"}>{faculty.instructor_name}</p>
                                            <i className="fa fa-caret-right"/>
                                        </div>
                                        <div className={"faculty-class-dropdown"}>
                                            <h4>Description</h4>
                                            <p>{faculty.description}</p>
                                            <h4>Terms of acceptance</h4>
                                            <p>{faculty.terms}</p>
                                        </div>
                                    </div>
                                    ))}
                            </div>
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
export default withRouter(Bachelors);