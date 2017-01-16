import './collections/user.js'

console.log('I am in the server');
Meteor.startup( () => Modules.server.startup() );