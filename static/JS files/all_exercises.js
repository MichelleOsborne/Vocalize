var mainApp = angular.module("mainApp", []);

mainApp.controller("exerciseController", function($scope, $http) {
  $http.get('/exercises').then(function(response) {
    $scope.exercises = response.data;
  });
});