import React                from 'react'
import { mount }            from 'react-mounter'
import { MainLayout }       from '../../imports/ui/layouts/MainLayout'
import App                  from '../../imports/ui/components/App/App'

const authenticatedRoutes = FlowRouter.group({ name : 'authenticated'})

/** AUTHENTICATED TIMELINE **/
authenticatedRoutes.route("/timeline", {
    action() {
        mount(MainLayout, {
            content: (<App page="Timeline"/>)
        });
    } 
});
