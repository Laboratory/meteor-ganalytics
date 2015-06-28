fs = Npm.require('fs');

try {
    //read data from file ./private/settings.ga.json
    settingsString = fs.readFileSync(process.env.PWD + '/private/settings.ga.json');
    //parse to json
    settings = JSON.parse(settingsString);
    //create Meteor.settings if settings is null
    Meteor.settings = Meteor.settings || {};
    //add ga settings to Meteor
    _.extend(Meteor.settings, settings);
}
catch (err) {
    console.info('Error reading setting file from private/settings.ga.json', err);
}
