import React, { Component } from 'react';
import Header from '../Header/Header';


class App extends Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <div>
                <h1>{this.props.page}</h1>
            </div>
        )
    }
}

export default App;