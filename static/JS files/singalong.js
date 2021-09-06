"use strict";

var mainApp = angular.module("mainApp", []);
         
// Create the controller
mainApp.controller("singalongController", function($scope, $http) {
  document.getElementById("selected").style.display="none";
    // Initially hides the "selected" element
    

    $http.get("/singalongs").then(function(response) {
        $scope.singalongs = response.data;
      });   

      $scope.selectSingalong = function(S_Id) {
        // Get specific song by s_Id
        $http.get("/Singalongs/" + S_Id).then(function(response) {
          $scope.selectedSingalong = response.data;
          // Show the "selected" element
          document.getElementById("selected").style.display="block";
        });
    };
  
  $scope.deleteSingalong = function(S_Id) {
    // Send delete message to /singalong/S_Id
    $http.delete("/singalongs/" + S_Id).then(function(response) {
      // When request completes, refresh list of songs
      $http.get("/singalongs/").then(function(response) {
        $scope.singalongs = response.data;
      });
    });
  };
  $scope.new_singalong = new Singalong("", "");

  // Sends a put message to the server
  $scope.createSingalong = function() {
    // Send post message to /singalong
    $http.post("/singalongs", $scope.new_singalong).then(function(response) {
      // When request completes, reset new_singalong
      $scope.new_singalong = new Singalong("", "");
      // Then refresh list of singalongs
      $http.get("/singalongs").then(function(response) {
        $scope.singalongs = response.data;
      });
    });
  };






});
  
   