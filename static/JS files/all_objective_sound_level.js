var mainApp = angular.module("mainApp", []);


mainApp.controller("warmupsoundlevel1Controller", function($scope, $http) {
  $http.get('/warmupsoundlevels/1').then(function(response) {
    $scope.warmupsoundlevels = response.data;
  });
});
mainApp.controller("warmupsoundlevel2Controller", function($scope, $http) {
  $http.get('/warmupsoundlevels/2').then(function(response) {
    $scope.warmupsoundlevels = response.data;
  });
});
mainApp.controller("warmupsoundlevel3Controller", function($scope, $http) {
  $http.get('/warmupsoundlevels/3').then(function(response) {
    $scope.warmupsoundlevels = response.data;
  });
});
mainApp.controller("rangesoundlevel1Controller", function($scope, $http) {
  $http.get('/rangesoundlevels/1').then(function(response) {
    $scope.rangesoundlevels = response.data;
  });
});
mainApp.controller("rangesoundlevel2Controller", function($scope, $http) {
  $http.get('/rangesoundlevels/2').then(function(response) {
    $scope.rangesoundlevels = response.data;
  });
});
mainApp.controller("rangesoundlevel3Controller", function($scope, $http) {
  $http.get('/rangesoundlevels/3').then(function(response) {
    $scope.rangesoundlevels = response.data;
  });
});
mainApp.controller("controlsoundlevel1Controller", function($scope, $http) {
  $http.get('/controlsoundlevels/1').then(function(response) {
    $scope.controlsoundlevels = response.data;
  });
});
mainApp.controller("controlsoundlevel2Controller", function($scope, $http) {
  $http.get('/controlsoundlevels/2').then(function(response) {
    $scope.controlsoundlevels = response.data;
  });
});
mainApp.controller("controlsoundlevel3Controller", function($scope, $http) {
  $http.get('/controlsoundlevels/3').then(function(response) {
    $scope.controlsoundlevels = response.data;
  });
});

mainApp.controller("tonesoundlevel1Controller", function($scope, $http) {
  $http.get('/tonesoundlevels/1').then(function(response) {
    $scope.tonesoundlevels = response.data;
  });
});

mainApp.controller("tonesoundlevel2Controller", function($scope, $http) {
  $http.get('/tonesoundlevels/2').then(function(response) {
    $scope.tonesoundlevels = response.data;
  });
});
mainApp.controller("tonesoundlevel3Controller", function($scope, $http) {
  $http.get('/tonesoundlevels/3').then(function(response) {
    $scope.tonesoundlevels = response.data;
  });
});

