import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
    register: function() {
    	var data, _this;
      _this = this;
      data = this.getProperties("name", "email", "password", "password_confirmation");
      if (!Ember.isEmpty(data.email) && !Ember.isEmpty(data.password)) {
      	return Ember.$.ajax({
          method: "POST",
          url: "/users/signup",
          data: {
            user: data
          }
        }).then((function(response) {
          return Ember.run((function() {
            console.log("Registration Suceeded!");

            var credentials = {
            	'identification': data.email, 
            	'password': data.password
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
      return console.log("Registration Failed: " + error);
    }
  }
});