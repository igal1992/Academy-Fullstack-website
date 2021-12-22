import * as React from "react";
import engineering from "./Images/engineering.jpg";
import { withRouter } from 'react-router';

class Engineering extends React.Component{
    state = {
        Engi:[]
    }
    constructor(props) {
        super(props);
        if(this.props.location.state.schools === true){
            window.scrollTo({top:document.body.scrollHeight, behavior: 'smooth'});
        }
    }
    async componentDidMount(){
        document.title = "BL Academy - Engineering Diplomas";
        let engi_faculty = "Engi Faculty"
        try{
            const response_engiFaculty = await fetch(`https://nodejs-blacknightacademy-site.herokuapp.com/api/course/getDataByDepartmentName/`+ engi_faculty); 
            const json_engiFaculty = await response_engiFaculty.json();
            this.setState({
                Engi:json_engiFaculty
            });

        }catch(error){
            this.props.history.push("/down");
        }
    }
    render(){
        return(
            <div  className={"faculties-outer"}>
                <div className={"faculty-logo-container"}>
                    <img id = {"faculty-logo"} src = {engineering} alt = {"engineering-logo"} />
                </div>
                <div className= {"faculties middle"}>
                    <div className={"slides"}>
                        <div className = {"slide s1"}>
                            <strong><div className={"styled-buttons"} id = {"big-titles"}><i className="fa fa-university" aria-hidden="true"/> Geotechnical Engineering <br/><br/><p className={"professor"}>Professor Albert Einstein</p></div></strong>
                            <div className={"faculty-class-outer"}>
                                {this.state.Engi.map((faculty)=>(
                                    <div className={"faculty-class-inner"}>
                                        <div className={"faculty-class-inner-inner"}>
                                            <h3 className={"medium-titles"}>{faculty.course_name}</h3>
                                            <p className={"professor"}>{faculty.instructor_name}</p>
                                            <i className="fa fa-caret-right" id="faculty-open-description"/>
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
                </div>
            </div>
        );
    }
}
export default withRouter(Engineering);