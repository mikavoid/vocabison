import React from 'react'
/**
 * Props allowed
 *      icon : ex fa-envelope
 *      level : 1 - 6 (h1 -> h6)
 */

class Heading extends React.Component {

    constructor(props){
        super(props)
    }
    getHeadingLevelHTML(level, children) {
        switch (level ) {
            case '1' :
                return <h1>{children}</h1>
                break;
            case '2' :
                return <h2>{children}</h2>
                break;
            case '3' :
                return <h3>{children}</h3>
                break;
            case '4' :
                return <h4>{children}</h4>
                break;
            case '5' :
                return <h5>{children}</h5>
                break;
            case '6' :
                return <h6>{children}</h6>
                break;
            default:
                return <h1>{children}</h1>
        }
    }

    render () {
        return (
            <div className={'heading heading-' + this.props.level}>
                {this.props.icon ? <span className={'heading-icon fa ' + this.props.icon}></span> : ''}
                {this.getHeadingLevelHTML(this.props.level, this.props.children)}
            </div>

        )
    }
}
export default Heading;