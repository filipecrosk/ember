import Ember from 'ember';
import EmberValidations from 'ember-validations';
import ENV from '../config/environment';

export default Ember.Controller.extend(EmberValidations.Mixin, {
	queryParams: ['reset_password_token'],
  reset_password_token: null,

  validations: {
    password: {
      confirmation: {message: "Parece que você não digitou a mesma senha"},
      presence: {message: "Favor informar senha"},
      length: { minimum: 8, messages: { tooShort: " mínimo de 8 caracteres" } }
    }
  },

  actions: {
    setNewPassword: function(){
      if ( this.get('isValid') ){
        Ember.$.ajax({ url: ENV.apiHost + "/users/password", type: 'PUT', data: {
          user: {
            password: this.get("password"),
            password_confirmation: this.get("passwordConfirmation"),
            reset_password_token: this.get("reset_password_token")
          } }
        }).then(function() {
          alert('Senha alterada com sucesso');
          this.transitionTo('login');
        }, function() {
          this.set("loginFailed", true);
        }.bind(this));
      } 
    }
  }
  
});