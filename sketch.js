var database;
var game, character, note;
var gamestate, playerplus;


function setup(){
  database = firebase.database();
  
  createCanvas(500,500);

  game = new Gama();
  game.gatestate()
  game.start()

}

function draw(){
  background("white");
  
  
    
  
}

