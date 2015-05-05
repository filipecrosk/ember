import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
 
export default Ember.Route.extend(ApplicationRouteMixin, {
	actions: {
    showModal: function(name, model, showFooter) {
      this.render(name, {
        into: 'application',
        outlet: 'modal',
        model: model,
        showFooter: 'showFooter'
      });
    },
    removeModal: function() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
      Ember.$('.modal').modal('hide');
      Ember.$('.modal-backdrop').remove();
    }
  }
});