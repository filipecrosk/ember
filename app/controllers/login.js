import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		authenticateWithFacebook: function() {
      var _this = this;
      this.get('session').authenticate('simple-auth-authenticator:torii', 'facebook-oauth2')
      .then(function(data) {
        console.log('data', data);
        console.log('session', _this.get('session'));

        Ember.$.ajax('/users/auth/facebook/callback', {
          data: { code: _this.get('session.content.secure.authorizationCode') },
          type: 'POST'
        }).then(function(response) {
          //resolve(JSON.stringify(response));
          return { accessToken: response.access_token };
        });
      });
    },
    // action to trigger authentication with Google+
    authenticateWithGooglePlus: function() {
      var _this = this;
      this.get('torii').open('google-oauth2')
          .then(function(authData){
            console.log('data', authData);
          });
      /*this.get('session').authenticate('simple-auth-authenticator:torii', 'google-oauth2')
      .then(function(data) {
        console.log('data', data);
        console.log('session', _this.get('session.content'));
        Ember.$.ajax('/users/auth/google_oauth2/callback', {
          data: { code: _this.get('session.content.secure.authorizationCode') },
          type: 'POST',
          dataType: 'json'
        }).then(function(response) {
          //resolve(JSON.stringify(response));
          return { accessToken: response.access_token };
        });
      });*/
    },
    authenticate: function() {
      var _this = this;
      var credentials = this.getProperties('identification', 'password');
      this.get('session').authenticate('simple-auth-authenticator:devise', credentials);
    }
  }
});