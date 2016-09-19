/* jshint node: true */
module.exports = function(environment) {
    var ENV = {
        modulePrefix: 'ember-addressbook',
        environment: environment,
        rootURL: '/',
        apiURL: 'http://laravel-todo-list.dev',
        locationType: 'auto',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },
        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        },
    };
    ENV['ember-simple-auth'] = {
        authorizer: 'authorizer:token'
    };
    if (environment === 'development') {
        ENV['ember-simple-auth-token'] = {
            serverTokenEndpoint: ENV.apiURL + '/auth/login',
            identificationField: 'email',
            passwordField: 'password',
            refreshAccessTokens: false,
            timeFactor: 1000,
            refreshLeeway: 30
        };
    }
    if (environment === 'test') {
        // Testem prefers this...
        ENV.locationType = 'none';
        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;
        ENV.APP.rootElement = '#ember-testing';
    }
    if (environment === 'production') {
        ENV['ember-simple-auth'] = {
            applicationRootUrl: ENV.rootURL,
            crossOriginWhitelist: [ENV.apiURL]
        };
        ENV['ember-simple-auth-token'] = {
            serverTokenEndpoint: ENV.apiURL + '/auth/login',
            refreshAccessTokens: false,
            timeFactor: 1000,
            refreshLeeway: 30
        };
    }
    return ENV;
};