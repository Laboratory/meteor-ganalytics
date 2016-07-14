Package.describe({
    summary: "Publish pageviews and events to Google Analytics using the new analytics.js code with settings.",
    version: "0.2.5",
    name: "laboratory:ganalytics",
    git: 'https://github.com/Laboratory/meteor-ganalytics.git'
});

Package.onUse(function (api) {
    api.use('underscore@1.0.3');
    api.addFiles(['ganalytics.js'], 'client');
    api.addFiles(['settings.js'], 'server');
    api.export(['GAnalytics'], 'client');
});
