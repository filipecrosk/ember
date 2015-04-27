import Ember from 'ember';

export default Ember.View.extend({
	  didInsertElement: function() {
	    var view = this;
	    Ember.$(window).bind("scroll", function() {
	      view.didScroll();
	    });
	  },

	  willDestroyElement: function() {
		  Ember.$(window).unbind("scroll");
		},

	  didScroll: function() {
	    var navbar = Ember.$('.navbar'),
	    		scroll = Ember.$(window).scrollTop();

		  if (scroll >= Ember.$('.banner_home').height() ) {
		  	navbar.addClass('white');
		  	Ember.$('.shadow').hide();
		  } else {
		  	navbar.removeClass('white');
		  	Ember.$('.shadow').show();
		  } 
	  }
});
