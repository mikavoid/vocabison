import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';

Meteor.methods({
    'addUser' : function(user) {
        Accounts.createUser(user, function(e) {
            if (e) {
                console.log('error');
                console.info(e);
            }
        })
    },
    'logUserIn' : function(user) {
        console.log('trying to login');
        console.info(user.email)
        console.info(user.password)
    }
})