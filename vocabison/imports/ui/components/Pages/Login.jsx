import {Meteor}     from 'meteor/meteor'
import React, {Component}     from 'react'
import MuiThemeProvider         from 'material-ui/styles/MuiThemeProvider'
import { createContainer }      from 'meteor/react-meteor-data'

//Import components
import Heading                  from '../Heading/Heading'
import TextField                from '../Forms/TextField';
import SubmitButton                from '../Forms/SubmitButton';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            form_error: ''
        };
    }

    getErrorMessage() {
        if (this.state.form_error) {
            return <p className="alert danger">{this.state.form_error}</p>
        }
    }

    checkForm() {
        let inputs = {
            email: this.refs.email.value.trim(),
            password: this.refs.password.value.trim()
        }
        //Check validity
        if (!inputs.email || !inputs.password) {
            //If a field is empty
            this.setState({form_error: "A field is missing"});
        } else {
            //Valid form
            this.setState({form_error: false});
            const user = {
                email: inputs.email,
                password: inputs.password
            }
            Meteor.loginWithPassword(user.email, user.password, (e) => {
                if (e) {
                    console.info(e)
                    this.setState({form_error : e.reason});
                } else {
                    FlowRouter.go('/')
                }
            });
        }
        return inputs;
    }

    handleSubmit(event) {
        event.preventDefault();

        //Get fiels data
        let inputs = this.checkForm();
    }

    render() {
        return (
            <MuiThemeProvider>
                <section id="login" className="login">
                    <div className="login__form-container">
                        <Heading icon="fa-sign-in" level="1">Login</Heading>
                        <p className="help-line">Not registered with us yet ? <a href="#">Sign Up</a></p>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <input
                                placeholder="Email Address"
                                type="email"
                                ref="email"
                                id="email"
                            />
                            <input
                                placeholder="Password"
                                type="password"
                                ref="password"
                                id="password"
                            />
                            <p className="help-line mini"><a href="#">Forgot your password ?</a></p>
                            {this.getErrorMessage()}
                            <div className={'input-submit'}>
                                <button type="submit" id="submit">
                                    Sign in
                                </button>
                            </div>

                        </form>
                        <Heading level="4">Or log in with social medias</Heading>
                        <div className="socialConnexionButtons">
                            <button className="iconButton facebook"><span className="fa fa-facebook"></span></button>
                            <button className="iconButton twitter"><span className="fa fa-twitter"></span></button>
                            <button className="iconButton google"><span className="fa fa-google-plus"></span></button>
                        </div>
                    </div>
                </section>
            </MuiThemeProvider>
        )
    }
}

export default createContainer(() => {
    return {}
}, Login)