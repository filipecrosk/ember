import Ember from 'ember';
import ENV from '../config/environment';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations.Mixin, {
  loginFailed: false,
  isProcessing: false,

  validations: {
    name: {
      presence: {message: "Favor informar seu nome"},
    },
    lastname: {
      presence: {message: "Favor informar seu sobrenome"},
    },
    email: {
      presence: {message: "Favor informar seu e-mail"},
      format: { with: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/, allowBlank: false, message: 'parece que você digitou um e-mail errado'  }
    },
    password: {
      confirmation: {message: "Parece que você não digitou a mesma senha"},
      presence: {message: "Favor informar senha"},
      length: { minimum: 8, messages: { tooShort: " mínimo de 8 caracteres" } }
    }
  },

	actions: {
    register: function() {
      var data, _this;
      _this = this;

      if ( this.get('isValid') ) {
        this.setProperties({
          loginFailed: false,
          isProcessing: true
        });

      	return Ember.$.ajax({
          method: "POST",
          url: ENV.APP.apiHost + "/users/signup",
          data: {
            user: {
              name: this.get("name"),
              lastname: this.get("lastname"),
              email: this.get("email"),
              password: this.get("password"),
              password_confirmation: this.get("passwordConfirmation")
            }
          }
        }).then((function(response) {
          _this.set("isProcessing", false);
          return Ember.run((function() {
            console.log("Registration Suceeded!");

            Ember.$('.modal').modal('hide');
            Ember.$('.modal-backdrop').remove();
            

            var credentials = {
            	'identification': _this.get("email"), 
            	'password': _this.get("password")
            };
            _this.get('session').authenticate('simple-auth-authenticator:devise', credentials);
            return _this.send("registrationSucceeded", response);
          }));
        }), (function(xhr, status, error) {
          return Ember.run((function() {
            return _this.send("registrationFailed", xhr, status, error);
          }));
        }));
      }
    },
    registrationSucceeded: function(response) {
      return console.log("Registration Succeeded: " + (Ember.inspect(response)));
    },
    registrationFailed: function(xhr, status, error) {
      _this.set("isProcessing", false);
      _this.set("loginFailed", true);

      return console.log("Registration Failed: " + error);
    }
  }
});