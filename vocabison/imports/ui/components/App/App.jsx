import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Header from '../Header/Header';
//import Login from '../Pages/Login';


class App extends Component {
    constructor(props) {
        super(props)
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
                    <main>
                        <h1> - {this.props.page} - </h1>
                    </main>
                </ReactCSSTransitionGroup>
            </section>
        )
    }
}

export default App;