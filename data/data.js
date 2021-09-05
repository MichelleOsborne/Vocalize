"use strict";

// Import SQLite library.
const sqlite3 = require("sqlite3").verbose();

// The application layer uses student classes
const student = require("../student.js");

// Connect to the database.
var db = new sqlite3.Database("data/students.db", function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log("Connected to the Vocalize database.");
});



///////////////////////////////////////////////////////////////////////////////////////////////

exports.getVocalists = function(callback) {
    // Create SQL statement
    var sql = `SELECT * FROM vocalist` ;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create programme array
        var vocalists = [];
        // Loop through rows creating programme objects
        for (var row of rows) {
            // Create programme object
            var vocalist = new student.Vocalist(row.User_Id, row.First_Name, row.Last_Name, row.Email, row.Password);
            // Add object to array
            vocalists.push(vocalist);
        }
        // Execute callback function
        callback(vocalists);
    });
};

exports.getVocalist = function(User_Id, callback) {
    // Create SQL statement
    var sql = `SELECT * FROM vocalist where User_Id = ${User_Id}` ;
    // Execute query. Return all
    db.get(sql, function(err, row) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }

            var vocalist = new student.Vocalist(row.User_Id, row.First_Name, row.Last_Name, row.Email, row.Password);
            
        callback(vocalist);
    });
};



// Deletes a module from the database
exports.deleteVocalist = function(User_Id, callback) {
    // Create SQL delete statement
    var sql = `DELETE FROM Vocalist WHERE User_Id = "${User_Id}"`;
    // Execute SQL delete statement
    db.exec(sql, function(err) {
      // Once completed, execute callback function
      callback();
    });
  };


  exports.addVocalist = function(vocalist, callback) {
    // Create SQL statement
    var sql = `SELECT MAX(User_Id) AS vocalistID FROM vocalist` ;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        };

        var vocalistNumber = rows[0].vocalistID + 1;

        var sql = `INSERT INTO Vocalist VALUES ('${vocalistNumber }', '${vocalist.First_Name}','${vocalist.Last_Name}', '${vocalist.Email}', '${vocalist.Password}')`;

        db.exec(sql, function(err){
           
        callback ();
    });
});

};


///////////////////////////////////////////////////////////////////////////////////////////////


exports.getSingalongs = function(callback) {
    // Create SQL statement
    var sql = `SELECT * FROM singalong` ;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create programme array
        var singalongs = [];
        // Loop through rows creating programme objects
        for (var row of rows) {
            // Create programme object
            var singalong = new student.Singalong(row.S_Id, row.Title, row.Artist,row.Genre,row.Video);
            // Add object to array
            singalongs.push(singalong);
        }
        // Execute callback function
        callback(singalongs);
    });
};



exports.getSingalong = function(Genre,callback) {
    // Create SQL statement
    var sql = `SELECT * FROM singalong where Genre = "${Genre}"` ;
    // Execute query. Return all
    db.get(sql, function(err, row) {
        if (err) {
            return console.error(err.message);
        }
      
        // Loop through rows creating programme objects
        
            // Create programme object
            var singalong = new student.Singalong(row.S_Id, row.Title, row.Artist,row.Genre,row.Video);
            // Add object to array
           
       
        // Execute callback function
        callback(singalong);
    });
};

exports.getSingalong = function(S_Id,callback) {
    // Create SQL statement
    var sql = `SELECT * FROM singalong where S_Id = "${S_Id}"` ;
    // Execute query. Return all
    db.get(sql, function(err, row) {
        if (err) {
            return console.error(err.message);
        }
      
        // Loop through rows creating programme objects
        
            // Create programme object
            var singalong = new student.Singalong(row.S_Id, row.Title, row.Artist,row.Genre,row.Video);
            // Add object to array
           
       
        // Execute callback function
        callback(singalong);
    });
};

