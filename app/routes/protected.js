import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import ResetScroll from '../mixins/reset-scroll';

export default Ember.Route.extend(AuthenticatedRouteMixin, ResetScroll, {
  // request some data from the server so that the authorizer authorizes that request
  model: function() {
    return this.store.find('product');
  }
});
