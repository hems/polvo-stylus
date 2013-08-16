// Generated by CoffeeScript 1.6.3
var Index, nib, stylus;

(require('source-map-support')).install({
  handleUncaughtExceptions: false
});

nib = require('nib');

stylus = require('stylus');

module.exports = new (Index = (function() {
  function Index() {}

  Index.prototype.polvo = true;

  Index.prototype.type = 'css';

  Index.prototype.name = 'stylus';

  Index.prototype.ext = /\.styl$/m;

  Index.prototype.exts = ['.styl'];

  Index.prototype.compile = function(filepath, source, debug, done) {
    return stylus(source).set('filename', filepath).use(nib()).render(function(err, css) {
      if (err != null) {
        throw err;
      }
      return done(css, null);
    });
  };

  return Index;

})());