// Deletes a module from the database
exports.deleteSingalong = function(S_Id, callback) {
    // Create SQL delete statement
    var sql = `DELETE FROM Singalong WHERE S_Id = "${S_Id}"`;
    // Execute SQL delete statement
    db.exec(sql, function(err) {
      // Once completed, execute callback function
      callback();
    });
  };



  exports.addSingalong = function(singalong, callback) {

    var sql = `SELECT MAX(S_Id) AS songID FROM Singalong` ;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        };

        var songNumber = rows[0].songID+ 1;

    // Create SQL insert statement
    var sql = `INSERT INTO Singalong VALUES ('${songNumber}','${singalong.Title}','${singalong.Artist}', '${singalong.Genre}', '${singalong.Video}')`;
    db.exec(sql, function(err) {
      // Once completed, execute callback function
      callback();
    });
});
  };


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.getExercises = function(callback) {
    // Create SQL statement
    var sql = `SELECT * FROM exercise`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create programme array
        var exercises = [];
        // Loop through rows creating programme objects
        for (var row of rows) {
            // Create programme object
            var exercise = new student.Exercise(row.Ex_Id, row.Ex_Name, row.Description, row.Demonstration, row.Start );
            // Add object to array
            exercises.push(exercise);
        }
        // Execute callback function
        callback(exercises);
    });
};


exports.getVocalSounds = function(callback) {
    // Create SQL statement
    var sql = `SELECT * FROM vocal_sound`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create programme array
        var vocalsounds = [];
        // Loop through rows creating programme objects
        for (var row of rows) {
            // Create programme object
            var vocalsound = new student.VocalSound(row.Vocal_sound, row.Audio_demo );
            // Add object to array
            vocalsounds.push(vocalsound);
        }
        // Execute callback function
        callback(vocalsounds);
    });
};



// Deletes a module from the database
exports.deleteVocalSounds = function(Vocal_Sound , callback) {
    // Create SQL delete statement
    var sql = `DELETE FROM Vocalsounds WHERE Vocal_Sound = "${Vocal_Sound }"`;
    // Execute SQL delete statement
    db.exec(sql, function(err) {
      // Once completed, execute callback function
      callback();
    });
  };

  exports.addSingalong = function(singalong, callback) {

    var sql = `SELECT MAX(S_Id) AS songID FROM Singalong` ;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        };

        var songNumber = rows[0].songID+ 1;

    // Create SQL insert statement
    var sql = `INSERT INTO Singalong VALUES ('${songNumber}','${singalong.Title}','${singalong.Artist}', '${singalong.Genre}', '${singalong.Video}')`;
    db.exec(sql, function(err) {
      // Once completed, execute callback function
      callback();
    });
});
  };


  exports.addVocalSounds = function(vocalsound , callback) {
    var sql = `SELECT Vocal_Sound  FROM Vocalsound` ;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        };

    // Create SQL insert statement
    var sql = `INSERT INTO Singalong VALUES ('${Vocalsound.Vocal_Sound  }','${vocalsound.Demonstration}')`;
    db.exec(sql, function(err) {
      // Once completed, execute callback function
      callback();
    });

});
};


exports.getSoundLevels = function(callback) {
    // Create SQL statement
    var sql = `SELECT * FROM vocal_sound_level`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create programme array
        var soundlevels = [];
        // Loop through rows creating programme objects
        for (var row of rows) {
            // Create programme object
            var soundlevel = new student.SoundLevel(row.Vocal_sound, row.Level);
            // Add object to array
            soundlevels.push(soundlevel);
        }
        // Execute callback function
        callback(soundlevels);
    });
};

 
    



