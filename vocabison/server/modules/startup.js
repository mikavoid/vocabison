let startup = () => {
    Modules.server.configureServices()

    //Configuring email
    console.log('Configuring email smtp');
    process.env.MAIL_URL = Meteor.settings.private.email.mail_url;

    //sending test email
    /*
    Email.send({
        to: "mikavoid@gmail.com",
        from : "from.address@email.com",
        subject: "Example email",
        text: "Hello world"
    });
    */
}

Modules.server.startup = startup;