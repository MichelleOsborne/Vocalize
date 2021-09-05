"use strict";
const sqlite3 = require("sqlite3").verbose();

// The application layer uses vocalize classes
const student = require("../student.js");

// The application layer talks to the data layer
const data = require("../data/data.js");
// Import express library.
const express = require("express");
// Create express application
var app = express();
// Add static files location
app.use(express.static("static"));
app.use(express.json());




const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();

app.use("/assets",express("assets"));

const db =  new sqlite3.Database("data/students.db", function(err) {
  if (err) {
      return console.error(err.message);
  }
  console.log("Connected to vocalize database.");
});





app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
})

app.post("/",encoder, function(req,res){
  var email = req.body.email;
  var password = req.body.password;

  

  db.all("select * from vocalist where Email = ? and Password = ?", [email, password],function(error,results,fields){
      if (results.length > 0) {
          res.redirect("/Home.html");
      } else {
          res.redirect("/index.html");
      }
      res.end();
  })
})

// Add /students endpoint
app.get("/users", function(req, res) {
  // Call getStudents on data
  data.getVocalists(function(users) {
    res.json(users);
  });
});

app.post("/users",encoder, function(req,res){
  console.log(req.body);
  
  var sql = `SELECT MAX(User_Id) AS vocalistID FROM vocalist` ;
  // Execute query. Return all
  db.all(sql, function(err, rows) {
      // Check if error
      if (err) {
          return console.error(err.message);
      };

      var vocalistNumber = rows[0].vocalistID + 1;

  var sql = `INSERT INTO Vocalist VALUES ('${vocalistNumber}','${req.body.firstname}', '${req.body.lastname}','${req.body.email}', '${req.body.password}')`;
  db.all(sql,function(err){
      if (err) throw err
      
      res.redirect("index.html");
    });
  });
});



// when login is success
app.get("/Home",function(req,res){
  res.sendFile(__dirname + "/Home.html")
});


//

  app.get("/vocalists/:User_Id", function(req, res) {
    // Call getvocalist on data
    data.getVocalist(req.params.User_Id, function(vocalist) {
        res.json(vocalist);
    });
});


// Add /vocalist endpoint
app.get("/vocalists", function(req, res) {
    // Call getStudents on data
    data.getVocalists(function(vocalists) {
      res.json(vocalists);
    });
  });

  app.delete("/vocalists/:User_Id", function(req, res) {
    // Call getvocalists on data
    data.deleteVocalist(req.params.User_Id,function() {
      res.send("OK");
    });
  });
 
  app.post("/vocalists", function(req, res) {

    data.addVocalist(req.body,function() {  
    // add vocalist
    res.send("ok");
    });
  });

 


  //////////////////////////////////////////////////////////////////////////////////////////////////

  app.get("/singalongs", function(req, res) {
    // Call getSingalongs on data
    data.getSingalongs(function(singalongs) {
      res.json(singalongs);
    });
  });


  app.get("/singalongs/:S_Id", function(req, res) {
    // Call getSingalongs on data
    data.getSingalong(req.params.S_Id,function(singalong) {
      res.json(singalong);
    });
  });

  app.delete("/singalongs/:S_Id", function(req, res) {
    // Call getSingalongs on data
    data.deleteSingalong(req.params.S_Id,function() {
      res.send("OK");
    });
  });

  app.post("/singalongs", function(req, res) {
    // Call getSingalongs on data
    data.addSingalong(req.body,function() {
      res.send("OK");
    });
  });
  


