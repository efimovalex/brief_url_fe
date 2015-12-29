(function() {
    'use strict';

    angular
        .module('briefURLApp')
        .directive('ngReallyClick', reallyClick);

    function reallyClick() {
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
    }
})();