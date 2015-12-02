var UrlService = angular.module('urlService', ['ngResource'])

UrlService.factory('Url', function($resource) {
  return $resource('http://api.localhost:50000/v1/url/:id', {
    id: '@ID'
  }, {
    update: {
      method: 'PATCH'
    }
  });
});
