var background,backgroundImg;
var nave,naveImg,asteroide,asteroideImg,esplosao,esplosaoImg;
var score;
var END = 0;
var PLAY = 1;
var gameState = PLAY;
var asteroideG;
var gameover, gameoverImg;

function preload(){
    backgroundImg = loadImage("backgroundImg.png");
    naveImg = loadImage("nave.png");
    asteroideImg = loadImage("asteroide.png");
    esplosaoImg = loadImage("esplosao.png");
    gameoverImg = loadImage("gameover.png");
}

function setup() {
    createCanvas(700,600);
    nave = createSprite(350,380,20,20);
    nave.addImage(naveImg);
    nave.scale = 0.2;

    asteroideG= new Group();

    gameover = createSprite(350,300,20,20);
    gameover.addImage(gameoverImg);
    gameover.scale = 0.5;
    

}

function draw() {
    if(gameState===PLAY){
        background(backgroundImg);
        textSize(20);
        fill("black")

        nave.x = World.mouseX;
        nave.y = World.mouseY;

        gameover.visible = false;

        criarObstaculo()
    } 
    if(asteroideG.isTouching(nave)){
        gameState = END;
    }
    if(gameState === END){
        gameover.visible = true;
        asteroide.velocityY = 0;
    }


drawSprites();
}

function criarObstaculo(){
    if (World.frameCount % 100 == 0) {
        asteroide = createSprite(Math.round(random(50, 550),600, 10, 10));
        asteroide.addImage(asteroideImg);
        asteroide.scale=0.2;
        asteroide.velocityY = 4;
        asteroide.lifetime = 150;
        asteroide.setCollider('circle',0,0,45)
        asteroide.depth = nave.depth;
        nave.depth +=1;
        asteroideG.add(asteroide);
    }
}