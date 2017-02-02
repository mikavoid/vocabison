import React, { Component }     from 'react'
import MuiThemeProvider         from 'material-ui/styles/MuiThemeProvider'
import NavBar                   from '../Header/NavBar'


class Header extends Component {

    constructor(props){
        super(props)
    }

    render () {
        return (
            <MuiThemeProvider>
                <header id="header" className={"header " + (this.props.hasNavbar ? '' : 'no-navbar')}>
                    <div className="wrapper">
                        <div className="header__branding">
                            <a className="logo" href="#"><img src="images/logo-vocabison.png" alt="Vocabison's logo" title="Vocabison's logo"/></a>
                            <h1 className="mainTitle"><a href="/">Vocabison</a></h1>
                        </div>
                        <div className="header__body">
                            <ul  className="header__body__buttons">
                                <li><a className="button loginButton" href="/login">Login</a></li>
                                <li><a className="button focus loginButton" href="/register">Register</a></li>
                            </ul>
                        </div>
                    </div>
                    {this.props.hasNavbar ?  <NavBar hasUser={this.props.hasUser}/> : ''}
                </header>
            </MuiThemeProvider>
        )
    }
}

export default Header;