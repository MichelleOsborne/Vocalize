app.get("/vsoundlevels", function(req, res) {
    // Call getExercises on data
    data.getVSoundLevels(function(vsoundlevels) {
      res.json(vsoundlevels);
    });
  });

  app.get("/exerciseleveldescriptions", function(req, res) {
    // Call getExerciseslevel on data
    data.getExerciseLevelDescriptions(function(exerciseleveldescriptions) {
      res.json(exerciseleveldescriptions);
    });
  });

  app.get("/singalongs/:Genre", function(req, res) {
    // Call getSingalongs on data
    data.getSingalong(req.params.Genre,function(singalong) {
      res.json(singalong);
    });
  });


  
exports.getObjectiveExercise = function(callback) {
    // Create SQL statement
    var sql =`
    SELECT * from objective_exercise where ob_id = "RN" 
           `;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        
        var objectiveexercise = [];
        for (var row of rows) {
        
        var obex = new student.ObjectiveExercise(row.Ob_id, row.Ex_Id);
        
            objectiveexercise.push(obex);
        }
        // Execute callback function
        callback(objectiveexercise)
    });

};  
exports.getVSoundLevels = function(callback) {
    // Create SQL statement
    var sql = `
    select 
    vocal_sound_level.vocal_sound,
    vocal_sound_level.level,
    vocal_sound.audio_demo 
    from 
    vocal_sound, 
    vocal_sound_level 
    where 
    vocal_sound.vocal_sound = vocal_sound_level.vocal_sound
        `;


    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if errory
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Students
        var vsoundlevels= [];
        // Loop through rows creating Student objects
        for (var row of rows) {

            
            // Create programme object
           // ;
            // Create student object
         var vsoundlevel= new student.VSoundLevel(row.Vocal_sound, row.Level, row.Audio_demo);
            // Add student to array
      
           vsoundlevels.push(vsoundlevel);
        }
        // Execute callback function

        
        callback(vsoundlevels);
    });
};


mainApp.controller("vsoundlevelController", function($scope, $http) {
  $http.get('/vsoundlevels').then(function(response) {
    $scope.vsoundlevels = response.data;
  });
});