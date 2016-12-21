import React, { Component } from 'react';

class Header extends Component {

    constructor(props){
        super(props)
        this.state = {
            mainTitle : 'VOCABISON',
            mobileMenuIsOpen : false
        }
    }

    toggleMobileHeader () {
        console.log(!this.state.mobileMenuIsOpen);
        this.setState({
            mobileMenuIsOpen : !this.state.mobileMenuIsOpen
        });
    }

    render () {
        return (
            <header id="header" className="header">
                <div className="wrapper">
                    <div className="header__branding">
                        <a className="logo" href="#"><img src="images/logo-vocabison.png" alt="Vocabison's logo" title="Vocabison's logo"/></a>
                        <h1 className="mainTitle"><a href="#">{this.state.mainTitle}</a></h1>
                    </div>
                    <div className="header__body">
                        <ul  className="header__body__buttons">
                            <li><a href="#" className="button loginButton">Login</a></li>
                            <li><a href="#" className="button focus loginButton">Register</a></li>
                        </ul>
                    </div>

                </div>
            </header>
        )
    }
}

export default Header;