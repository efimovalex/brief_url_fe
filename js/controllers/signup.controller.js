(function() {

    'use strict';

    angular
        .module('briefURLApp')
        .controller('SignUpController', SignUpController);

    function SignUpController($state, User) {

        var vm = this;
        vm.message = 'Sign up for a Free Account';

        vm.user = new User();

        vm.add = function() { 
          vm.user.$save(function() {
            console.log(vm.url)
            $state.go('home', {});
          }, function (response) {
            vm.form.addErrors(response.data.errors);
            $state.go($state.current, {}, {reload: true});
          });
        };
    }
})();