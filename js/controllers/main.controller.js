(function() {

    'use strict';

    angular
        .module('briefURLApp')
        .controller('MainController', MainController);

    function MainController($state, $auth) {

        var vm = this;
        vm.message = 'Best way to Rickroll someone';
        vm.isAuthenticated = function() {
          return $auth.isAuthenticated();
        };
    }
})();