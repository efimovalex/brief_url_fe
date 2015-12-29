(function() {

    'use strict';

    angular
        .module('briefURLApp')
        .controller('AboutController', AboutController);

    function AboutController($state) {

        var vm = this;
        vm.message = 'This is who we are';
    }
})();