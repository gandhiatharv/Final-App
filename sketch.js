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
var hide1 = false;
var hide2 = false;
var hide3 = false;
var hide4 = true;
var hide5 = true;
var hide6 = true;
var selected = false;
var hide7 = true;
var hide8 = true;
var hide9 = true;
var hide10 = true;
var hide11 = true;
var hide12 = true;
var hide13 = true;
var hide14 = true;
var hide15 = true;
var hide16 = true;
var hide17 = true;
var hide18 = true;
var scr = true;
var name = "Anonymous";
var loggedin = false;
var CM1, CM2, CM3, CM4, CM5, CM6;
var reported = false;
var icon1, icon2, report, reportimg;
var tries = 1;
var clicked = "nothing";
var like, dislike, likeunclicked, dislikeunclicked, likeclicked, dislikeclicked;
var aboutmetext, aboutmetextimg;
let brightness, volume, language, style, mode, earthhero, covid19bot, humanly, weatherapp, qbp, qpa, mood1, environmentalissues, capture, subjects;
var mood, moodimg, btn_home1, btn_home2, btn_home3, btn_home4, btn_home5, btn_home6, btn_home8, btn_home9, homeimg;

/*
MUST DO:
ONE COLOR SCHEME FOR APP
DECIDE IF I WANT LOGIN, SETTINGS, & ABOUT US BUTTONS ON EVERY PAGE (IF SO, DECIDE HOW I WILL HAVE BUTTONS THAT TAKE USER HOME AN BACK ON THOSE SCREENS)
center text of screens
ADD SOUNDS & ADDS TO FINAL APP
title position & font size = same
take out emoji radio and just make emojis different colors when you click them
make logggedin not true after testing
make all titles and home buttons the same font size and size and position
console log when buttons are clicked
ALIGN ELEMENTS NICELY & MAKE ALL BUTTONS SAME WIDTH & HEIGHT
MAKE BUTTON FONT SIZES BIGGER
*/

