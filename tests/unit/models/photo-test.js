import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('photo', {
  // Specify the other units that are required for this test.
  needs: ['model:product']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
