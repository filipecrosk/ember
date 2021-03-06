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
      'script-src': "'self' 'unsafe-eval' https://*.googleapis.com https://*.gstatic.com",
      'font-src': "'self' https://*.gstatic.com", // Allow fonts to be loaded from http://fonts.gstatic.com
      'connect-src': "'self' http://localhost:3000 api.alooga.com.br", // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
      'img-src': "'self' * s3.amazonaws.com https://*.googleapis.com https://*.gstatic.com",
      'style-src': "'self' 'unsafe-inline' https://*.googleapis.com", // Allow inline styles and loaded CSS from http://fonts.googleapis.com 
      'media-src': "'self' s3.amazonaws.com",
      'frame-src': "'self' s3.amazonaws.com"
    },

    /*torii: {
      providers: {
        'google-oauth2': {
          apiKey: '903568329885-99mi1ojol2jcne9ns65l6acm0cdne6r2.apps.googleusercontent.com',
          redirectUri: 'http://localhost:4200'
        },
        'facebook-oauth2': {
          apiKey:      '404599803055772'
        }
      }
    }*/
  };
  
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.apiHost = "http://localhost:3000";
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

    ENV.apiHost = "http://localhost:3000";
  }

  if (environment === 'production') {    
    ENV.apiHost = "http://api.alooga.com.br";
  }  


  ENV['simple-auth-devise'] = { 
    tokenAttributeName: 'token',
    identificationAttributeName: 'email',
    serverTokenEndpoint: ENV.apiHost + '/users/sign_in',
    authorizer: 'devise'
  };

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:devise',
    crossOriginWhitelist: ['http://localhost:3000']
  };

  return ENV;
};
