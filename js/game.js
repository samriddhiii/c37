class Game{
    constructor(){
    }

    getState(){
      var dbref= database.ref("gameState")
      dbref.on("value", function(data){
          gameState= data.val()
      })
    }

    update(state){
     database.ref("/").update({gameState:state})
    }

    startGame(){
        console.log("game" + gameState) 
        if(gameState===0){
          
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }
    }

    play(){

      form.hideForm()
      Player.getAllPlayersInfo();

      textSize(30)
      text("Game Started", 150,150)
      if(allPlayers!==undefined)
      {
          var textYPosition = 200
          for(var plr in allPlayers)
          {
            if(plr === "player"+player.index)
                fill("red")
           else
               fill("black")

        

              text(allPlayers[plr].name + " : " + allPlayers[plr].distance, 200,textYPosition)
              textYPosition +=30
          }
      }

      if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance+= 50
      player.update()
     }
    }
}