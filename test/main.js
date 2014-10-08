/* globals describe, it*/
'use strict';

var should = require('should');
var gContacts = require('../');

describe('google-contacts-oauth', function() {

  it('should be correct type', function(done) {
    gContacts.should.not.equal(null);
    gContacts.should.be.type('function');
    done();
  });

  it('should return an error if no token is provided', function(done) {
    var opts = {};
    gContacts(opts, function(err, data) {
      err.should.not.equal(null);
      err.message.should.equal('Missing OAuth token');
      done();
    });
  });

  it('should return an error if no data is returned', function(done) {
    var opts = {
      token: 'fake'
    };
    gContacts(opts, function(err, data) {
      err.message.should.equal('Status code: 401');
      done();
    });
  });

});
