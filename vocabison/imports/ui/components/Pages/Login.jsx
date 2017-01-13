import React, { Component }     from 'react'
import MuiThemeProvider         from 'material-ui/styles/MuiThemeProvider'

//Import components
import Heading                  from '../Heading/Heading'
import TextField                from '../Forms/TextField';
import SubmitButton                from '../Forms/SubmitButton';

class Login extends Component {

    constructor(props){
        super(props)
    }

    render () {
        return (
            <MuiThemeProvider>
                <section id="login" className="login">
                    <div className="login__form-container">
                        <Heading icon="fa-sign-in" level="1">Login</Heading>
                        <p className="help-line">Not registered with us yet ? <a href="#">Sign Up</a></p>
                        <form>
                            <TextField
                                placeholder="Email Address"
                                type="email"
                                ref="email"
                            />
                            <TextField
                                placeholder="Password"
                                type="password"
                                ref="password"
                            />
                            <p className="help-line mini"><a href="#">Forgot your password ?</a></p>
                            <SubmitButton
                                value="Log in"
                                id="submit-login-button"
                            />

                        </form>
                        <Heading level="4">Or log in with social medias</Heading>
                        <div className="mds_buttons">
                            <a href="#"><span className="fa fa-facebook"></span></a>   
                            <a href="#"><span className="fa fa-twitter"></span></a>   
                            <a href="#"><span className="fa fa-linkedin"></span></a>   
                        </div> 
                    </div>
                </section>
            </MuiThemeProvider>
        )
    }
}

export default Login;