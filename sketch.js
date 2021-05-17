var ball;
var database;
var gameState=0
var playerCount;
var game , player , form;
var allPlayers;


function setup(){
    createCanvas(500,500);
    
    database= firebase.database()

    game= new Game()
    game.getState()
    game.startGame()
    

    // var dbref = database.ref("position")
    // dbref.on("value", readposition)
}

function draw(){
    background("white");

    if(playerCount===4){
     game.update(1)
    }

    if(gameState===1)
    {
        game.play();
    }
}
