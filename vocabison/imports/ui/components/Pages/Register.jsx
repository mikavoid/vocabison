import { Meteor }                   from 'meteor/meteor'
import { Session }                  from 'meteor/session'
import React, { Component }         from 'react'
import { createContainer }          from 'meteor/react-meteor-data'
import MuiThemeProvider             from 'material-ui/styles/MuiThemeProvider'
import ReactCSSTransitionGroup      from 'react-addons-css-transition-group'
import {check}                      from 'meteor/check'

//Import components
import Heading                  from '../Heading/Heading'
import Alert                    from '../Alert/Alert'

class Register extends Component {

    constructor(props) {
        super(props)
    }

    getErrorMessage() {
        let message = this.props.errorMessage;
        if (message) {
           // Session.set("error", "");
            return <Alert type="danger">{message} </Alert>
    }
    }

    checkForm() {
        let inputs = {
            email: this.refs.email.value.trim(),
            password: this.refs.password.value.trim(),
            password_confirmation: this.refs.password_confirmation.value.trim()
        }
        //Check validity
        if (!inputs.email || !inputs.password || !inputs.password_confirmation) {
            //If a field is empty
            Session.set("error", "A field is missing");
        } else {
            if (inputs.password !== inputs.password_confirmation) {
                Session.set("error", "Passwords are not matching");
            } else {
                if (inputs.password.length < 7) {
                    Session.set("error", "Password is too short (7 characters min)");
                } else {
                    //Valid form
                    const userOptions = {
                        username: inputs.email,
                        email: inputs.email,
                        password: inputs.password,
                        profile: []
                    }
                    Meteor.call('user.add', userOptions, function (error, result) {
                        if (error) {
                            Session.set('error', error.message);
                        } else {
                            Session.set('notice', 'Thank you, you\'re now registred. We sent you an email, please click on the button on it to confirm your email address as soon as possible');
                            FlowRouter.go('/login');
                        }
                        console.info(result);
                    });
                }
            }
        }
        return inputs;
    }

    handleFacebookLogin(event) {
        event.preventDefault();
        console.log('Trying to login with facebook');
        let options = {
            requestPermissions: ['user_birthday', 'email', 'user_photos']
        }
        Meteor.loginWithFacebook(options, (error) => {
            if (error) {
                Session.set("error", error.message)
            } else {
                FlowRouter.go('/')
            }
        });
    }

    handleTwitterLogin(event) {
        event.preventDefault();
        console.log('Trying to login with twitter');
        let options = {}
        Meteor.loginWithTwitter(options, (error) => {
            if (error) {
                Session.set("error", error.message)
            } else {
                FlowRouter.go('/')
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        //Get fiels data
        let inputs = this.checkForm();
    }

    render() {
        return (
            <MuiThemeProvider>
                <section id="register" className="register">
                    <ReactCSSTransitionGroup
                        transitionName="route"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnter={false}
                        transitionLeave={false}>
                        <div className="register__form-container">
                            <Heading icon="fa-user-plus" level="1">Register</Heading>
                            <p className="help-line">Already registered ? <a href="/login">Sign in</a></p>
                            <form onSubmit={this.handleSubmit.bind(this)}>

                                {this.getErrorMessage()}

                                <div className="socialConnexionButtons">
                                    <a onClick={this.handleFacebookLogin.bind(this)}
                                            className=" iconButton facebook"><span className="fa fa-facebook"></span>
                                    </a>
                                    <a onClick={this.handleTwitterLogin.bind(this)} className="iconButton twitter">
                                        <span className="fa fa-twitter"></span></a>
                                </div>
                                <Heading level="4">Or sign up with your email address</Heading>
                                <input
                                    placeholder="Email Address"
                                    type="email"
                                    ref="email"
                                    id="email"
                                    required
                                />

                                <input
                                    placeholder="Password"
                                    type="password"
                                    id="password"
                                    ref="password"
                                    pattern=".{7,}"
                                    title="7 characters minimum"
                                    required
                                />

                                <input
                                    placeholder="Password confirmation"
                                    type="password"
                                    ref="password_confirmation"
                                    id="password_confirmation"
                                    pattern=".{7,}"
                                    title="7 characters minimum"
                                    required
                                />

                                <div className={'input-submit'}>
                                    <button type="submit" id="submit">
                                        Register
                                    </button>
                                </div>

                            </form>
                        </div>
                    </ReactCSSTransitionGroup>
                </section>
            </MuiThemeProvider>
        )
    }
}

export default createContainer(() => {
    return {
        errorMessage: Session.get('error')
    }
}, Register)