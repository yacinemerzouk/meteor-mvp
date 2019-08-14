Meteor.startup(function(){
    process.env.MAIL_URL = 'smtps://USERNAME_GOES_HERE:PASSWORD_GOES_HERE@SERVICE_GOES_HERE:465'
})