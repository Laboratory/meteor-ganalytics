fs = Npm.require('fs');

try {
    //read data from file ./private/settings.ga.json
    dir = Npm.require('path').normalize(__meteor_bootstrap__.serverDir + '/assets/app/settings.ga.json');
    settingsString = fs.readFileSync(dir);
    //parse to json
    settings = JSON.parse(settingsString);
    //create Meteor.settings if settings is null
    Meteor.settings = Meteor.settings || {};
    //add ga settings to Meteor
    _.extend(Meteor.settings, settings);
    //add settings for publishing to client
    __meteor_runtime_config__.PUBLIC_SETTINGS = Meteor.settings.public;
}
catch (err) {
    console.info('Error reading setting file from /assets/app/settings.ga.json', err);
}
