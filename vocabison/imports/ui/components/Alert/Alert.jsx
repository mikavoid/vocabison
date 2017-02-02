import React       from 'react'


class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isVisible : true};
    }

    handleClose(e) {
        this.setState({isVisible : false});
    }

    render() {
        if (this.state.isVisible) {
            return (
                <p className={"alert animated pulse " + this.props.type }>
                    {this.props.close ? <span className="fa fa-close close" onClick={this.handleClose.bind(this)}></span> : ''}
                    {this.props.children}
                </p>
            )
        }
        return (<div></div>);
    }
}

export default Alert;
