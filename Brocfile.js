/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require('broccoli-funnel');

var app = new EmberApp();

app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');

app.import('bower_components/bootstrap-datepicker/js/locales/bootstrap-datepicker.pt-BR.js');

var addFonts = new Funnel('bower_components/bootstrap/dist/fonts', {
  srcDir: '/',
  include: ['*.woff', '*.eot', '*.svg', '*.ttf', '*.woff2'],
  destDir: 'fonts'
});

//module.exports = app.toTree();
module.exports = app.toTree(addFonts);
