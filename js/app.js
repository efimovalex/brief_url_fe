// script.js

var app = angular.module('briefURLApp', ['ngRoute', 'ngResource', 'urlService']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  // route for the home page
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'MainController'
  })

  // route for the about page
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutController'
  })

  // route for the contact page
  .when('/contact', {
    templateUrl: 'views/contact.html',
    controller: 'ContactController'
  })

  // route for the url page
  .when('/url', {
    templateUrl: 'views/url/url-list.html',
    controller: 'UrlController'
  })

  // // route for the url page
  // .when('/url/:id', {
  //   templateUrl: 'views/url/url-edit.html',
  //   controller: 'urlEditController'
  // })

  .otherwise({
    redirectTo: '/'
  });

  // use the HTML5 History API
  $locationProvider.html5Mode(true);
});

app.directive('ngReallyClick', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                var message = attrs.ngReallyMessage;
                if (message && confirm(message)) {
                    scope.$apply(attrs.ngReallyClick);
                }
            });
        }
    }
}]);

app.filter('yesNo', function() {
    return function(input) {
        return input ? 'yes' : 'no';
    }
});