exports.getObjectiveExercises = function( callback) {
    // Create SQL statement
    var sql =`
    SELECT * from objective_exercise where 
    Ob_id = 'RN' and 
    Ex_Id ='SN' 
           `;
    // Execute query. Return all
    db.get(sql, function(err, row) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        
        var objectiveexercises = new student.ObjectiveExercise(row.Ob_id, row.Ex_Id);
        
        
     sql = `SELECT Exercise.Ex_Id, Exercise.Ex_Name, Exercise.Description, Exercise.start
            FROM Exercise, Objective_exercise
            where 
            objective_exercise.Ex_Id =  'SN' and
            exercise.Ex_Id = objective_exercise.Ex_Id`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create programme array
       
        // Loop through rows creating programme objects
        for (var row of rows) {
            // Create programme object
            var objexer = new student.Exercise(row.Ex_Id, row.Ex_Name, row.Description, row.start );
            // Add object to array
        

            objectiveexercises.Exercise.push(objexer);
        }
        // Execute callback function
        callback(objectiveexercises);
    });
});
};   
    

  



exports.getExerciseLevels = function(callback) {
    // Create SQL statement
    var sql = `SELECT * FROM exercise_levels`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create programme array
        var exerciselevels = [];
        // Loop through rows creating programme objects
        for (var row of rows) {
            // Create programme object
            var exerciselevel = new student.ExerciseLevel(row.Ex_Id, row.Level, row.DESCRIPTION);
            // Add object to array
            exerciselevels.push(exerciselevel);
        }
        // Execute callback function
        callback(exerciselevels);
    });
};

exports.getExerciseLevelDescriptions = function(callback) {
    // Create SQL statement
    var sql = `
    SELECT 
    Exercise_levels.level,
    Level.Description,
    Exercise_levels.Ex_Id,
    Exercise_levels.DESCRIPTION
    
FROM
    Exercise_levels,
    Level
WHERE
    Exercise_levels.level = Level.level
`;   
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Students
        var studentlevels2 = [];
        // Loop through rows creating Student objects
        for (var row of rows) {
            // Create programme object
            var level= new student.Level( row.Level, row.Description)
            var exercisel = new student.ExerciseLevel(row.Ex_Id, level, row.DESCRIPTION);
            // Create student object
            
            // Add student to array
            studentlevels2.push(exercisel);
        }
        // Execute callback function
        callback( studentlevels2);
    });

};

exports.getWarmups = function(callback) {
    // Create SQL statement
    var sql = `
    select 
    objective_exercise.ob_id, 
    objective_exercise.ex_id, 
    exercise_levels.level, 
    exercise_levels.description  
    from 
    objective_exercise, 
    exercise_levels 
    where 
    objective_exercise.ex_id = exercise_levels.ex_id 
    and exercise_levels.level = 2 
    and objective_exercise.ob_id = "WU"
`;   
   // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Students
        var warmups = [];
        // Loop through rows creating Student objects
        for (var row of rows) {
            // Create programme object
           
            var obex= new student.ObjectiveExercise( row.Ob_id, exle)
            var exle = new student.ExerciseLevel( row.Level, row.DESCRIPTION);
            // Create student object
            
            // Add student to array
            warmups.push(obex);
        }
        // Execute callback function
        callback( warmups);
    });
};


exports.getObExerciseLevels = function(Level,callback) {
    // Create SQL statement
    var sql = `SELECT * FROM obexercises
    where  level = ${Level}`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create obexerciselevels array
        var obexerciselevels = [];
        // Loop through rows creating obexerciselevels objects
        for (var row of rows) {
            // Create obexerciselevels object
            var obexerciselevel = new student.ObExercise(row.Ob_Name, row.Ex_Name, row.Level, row.DESCRIPTION, row.Start);
            // Add object to array
            obexerciselevels.push(obexerciselevel);
        }
        // Execute callback function
        callback( obexerciselevels);
    });
};

exports.getObExerciseObjectives = function(Ob_Name,callback) {
    // Create SQL statement
    var sql = `SELECT * FROM obexercises
    where ob_name = "${Ob_Name}" `;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create programme array
        var obexerciseobjectives = [];
        // Loop through rows creating programme objects
        for (var row of rows) {
            // Create programme object
            var obexerciseobjective = new student.ObExercise(row.Ob_Name, row.Ex_Name, row.Level, row.DESCRIPTION, row.start);
            // Add object to array
            obexerciseobjectives.push(obexerciseobjective);
        }
        // Execute callback function
        callback( obexerciseobjectives);
    });
};


