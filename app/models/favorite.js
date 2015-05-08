import DS from 'ember-data';

export default DS.Model.extend({
  product: 	DS.belongsTo('product'),
  user: 		DS.belongsTo('user'),
  date: 		DS.attr('date')
});
