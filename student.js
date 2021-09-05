"use strict";




exports.Vocalist = class {
  // Student ID
  User_Id;
  // Student first name
  First_Name;
  // Student last name
  last_Name;
  // Student programme
  Email;
  // Student modules and grades
  Password;

  constructor(User_Id, First_Name, Last_Name, Email,Password) {
    this.User_Id = User_Id;
    this.First_Name = First_Name;
    this.Last_Name = Last_Name;
    this.Email = Email;
    this.Password = Password;

  }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////




exports.Singalong = class{
  
    // Module code
    S_Id;
    // Module name
    Title;
    Artist;

    Genre;
    
    Video;

    constructor(S_Id, Title,  Artist, Genre, Video) {
        this.S_Id = S_Id;
        this.Title = Title;
        this.Artist = Artist;
        this.Genre = Genre;
        this.Video = Video;


  }
}


exports.Exercise = class{
  // Exercise code
  Ex_Id;
  // exercise name
  Ex_Name;

  Description;

  Demonstration;

  start;

constructor(Ex_Id, Ex_Name,Description,Demonstration, start) {
  this.Ex_Id = Ex_Id;
  this.Ex_Name = Ex_Name;
  this.Description = Description;
  this.Demonstration = Demonstration;
  this.start = start;
      
  }
}

exports.Objective = class{
  // Exercise code
  Ob_Id;
  // Module name
  Ob_Name;

  constructor(Ob_Id, Ob_Name) {
      this.Ob_Id = Ob_Id;
      this.Ob_Name = Ob_Name;
          
  }
}


exports.VocalSound = class {
  // Exercise code
  Vocal_sound;
  // Exercise name
  
  // Exercise Description
  Audio_demo ;

  constructor(Vocal_sound, Audio_demo ) {
      this.Vocal_sound = Vocal_sound;
      this.Audio_demo = Audio_demo ;
      
  }
}
exports.ObjectiveSound = class {
  // Exercise code
  Ob_Id;
  Vocal_sound;
  // Exercise name
  
  // Exercise Description
 

  constructor(Ob_Id, Vocal_sound) {
      this.Ob_Id = Ob_Id ;
      this.Vocal_sound = Vocal_sound;
      
      
  }
}

exports.SoundLevel = class {
  // Exercise code
  Vocal_sound;
  // Exercise name
  Level;
  // Exercise Description
 
  constructor(Vocal_sound, Level) {
      this.Vocal_sound = Vocal_sound;
      this.Level = Level ;
      
  }
}

exports.VocalSoundLevel = class {
  // Exercise code
  Vocal_sound;
  // Exercise name
  Level;
  // Exercise Description
 
  constructor(Vocal_sound, Level) {
      this.Vocal_sound = Vocal_sound;
      this.Level = Level ;
      
  }
}

exports.VSoundLevel = class {
  // Exercise code
  Vocal_sound;
  // Exercise name
  Level;

  Audio_demo;
  // Exercise Description
 
  constructor(Vocal_sound, Level, Audio_demo) {
      this.Vocal_sound = Vocal_sound;
      this.Level = Level ;
      this.Audio_demo = Audio_demo;
      
  }
}




exports.WarmupSoundLevel = class {
  // Exercise code
  Ob_Id ;
  // Exercise name
  Vocal_sound;

  Level;
  Audio_demo;
  // Exercise Description
  
  
  constructor(Ob_Id  ,Vocal_sound, Level, Audio_demo) {
      this.Ob_Id   = Ob_Id  ;
      this.Vocal_sound= Vocal_sound;
      this.Level = Level ;
      this.Audio_demo = Audio_demo;
      
}
}

exports.ObjectiveExerciseLevel = class {
  // Exercise code
  Ob_id ;
  // Exercise name
  Ex_Id;

  Level;
  // Exercise Description
  
  
  constructor(Ob_id  ,Ex_Id, Level, DESCRIPTION) {
      this.Ob_id   = Ob_id  ;
      this.Ex_Id= Ex_Id;
      this.Level = Level ;
      this.DESCRIPTION = DESCRIPTION ;
}
}

exports.ObjectiveSoundLevel = class{
  // Exercise code
  Ob_Id ;
    // Exercise name
    Ob_Name;
    // Exercise Description
    Vocal_sound;

    Level;

    Audio_demo;

    constructor(Ob_Id ,Ob_Name, Vocal_sound, Level ,Audio_demo) {
        this.Ob_Id  = Ob_Id ;
        this.Ob_Name= Ob_Name;
        this.Vocal_sound = Vocal_sound;
        this.Level = Level ;
        this.Audio_demo = Audio_demo
      
}
}
exports.ObjectiveExercise = class  {
  // Exercise code
  Ob_id ;
  // Exercise name
  Ex_Id;

  Exercise = [];

 
  
  constructor(Ob_id,Ex_Id) {
      this.Ob_id = Ob_id;
      this.Ex_Id = Ex_Id ;
      
}
}

exports.ExerciseLevel = class  {
  // Exercise code
  
  Ex_Id;
  Level;
  DESCRIPTION;

  constructor(Ex_Id, Level, DESCRIPTION ) {
      
      this.Ex_Id = Ex_Id ;
      this.Level = Level;
      this.DESCRIPTION = DESCRIPTION;
}
}

exports.Level = class  {
  // Exercise code
  
  Level;
  
  Description;

  constructor(Level, Description ) {
      
      
      this.Level = Level;
      this.Description = Description;
}
}




exports.Warmup = class{
  
  Ob_id;
  Ex_Id; 
  Level;
  DESCRIPTION;
  start;

constructor(Ob_id, Ex_Id, Level, DESCRIPTION, start) {
  this.Ob_id =  Ob_id;
  this.Ex_Id = Ex_Id
  this.Level = Level;
  this.DESCRIPTION = DESCRIPTION;
  this.start = start;
}}



exports.ObExercise = class  {
  Ob_Name ;
  Ex_Name;
  Level;
  DESCRIPTION;
  start;
constructor(Ob_Name,Ex_Name,Level,DESCRIPTION,start ){
  this.Ob_Name = Ob_Name;
  this.Ex_Name = Ex_Name ;
  this.Level = Level;
  this.DESCRIPTION = DESCRIPTION;
  this.start = start;    
}}






