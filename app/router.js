import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('protected');
  this.route('login');
  this.route('signup');
  this.route('recoveryPassword', { path: 'alterar-senha'});

  //institucional
  this.route('sobre');
  this.route('como');
  this.route('anunciar');
  this.route('contato');
  this.route('termos');
  this.route('politica', { path: '/policita-de-privacidade'} );

  


  //set up all of your known routes, and then...
  this.route("fourOhFour", { path: "*path"});
});

