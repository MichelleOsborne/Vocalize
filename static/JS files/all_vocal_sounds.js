var mainApp = angular.module("mainApp", []);

mainApp.controller("vocalsoundController", function($scope, $http) {
  $http.get('/vocalsounds').then(function(response) {
    $scope.vocalsounds = response.data;
  });
});

mainApp.controller("vocalsoundlevelController", function($scope, $http) {
  $http.get('/vocalsoundlevels').then(function(response) {
    $scope.vocalsoundlevels = response.data;
  });
});








