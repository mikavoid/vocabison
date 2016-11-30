import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor'

import App from '../imports/ui/components/App/App';

Meteor.startup(()=> {
    ReactDOM.render(<App />, document.querySelector('.render_target'))
})