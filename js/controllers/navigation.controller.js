(function() {

    'use strict';

    angular
        .module('briefURLApp')
        .controller('NavController', NavController);

    function NavController($state, $auth) {

        var vm = this;
        vm.isAuthenticated = function() {
          return $auth.isAuthenticated();
        };
    }
})();