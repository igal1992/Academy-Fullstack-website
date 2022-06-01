import * as React from "react";
import './Home.css';
import imagesGroup from "../../components/ImageHolder";
import { withRouter } from 'react-router';


class Home extends React.Component{
    state = {
        courses:[]
    }
    async componentDidMount(){
        document.title = "BL Academy - Home";
        try{
            const response_course = await fetch("https://64ro0p4yue.execute-api.us-east-2.amazonaws.com/api/course/getData");
            const json_course = await response_course.json();
            this.setState({
                courses:json_course,
            });
        }catch(err){
            this.props.history.push("/down");
        }
    }
    render(){
        return(
            <div align= {"center"} className={"home"}>
                <div>
                    <section id={"home-header"}>
                        <h1>Igal Mekonen's Academy</h1>
                        <h2>Study in one of the top Academies in Israel!</h2>
                        <h3>- in our Academy you can Apply to a Variety of Schools -</h3>
                    </section>
                    <section id = {"schools"} >{console.log(imagesGroup,this.state.courses)}
                        {this.state.courses.map((schoolVariation) =>{return(
                            <div className={"school-container"} key={schoolVariation.course_name}>
                            <div className={"front"}>
                                <img className = {"school-logo"} src = {imagesGroup[schoolVariation.course_name]} alt = {""}/>
                                <p className={"school-name"}>{schoolVariation.course_name}</p>
                            </div>
                            <div className={"back"}>
                                <div className={"school-description"}>
                                    <span id = {"school-text"}><br/>{schoolVariation.description}</span>
                                </div>
                            </div>
                        </div>
                        )})}
                    </section>
                </div>
            </div>
        )
    }
}
export default withRouter(Home);