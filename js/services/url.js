var UrlService = angular.module('UrlService', ['ngResource'])

UrlService.factory('Url', function($resource) {
  return $resource('http://api.localhost:50000/v1/url/:id', {
    id: '@ID'
  }, {
    update: {
      method: 'PATCH'
    }
  });
});