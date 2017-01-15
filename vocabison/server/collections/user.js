import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';

Meteor.methods({
    'addUser' : function(user) {
        Accounts.createUser(user, function(e) {
            if (e) {
                console.log('Error creating user');
                throw new Meteor.Error(500, 'Error 500: Not found', 'the document is not found');
            }
        })
    }
})