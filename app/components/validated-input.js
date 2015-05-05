import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
	 	showErrors: function() {
	 		
	 		//if ( this.get('errors.password') ){
	 			this.set("showError", true);
	 		//} else {
	 		//	this.set("showError", false);
	 		//}
	  }
	}
	/*
	// referencia em http://emberjs.jsbin.com/iDeQABo/2/ e http://discuss.emberjs.com/t/opinions-asked-what-is-best-way-to-validate-highlight-ember-form-elements/2255/5
	,

	didInsertElement: function() {
		Ember.run.scheduleOnce('afterRender', this, 'processChildElements');
	},

	processChildElements: function() {
		// ... do something with collectionView's child view
		// elements after they've finished rendering, which
		// can't be done within the CollectionView's
		// `didInsertElement` hook because that gets run
		// before the child elements have been added to the DOM.

		var childViewsThatRequireValidation = this.get('childViews').filter(function (view) {
			if(view.hasOwnProperty("validateOn")) {
				return view;
			}
		});

		childViewsThatRequireValidation.forEach(function (view, index, views) {
			view.set("canShowValidationError", false);
			view.set("hasFocusedOut", false);

			// TODO: use action from the validateOn paremter
			view.set("focusOut", function (event) {
				this.set("canShowValidationError", true);
			});

			var bindingFrom = view.get('valueBinding._from');
			var modelProperty = bindingFrom.match(/\.(\w+)$/i)[1];
			var errorsForPropertyString = 'parentView.controller.errors.%@'.fmt(modelProperty);
			var computedPropertyKey = '%@.@each'.fmt(errorsForPropertyString);
			var errorsForPropertyLength = '%@.length'.fmt(errorsForPropertyString);
			var errorsForProperty = view.get(errorsForPropertyString);
			var computedFunction = Ember.computed(function() {
				return (this.get("canShowValidationError") && (this.get(errorsForPropertyLength) >0));
			}).property('value', 'canShowValidationError');

			Ember.defineProperty(view, "showError", computedFunction);

			// For some reason this is required in order for the computed property to update
			// even though after this call, the computed property is still not consumed
			// I'm suspicious that the UI isn't updated because we are in the 'afterRender' section of the run loop queue
			// and this update is not propegated back to the UI.
			view.get("showError");
			this.set("showError", computedFunction)
			console.log('fil', computedFunction);
		});
	}*/
});
