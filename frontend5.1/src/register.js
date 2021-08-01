import * as React from "react";
import axios from "axios";
import {accountDescription} from "./Lists";

class register extends React.Component {

    state = {
        username: "",
        password: "",
        phone: "",
        email: "",
        emailVer: "",
        firstName: "",
        lastName: "",
        validation: true
    }

    update = (event) => {
        let input = event.target.name;
        let value = event.target.value;
        this.setState({
            [input]: value
        })
    }
    register = () => {
        this.validateUser();
        if (this.state.validation) {
            const registered = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                phone: this.state.phone
            }
            axios.post("http://localhost:8080/app/register", registered)
                .then(response => {
                    if (response.data.fail != null) {
                        this.setState({
                            username: "",
                        })
                        alert(response.data.fail);
                    } else if (response.data.success != null) {
                        this.setState({
                            username: "",
                            password: "",
                            phone: "",
                            email: "",
                            emailVer: "",
                            firstName: "",
                            lastName: "",
                            validation: true
                        });
                        alert(response.data.success);
                    } else if (response.data.runTime != null) {
                        alert(response.data.runTime);
                    }
                });
        }
    };
    validateUser = () => {
        const firstNameRe = /^[a-zA-Z]{2,20}$/
        const lastNameRe = /^[a-zA-Z]{2,20}$/
        const userName = /^[a-zA-Z0-9]{2,10}$/
        const passwordRe = /^([a-zA-Z0-9.-@#$%]){4,12}$/
        const emailRe = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
        const phoneRe = /^[0-9]{10}$/
        if (!firstNameRe.test(this.state.firstName)) {
            this.setState({
                firstName: "",
                validation: false
            });
        } else if (!phoneRe.test(this.state.phone)) {
            this.setState({
                phone: "",
                validation: false
            });
        } else if (!lastNameRe.test(this.state.lastName)) {
            this.setState({
                lastName: "",
                validation: false
            });
        } else if (!userName.test(this.state.username)) {
            this.setState({
                username: "",
                validation: false
            });
        } else if (!passwordRe.test(this.state.password)) {
            this.setState({
                password: "",
                validation: false
            });
        } else if (!emailRe.test(this.state.email)) {
            this.setState({
                email: "",
                validation: false
            });
            console.log("Invalid email most include: a-z, A-Z, 0-9 + @ + a-z, A-Z, 0-9 + . + a-z, A-Z");
        } else if (this.state.email !== this.state.emailVer) {
            this.setState({
                emailVer: "",
                email: "",
                validation: false
            });
            console.log("First email and Second email dont match please enter again");
        }
    }

    render() {
        return (
            <div className={"login-register-component"}>
                <div className={"register"}>
                    <div>
                        <form>
                            <h1 className={"login-register-header"}>Register</h1>
                            {accountDescription.map((account) => (<div className={"inputField"}><input name={account.name} placeholder={account.placeholder} onChange={this.update} value={this.state[account.value]} type={account.type}/>
                                <div className={"exclamation-cover"}><i id={"exclamation"} className="fa fa-exclamation-circle" aria-hidden="true"/><p className={"hint"}>{account.hint}</p></div><br/><br/></div>))}
                        </form>
                        <button className={"login-register"} onClick={this.register}>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default register;