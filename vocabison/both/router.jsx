import React                from 'react';
import { MainLayout }         from '../imports/ui/layouts/MainLayout';
import App                  from '../imports/ui/components/App/App'

/** HOME **/
FlowRouter.route("/", {
    action: function () {
        ReactLayout.render (MainLayout, {
            content: <App page="Home"/>
        });
    } 
});

/** LOGIN **/
FlowRouter.route("/login", {
    action: function () {
        ReactLayout.render (MainLayout, {
            content: <App page="Login"/>
        });
    } 
});