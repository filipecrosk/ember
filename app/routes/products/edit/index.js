import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import ResetScroll from '../../mixins/reset-scroll';

export default Ember.Route.extend(AuthenticatedRouteMixin, ResetScroll, {
	model: function(params) {
    return this.store.find('product', params.product_id);
  }
});
