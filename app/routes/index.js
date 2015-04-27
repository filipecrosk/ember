import Ember from 'ember';

export default Ember.Route.extend({
	activate: function() {
    Ember.$('body').addClass('index');
  },
  deactivate: function() {
    Ember.$('body').removeClass('index');
    Ember.$('.navbar').removeClass('white');
  },
  actions: {
  	playVideo: function(){
  		Ember.$('#modal-video').removeClass('hidden').css('z-index','9001').find('video').get(0).play();
  	},
  	closeVideo: function(){
  		Ember.$('#modal-video').addClass('hidden').find('video').get(0).pause();
  	}
  }
});