/*
OPTIONAL:
display time
code education screen and make stuff in environmental screen go through database so that people can see each other's reports
see if i want to have a camera
same border radius for all elements
when press home icon you hide everything and take it to home screen
update covid-19 bot small talk
swal animations
//when you are on one screen, you shouldn't be receiving swal notifications from another one (ex. you cannot be recieving a report message when you are on environmental screen)
NAMES CANNOT BE REPEATED
*/

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
  aboutmetextimg = loadImage("images/aboutmetext.png");
  reportimg = loadImage("images/report.png");
  likeclicked = loadImage("images/likeclicked.png");
  dislikeclicked = loadImage("images/dislikeclicked.png");
  likeunclicked = loadImage("images/like.png");
  dislikeunclicked = loadImage("images/dislike.png");
  moodimg = loadImage("images/moods.png");
  homeimg = loadImage("images/home.png");
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.start();
  iphone = createSprite(288, 430);
  iphone.addImage(iphoneImg);
  iphone.scale = 1.6;
  report = createSprite(142, 655);
  report.addImage(reportimg);
  report.scale = 0.5;
  icon = createSprite(288, 355);
  icon.addImage(iconImg);
  icon.scale = 0.45;
  icon.depth = 1;
  icon1 = createSprite(180, 210);
  icon1.addImage(iconImg);
  icon1.scale = 0.1;
  icon2 = createSprite(390, 210);
  icon2.addImage(iconImg);
  icon2.scale = 0.1;
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
  aboutmetext = createSprite(289, 532, 200, 200);
  aboutmetext.addImage(aboutmetextimg);
  aboutmetext.scale = 0.3;
  aboutmetext.depth = 10;
  brightness = createSlider(0, 10, 5, 1);
  brightness.position(265, 230);
  brightness.style('width', '110px');
  volume = createSlider(0, 100, 50, 1);
  volume.position(245, 430);
  volume.style('width', '110px');
  
  language = createSelect();
  language.position(250, 470);
  language.option('English');
  language.option('普通话');
  language.option('Español');
  language.option('Français');
  language.option('Português');
  language.option('हिंदी');
  language.option('Pусский');
  language.option('বাংলা');
  language.option('عربي');
  language.option('Nederlands');
  language.option('日本');
  language.option('ਪੰਜਾਬੀ');
  language.option('Kiswahili');
  language.option('Basa Jawa');
  language.option('Türk');
  language.option('한국인');
  language.option('తెలుగు');
  language.option('मराठी');
  language.option('اردو');
  language.option('தமிழ்');
  language.selected('English');

  environmentalissues = createSelect();
  environmentalissues.position(170, 435);
  environmentalissues.style('width', '230px');
  environmentalissues.option('Water Pollution/Contamination');
  environmentalissues.option('Soil Pollution/Contamination');
  environmentalissues.option('Wildlife Extinction');
  environmentalissues.option('Air Pollution');
  environmentalissues.option('Biological Pollution');
  environmentalissues.option('Climate Change');
  environmentalissues.option('Dam Impact');
  environmentalissues.option('Deforestation');
  environmentalissues.option('Natural Disasters');
  environmentalissues.option('Nuclear Issues');
  environmentalissues.option('Noise Pollution');
  environmentalissues.option('Waste Disposal');
  environmentalissues.option('Natural Resource Depletion');
  environmentalissues.option('Land Conservation');
  environmentalissues.option('Overpopulation');
  environmentalissues.selected('Water Pollution/Contamination');

  style = createSelect();
  style.position(250, 510);
  style.option('Basic');
  style.option('Traditional');
  style.option('Modern');
  style.option('Fancy');
  style.option('Formal');
  style.option('Decorative');
  style.option('Playful');
  style.selected('Basic');

  subjects = createSelect();
  subjects.position(170, 535);//stopped here //take age & gender
  subjects.style('width', '17em')
  subjects.option('What would you like to learn?');
  subjects.option('ELA');
  subjects.option('Math');
  subjects.option('Science');
  subjects.option('Social Studies');
  subjects.option('Speaking Languages');
  subjects.option('Computer Science');
  subjects.option('Debate');
  subjects.option('Sports');
  subjects.option('Music');
  subjects.option('Digital Design');
  subjects.option('Technology Design');
  subjects.option('Health');
  subjects.option('Art');
  subjects.option('Information Literacy');
  subjects.selected('What would you like to learn?');
  subjects.hide();

  fill("black");
  textFont("Courier");
  strokeWeight(1);
  textSize(15);
  stroke(0);
  mode = createSelect();
  mode.position(250, 550);
  mode.option('Auto');
  mode.option('Light Mode');
  mode.option('Dark Mode');

  earthhero = createA('https://play.google.com/store/apps/details?id=com.earthheroorg.earthhero&hl=en_US&gl=US', '1. Earth Hero');
  earthhero.position(240, 440);
  humanly = createA('https://play.google.com/store/apps/details?id=org.cyny.neighborly&hl=en_US&gl=US', '2. Humanly');
  humanly.position(243, 470);
  weatherapp = createA('https://appetize.io/embed/xc1w6f1krd589zhp22a0mgftyw?autoplay=false&debug=true&device=pixel4&deviceColor=black&embed=true&launchUrl=exp:%2F%2Fexp.host%2F@gandhiatharv%2Fweather-app%2B5Dto_ESyR9&orientation=portrait&scale=81&screenOnly=false&xDocMsg=true&xdocMsg=true&params=%7B%22EXDevMenuDisableAutoLaunch%22:true,%22EXKernelLaunchUrlDefaultsKey%22:%22exp:%2F%2Fexp.host%2F@gandhiatharv%2Fweather-app%2B5Dto_ESyR9%22,%22EXKernelDisableNuxDefaultsKey%22:true%7D&osVersion=10.0', '1. Weather App');
  weatherapp.position(230, 540);
  qbp = createA('https://appetize.io/embed/xc1w6f1krd589zhp22a0mgftyw?autoplay=false&debug=true&device=pixel4&deviceColor=black&embed=true&launchUrl=exp:%2F%2Fexp.host%2F@gandhiatharv%2Fquiz-buzzer-participant-app%2BsC1SaPuWpq&orientation=portrait&scale=81&screenOnly=false&xDocMsg=true&xdocMsg=true&params=%7B%22EXDevMenuDisableAutoLaunch%22:true,%22EXKernelLaunchUrlDefaultsKey%22:%22exp:%2F%2Fexp.host%2F@gandhiatharv%2Fquiz-buzzer-participant-app%2BsC1SaPuWpq%22,%22EXKernelDisableNuxDefaultsKey%22:true%7D&osVersion=10.0', '2. Quiz Buzzer Participant App');
  qbp.position(190, 570);
  qba = createA('https://appetize.io/embed/xc1w6f1krd589zhp22a0mgftyw?autoplay=false&debug=true&device=pixel4&deviceColor=black&embed=true&launchUrl=exp:%2F%2Fexp.host%2F@gandhiatharv%2Fquiz-buzzer-admin-app%2BbNoq!vVnJa&orientation=portrait&scale=81&screenOnly=false&xDocMsg=true&xdocMsg=true&params=%7B%22EXDevMenuDisableAutoLaunch%22:true,%22EXKernelLaunchUrlDefaultsKey%22:%22exp:%2F%2Fexp.host%2F@gandhiatharv%2Fquiz-buzzer-admin-app%2BbNoq!vVnJa%22,%22EXKernelDisableNuxDefaultsKey%22:true%7D&osVersion=10.0', '3. Quiz Buzzer Admin App');
  qba.position(195, 600);
  covid19bot = createA('https://bot.dialogflow.com/6599c99c-a4b1-4563-bce0-555ea9fcb8c4', '4. COVID-19 Chatbot');
  covid19bot.position(210, 630);

  like = createSprite(260, 245);
  like.addImage(likeunclicked);
  like.scale = 0.1;

  dislike = createSprite(310, 245);
  dislike.addImage(dislikeunclicked);
  dislike.scale = 0.1;

  mood = createSprite(290, 450);
  mood.addImage(moodimg);
  mood.scale = 0.3;

  mood1 = createRadio();
  mood1.option(' ');
  mood1.option('  ');
  mood1.position(80, 470);
  mood1.style('width', '500px');
  mood1.style('height', '0px');

  btn_home1 = createSprite(435, 655);
  btn_home1.addImage(homeimg);
  btn_home1.scale = 0.05;
  btn_home2 = createSprite(435, 655);
  btn_home2.addImage(homeimg);
  btn_home2.scale = 0.05;
  btn_home3 = createSprite(435, 655);
  btn_home3.addImage(homeimg);
  btn_home3.scale = 0.05;
  btn_home4 = createSprite(435, 655);
  btn_home4.addImage(homeimg);
  btn_home4.scale = 0.05;
  btn_home5 = createSprite(435, 655);
  btn_home5.addImage(homeimg);
  btn_home5.scale = 0.05;
  btn_home6 = createSprite(435, 655);
  btn_home6.addImage(homeimg);
  btn_home6.scale = 0.05;
  btn_home8 = createSprite(435, 655);
  btn_home8.addImage(homeimg);
  btn_home8.scale = 0.05;
  btn_home9 = createSprite(435, 655);
  btn_home9.addImage(homeimg);
  btn_home9.scale = 0.05;
  btn_home1.visible = false;
  btn_home2.visible = false;
  btn_home3.visible = false;
  btn_home4.visible = false;
  btn_home5.visible = false;
  btn_home6.visible = false;
  btn_home8.visible = false;
  btn_home9.visible = false;

  /*capture = createCapture(VIDEO);
  capture.hide();*/
}