exports.getWarmupLevels = function(Level,callback) {
    // Create SQL statement
    var sql = `SELECT * FROM obexercises
    where ob_name = "Warm Up" and level = ${Level} `
    ;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create programme array
        var warmuplevel = [];
        // Loop through rows creating programme objects
        for (var row of rows) {
            // Create programme object
            var warmuplevels = new student.ObExercise(row.Ob_Name, row.Ex_Name, row.Level, row.DESCRIPTION, row.Start);
            // Add object to array
            warmuplevel.push(warmuplevels);
        }
        // Execute callback function
        callback( warmuplevel);
    });
};

exports.getWarmupLevel = function(callback) {
    // Create SQL statement
    var sql = `SELECT * FROM obexercises
    where ob_name = "Warm Up"`
    ;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create programme array
        var warmuplevels = [];
        // Loop through rows creating programme objects
        for (var row of rows) {
            // Create programme object
            var warmuplevel = new student.ObExercise(row.Ob_Name, row.Ex_Name, row.Level, row.DESCRIPTION , row.Start );
            
            // Add object to array
            warmuplevels.push(warmuplevel);
        }
        // Execute callback function
        callback( warmuplevels);
    });
};


exports.getRangeLevels = function(Level,callback) {
    // Create SQL statement
    var sql = `SELECT * FROM obexercises
    where ob_name = "Range" and level = ${Level} `
    ;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create programme array
        var rangelevels = [];
        // Loop through rows creating programme objects
        for (var row of rows) {
            // Create programme object
            var rangelevel = new student.ObExercise(row.Ob_Name, row.Ex_Name, row.Level, row.DESCRIPTION , row.Start);
            // Add object to array
            rangelevels.push(rangelevel);
        }
        // Execute callback function
        callback( rangelevels);
    });
};

exports.getToneLevels = function(Level,callback) {
    // Create SQL statement
    var sql = `SELECT * FROM obexercises
    where ob_name = "Tone" and level = ${Level} `
    ;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create programme array
        var tonelevels = [];
        // Loop through rows creating programme objects
        for (var row of rows) {
            // Create programme object
            var tonelevel = new student.ObExercise(row.Ob_Name, row.Ex_Name, row.Level, row.DESCRIPTION , row.Start);
            // Add object to array
            tonelevels.push(tonelevel);
        }
        // Execute callback function
        callback( tonelevels);
    });
};


exports.getControlLevels = function(Level,callback) {
    // Create SQL statement
    var sql = `SELECT * FROM obexercises
    where ob_name = "Control" and level = ${Level} `
    ;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create programme array
        var controllevels = [];
        // Loop through rows creating programme objects
        for (var row of rows) {
            // Create programme object
            var controllevel = new student.ObExercise(row.Ob_Name, row.Ex_Name, row.Level, row.DESCRIPTION , row.Start);
            // Add object to array
            controllevels.push(controllevel);
        }
        // Execute callback function
        callback( controllevels);
    });
};

exports.getPitchLevels = function(Level,callback) {
    // Create SQL statement
    var sql = `SELECT * FROM obexercises
    where ob_name = "Pitch" and level = ${Level} `
    ;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create programme array
        var pitchlevels = [];
        // Loop through rows creating programme objects
        for (var row of rows) {
            // Create programme object
            var pitchlevel = new student.ObExercise(row.Ob_Name, row.Ex_Name, row.Level, row.DESCRIPTION , row.Start);
            // Add object to array
            pitchlevels.push(pitchlevel);
        }
        // Execute callback function
        callback( pitchlevels);
    });
};


