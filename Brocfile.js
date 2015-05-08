/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require('broccoli-funnel');

var app = new EmberApp();

//app.import('bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.min.js');

app.import('bower_components/bootstrap-datepicker/js/locales/bootstrap-datepicker.pt-BR.js');

var addFonts = new Funnel('bower_components/bootstrap-sass/assets/fonts/bootstrap', {
  srcDir: '/',
  include: ['*.woff', '*.eot', '*.svg', '*.ttf', '*.woff2'],
  destDir: 'fonts'
});

app.import('vendor/gmaps.js');

//module.exports = app.toTree();
module.exports = app.toTree(addFonts);
