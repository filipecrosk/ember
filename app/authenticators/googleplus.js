// the custom authenticator that initiates the authentication process with Google+
import Base from 'simple-auth/authenticators/base';

export default Base.extend({
  restore: function(properties) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(properties.access_token)) {
        resolve(properties);
      } else {
        reject();
      }
    });
  },
  authenticate: function() {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      gapi.auth.authorize({
        client_id:       '903568329885-99mi1ojol2jcne9ns65l6acm0cdne6r2.apps.googleusercontent.com',
        scope:           ['https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email'],
        approval_prompt: 'force',
        immediate:       false
      }, function(authResult) {
        if (authResult && !authResult.error) {
            resolve({ access_token: authResult.access_token });
            //console.log('auth', authResult);
            console.log('key/token', authResult.access_token);
            
            gapi.client.load('plus','v1', function(){
              gapi.client.plus.people.get({
                'userId': 'me'
              }).then(function(resp){
                var profile = resp.result;
                console.log('Name:', profile.displayName);
                console.log('Foto:', profile.image.url);
                for (var i=0; i < profile.emails.length; i++){
                  if (profile.emails[i].type === 'account') console.log('Primary Email:', profile.emails[i].value);
                  console.log('Email:', profile.emails[i].value);
                }
              }, function(err){
                var error = err.result;
                console.log('Error', error);
              });
            });

          } else {
            reject((authResult || {}).error);
          }
      });
    });
  },
  invalidate: function() {
    return Ember.RSVP.resolve();
  }
});