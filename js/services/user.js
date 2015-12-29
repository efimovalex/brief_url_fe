(function() {

    'use strict';

    // service
    angular
        .module('briefURLApp.User', ['ngResource'])
        .factory('User', User);

    function User($resource) {

      return $resource('http://api.localhost:50000/v1/user/:id', {
        id: '@ID'
      }, {
        update: {
          method: 'PATCH'
        }
      });
    }
})();