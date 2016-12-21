import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Header extends Component {

    constructor(props){
        super(props)
        this.state = {
            mainTitle : 'VOCABISON',
            mobileMenuIsOpen : false,
            loginModalIsOpen : false,
            registerModalIsOpen : false
        }
    }

    toggleMobileHeader () {
        console.log(!this.state.mobileMenuIsOpen);
        this.setState({
            mobileMenuIsOpen : !this.state.mobileMenuIsOpen
        });
    }

    handleOpenLoginModal () {
        this.setState({
            loginModalIsOpen : true
        });
    }

    handleCloseLoginModal () {
        this.setState({
            loginModalIsOpen : false
        });
    }

    handleOpenRegisterModal () {
        this.setState({
            registerModalIsOpen : true
        });
    }

    handleCloseRegisterModal () {
        this.setState({
            registerModalIsOpen : false
        });
    }

    render () {
        const actions_login = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleCloseLoginModal.bind(this)}
                />,
            <FlatButton
                label="Login"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleCloseLoginModal.bind(this)}
                />,
        ];

        const actions_register = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleCloseRegisterModal.bind(this)}
                />,
            <FlatButton
                label="Register"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleCloseRegisterModal.bind(this)}
                />,
        ];

        return (
            <header id="header" className="header">
                <div className="wrapper">
                    <div className="header__branding">
                        <a className="logo" href="#"><img src="images/logo-vocabison.png" alt="Vocabison's logo" title="Vocabison's logo"/></a>
                        <h1 className="mainTitle"><a href="#">{this.state.mainTitle}</a></h1>
                    </div>
                    <div className="header__body">
                        <ul  className="header__body__buttons">
                            <li><a className="button loginButton" onTouchTap={this.handleOpenLoginModal.bind(this)}>Login</a></li>
                            <li><a className="button focus loginButton" onTouchTap={this.handleOpenRegisterModal.bind(this)}>Register</a></li>
                        </ul>
                    </div>
                </div>
                <Dialog
                    title="Login"
                    actions={actions_login}
                    modal={true}
                    open={this.state.loginModalIsOpen}
                    onRequestClose={this.handleCloseLoginModal.bind(this)}
                    >
                    <form action="">
                        <input type="text" placeholder="email"/><br/>
                        <input type="password" placeholder="password"/><br/>
                    </form>
                </Dialog>
                <Dialog
                    title="Register"
                    actions={actions_register}
                    modal={true}
                    open={this.state.registerModalIsOpen}
                    onRequestClose={this.handleCloseRegisterModal.bind(this)}
                    >
                    <form action="">
                        <input type="text" placeholder="email"/><br/>
                        <input type="password" placeholder="password"/><br/>
                        <input type="password" placeholder="password"/><br/>
                    </form>
                </Dialog>
            </header>

        )
    }
}

export default Header;