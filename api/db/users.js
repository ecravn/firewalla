'use strict';

var fs = require('fs');

let firewalla = require('../../net2/Firewalla.js');
var fHome = firewalla.getFirewallaHome();

let tokens = JSON.parse(fs.readFileSync(fHome + '/api/db/token.json', 'utf8'));

exports.findByToken = function(token, cb) {
  process.nextTick(function() {
    for (var i = 0, len = tokens.length; i < len; i++) {
      var t = tokens[i];
      if (t === token) {
        return cb(null, t);
      }
    }
    return cb(null, null);
  });
}
