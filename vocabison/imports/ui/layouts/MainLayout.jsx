import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header   from '../components/Header/Header';

injectTapEventPlugin();

export let MainLayout = React.createClass({
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <Header/>
                </MuiThemeProvider>
                <main>
                    <MuiThemeProvider>
                        {this.props.content}
                    </MuiThemeProvider>
                </main>
                <footer>
                    This is our footer
                </footer>
            </div>
        )
    }
});