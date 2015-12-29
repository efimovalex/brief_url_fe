
(function() {
    'use strict';

    angular
        .module('briefURLApp')
        .directive('yesNo', yesNo)


    function yesNo() {
      return {
        template: '<td>{{ yesNo ? "yes" : "no" }}</td>',
        scope: {
            yesNo: '='
        }
      };
    }
})();