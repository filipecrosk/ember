import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import ResetScroll from '../../mixins/reset-scroll';

export default Ember.Route.extend(AuthenticatedRouteMixin, ResetScroll, {
	model: function() {
    //return this.store.find('category');
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.get('http://localhost:3000/categories').then(function(response) {
        resolve(JSON.stringify(response));
      });
    });
  }
});
