import React, { Component } from 'react';

class Header extends Component {
    render () {
        return (
            <header id="header" className="header">
                <div className="wrapper">
                    <div className="header__branding">
                        <a className="logo" href="#"><img src="images/logo-vocabison.png" alt="Vocabison's logo" title="Vocabison's logo"/></a>
                        <h1 className="mainTitle"><a href="#">VOCABISON</a></h1>
                    </div>
                    <div className="header__body">
                        <a href="#" className="button loginButton">Login</a>
                        <a href="#" className="button focus loginButton">Register</a>
                        <a href="#" className="burger"><span className="fa fa-bars"></span></a>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;