var mainApp = angular.module("mainApp", []);


mainApp.controller("rangelevel1Controller", function($scope, $http) {
  $http.get('/rangelevels/1').then(function(response) {
    $scope.rangelevels = response.data;
  });
});

mainApp.controller("rangelevel2Controller", function($scope, $http) {
  $http.get('/rangelevels/2').then(function(response) {
    $scope.rangelevels = response.data;
  });
});

mainApp.controller("rangelevel3Controller", function($scope, $http) {
  $http.get('/rangelevels/3').then(function(response) {
    $scope.rangelevels = response.data;
  });
});
mainApp.controller("tonelevel0Controller", function($scope, $http) {
    $http.get('/tonelevels/0').then(function(response) {
      $scope.tonelevels = response.data;
    });
  });

mainApp.controller("tonelevel1Controller", function($scope, $http) {
  $http.get('/tonelevels/1').then(function(response) {
    $scope.tonelevels = response.data;
  });
});

mainApp.controller("tonelevel2Controller", function($scope, $http) {
  $http.get('/tonelevels/2').then(function(response) {
    $scope.tonelevels = response.data;
  });
});

mainApp.controller("tonelevel3Controller", function($scope, $http) {
  $http.get('/tonelevels/3').then(function(response) {
    $scope.tonelevels = response.data;
  });
});

mainApp.controller("pitchlevel0Controller", function($scope, $http) {
    $http.get('/pitchlevels/0').then(function(response) {
      $scope.pitchlevels = response.data;
    });
  });
  
  mainApp.controller("pitchlevel1Controller", function($scope, $http) {
    $http.get('/pitchlevels/1').then(function(response) {
      $scope.pitchlevels = response.data;
    });
  });

  mainApp.controller("pitchlevel2Controller", function($scope, $http) {
    $http.get('/pitchlevels/2').then(function(response) {
      $scope.pitchlevels = response.data;
    });
  });
  mainApp.controller("pitchlevel3Controller", function($scope, $http) {
    $http.get('/pitchlevels/3').then(function(response) {
      $scope.pitchlevels = response.data;
    });
  });

  mainApp.controller("controllevel1Controller", function($scope, $http) {
    $http.get('/controllevels/1').then(function(response) {
      $scope.controllevels = response.data;
    });
  });