# google-contacts-oauth [![NPM version][npm-image]][npm-url]  [![Build Status][travis-image]][travis-url]

> Get contacts from Google with OAuth tokens


## Install
```sh
$ npm install google-contacts-oauth
```

## Usage


```js
var googleContacts = require('google-contacts-oauth');

var opts = {
  token: 'google oauth token'
};
googleContacts(opts, function(err, data){
  console.log(data);
});
//=>[{email: 'me@slacy.me', name: 'Steve Lacy'}, ... ]
```

## Options

**token**

OAuth token received from Google's OAuth API.
```
  type: 'String'
  default: null
  required: true
```

**max-results:**

Max results returned
```
  type: 'String'
  default: '500'
```


 - - -
*Lower level API*

**type**
```
  type: 'String'
  default: 'contacts'
```
**projection**
```
  type: 'String'
  default: 'full'
```

 - - -

## LICENSE

[(MIT License)](https://github.com/stevelacy/google-contacts-oauth/blob/master/LICENSE)

Copyright (c) 2015 Steve Lacy me@slacy.me slacy.me

[travis-url]: https://travis-ci.org/stevelacy/google-contacts-oauth
[travis-image]: https://travis-ci.org/stevelacy/google-contacts-oauth.png?branch=master

[npm-url]: https://npmjs.org/package/google-contacts-oauth
[npm-image]: http://img.shields.io/npm/v/google-contacts-oauth.svg
