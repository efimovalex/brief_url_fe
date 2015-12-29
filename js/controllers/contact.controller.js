(function() {

    'use strict';

    angular
        .module('briefURLApp')
        .controller('ContactController', ContactController);

    function ContactController($state) {

        var vm = this;
        vm.message = 'Contact us! JK. This is just a demo.';
    }
})();