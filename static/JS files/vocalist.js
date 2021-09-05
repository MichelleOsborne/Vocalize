"use strict";

var mainApp = angular.module("mainApp", []);
         
// Create the controller
mainApp.controller("vocalistController", function($scope, $http) {
    document.getElementById("selected").style.display="none"; 

    

    $http.get("/vocalists").then(function(response) {
        $scope.vocalists = response.data;
      });   

      $scope.selectVocalist = function(User_Id) {
        // Get specific vocalist
        $http.get("/vocalists/" + User_Id).then(function(response) {
          $scope.selectedVocalist = response.data;
          // Show the "selected" element
          document.getElementById("selected").style.display="block";
        });
    };
  
  $scope.deleteVocalist = function(User_Id) {
    // Send delete message to /vocalist/user_id
    $http.delete("/vocalists/" + User_Id).then(function(response) {
      // When request completes, refresh list of vocalists
      $http.get("/vocalists/").then(function(response) {
        $scope.vocalists = response.data;
      });
    });
  };
  $scope.new_vocalist = new Vocalist("", "");

  // Sends a put message to the server
  $scope.createVocalist = function() {
    // Send post message to /modules
    $http.post("/vocalists", $scope.new_vocalist).then(function(response) {
      // When request completes, 
      $scope.new_vocalist = new Vocalist("", "");
      // Then refresh list of vocalists
      $http.get("/vocalists").then(function(response) {
        $scope.vocalists = response.data;
      });
    });
  };

  






});
  
   