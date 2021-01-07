var canvas;
var box1, box2, box3, box4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(75, 580, 200, 30);
    box1.shapeColor = "red";

    box2 = createSprite(280, 580, 200, 30);
    box2.shapeColor = "yellow";

    box3 = createSprite(490, 580, 200, 30);
    box3.shapeColor = "purple";

    box4 = createSprite(700, 580, 200, 30);
    box4.shapeColor = "green";

    //create box sprite and give velocity
    ball = createSprite(random(20, 750), 150, 30, 30);
    ball.shapeColor = "white";
    ball.velocityX = 6;
    ball.velocityY = 6;
}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(box1.isTouching(ball) && ball.bounceOff(box1)){
        ball.shapeColor = "red";
        music.play();
    }

    if(box2.isTouching(ball)){
        ball.shapeColor = "yellow";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(box3.isTouching(ball) && ball.bounceOff(box3)){
        ball.shapeColor = "purple";
        music.play();
    }

    if(box4.isTouching(ball) && ball.bounceOff(box4)){
        ball.shapeColor = "green";
        music.play();
    }

    drawSprites();
}