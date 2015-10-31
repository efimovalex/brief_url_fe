app.controller('urlController',['$scope', '$route', '$location', 'Url', function($scope, $route, $location, Url) {
    $scope.message = 'These are your URLs';

    $scope.host = $location.host()

    if ($location.port()) {
      $scope.host = $location.host() + ":" + $location.port();
    }

    $scope.urls = Url.query();
    console.log($scope.urls);
    $scope.url =  new Url();

    $scope.delete = function(url) { 
      url.$delete(function() {
        $route.reload();
      });
    };

    $scope.add = function() { 
      $scope.url.$save(function() {
        console.log($scope.url)
        $route.reload();
      });
    };
}]);