import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations.Mixin, {
  signupFailed: false,
  isProcessing: false,
  selectedCategory: null,
  addessCity: null,
  addesState: null,
  addessCountry: null,
  

  actions: {
		save: function() {
      var _this = this;
      var store = this.store;
      var data = this.getProperties('category', 'name', 'addressCity', 'addressState', 'addressCountry');

      var selectedCategory = this.get('selectedCategory');
      var addessCity = $('#locality').val();
      var addesState = $('#administrative_area_level_1').val();
      var addessCountry = $('#country').val();

      console.log( selectedCategory );
      console.log('nome', this.get('name') );
      console.log('cidade', addessCity );

      if ( selectedCategory != null && this.get('name') != '' ){
        if ( addessCity == '' && addesState == '' &&  addessCountry == '' ){
          alert('Por favor digite o nome da cidade e clique para selecionar na lista');
          return;
        }
        this.setProperties({
          signupFailed: false,
          isProcessing: true
        });

        
        var product = this.store.createRecord('product', {
          name: this.get('name'),
          category: selectedCategory,
          city: this.get('locality'),
          state: this.get('administrative_area_level_1'),
          country: this.get('country')
        });

        var self = this;

        var onSuccess = function(product) {
          _this.set("isProcessing", false);
          self.transitionToRoute('products.edit', product);
        };

        var onFail = function(product) {
          this.set("isProcessing", false);
          this.set("signupFailed", true);
        };

        product.save().then(onSuccess, onFail);
      } else {
        this.set("signupFailed", true);
      }

    }
  },

  

});