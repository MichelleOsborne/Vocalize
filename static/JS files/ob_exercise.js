var mainApp = angular.module("mainApp", []);

mainApp.controller("obexerciseController", function($scope, $http) {
  $http.get('/obexercises').then(function(response) {
    $scope.obexerciselevels = response.data;
  });
});

//on particular endpoint bind data collected in data
mainApp.controller("obexercise1Controller", function($scope, $http) {
  $http.get('/obexercises/1').then(function(response) {
    $scope.obexerciselevels = response.data;
  });
});



mainApp.controller("obexercise2Controller", function($scope, $http) {
    $http.get('/obexercises/2').then(function(response) {
      $scope.obexerciselevels = response.data;
    });
  });

  mainApp.controller("obexercise3Controller", function($scope, $http) {
    $http.get('/obexercises/3').then(function(response) {
      $scope.obexerciselevels = response.data;
    });
  });

  mainApp.controller("obexerciserangeController", function($scope, $http) {
    $http.get('/obexerciseobjectives/Range').then(function(response) {
      $scope.obexerciseobjectives = response.data;
    });
  });
  mainApp.controller("obexercisecontrolController", function($scope, $http) {
    $http.get('/obexerciseobjectives/Control').then(function(response) {
      $scope.obexerciseobjectives = response.data;
    });
  });
  mainApp.controller("obexerciserangeController", function($scope, $http) {
    $http.get('/obexerciseobjectives/Range').then(function(response) {
      $scope.obexerciseobjectives = response.data;
    });
  });
  mainApp.controller("obexercisewarmuplController", function($scope, $http) {
    $http.get('/obexerciseobjectives/Warm Up').then(function(response) {
      $scope.obexerciseobjectives = response.data;
    });
  });
  mainApp.controller("rangelevel0Controller", function($scope, $http) {
    $http.get('/rangelevels/0').then(function(response) {
      $scope.rangelevels = response.data;
    });
  });

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

  mainApp.controller("controllevel2Controller", function($scope, $http) {
    $http.get('/controllevels/2').then(function(response) {
      $scope.controllevels = response.data;
    });
  });
  mainApp.controller("controllevel3Controller", function($scope, $http) {
    $http.get('/controllevels/3').then(function(response) {
      $scope.controllevels = response.data;
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
    $http.get('/soundlevels/3').then(function(response) {
      $scope.rangesoundlevels = response.data;
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

  mainApp.controller("pitchsoundlevel1Controller", function($scope, $http) {
    $http.get('/pitchsoundlevels/1').then(function(response) {
      $scope.pitchsoundlevels = response.data;
    });
  });
  mainApp.controller("pitchsoundlevel2Controller", function($scope, $http) {
    $http.get('/pitchsoundlevels/2').then(function(response) {
      $scope.pitchsoundlevels = response.data;
    });
  });
  mainApp.controller("pitchsoundlevel3Controller", function($scope, $http) {
    $http.get('/pitchsoundlevels/3').then(function(response) {
      $scope.pitchsoundlevels = response.data;
    });
  });