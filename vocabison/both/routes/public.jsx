import React                from 'react'
import { Session }          from 'meteor/session'
import { mount }            from 'react-mounter'
import { MainLayout }       from '../../imports/ui/layouts/MainLayout'
import App                  from '../../imports/ui/components/App/App'
import Login                from '../../imports/ui/components/Pages/Login'
import Register             from '../../imports/ui/components/Pages/Register'

const publicRoutes = FlowRouter.group({ name : 'public'})

/** HOME **/
publicRoutes.route("/", {
    name : "home",
    action() {
        mount(MainLayout, {
            content: (<App page="Home"/>)
        });
    }
});

/** LOGIN **/
publicRoutes.route("/login", {
    name : "login",
    action() {
        Session.set("error", "");
        Session.set("notice", "");
        mount(MainLayout, {
            content: (<Login />)
        });
    } 
});

/** VERIFY EMAIL **/
publicRoutes.route("/verify-email/:token", {
    name : "verify-email",
    action( params ) {
        console.info(params);
        Accounts.verifyEmail(params.token, (error) => {
           if (error) {
               console.error('Wrong link');
               mount(MainLayout, {
                   content: (<Login />)
               });
           } else {
               console.info('verified!!!')
               mount(MainLayout, {
                   content: (<App />)
               });
           }
        });

    }
});

/** REGISTER **/
publicRoutes.route("/register", {
    name : "register",
    action() {
        Session.set("error", false);
        Session.set("notice", false);
        mount(MainLayout, {
            content: (<Register />)
        });
    } 
});