(function() {

    'use strict';

    angular
        .module('briefURLApp')
        .controller('UrlController', UrlController);

    function UrlController($state, Url) {

        var vm = this;
        vm.message = 'These are your Brief URLs';

        vm.urls = Url.query({},function() {     
          $state.go($state.current, {},{})
        });
        vm.newUrl = new Url();
        console.log(vm)

        vm.delete = function(url) { 
          url.$delete(function() {
            $state.go($state.current, {}, {reload: true});
          });
        };
        vm.add = function() { 
          vm.newUrl.$save(function() {
            $state.go($state.current, {}, {reload: true});
          });
        };
    }
})();