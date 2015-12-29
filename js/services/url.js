(function() {

    'use strict';

    // service
    angular
        .module('briefURLApp.Url',['ngResource'])
        .factory('Url', Url);

    function Url($resource) {

      return $resource('http://api.localhost:50000/v1/url/:id', {
        id: '@id'
      }, {
        'query':  {
          method:'GET', 
          isArray:true,
        },
        'update': {
          method: 'PATCH'
        }
      });
    }
})();