import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('protected');
  this.route('login');
  this.route('signup');


  //institucional
  this.route('sobre');
  this.route('como');
  this.route('anunciar');
  this.route('contato');
  this.route('termos');
  this.route('politica', { path: '/policita-de-privacidade'} );
});

