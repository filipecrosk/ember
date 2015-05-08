import DS from 'ember-data';

export default DS.Model.extend({
  email:                DS.attr('string'),
  authenticationToken:  DS.attr('string'),
  image:                DS.attr('string'),
  name:                 DS.attr('string'),
  lastname:             DS.attr('string'),
  gender:               DS.attr('string'),
  birth:                DS.attr('date'),
  phone:                DS.attr('string'),
  description:          DS.attr('string'),
  products:             DS.hasMany('product')
  
});
