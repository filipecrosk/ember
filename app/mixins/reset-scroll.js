export default Ember.Mixin.create({
  activate: function() {
    this._super();
    Ember.$('html, body').animate({scrollTop: 0});
  }
});