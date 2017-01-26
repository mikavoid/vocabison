Accounts.validateNewUser((user) => {
if (user) {
    return true;
}
    if (user.emails[0].address.length >= 4 &&
        user.emails[0].address.length <= 320) {
        return true
    }
    throw new Meteor.Error(403, 'Invalid email. Sorry!')
})