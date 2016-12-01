import React, { Component } from 'react';

class Header extends Component {
    render () {
        return (
            <nav className="nav navbar-light">
                <a className="navbar-brand">Navbar</a>
                <ul className="nav navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Maia solutions</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Test</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header;