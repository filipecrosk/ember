/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'frontend',
    environment: environment,
    baseURL: '/',
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

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' connect.facebook.net",
      'font-src': "'self' http://fonts.gstatic.com", // Allow fonts to be loaded from http://fonts.gstatic.com
      'connect-src': "'self' http://localhost:3000", // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
      'img-src': "*",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com", // Allow inline styles and loaded CSS from http://fonts.googleapis.com 
      'media-src': "'self'",
      'frame-src': "'self' static.ak.facebook.com s-static.ak.facebook.com www.facebook.com"
    }
  };

  ENV['simple-auth'] = {    
    authorizer: 'simple-auth-authorizer:devise'
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV['simple-auth-devise']['serverTokenEndpoint'] = 'https://api.alooga.com.br/users/sign_in';
    ENV['simple-auth-devise']['crossOriginWhitelist'] = ['https://api.alooga.com.br/'];
  }

  return ENV;
};
