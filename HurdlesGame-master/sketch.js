var player;
var hurdles;
var invisibleground1;
var invisibleground2;
var invisibleground3;
var body1 = 0;
var body2 = 0;
var body3 = 0;
var body4 = 0;
var game;
var form;
var playercount = 0;
var player1, player2, player3, player4;
var players;
var gameState = 0;
var a = [];
var playerGameState = 0;
var ground;
var rank = 0;


function preload(){


}

function setup(){
    createCanvas(4000, displayHeight -302);
  
    player = new Player();
    game = new Game();
    hurdles = new Hurdles();
    playercount = 0;
    ground = new Ground();
}

function draw(){
    background("blue");
    ground.display();
    if (gameState === 0){
        game.start();

    }
    if (gameState === 1 && playerGameState === 0){
        game.play();

    }

    

    if (gameState === 2){
        game.end();

    }

    form.display(); 
    hurdles.display();

    if (hurdles.sprites){
    for (var i = 0; i < hurdles.sprites.length; i++) {
        hurdles.sprites[i].draw();
        
    }
    }
    player1.x = player.distance;
    player1.velocityY = player1.velocityY + 0.9;
  
        player1.collide(body4);
        player1.collide(body3);
        player1.collide(body2);
        player1.collide(body1);

    

    drawSprites();
    
}
function keyPressed() {
    if (keyCode === UP_ARROW && playerGameState === 0) {
        player1.velocityY = -10;
    }
}