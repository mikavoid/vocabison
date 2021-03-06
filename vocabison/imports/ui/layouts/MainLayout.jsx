import {Meteor}                 from 'meteor/meteor'
import React                    from 'react'
import reactMixin               from 'react-mixin'
import {ReactMeteorData}        from 'meteor/react-meteor-data'
import injectTapEventPlugin     from 'react-tap-event-plugin'

//Import components
import MuiThemeProvider         from 'material-ui/styles/MuiThemeProvider'
import Header                   from '../components/Header/Header'
import Footer                   from '../components/Footer/Footer'
import Login                    from '../components/Pages/Login'

injectTapEventPlugin()

export class MainLayout extends React.Component {

    constructor(props) {
        super(props);
    }

    getMeteorData() {
        return {
            loggingIn: Meteor.loggingIn(),
            hasUser: !!Meteor.user(),
            isPublic(routeGroup) {
                let publicRoutesGroup = [
                    'public'
                ];

                return publicRoutesGroup.indexOf(routeGroup) > -1;
            },
            hasNavbar() {
                let noNavbarRoutesName = [
                    'login',
                    'register'
                ];
                return noNavbarRoutesName.indexOf(FlowRouter.getRouteName()) <= -1;
            },
            canView () {
                return this.isPublic(FlowRouter.current().route.group.name) || !!Meteor.user()
            }
        }
    }

    loading() {
        return <div className="loading">Loading</div>
    }

    getView() {
        return this.data.canView();
    }


    render() {
        return (
            <div className="app-root">
                <Header hasUser={this.data.hasUser} hasNavbar={this.data.hasNavbar()}/>
                    <main>
                        {this.getView() ? this.props.content : <Login />}
                    </main>
                <Footer />
            </div>
        )
    }
}

reactMixin(MainLayout.prototype, ReactMeteorData);
