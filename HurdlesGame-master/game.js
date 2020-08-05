class Game{
    constructor(){



    }

    start(){
        if (gameState === 0){
            player = new Player();
           // player.getplayercount();
            form = new Form();
            form.display();
        }

        player1 = createSprite(player.distance, displayHeight - 400, 20,20);
        //player1.addImage(carIMG1);

        player2 = createSprite(displayWidth - 1400, displayHeight - 550,20,20);
        //player2.addImage(carIMG2);

        player3 = createSprite(displayWidth - 1400, displayHeight - 700,20,20);
        //player3.addImage(carIMG1);

        player4 = createSprite(displayWidth - 1400, displayHeight - 850,20,20);
        //player4.addImage(carIMG2);
        console.log(displayWidth );
        console.log(displayHeight + "   !");
        players = [player1, player2, player3, player4];

        if (playercount === 1){

            gameState = 1;

        }

         
    }

    play(){
     
        if (keyIsDown(RIGHT_ARROW)) {
            player.distance = player.distance + 10;
        }
        

        for (var i = 0; i < hurdles.sprites.length; i++) {
            if (player1.isTouching(hurdles.sprites[i])){
                playerGameState = 1;
            }

        }
        

        if (player.distance > 3000){
            this.end();
        }
    }
    end(){
        if (player.distance > 3000 && player.distance < 3041){
        rank = rank + 1;
        }
        strokeWeight(30);
        text(" Player:      " + player.name + "         Rank:  " +  rank, 3000,20);
        
    }
    /*
    getGameState() {
     var gamestateref = database.ref("gameState");
            gamestateref.on("value", function(data){
            gamestate = data.val();
    
     });
    
    }

    updategameState(state){
        var gamestateref = database.ref('/');
        gamestateref.update({
             gameState: state
        });


    }

    start(){

        if (gamestate === 0){
            player = new Player();
            player.getplayercount();
            form = new Form();
            form.display();

        }

        car1 = createSprite(displayWidth - 900, displayHeight - 180);
        car1.addImage(carIMG1);

        car2 = createSprite(displayWidth - 500, displayHeight - 180);
        car2.addImage(carIMG2);
        
        cars = [car1, car2];
    }

    play(){
        form.hide();
        text("Press the UP arrow to go forward", 250, 30);
        Player.getallplayerinfo();
        if (allplayers !==undefined){
            var yposition = 130;
            var index = 0;
            var x = 500;
            image(track, 0, -displayHeight * 4, displayWidth, displayHeight * 8);

            for(var plr in allplayers){

              /* if (plr === "player" + player.index){
                fill("red");

           }
           else{
                fill("blue");
           }/
            yposition = displayHeight - allplayers[plr].distance
   
       

            cars[index].x = x
            cars[index].y = yposition
            //console.log(cars[index].y);
            index = index + 1
          
            if (index === player.index){
                //cars[index - 1].shapeColor = "red";
                camera.position.x =  displayWidth/2
                camera.position.y =  cars[index - 1].y
                


            }
            x = x + 440;
            }
        }
        if (keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 20;
            player.updateplayerinfo();


        }

        if (player.distance === 4100){
            gamestate = 2;


        }

    }

    end(){
        console.log("Game Over!");

        game.updategameState(2);



    }
    */

    }