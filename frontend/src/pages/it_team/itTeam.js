import * as React from "react";
import './ItTeam.css'
import { withRouter } from 'react-router';


class itTeam extends React.Component{
    state = {
    }
    componentDidMount(){
        document.title = "BL Academy - it team connect";
    }
    render(){
        return(
            <div align = {"center"} className={"itTeam"}>
                <div>
                    <h1>IT Support</h1>
                    <br/>
                    <h2>in order to contact our Support Make sure you're registered in our Academy</h2>
                    <br/>
                    <p>IT Support Contact Phone:     <strong>*1111</strong></p>
                </div>
            </div>
        )
    }
}
export default withRouter(itTeam);