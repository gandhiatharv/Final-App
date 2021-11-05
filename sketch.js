var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;
var form, player, game;
var iphone, iphoneImg, icon, iconImg;
var a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, close;
var aimg1, aimg2, aimg3, aimg4, aimg5, aimg6, aimg7, aimg8, aimg9, aimg10, closeimg;
var rand;
var allowance = "yes";
var hide = false;

//ADD SOUNDS & ADDS TO FINAL APP
//USE NAMES THAT ARE IN THE LOGIN INPUT THAT THE USER FILLED OUT
//BEFORE LOGGING IN AND AFTER LOGGING OUT THE USER'S NAME, PASSWORD, EMAIL, AND LAST NAME ARE NOTHING/ANONYMOUS
//NAMES CANNOT BE REPEATED
//YOU CANNOT PERFORM ANY ACTIONS UNTIL ADD IS CLOSED (PLAY THE WINDOWS ERROR NOISE WHEN A PERSON TRIES TO PERFORM AN ACTION WITH AN AD GOING ON)

function preload(){
  iphoneImg = loadImage("images/iphone.png");
  iconImg = loadImage("images/favicon.png");
  aimg1 = loadImage("images/0001.jpg");
  aimg2 = loadImage("images/0002.jpg");
  aimg3 = loadImage("images/0003.jpg");
  aimg4 = loadImage("images/0004.jpg");
  aimg5 = loadImage("images/0005.jpg");
  aimg6 = loadImage("images/0006.jpg");
  aimg7 = loadImage("images/0007.jpg");
  aimg8 = loadImage("images/0008.jpg");
  aimg9 = loadImage("images/0009.jpg");
  aimg10 = loadImage("images/0010.jpg");
  closeimg = loadImage("images/close.png");
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
  icon.depth = 1;
  a1 = createSprite(290, 350, 200, 200);
  a1.addImage(aimg1);
  a1.scale = 0.045;
  a1.visible = false;
  a1.depth = 2;
  a2 = createSprite(290, 350, 200, 200);
  a2.addImage(aimg2);
  a2.scale = 0.045;
  a2.visible = false;
  a2.depth = 2;
  a3 = createSprite(290, 350, 200, 200);
  a3.addImage(aimg3);
  a3.scale = 0.045;
  a3.visible = false;
  a3.depth = 2;
  a4 = createSprite(290, 350, 200, 200);
  a4.addImage(aimg4);
  a4.scale = 0.045;
  a4.visible = false;
  a4.depth = 2;
  a5 = createSprite(290, 350, 200, 200);
  a5.addImage(aimg5);
  a5.scale = 0.045;
  a5.visible = false;
  a5.depth = 2;
  a6 = createSprite(290, 350, 200, 200);
  a6.addImage(aimg6);
  a6.scale = 0.045;
  a6.visible = false;
  a6.depth = 2;
  a7 = createSprite(290, 350, 200, 200);
  a7.addImage(aimg7);
  a7.scale = 0.045;
  a7.visible = false;
  a7.depth = 2;
  a8 = createSprite(290, 350, 200, 200);
  a8.addImage(aimg8);
  a8.scale = 0.045;
  a8.visible = false;
  a8.depth = 2;
  a9 = createSprite(290, 350, 200, 200);
  a9.addImage(aimg9);
  a9.scale = 0.045;
  a9.visible = false;
  a9.depth = 2;
  a10 = createSprite(290, 350, 200, 200);
  a10.addImage(aimg10);
  a10.scale = 0.045;
  a10.visible = false;
  a10.depth = 2;
  close = createSprite(425, 280, 200, 200);
  close.addImage(closeimg);
  close.scale = 0.15;
  close.visible = false;
  close.depth = 10;
}



function draw(){
if(hide === false){
  icon.visible = true;
} else if (hide === true){
  icon.visible = false;
}

  if(frameCount%600 === 0){
    rand = Math.round(random(1, 10));
      a1.visible = false;
  a2.visible = false;
  a3.visible = false;
  a4.visible = false;
  a5.visible = false;
  a6.visible = false;
  a7.visible = false;
  a8.visible = false;
  a9.visible = false;
  a10.visible = false;
  a1.depth = 2;
  a2.depth = 2;
  a3.depth = 2;
  a4.depth = 2;
  a5.depth = 2;
  a6.depth = 2;
  a7.depth = 2;
  a8.depth = 2;
  a9.depth = 2;
  a10.depth = 2;
  close.visible = false;
  allowance = "no";
    if(rand===1){
a1.visible = true;
a1.depth = 3;
close.visible = true;
    } else if (rand === 2){
a2.visible = true;
a2.depth = 3;
close.visible = true;
    }  else if (rand === 3){
            a3.visible = true;
            a3.depth = 3;
close.visible = true;
                } else if (rand === 4){
                  a4.visible = true;
                  a4.depth = 3;
close.visible = true;
                      } else if (rand === 5){
                        a5.visible = true;
                        a5.depth = 3;
close.visible = true;
                            } else if (rand === 6){
                              a6.visible = true;
                              a6.depth = 3;
close.visible = true;
                                  } else if (rand ===7){
                                    a7.visible = true;
                                    a7.depth = 3;
close.visible = true;
                                        } else if (rand === 8){
                                          a8.visible = true;
                                          a8.depth = 3;
close.visible = true;
                                              } else if (rand === 9){
                                                a9.visible = true;
                                                a9.depth = 3;
close.visible = true;
                                                    }else if (rand === 10){
                                                      a10.visible = true;
                                                      a10.depth = 3;
close.visible = true;
                                                          }
  }

  if (mousePressedOver(close)) {
      a1.visible = false;
  a2.visible = false;
  a3.visible = false;
  a4.visible = false;
  a5.visible = false;
  a6.visible = false;
  a7.visible = false;
  a8.visible = false;
  a9.visible = false;
  a10.visible = false;
  a1.depth = 2;
  a2.depth = 2;
  a3.depth = 2;
  a4.depth = 2;
  a5.depth = 2;
  a6.depth = 2;
  a7.depth = 2;
  a8.depth = 2;
  a9.depth = 2;
  a10.depth = 2;
  close.visible = false;
  }
  drawSprites();
}