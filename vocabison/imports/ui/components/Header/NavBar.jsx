import React from 'react'


class NavBar extends React.Component {

    constructor(props){
        super(props)
    }

    getNavBarLinks(hasUser) {
        if (hasUser) {
            return (
                <ul>
                    <li><a href="#">User</a></li>
                </ul>
            )    
        }

        return (
            <ul>
                <li>
                    <a href="#">How it works ?</a>
                </li>
                <li>
                    <a href="#">Is it free ?</a>
                </li>
                <li>
                    <a href="#">How can I join you ?</a>
                </li>
            </ul>
        )
    }

    render () {
        return (
            <nav id="navbar" className="navbar main">
                <div className="wrapper">
                    {this.getNavBarLinks(this.props.hasUser)}
                </div>
            </nav>
        )
    }
}
export default NavBar;