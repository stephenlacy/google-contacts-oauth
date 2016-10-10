'use strict';

var qs = require('querystring');
var request = require('request');

var buildPath = function(params) {
  params = params || {};

  params.type = 'contacts';
  params.alt = 'json';
  params.projection = params.projection || 'full';
  params.email = params.email || 'default';
  params['max-results'] = params['max-results'] || 500;

  var query = {
    alt: params.alt,
    'max-results': params['max-results']
  };

  var path = '/m8/feeds/';
  path += params.type + '/';
  path += params.email + '/';
  path += params.projection;
  path += '?' + qs.stringify(query);
  return path;
};

module.exports = function(opts, cb) {
  if (opts.token == null) {
    return cb(new Error('Missing OAuth token'));
  }

  var req = {
    method: 'GET',
    uri: 'https://www.google.com/' + buildPath(opts),
    headers: {
      Authorization: 'OAuth ' + opts.token
    }
  };

  return request.get(req, function(err, res, data) {
    if (err) {
      return cb(new Error(err));
    }
    if (res.statusCode > 300 || res.statusCode < 200) {
      return cb(new Error('Status code: ' + res.statusCode));
    }

    try {
      data = JSON.parse(data);
      var contacts = [];
      if (data.feed != null) {
        if (!data.feed.entry) {
          return cb(null, contacts);
        }

        data.feed.entry.forEach(function(v, k) {
          var ref;
          var contact = {
            email: (ref = v.gd$email) != null ? ref[0].address : void 0,
            name: v.title.$t
          };
          return contacts.push(contact);
        });
      }
      else {
        return cb(new Error('Unable to parse JSON. returned data is null'));
      }
      return cb(null, contacts);
    } catch (e) {
      return cb(e);
    }
  });
};
