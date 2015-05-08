import Ember from 'ember';

export default Ember.Component.extend({
	initialize: function() {
		var _this = this;
		var container = this.$().find('input');
		var componentForm = {
		  street_number: 'short_name',
		  route: 'long_name',
		  locality: 'long_name',
		  administrative_area_level_1: 'short_name',
		  country: 'long_name',
		  postal_code: 'short_name'
		};

    // Create the autocomplete object, restricting the search
	  // to geographical location types.
	  var options = { 
	  	types: ['geocode'],
	  	componentRestrictions: {country: 'Br'}
		};
	  var autocomplete = new google.maps.places.Autocomplete( ( container[0] ), options);
	  this.set('GoogleAutocomplete', autocomplete );
	  
	  // When the user selects an address from the dropdown,
	  // populate the address fields in the form.
	  google.maps.event.addListener(autocomplete, 'place_changed', function() {
	    var place = autocomplete.getPlace();
	  	//console.log('place', place);

	  	for (var i = 0; i < place.address_components.length; i++) {
		    var addressType = place.address_components[i].types[0];
		    if (componentForm[addressType]) {
		      var val = place.address_components[i][componentForm[addressType]];
		      $('#'+ addressType).val(val);
		    }
		  }
	  });

  }.on('didInsertElement'),

  actions: {
  	// [START region_geolocation]
		// Bias the autocomplete object to the user's geographical location,
		// as supplied by the browser's 'navigator.geolocation' object.
		geoLocate: function() {
			var autocomplete = this.get('GoogleAutocomplete');

		  if (navigator.geolocation) {
		    navigator.geolocation.getCurrentPosition(function(position) {
		      var geolocation = new google.maps.LatLng(
		          position.coords.latitude, position.coords.longitude);
		      var circle = new google.maps.Circle({
		        center: geolocation,
		        radius: position.coords.accuracy
		      });

		      autocomplete.setBounds(circle.getBounds());
		    });
		  }
		}
  }
});