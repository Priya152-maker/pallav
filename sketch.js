var PLAY = 1;
var COLOR = 0;
var gameState = PLAY;

var canvas;
var music;
var surface1, surface2, surface3, surface4, box;
var edges1, edges2;

function preload(){

    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);



    //create 4 different surfaces
    surface1 = createSprite(100,550,200, 20);
    surface1.shapeColor = "red";

    surface2 = createSprite(300,550,200, 20);
    surface2.shapeColor = "yellow";

    surface3 = createSprite(500,550,200, 20);
    surface3.shapeColor = "green";

    surface4 = createSprite(700,550,200, 20);
    surface4.shapeColor = "blue";

    //create box sprite and give velocity
    box = createSprite(400,500,20,20);
    box.shapeColor = "white";

    
}
;''
function draw() {
    background(rgb(169,169,169));
 if (gameState === PLAY){
    music.play();
    gameState = COLOR;
 }
    
    //add condition to check if box touching surface and make it box
    box.velocityY = box.velocityY + 0.8;

    if(box.collide(surface1))
    {
        box.shapeColor = "green";
        
        box.velocityY = -20;
    }
    if(box.collide(surface2))
    {
        box.shapeColor = "purple";
        
        box.velocityY = -20;
    }
    if(box.collide(surface3))
    {
        box.shapeColor = "red";
        
        box.velocityY = -20;
    }
    if(box.collide(surface4))
    {
        box.shapeColor = "green";
        
        box.velocityY = -20;
    }
    

    box.setCollider("rectangle",0,0,box.width,box.height);
    box.debug = true;

    if(keyDown("LEFT_ARROW"))
    {
        box.velocityX = -4;
    }
    if (keyDown("RIGHT_ARROW"))
    {
        box.velocityX = 4;
    }
    drawSprites();

}

