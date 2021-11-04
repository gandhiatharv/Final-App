var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;
var form, player, game;
var iphone, iphoneImg, icon, iconImg;

//ADD SOUNDS & ADDS TO FINAL APP

function preload(){
  iphoneImg = loadImage("images/iphone.png");
  iconImg = loadImage("images/favicon.png");
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.start();
  iphone = createSprite(288, 430);
  iphone.addImage(iphoneImg);
  iphone.scale = 1.6;
  icon = createSprite(288, 355);
  icon.addImage(iconImg);
  icon.scale = 0.45;
}



function draw(){
  drawSprites();
}
