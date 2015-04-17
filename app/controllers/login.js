import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		authenticateWithFacebook: function() {
      this.get('session').authenticate('authenticator:facebook', {});
    },
    // action to trigger authentication with Google+
    authenticateWithGooglePlus: function() {
      this.get('session').authenticate('authenticator:googleplus', {});
    },
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password');
      this.get('session').authenticate('simple-auth-authenticator:devise', credentials);
    }
  }
});