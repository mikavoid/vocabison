import React                from 'react'
import { mount }            from 'react-mounter'
import { MainLayout }       from '../../imports/ui/layouts/MainLayout'
import App                  from '../../imports/ui/components/App/App'
import Login                from '../../imports/ui/components/Pages/Login'
import Register             from '../../imports/ui/components/Pages/Register'

const publicRoutes = FlowRouter.group({ name : 'public'})

/** HOME **/
publicRoutes.route("/", {
    action() {
        mount(MainLayout, {
            content: (<App page="Home"/>)
        });
    } 
});

/** LOGIN **/
publicRoutes.route("/login", {
    action() {
        mount(MainLayout, {
            content: (<Login />)
        });
    } 
});

/** REGISTER **/
publicRoutes.route("/register", {
    action() {
        mount(MainLayout, {
            content: (<Register />)
        });
    } 
});