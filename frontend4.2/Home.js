import * as React from "react";
import {homeClasses} from "./Lists.js";

class Home extends React.Component{
    state = {
    }
    render(){
        return(
            <div align= {"center"}>
                <div>
                    <h1>Welcome to Black Knight's Academy</h1>
                    <br/>
                    <h2>Study in one of the top Academies in Israel!</h2>
                    <br/>
                    <p>- in our Academy you can Apply to a Variety of Schools -</p><br/><br/>
                    <section id = {"schools"} >
                        {homeClasses.map((schoolVariation) => (
                            <div className={"school-container"}>
                                <div className={"front"}>
                                    <img className = {"school-logo"} src = {schoolVariation.image}/>
                                    <p className={"school-name"}>{schoolVariation.class}</p>
                                </div>
                                <div className={"back"}>
                                    <div className={"school-description"}>
                                        <span id = {"school-text"}><br/>{schoolVariation.description}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        )
    }
}
export default Home;