function draw(){
  /*image(capture, 0, 0, width, width * capture.height / capture.width);
  filter(INVERT);*/

  if(hide11 === false){
    btn_home1.visible = true;
  } else{
    btn_home1.visible = false;
  }

  if(hide12 === false){
    btn_home2.visible = true;
  } else{
    btn_home2.visible = false;
  }

  if(hide13 === false){
    btn_home3.visible = true;
  } else{
    btn_home3.visible = false;
  }

  if(hide14 === false){
    btn_home4.visible = true;
  } else{
    btn_home4.visible = false;
  }

  if(hide15 === false){
    btn_home5.visible = true;
  } else{
    btn_home5.visible = false;
  }

  if(hide16 === false){
    btn_home6.visible = true;
  } else{
    btn_home6.visible = false;
  }

  if(hide17 === false){
    btn_home8.visible = true;
  } else{
    btn_home8.visible = false;
  }

  if(hide18 === false){
    btn_home9.visible = true;
  } else{
    btn_home9.visible = false;
  }

  if(hide8 === true){
    mood1.hide();
    mood.visible = false;
  } else if (hide8 === false){
    mood1.show();
    mood.visible = true;
  }
  if(hide9 === true){
    environmentalissues.hide();
  } else if (hide9 === false){
    environmentalissues.show();
  }
  if(mood1.value() === ' '){
    selected = true;
  } else if(mood1.value() === '  '){
    selected = true;
  }
if(hide7 === true){
  like.visible = false;
  dislike.visible = false;
} else{
  like.visible = true;
  dislike.visible = true;
}

if (mousePressedOver(btn_home1)) {
  console.log("btn_home1 pressed");
  form.func1();
}
if (mousePressedOver(btn_home2)) {
  console.log("btn_home2 pressed");
  form.func2();
}
if (mousePressedOver(btn_home3)) {
  console.log("btn_home3 pressed");
  form.func3();
}
if (mousePressedOver(btn_home4)) {
  console.log("btn_home4 pressed");
  form.func4();
}
if (mousePressedOver(btn_home5)) {
  console.log("btn_home5 pressed");
  form.func5();
}
if (mousePressedOver(btn_home6)) {
  console.log("btn_home6 pressed");
  form.func6();
}
if (mousePressedOver(btn_home8)) {
  console.log("btn_home8 pressed");
  form.func8();
}
if (mousePressedOver(btn_home9)) {
  console.log("btn_home9 pressed");
  form.func9();
}

  if(mousePressedOver(like)){
    console.log("btn_like pressed");
    like.addImage(likeclicked);
    if(clicked = "dislike"){
      dislike.addImage(dislikeunclicked);
    }
    clicked = "like";
  }

  if(mousePressedOver(dislike)){
    console.log("btn_dislike pressed");
    dislike.addImage(dislikeclicked);
    if(clicked = "like"){
      like.addImage(likeunclicked);
    }
    clicked = "dislike";
  }

if(tries === 0){
  if(frameCount%100 === 0){
    Player.updateReported(false);
    tries = 1;
  }
}

if(hide6 === true){
  report.visible = false;
} else{
  report.visible = true;
}

  game.play();
  game.unactivateReport();

  if(mousePressedOver(report)){
    console.log("btn_report pressed");
    game.activateReport();
      swal(
        {
          confirmButtonColor: '#8CD4F5', title: `Successfully Reported`,
          text: "You have successfully reported inappropriate content.",
          type:'success',
          confirmButtonText: "Ok"
        }
      );
     }

  if(hide5 === true){
    earthhero.hide();
    covid19bot.hide();
humanly.hide();
weatherapp.hide();
qbp.hide();
qba.hide();
  } else if (hide5 === false){
    earthhero.show();
    humanly.show();
    weatherapp.show();
    covid19bot.show();
    qbp.show();
    qba.show();
  }
if(hide === false){
  icon.visible = true;
} else if (hide === true){
  icon.visible = false;
}

if(hide4 === false){
volume.show();
brightness.show();
language.show();
style.show();
mode.show();
} else if (hide4 === true){
volume.hide();
brightness.hide();
language.hide();
style.hide();
mode.hide();
}

if(hide1 === false){
  aboutmetext.visible = true;
} else if (hide1 === true){
  aboutmetext.visible = false;
}

if(hide2 === false){
  icon1.visible = true;
} else if (hide2 === true){
  icon1.visible = false;
}

if(hide3 === false){
  icon2.visible = true;
} else if (hide3 === true){
  icon2.visible = false;
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
    console.log("btn_close pressed");
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
  fill("black");
  textFont("Courier");
  strokeWeight(1);
  textSize(13);
  stroke(0);
  if(hide6 === false){
  text(CM1, 150, 255);
  text(CM2, 150, 450);
  text(CM3, 150, 475);
  text(CM4, 150, 500);
  text(CM5, 150, 525);
  text(CM6, 150, 550);
  }
  textSize(15);
  if(hide4 === false){
  text("Brightness:", 150, 255);
  text(brightness.value(), 410, 255); 
  text("Volume:", 150, 455);
  text(volume.value(), 410, 455); 
  text("Language:", 150, 490);
  text("Style:", 150, 530);
  text("Mode:", 150, 570);
  text("Reset Progress:", 150, 610);
  }
  if(hide10 === false){
  text("Name:", 150, 450);
  text("Email:", 150, 470);
  text("Phone:", 150, 490);

  text("Name:", 150, 530);
  text("Email:", 150, 550);
  text("Phone:", 150, 570);

  text("Name:", 150, 610);
  text("Email:", 150, 630);
  text("Phone:", 150, 650);
  }
}