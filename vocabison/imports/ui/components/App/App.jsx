import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../Header/Header';

injectTapEventPlugin();


class App extends Component {
    render () {
        return (
            <div>
                <MuiThemeProvider>
                    <Header />
                </MuiThemeProvider>
            </div>
        )
    }
}

export default App;