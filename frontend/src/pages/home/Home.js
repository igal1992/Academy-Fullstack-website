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
            const response_course = await fetch("http://localhost:8080/api/course/getData");
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
                        <h1>Welcome to Igal Mekonen's Academy</h1>
                        <h2>Study in one of the top Academies in Israel!</h2>
                        <p>- in our Academy you can Apply to a Variety of Schools -</p>
                    </section>
                    <section id = {"schools"} >
                        {this.state.courses.map((schoolVariation) =>{return(
                            <div className={"school-container"} key={schoolVariation.course_name}>
                            <div className={"front"}>
                                <img className = {"school-logo"} src = {schoolVariation.image_url} alt = {""}/>
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