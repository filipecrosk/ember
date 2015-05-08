import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('favorite', {
  // Specify the other units that are required for this test.
  needs: ['model:product', 'model:user']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
