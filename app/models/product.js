import DS from 'ember-data';

export default DS.Model.extend({
  name:             DS.attr('string'),
  description:      DS.attr('string'),
  category_id:      DS.attr('number'),
  user_id:          DS.attr('number'),
  details:          DS.attr('string'),
  calendar:         DS.attr('number'),
  minimum:          DS.attr('number'),
  maximum:          DS.attr('number'),
  country:          DS.attr('string'),
  street:           DS.attr('string'),
  apt:              DS.attr('string'),
  city:             DS.attr('string'),
  state:            DS.attr('string'),
  zip:              DS.attr('string'),
  longitude:        DS.attr('number'),
  latitude:         DS.attr('number'),

  directions:       DS.attr('string'),
  status:           DS.attr('boolean'),
  price_centavos:   DS.attr('number'),
  price_currency:   DS.attr('string'),
  views:            DS.attr('number'),
  
  created_at:       DS.attr('date'),
  updated_at:       DS.attr('date'),

  priceFormated: function() {
    return this.get('price_centavos').substr(0,this.get('price_centavos').length -2) +','+ this.get('price_centavos').substr(-2);
  }.property('price_centavos')
  
});