///////////////////////////////////////////////////////////////////////////////////////////

  app.get("/exercises", function(req, res) {
    // Call getExercises on data
    data.getExercises(function(exercises) {
      res.json(exercises);
    });
  });

  app.get("/vocalsounds", function(req, res) {
    // Call getExercises on data
    data.getVocalSounds(function(vocalsounds) {
      res.json(vocalsounds);
    });
  });

  app.get("/vocalsounds/:Vocal_Sound", function(req, res) {
    // Call getExercises on data
    data.getVocalSound(req.params.Vocal_Sound,function() {
      res.json(vocalsounds);
    });
  });

  app.delete("/vocalsounds/:Vocal_Sound", function(req, res) {
    // Call getStudents on data
    data.deleteVocalSounds(req.params.Vocal_Sound,function() {
      res.send("OK");
    });
  });

  app.post("/vocalsounds", function(req, res) {
    // Call getStudents on data
    data.addVocalSounds(req.body,function() {
      res.send("OK");
    });
  });

  app.get("/vocalsoundlevels", function(req, res) {
    // Call getExercises on data
    data.getVocalSoundLevels(function(vocalsoundlevels) {
      res.json(vocalsoundlevels);
    });
  });

  
 //////////////////////////////////////////////////////////////////////

  app.get("/objectivesoundlevels/:Level", function(req, res) {
    // Call getExercises on data
    data.getObjectiveSoundLevels(req.params.Level,function(objectivesoundlevels) {
      res.json(objectivesoundlevels);
    });
  });

  app.get("/controlsoundlevels/:Level", function(req, res) {
    // Call getExercises on data
    data.getControlSoundLevels(req.params.Level,function(controlsoundlevels) {
      res.json(controlsoundlevels);
    });
  });
  app.get("/rangesoundlevels/:Level", function(req, res) {
    // Call getExercises on data
    data.getRangeSoundLevels(req.params.Level,function(rangesoundlevels) {
      res.json(rangesoundlevels);
    });
  });
  app.get("/tonesoundlevels/:Level", function(req, res) {
    // Call getExercises on data
    data.getToneSoundLevels(req.params.Level,function(tonesoundlevels) {
      res.json(tonesoundlevels);
    });
  });

  app.get("/pitchsoundlevels/:Level", function(req, res) {
    // Call getExercises on data
    data.getPitchSoundLevels(req.params.Level,function(pitchsoundlevels) {
      res.json(pitchsoundlevels);
    });
  });
  

  app.get("/objectivesoundlevels", function(req, res) {
    // Call getExercises on data
    data.getObjectiveSoundLevels(function(objectivesoundlevels) {
      res.json(objectivesoundlevels);
    });
  });


  app.get("/warmupsoundlevels/:Level", function(req, res) {
    // Call getExercises on data
    data.getWarmupSoundLevels(req.params.Level,function(warmupsoundlevels) {
      res.json(warmupsoundlevels);
    });
  });

  //////////////////////////////////////////////////////////////////////

  app.get("/warmuplevels", function(req, res) {
  
    // Call getExercises on data
    data.getWarmupLevel(function(warmuplevels) {
      res.json(warmuplevels);
    });
  });

  app.get("/warmuplevels/:Level", function(req, res) {
    // Call getExercises on data
    data.getWarmupLevels(req.params.Level,function(warmuplevel) {
      res.json(warmuplevel);
    });
  });


  app.get("/rangelevels/:Level", function(req, res) {
    // Call getExercises on data
    data.getRangeLevels(req.params.Level,function(rangelevels) {
      res.json(rangelevels);
    });
  });

  app.get("/tonelevels/:Level", function(req, res) {
    // Call getExercises on data
    data.getToneLevels(req.params.Level,function(tonelevels) {
      res.json(tonelevels);
    });
  });

  app.get("/controllevels/:Level", function(req, res) {
    // Call getExercises on data
    data.getControlLevels(req.params.Level,function(controllevels) {
      res.json(controllevels);
    });
  });

  app.get("/pitchlevels/:Level", function(req, res) {
    // Call getExercises on data
    data.getPitchLevels(req.params.Level,function(pitchlevels) {
      res.json(pitchlevels);
    });
  });

  /////////////////////////////////////////////////////////////////////////////



  app.get("/soundlevels", function(req, res) {
    // Call getExercises on data
    data.getSoundLevels(function(soundlevels) {
      res.json(soundlevels);
    });
  });
  app.get("/objectiveexercises", function(req, res) {
    // Call getExercises on data
    data.getObjectiveExercises(function(objectiveexercises) {
      res.json(objectiveexercises);
    });
  });
 

  app.get("/objectiveexercise/:Ex_Id", function(req, res) {
    // Call getExercises on data
    data.getObjectiveExercise(req.params.Ex_Id, function(objectiveexercise) {
      res.json(objectiveexercise);
    });
  });

  app.get("/exerciselevels", function(req, res) {
    // Call getExercises on data
    data.getExerciseLevels(function(exerciselevels) {
      res.json(exerciselevels);
    });
  });

  app.get("/exerciselevels2", function(req, res) {
    // Call getExercises on data
    data.getExerciseLevels2(function(exerciselevels2) {
      res.json(exerciselevels2);
    });
  });
  

  app.get("/warmups", function(req, res) {
    // Call getwarmup on data
    data.getWarmups(function(warmups) {
      res.json(warmups);
    });
  });

  app.get("/obexercises", function(req, res) {
    // Call getObexercise on data
    data.getObExercises(function(obexercises) {
      res.json(obexercises);
    });
  });
 

  app.get("/obexercises/:Level", function(req, res) {
    // Call getObexercise on data
    data.getObExerciseLevels(req.params.Level, function(obexerciselevels) {
        res.json(obexerciselevels);
    });
});


app.get("/obexercises/:Ob_name", function(req, res) {
  // Call getObexercise on data
  data.getObExerciseObjectives(req.params.ob_name,function(obexerciseobjectives) {
    res.json(obexerciseobjectives);
  });
});




app.post("/songSubmitted", function(req, res){

  // add song record to DB
  data.addToSingalong(req.body.Title, req.body.Artist, req.body.Genre,  req.body.Video, function(){
   
    

          res.send("song added")
      });
  });



  app.post("/vocalistSubmitted", function(req, res){

  // add user record to DB
  data.addToVocalist(req.body.User_Id, req.body.First_Name, req.body.Last_Name,  req.body.Email, req.body.password, function(){
   
    

          res.send("vocalist added")
      });
  });
  


//////////////////////////////////


// Start listening on port 3000
app.listen(3000, function(err) {
  if (err) {
    return console.error(err.message);
  }
  console.log("Server started.");
});