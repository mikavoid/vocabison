import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check';

Meteor.methods({
    'user.add': function (userOptions) {
        let userId = '';
        //throw new Meteor.Error(500, "un message d'erreur, une putain de grosse mega erreur de ouf bla bla bla espèce de gorille ");
        try {
            userId = Accounts.createUser(userOptions);
            //Accounts.sendVerificationEmail(userId);
            return userId;
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