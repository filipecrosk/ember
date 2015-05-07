import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations.Mixin, {
  loginFailed: false,
  isProcessing: false,

  validations: {
    identification: {
      presence: {message: "Favor informar seu e-mail"},
      format: { with: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/, allowBlank: false, message: 'parece que você digitou um e-mail errado'  }
    },
    password: {
      presence: {message: "Favor informar senha"}
    }
  },

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
      if ( this.get('isValid') ){
        this.setProperties({
          loginFailed: false,
          isProcessing: true
        });

        var credentials = this.getProperties('identification', 'password');
        this.get('session').authenticate('simple-auth-authenticator:devise', credentials).then(function(data){
          Ember.$('.modal').modal('hide');
          Ember.$('.modal-backdrop').remove();
          _this.set("isProcessing", false);
        }, function() {
          this.set("isProcessing", false);
          this.set("loginFailed", true);
        }.bind(this));
      } 

    }
  },

  

});