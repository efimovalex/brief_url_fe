// app.js
(function() {

    'use strict';

    angular
        .module('briefURLApp', ['ngRoute', 'ui.router', 'ngResource', 'briefURLApp.User', 'briefURLApp.Url', 'satellizer'])
        .config(function($stateProvider, $urlRouterProvider, $locationProvider, $authProvider, $httpProvider) {

            $urlRouterProvider.otherwise('/auth');

            $httpProvider.interceptors.push(function($q) {
              return {
                'responseError': function(response) {
                  if (response.status == 401) {
                    $authProvider.logout();
                  }
                  if (response.status == 500) {
                    // Handle 500 error code
                  }

                  // Always reject (or resolve) the deferred you're given
                  return $q.reject(response);
                }
              };
            });

            // Satellizer configuration that specifies which API
            // route the JWT should be retrieved from
            $authProvider.loginUrl = 'http://api.localhost:50000/v1/user/authenticate';
            
            $stateProvider
                .state('home', {
                  url: '/',
                  templateUrl: 'views/home.html',
                  controller: 'MainController as main'
                })

                // route for the about page
                .state('about', {
                  url: '/about',
                  templateUrl: 'views/about.html',
                  controller: 'AboutController as about'
                })

                // route for the contact page
                .state('contact', {
                  url: '/contact',
                  templateUrl: 'views/contact.html',
                  controller: 'ContactController as contact'
                })

                // route for the url page
                .state('url', {
                  url: "/url",
                  templateUrl: 'views/url/url-list.html',
                  controller: 'UrlController as url'
                })

                // route for the signup page
                .state('signup', {
                  url: "/signup",
                  templateUrl: 'views/user/signup.html',
                  controller: 'SignUpController as signup'
                })

                // route for the auth page
                .state('auth', {
                    url: '/login',
                    templateUrl: 'views/login.html',
                    controller: 'AuthController as auth'
                });
            // use the HTML5 History API
            $locationProvider.html5Mode(true);
        });
})();