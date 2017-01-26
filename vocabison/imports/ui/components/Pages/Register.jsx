import {Meteor}               from 'meteor/meteor'
import React, {Component}     from 'react'
import {createContainer}      from 'meteor/react-meteor-data'
import MuiThemeProvider         from 'material-ui/styles/MuiThemeProvider'
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'
import {check}                from 'meteor/check'

//Import components
import Heading                  from '../Heading/Heading'

class Register extends Component {

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
            password: this.refs.password.value.trim(),
            password_confirmation: this.refs.password_confirmation.value.trim()
        }
        //Check validity
        if (!inputs.email || !inputs.password || !inputs.password_confirmation) {
            //If a field is empty
            this.setState({form_error: "A field is missing"});
        } else {
            if (inputs.password !== inputs.password_confirmation) {
                this.setState({form_error: "Passwords are not matching"});
            } else {
                if (inputs.password.length < 7) {
                    this.setState({form_error: "Password is too short (7 characters min)"});
                } else {
                    //Valid form
                    this.setState({form_error: false});
                    const userOptions = {
                        username: inputs.email,
                        email: inputs.email,
                        password: inputs.password,
                        profile: []
                    }
                    Meteor.call('user.add', userOptions);
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
                this.setState({'form_error': error.message})
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
                this.setState({'form_error': error.message})
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
                                <div className="socialConnexionButtons">
                                    <button onClick={this.handleFacebookLogin.bind(this)}
                                            className="iconButton facebook"><span className="fa fa-facebook"></span>
                                    </button>
                                    <button onClick={this.handleTwitterLogin.bind(this)} className="iconButton twitter">
                                        <span className="fa fa-twitter"></span></button>
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

                                {this.getErrorMessage()}
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
    return {}
}, Register)