exports.getObExercises = function(callback) {
    // Create SQL statement
    var sql = `SELECT * FROM obexercises`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create programme array
        var obexercises = [];
        // Loop through rows creating programme objects
        for (var row of rows) {
            // Create programme object
            var obexercise = new student.ObExercise(row.Ob_Name, row.Ex_Name, row.Level, row.DESCRIPTION, row.start);
            // Add object to array
            obexercises.push(obexercise);
        }
        // Execute callback function
        callback(obexercises);
    });
};

exports.getVocalSoundLevels = function(callback) {
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
        var vocalsoundlevels= [];
        // Loop through rows creating Student objects
        for (var row of rows) {

            
            // Create programme object
           // ;
            // Create student object
         var soundlevel= new student.SoundLevel(row.Vocal_sound, row.Level);
            // Add student to array
         var vocalsound = new student.VocalSound( soundlevel,row.Vocal_sound, row.Audio_demo)
           vocalsoundlevels.push(vocalsound);
        }
        // Execute callback function

        
        callback(vocalsoundlevels);
    });
};



exports.getRangeSoundLevels = function(Level, callback) {
    // Create SQL statement
    var sql = `
    select 
    objective.ob_id,
    objective.ob_name,
    objective_sound.vocal_sound, 
    vocal_sound_level.level,
    vocal_sound.Audio_demo
    from
    objective,
    objective_sound,
    vocal_sound_level,
    vocal_sound 
    where 
    objective.ob_name = "Range" and
    vocal_sound_level.level = ${Level}
    and
    vocal_sound.vocal_sound= vocal_sound_level.vocal_sound and
    objective.ob_name = objective_sound.ob_id 
    and vocal_sound_level.vocal_sound=objective_sound.vocal_sound

        `;

    

    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if errory
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Students
        var rangesoundlevels= [];
        // Loop through rows creating Student objects
        for (var row of rows) {
            // Create programme object
            ;
            // Create student object

            //var objectivesound = new student.ObjectiveSound(row.Ob_Id)
            //var soundlevel= new student.SoundLevel (row.Ob_Id,row.Vocal_sound,row.Level);
            var rangesoundlevel = new student.ObjectiveSoundLevel(row.Ob_Id, row.Ob_Name, row.Vocal_sound, row.Level, row.Audio_demo);
            // Add student to array
           
            rangesoundlevels.push( rangesoundlevel);

        }
        // Execute callback function
        callback(rangesoundlevels);
    });
};


exports.getControlSoundLevels = function(Level, callback) {
    // Create SQL statement
    var sql = `
    select 
    objective.ob_id,
    objective.ob_name,
    objective_sound.vocal_sound, 
    vocal_sound_level.level, 
    vocal_sound.Audio_demo
    from
    objective,
    objective_sound,
    vocal_sound_level,
    vocal_sound 
    where 
    objective.ob_name = "Control" and
    vocal_sound_level.level = ${Level}
    and
    vocal_sound.vocal_sound= vocal_sound_level.vocal_sound and
    objective.ob_name = objective_sound.ob_id 
    and vocal_sound_level.vocal_sound=objective_sound.vocal_sound
        `;

    

    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if errory
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Students
        var controlsoundlevels= [];
        // Loop through rows creating Student objects
        for (var row of rows) {
            // Create programme object
            ;
            // Create student object

            //var objectivesound = new student.ObjectiveSound(row.Ob_Id)
            //var soundlevel= new student.SoundLevel (row.Ob_Id,row.Vocal_sound,row.Level);
            var controlsoundlevel = new student.ObjectiveSoundLevel(row.Ob_Id, row.Ob_Name, row.Vocal_sound, row.Level, row.Audio_demo);
            // Add student to array
           
            controlsoundlevels.push( controlsoundlevel);

        }
        // Execute callback function
        callback(controlsoundlevels);
    });
};

