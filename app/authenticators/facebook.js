import Base from 'simple-auth/authenticators/base';

export default Base.extend({
  restore: function(properties) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(properties.accessToken)) {
        resolve(properties);
      } else {
        reject();
      }
    });
  },
  authenticate: function() {
  	return new Ember.RSVP.Promise(function(resolve, reject) {
  		FB.getLoginStatus(function(fbResponse) {
        if (fbResponse.status === 'connected') {
          FB.api('/me', function(response) {
            console.log('Successful authorized for: ' + response.name);
            console.log(JSON.stringify(response));
          });
          Ember.run(function() {
            resolve({ accessToken: fbResponse.authResponse.accessToken });
          });
        } else if (fbResponse.status === 'not_authorized') {
          reject();
        } else {
          FB.login(function(fbResponse) {
            if (fbResponse.authResponse) {
              FB.api('/me', function(response) {
                console.log('Successful login for: ' + response.name);
                console.log(JSON.stringify(response));
              });
              Ember.run(function() {
                resolve({ accessToken: fbResponse.authResponse.accessToken });
              });
            } else {
              reject();
            }
          });
        }
      });
    });
  },
  invalidate: function() {
    return new Ember.RSVP.Promise(function(resolve, reject) {
    	console.log('reject', reject);
      FB.logout(function(response) {
        Ember.run(resolve);
        console.log('response', response);
      });
    });
  }
});
