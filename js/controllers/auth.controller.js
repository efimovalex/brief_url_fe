(function() {

    'use strict';

    angular
        .module('briefURLApp')
        .controller('AuthController', AuthController);


    function AuthController($auth, $state) {

        var vm = this;
            
        vm.login = function() {

            var credentials = {
                email: vm.email,
                password: vm.password
            }
            
            // Use Satellizer's $auth service to login
            $auth.login(credentials).then(function(data) {

                // If login is successful, redirect to the home state
                $state.go('url', {});
            });
        }

        vm.logout = function() {
          $auth.logout();
        }
    }

})();