exports.getToneSoundLevels = function(Level, callback) {
    // Create SQL statement
    var sql = `
    select 
    objective.ob_id,
    objective.ob_name,
    objective_sound.vocal_sound, 
    vocal_sound_level.level, 
    vocal_sound.Audio_demo
    from
    objective,
    objective_sound,
    vocal_sound_level,
    vocal_sound 
    where 
    objective.ob_name = "Tone" and
    vocal_sound_level.level = ${Level}
    and
    vocal_sound.vocal_sound= vocal_sound_level.vocal_sound and
    objective.ob_name = objective_sound.ob_id 
    and vocal_sound_level.vocal_sound=objective_sound.vocal_sound
        `;

    

    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if errory
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Students
        var tonesoundlevels= [];
        // Loop through rows creating Student objects
        for (var row of rows) {
            // Create programme object
            ;
            // Create student object

            //var objectivesound = new student.ObjectiveSound(row.Ob_Id)
            //var soundlevel= new student.SoundLevel (row.Ob_Id,row.Vocal_sound,row.Level);
            var tonesoundlevel = new student.ObjectiveSoundLevel(row.Ob_Id, row.Ob_Name, row.Vocal_sound, row.Level, row.Audio_demo);
            // Add student to array
           
            tonesoundlevels.push( tonesoundlevel);

        }
        // Execute callback function
        callback(tonesoundlevels);
    });
};


exports.getPitchSoundLevels = function(Level, callback) {
    // Create SQL statement
    var sql = `
    select 
    objective.ob_id,
    objective.ob_name,
    objective_sound.vocal_sound, 
    vocal_sound_level.level,
    vocal_sound.Audio_demo
    from
    objective,
    objective_sound,
    vocal_sound_level,
    vocal_sound 
    where 
    objective.ob_name = "Pitch" and
    vocal_sound_level.level = ${Level}
    and
    vocal_sound.vocal_sound= vocal_sound_level.vocal_sound and
    objective.ob_name = objective_sound.ob_id 
    and vocal_sound_level.vocal_sound=objective_sound.vocal_sound

        `;

    

    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if errory
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Students
        var pitchsoundlevels= [];
        // Loop through rows creating Student objects
        for (var row of rows) {
            // Create programme object
            ;
            // Create student object

            //var objectivesound = new student.ObjectiveSound(row.Ob_Id)
            //var soundlevel= new student.SoundLevel (row.Ob_Id,row.Vocal_sound,row.Level);
            var pitchsoundlevel = new student.ObjectiveSoundLevel(row.Ob_Id, row.Ob_Name, row.Vocal_sound, row.Level, row.Audio_demo);
            // Add student to array
           
            pitchsoundlevels.push( pitchsoundlevel);

        }
        // Execute callback function
        callback(pitchsoundlevels);
    });
};



exports.getWarmupSoundLevels = function(Level,callback) {
    // Create SQL statement
    var sql = `
    select 
        objective_sound.Ob_id, 
        objective_sound.vocal_sound,
        vocal_sound_level.level,
        vocal_sound.Audio_demo
        from 
        objective_sound,
        vocal_sound_level,
        vocal_sound
        where 
        vocal_sound_level.vocal_sound = objective_sound.vocal_sound and 
        vocal_sound.vocal_sound = objective_sound.vocal_sound and
        ob_id ="Warm Up" and
        vocal_sound_level.level= ${Level}
        `;

        

    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if errory
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Students
        var warmupsoundlevels= [];
        // Loop through rows creating Student objects
        for (var row of rows) {
            // Create programme object
            ;
            // Create student object

            //var objectivesound = new student.ObjectiveSound(row.Ob_Id)
            //var soundlevel= new student.SoundLevel (row.Ob_Id,row.Vocal_sound,row.Level);
            var warmupsoundlevel = new student.WarmupSoundLevel(row.Ob_Id, row.Vocal_sound, row.Level, row.Audio_demo);
            // Add student to array
           
            warmupsoundlevels.push( warmupsoundlevel);

        }
        // Execute callback function
        callback(warmupsoundlevels);
    });
};

