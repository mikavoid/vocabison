import {Meteor}                         from 'meteor/meteor'
import {Session}                        from 'meteor/session'
import React, {Component}               from 'react'
import {createContainer}                from 'meteor/react-meteor-data'
import ReactCSSTransitionGroup          from 'react-addons-css-transition-group'

//Import components
import Heading                          from '../Heading/Heading'
import Alert                           from '../Alert/Alert'


class Login extends Component {

    constructor(props) {
        super(props)
    }

    getErrorMessage() {
        let message = this.props.errorMessage;
        if (message !== "") {
            return <Alert type="danger">{message}</Alert>
        }
    }

    getNotice() {
        let message = this.props.notice;
        if (message !== "") {
            return <Alert type="notice">{message}</Alert>
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
            Session.set("error", "A field is missing");
        } else {
            //Valid form
            const user = {
                email: inputs.email,
                password: inputs.password
            }

            Meteor.loginWithPassword(user.email, user.password, (e) => {
                if (e) {
                    console.info(e)
                    Session.set("error", e.reason);
                } else {
                    if (!Meteor.user().emails[0].verified) {
                        Session.set("error", "Please activate your email address");
                    } else {
                        FlowRouter.go('/')
                    }
                }
            });
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
            <section id="login" className="login">
                <ReactCSSTransitionGroup
                    transitionName="route"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div className="login__form-container">
                        {this.getNotice()}
                        <Heading icon="fa-sign-in" level="1">Login</Heading>
                        <p className="help-line">Not registered with us yet ? <a href="/register">Sign Up</a></p>
                        <form onSubmit={this.handleSubmit.bind(this)}>

                            {this.getErrorMessage()}
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

                            <div className={'input-submit'}>
                                <button type="submit" id="submit">
                                    Sign in
                                </button>
                            </div>
                        </form>
                        <Heading level="4">Or log in with social medias</Heading>
                        <div className="socialConnexionButtons">
                            <a onClick={this.handleFacebookLogin.bind(this)}
                               className="iconButton facebook"><span
                                className="fa fa-facebook"></span></a>
                            <a onClick={this.handleTwitterLogin.bind(this)}
                               className="iconButton twitter"><span
                                className="fa fa-twitter"></span></a>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
            </section>


        )
    }
}

export default createContainer(() => {
    return {
        errorMessage: Session.get('error'),
        notice: Session.get('notice')
    }
}, Login)