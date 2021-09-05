var mainApp = angular.module("mainApp", []);

mainApp.controller("warmupController", function($scope, $http) {
  document.getElementById("selected").style.display="none";
  $http.get('/warmups').then(function(response) {
    $scope.warmups = response.data;
  });
});

mainApp.controller("warmuplevel1Controller", function($scope, $http) {
  $http.get('/warmuplevels/1').then(function(response) {
    $scope.warmuplevels = response.data;
  });
});

mainApp.controller("warmuplevel2Controller", function($scope, $http) {
  $http.get('/warmuplevels/2').then(function(response) {
    $scope.warmuplevels = response.data;
  });
});

mainApp.controller("warmuplevel3Controller", function($scope, $http) {
  $http.get('/warmuplevels/3').then(function(response) {
    $scope.warmuplevels = response.data;
  });


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


  $scope.selectWarmupLevel = function(Level) {
    // Get student by id
    $http.get("/warmuplevels/" + Level).then(function(response) {
      $scope.selectedWarmuplevel = response.data;
      // Show the selected element
      document.getElementById("selected").style.display="block";
    });
  }
  


});




