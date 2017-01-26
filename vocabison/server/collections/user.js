import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check';

Meteor.methods({
    'user.add': function (userOptions) {
        let userId = '';

        console.log('trying to create user');
        try {
            userId = Accounts.createUser(userOptions);
            Accounts.sendVerificationEmail(userId);
        }
        catch (e) {
            console.log(e);
            throw new Meteor.Error(500, e.message)
        }

    }
    ,
    'user.login': function () {
        Accounts.validateLoginAttempt(function (attempt) {
            console.log('attempt');
            console.log(attempt);
            let user = attempt.user;
            if (!user.emails[0].verified) {
                throw new Meteor.Error(403, 'E-Mail address not verified.')
            }
            return true;
        })
    }
})