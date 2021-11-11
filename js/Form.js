class Form {

  constructor() {
    this.title = createElement('h2');
    this.btn_settings = createButton("Settings");
    this.btn_login = createButton("Log In");
    this.btn_logout = createButton("Log Out");
    this.btn_intro = createButton("Social Media Experiences");
    this.btn_rate = createButton("Rate This App");
    this.btn_education = createButton("Provide/Seek Education");
    this.btn_socialmedia = createButton("Social Media");
    this.btn_environment = createButton("Spread Environmental Awareness");
    this.btn_otherapps = createButton("You May Also Like");
    this.educationtitle = createElement('h2');
    this.btn_aboutus = createButton("About Us");
    this.btn_go = createButton("Login");
    this.btn_fakehome = createButton("");
    this.input_firstname = createInput("").attribute("placeholder", "First Name");
    this.input_lastname = createInput("").attribute("placeholder", "Last Name");
    this.input_email = createInput("").attribute("placeholder", "Username");
    this.input_password = createInput("").attribute("placeholder", "Password");
    this.btn_home2 = createButton("Home");
    this.btn_home4 = createButton("Home");
    this.btn_home8 = createButton("Home");
    this.btn_home6 = createButton("Home");
    this.logintitle = createElement('h2');
    this.aboutustitle = createElement('h2');
    this.environmenttitle = createElement('h2');
    this.feelingdescription = createElement('h2');
    this.environmentalissuedescription1 = createElement('h2');
    this.environmentalissuedescription2 = createElement('h2');
    this.ratetitle = createElement('h2');
    this.settingstitle = createElement('h2');
    this.btn_resetprogress = createButton('Reset');
    this.youmayliketitle = createElement('h2');
    this.similartothistitle = createElement('h2');
    this.madebycreator = createElement('h2');
    this.btn_home1 = createButton('Home');
    this.input_environment = createElement("textarea");
    this.socialmediatitle = createElement('h2');
    this.environmentaldescription = createElement('h2');
    this.feedbackdescription = createElement('h2');
    this.experiencedescription = createElement('h2');
    this.input_chat = createInput("").attribute("placeholder", "Post Something");
    this.btn_send = createButton("Send");
    this.btn_home5 = createButton("Home");
    this.btn_submitfeedback = createButton('Submit Feedback');
    this.btn_submitexperiences = createButton('Submit Experiences');
    this.btn_submitenvironment = createButton('Submit');
    this.input_feedback = createElement("textarea");
    this.input_experiences = createElement("textarea");
    this.experiencetitle = createElement('h2');
    this.btn_home3 = createButton("Home");
    this.btn_home9 = createButton("Home");
    this.btn_provideeducation = createButton("Provide Education");
    this.btn_seekeducation = createButton("Seek Education");
    this.provideeducationtitle //stopped
  }
  hide(){
    this.btn_intro.show();
    this.btn_education.show();
    this.btn_environment.show();
    this.btn_otherapps.show();
    this.btn_rate.show();
    this.btn_socialmedia.show();
    this.title.show();
    this.btn_go.hide();
    this.btn_home2.hide();
    this.input_firstname.hide();
    this.logintitle.hide();
    this.input_lastname.hide();
    this.input_email.hide();
    this.input_password.hide();
    hide = false;  
  }
  hidefunc2(){
this.input_feedback.hide();
this.ratetitle.hide();
this.btn_submitfeedback.hide();
this.feedbackdescription.hide();
this.btn_home4.hide();
hide7 = true;
  }
  hidefunc3(){
    this.input_experiences.hide();
    this.experiencedescription.hide();
    this.btn_home3.hide();
    this.experiencetitle.hide();
    this.feelingdescription.hide();
    this.btn_submitexperiences.hide();
    hide8 = true;
      }
      hidefunc4(){
        this.input_environment.hide();
        this.environmenttitle.hide();
        this.environmentaldescription.hide();
        this.environmentalissuedescription1.hide();
        this.environmentalissuedescription2.hide();
        this.btn_home9.hide();
        this.btn_submitenvironment.hide();
        hide9 = true;
          }
  enter() {
    hide = true;
    this.btn_intro.hide();
    this.btn_education.hide();
    this.btn_environment.hide();
    this.btn_otherapps.hide();
    this.btn_rate.hide();
    this.btn_socialmedia.hide();
    this.title.hide();
  }
  show() {
    hide = false;
    this.btn_intro.show();
    this.btn_education.show();
    this.btn_environment.show();
    this.btn_otherapps.show();
    this.btn_rate.show();
    this.btn_socialmedia.show();
    this.title.show();
  }
  display(){
   form.enter();
   this.input_feedback.hide();
this.ratetitle.hide();
this.btn_submitfeedback.hide();
this.feedbackdescription.hide();
this.btn_home4.hide();
hide7 = true;

this.input_experiences.hide();
this.experiencedescription.hide();
this.btn_home3.hide();
this.experiencetitle.hide();
this.feelingdescription.hide();
this.btn_submitexperiences.hide();
hide8 = true;

this.input_environment.hide();
this.environmenttitle.hide();
this.environmentaldescription.hide();
this.environmentalissuedescription1.hide();
this.environmentalissuedescription2.hide();
this.btn_home9.hide();
this.btn_submitenvironment.hide();
hide9 = true;


    this.aboutustitle.html("About Us");
    this.aboutustitle.position(222, 155);
    this.aboutustitle.style('font-size', '30px');

    this.educationtitle.html("Provide/Seek Education");
    this.educationtitle.position(137, 155);
    this.educationtitle.style('font-size', '28px');

    this.btn_provideeducation.position(155, 430);
    this.btn_provideeducation.style('width', '270px');
    this.btn_provideeducation.style('height', '90px');

    this.btn_seekeducation.position(155, 530);
    this.btn_seekeducation.style('width', '270px');
    this.btn_seekeducation.style('height', '90px');

    this.environmenttitle.html("Spread Environmental Awareness");
    this.environmenttitle.position(132, 155);
    this.environmenttitle.style('font-size', '18px');

    this.feelingdescription.html("How are you feeling today?");
    this.feelingdescription.position(180, 215);
    this.feelingdescription.style('font-size', '15px');
    this.feelingdescription.style('color', 'black');

    this.environmentaldescription.html("Describe issue's environmental impact");
    this.environmentaldescription.position(136, 460);
    this.environmentaldescription.style('font-size', '15px');
    this.environmentaldescription.style('color', 'black');

    this.feedbackdescription.html("Share your experiences and feedback");
    this.feedbackdescription.position(162, 420);
    this.feedbackdescription.style('font-size', '15px');
    this.feedbackdescription.style('color', 'black');

    this.experiencedescription.html("Share your social media experiences (if any)");
    this.experiencedescription.position(142, 490);
    this.experiencedescription.style('font-size', '15px');
    this.experiencedescription.style('color', 'black');

    this.environmentalissuedescription1.html("Select an environmental issue");
    this.environmentalissuedescription1.position(165, 197);
    this.environmentalissuedescription1.style('font-size', '15px');
    this.environmentalissuedescription1.style('color', 'black');

    this.environmentalissuedescription2.html("to bring awareness to.");
    this.environmentalissuedescription2.position(190, 217);
    this.environmentalissuedescription2.style('font-size', '15px');
    this.environmentalissuedescription2.style('color', 'black');

    this.experiencetitle.html("Social Media Experiences");
    this.experiencetitle.position(150, 170);
    this.experiencetitle.style('font-size', '21px');

    this.input_chat.position(135, 570);
    this.btn_send.position(350, 567.5);
    this.btn_send.style('width', '90px');
    this.btn_send.style('font-size', '13px');
    this.btn_send.style('height', '40px')

    this.input_feedback.position(160, 457);
    this.input_feedback.style('width', '245px');
    this.input_feedback.style('height', '110px')

    this.input_environment.position(160, 500);
    this.input_environment.style('width', '245px');
    this.input_environment.style('height', '100px')

    this.input_experiences.position(160, 525);
    this.input_experiences.style('width', '245px');
    this.input_experiences.style('height', '60px')

    this.youmayliketitle.html("You May Also Like");
    this.youmayliketitle.position(145, 155);
    this.youmayliketitle.style('font-size', '30px');

    this.socialmediatitle.html("Social Media");
    this.socialmediatitle.position(197, 155);
    this.socialmediatitle.style('font-size', '30px');

    this.similartothistitle.html("Similar To This");
    this.similartothistitle.position(210, 215);
    this.similartothistitle.style('font-size', '20px');
    this.similartothistitle.style('color', 'red');

    this.madebycreator.html("By The Same Creator");
    this.madebycreator.position(190, 485);
    this.madebycreator.style('font-size', '20px');
    this.madebycreator.style('color', 'red');

    this.similartothistitle.style('color', 'red');

    this.settingstitle.html("Settings");
    this.settingstitle.position(232, 155);
    this.settingstitle.style('font-size', '30px');

    this.ratetitle.html("Rate This App");
    this.ratetitle.position(192, 155);
    this.ratetitle.style('font-size', '30px');

    this.btn_home1.hide();
    this.youmayliketitle.hide();
    this.similartothistitle.hide();
    this.madebycreator.hide();

    hide1 = true;
    hide2 = true;
    hide3 = true;
    this.aboutustitle.hide();
    this.btn_home8.hide();

    this.input_firstname.position(180, 220);
    this.input_firstname.style('width', '100px');
    this.input_lastname.position(300, 220);
    this.input_lastname.style('width', '100px');
    this.input_email.position(180, 440);
    this.input_email.style('width', '220px');
    this.input_password.position(180, 510);
    this.input_password.style('width', '220px');
    this.btn_go.position(205, 580);
    this.btn_logout.hide();
    this.btn_submitfeedback.position(195, 583);
    this.btn_submitfeedback.style('font-size', '12px');
    this.btn_submitfeedback.style('width', '175px');
    this.btn_submitfeedback.style('height', '50px');

    this.btn_submitenvironment.position(195, 614);
    this.btn_submitenvironment.style('font-size', '12px');
    this.btn_submitenvironment.style('width', '175px');
    this.btn_submitenvironment.style('height', '50px');

    this.btn_submitexperiences.position(195, 599);
    this.btn_submitexperiences.style('font-size', '12px');
    this.btn_submitexperiences.style('width', '175px');
    this.btn_submitexperiences.style('height', '50px');

    this.btn_go.hide();
    this.btn_home2.hide();
    this.input_firstname.hide();
    this.logintitle.hide();
    this.input_lastname.hide();
    this.input_email.hide();
    this.input_password.hide();

    this.title.html("Together");
    this.title.position(195, 140);
    this.logintitle.html("Log In");
    this.logintitle.position(242, 145);
    this.logintitle.style('font-size', '30px');
    this.btn_settings.position(130, 130);
    this.btn_settings.style('background-color', 'lightgray');
    this.btn_settings.style('border-radius', 0);
    this.btn_settings.style('border', '2px solid');
    this.btn_settings.style('width', '100px');
    this.btn_settings.style('height', '30px');
    this.btn_settings.style('font-size', '7px');

    this.btn_login.position(345, 130);
    this.btn_login.style('background-color', 'lightgray');
    this.btn_login.style('border-radius', 0);
    this.btn_login.style('border', '2px solid');
    this.btn_login.style('width', '100px');
    this.btn_login.style('height', '30px');
    this.btn_login.style('font-size', '7px');

    this.btn_home2.position(375, 615);
    this.btn_home2.style('border-radius', '25%');
    this.btn_home2.style('border', '2px dashed black')
    this.btn_home2.style('width', '50px');
    this.btn_home2.style('height', '50px');
    this.btn_home2.style('font-size', '7px');
    this.btn_home2.style('background-color', '#FFD580');

    this.btn_home1.position(375, 615);
    this.btn_home1.style('border-radius', '25%');
    this.btn_home1.style('border', '2px dashed black')
    this.btn_home1.style('width', '50px');
    this.btn_home1.style('height', '50px');
    this.btn_home1.style('font-size', '7px');
    this.btn_home1.style('background-color', '#FFD580');

    this.btn_home6.position(375, 630);
    this.btn_home6.style('border-radius', '25%');
    this.btn_home6.style('border', '2px dashed black')
    this.btn_home6.style('width', '50px');
    this.btn_home6.style('height', '25px');
    this.btn_home6.style('font-size', '7px');
    this.btn_home6.style('background-color', '#FFD580');

    this.btn_home4.position(375, 630);
    this.btn_home4.style('border-radius', '25%');
    this.btn_home4.style('border', '2px dashed black')
    this.btn_home4.style('width', '50px');
    this.btn_home4.style('height', '25px');
    this.btn_home4.style('font-size', '7px');
    this.btn_home4.style('background-color', '#FFD580');

    this.btn_home3.position(375, 630);
    this.btn_home3.style('border-radius', '25%');
    this.btn_home3.style('border', '2px dashed black')
    this.btn_home3.style('width', '50px');
    this.btn_home3.style('height', '25px');
    this.btn_home3.style('font-size', '7px');
    this.btn_home3.style('background-color', '#FFD580');

    this.btn_home9.position(375, 630);
    this.btn_home9.style('border-radius', '25%');
    this.btn_home9.style('border', '2px dashed black')
    this.btn_home9.style('width', '50px');
    this.btn_home9.style('height', '25px');
    this.btn_home9.style('font-size', '7px');
    this.btn_home9.style('background-color', '#FFD580');

    this.btn_home8.position(375, 625);
    this.btn_home8.style('border-radius', '25%');
    this.btn_home8.style('border', '2px dashed black')
    this.btn_home8.style('width', '50px');
    this.btn_home8.style('height', '40px');
    this.btn_home8.style('font-size', '7px');
    this.btn_home8.style('background-color', '#FFD580');

    this.btn_home5.position(370, 620);
    this.btn_home5.style('border-radius', '25%');
    this.btn_home5.style('border', '2px dashed black')
    this.btn_home5.style('width', '50px');
    this.btn_home5.style('height', '45px');
    this.btn_home5.style('font-size', '8px');
    this.btn_home5.style('background-color', '#FFD580');

    this.btn_resetprogress.position(292, 585);
    this.btn_resetprogress.style('width', '150px');
    this.btn_resetprogress.style('height', '35px')
    this.btn_resetprogress.style('font-size', '10px');

    this.btn_logout.position(345, 130);
    this.btn_logout.style('background-color', 'lightgray');
    this.btn_logout.style('border-radius', 0);
    this.btn_logout.style('border', '2px solid');
    this.btn_logout.style('width', '100px');
    this.btn_logout.style('height', '30px');
    this.btn_logout.style('font-size', '7px');

    this.btn_intro.position(152, 485);
    this.btn_intro.style('height', '56px');
    this.btn_intro.style('width', '130px');
    this.btn_intro.style('font-size', '8px');
    
    this.btn_education.position(152, 545);
    this.btn_education.style('height', '56px');
    this.btn_education.style('width', '130px');
    this.btn_education.style('font-size', '8px');
    
    this.btn_environment.position(152, 605);
    this.btn_environment.style('height', '56px');
    this.btn_environment.style('width', '130px');
    this.btn_environment.style('font-size', '8px');

    this.btn_socialmedia.position(293, 485);
    this.btn_socialmedia.style('height', '56px');
    this.btn_socialmedia.style('width', '130px');
    this.btn_socialmedia.style('font-size', '8px');

    this.btn_otherapps.position(293, 605);
    this.btn_otherapps.style('height', '56px');
    this.btn_otherapps.style('width', '130px');
    this.btn_otherapps.style('font-size', '8px');

    this.btn_fakehome.position(255, 715);
        this.btn_fakehome.style('background-color', '#A088DB');
        this.btn_fakehome.style('height', '56px');
        this.btn_fakehome.style('width', '56px');
        this.btn_fakehome.style('border-radius', '100%');


    this.btn_rate.position(293, 545);
    this.btn_rate.style('height', '56px');
    this.btn_rate.style('width', '130px');
    this.btn_rate.style('font-size', '8px');

    this.btn_resetprogress.hide();
    this.settingstitle.hide();
    this.btn_home6.hide();

    this.btn_aboutus.position(237, 130);
    this.btn_aboutus.style('background-color', 'lightgray');
    this.btn_aboutus.style('border-radius', 0);
    this.btn_aboutus.style('border', '2px solid');
    this.btn_aboutus.style('width', '100px');
    this.btn_aboutus.style('height', '30px');
    this.btn_aboutus.style('font-size', '7px');

    this.btn_home2.mousePressed(()=>{
      this.btn_intro.show();
      this.btn_education.show();
      this.btn_environment.show();
      this.btn_otherapps.show();
      this.btn_rate.show();
      this.btn_socialmedia.show();
      this.title.show();
      this.btn_go.hide();
      this.btn_home2.hide();
      this.input_firstname.hide();
      this.logintitle.hide();
      this.input_lastname.hide();
      this.input_email.hide();
      this.input_password.hide();
      hide = false;  
          });

          this.btn_home1.mousePressed(()=>{
            form.show();
            this.btn_home1.hide();
            this.youmayliketitle.hide();
            this.similartothistitle.hide();
            this.madebycreator.hide();
            hide5 = true;
                });

                this.btn_provideeducation.mousePressed(()=>{
                  this.btn_provideeducation.hide();
                  this.btn_seekeducation.hide();
                  this.educationtitle.hide();
                      });

                this.btn_environment.mousePressed(()=>{
                  form.enter();
                this.input_environment.show();
this.environmenttitle.show();
this.environmentaldescription.show();
this.environmentalissuedescription1.show();
this.environmentalissuedescription2.show();
this.btn_home9.show();
this.btn_submitenvironment.show();
hide9 = false;
});

                this.btn_intro.mousePressed(()=>{
                  form.enter();
                this.input_experiences.show();
                this.experiencedescription.show();
this.btn_home3.show();
this.experiencetitle.show();
this.feelingdescription.show();
this.btn_submitexperiences.show();
hide8 = false;
});
                this.btn_otherapps.mousePressed(()=>{
                  form.enter();
                  this.btn_home1.show();
                  this.youmayliketitle.show();
                  this.similartothistitle.show();
                  this.madebycreator.show();
                  hide5 = false;
                      });

                      this.btn_send.mousePressed(()=>{
                        if(this.input_chat.value().length>=1 && this.input_chat.value()!==""){
                          if(CM1!==""&&CM2!==""&&CM3!==""&&CM4!==""&&CM5!==""&&CM6!==""){
                              CM1 = CM2;
                              CM2 = CM3;
                              CM3 = CM4;
                              CM4 = CM5;
                              CM5 = CM6;
                              CM6 = name + ": "+this.input_chat.value();
                              Player.updateMessage1(CM1);
                              Player.updateMessage2(CM2);
                              Player.updateMessage3(CM3);
                              Player.updateMessage4(CM4);
                              Player.updateMessage5(CM5);
                              Player.updateMessage6(CM6);
                          }else{
                            if(CM1 ===""){
                      CM1 = name + ": "+this.input_chat.value();
                    Player.updateMessage1(CM1);
                    } else if(CM2 ===""&&CM1!==""){
                      CM2 = name + ": "+this.input_chat.value();
                    Player.updateMessage2(CM2);
                    }else if(CM3 ===""&&CM2!==""&&CM1!==""){
                      CM3 = name + ": "+this.input_chat.value();
                    Player.updateMessage3(CM3);
                    }else if(CM4 ===""&&CM3!==""&&CM2!==""&&CM1!==""){
                      CM4 = name + ": "+this.input_chat.value();
                    Player.updateMessage4(CM4);
                    }else if(CM5 ===""&&CM4!==""&&CM3!==""&&CM2!==""&&CM1!==""){
                      CM5 = name + ": "+this.input_chat.value();
                    Player.updateMessage5(CM5);
                    }else if(CM6 ===""&&CM5 !==""&&CM4!==""&&CM3!==""&&CM2!==""&&CM1!==""){
                      CM6 = name + ": "+this.input_chat.value();
                      Player.updateMessage6(CM6);
                      }
                  }
                        }
                      });
                  

          this.btn_settings.mousePressed(()=>{
            form.enter();
            this.btn_resetprogress.show();
            this.settingstitle.show();
            this.btn_home6.show();
            hide4 = false;
                });

                this.btn_submitenvironment.mousePressed(()=>{
                  if(this.input_environment.value().length<1 || this.input_environment.value()===""){
                    swal({
                      confirmButtonColor: '#8CD4F5', title: `Unsuccessful Submission`,
                      text: 'Failed submitting your environmental awareness message. Please fill out all inputs.',
                      type: "error",
                      showConfirmButton: false,
                      timer: 4000
                    }
                      )
                  } else if(this.input_environment.value()<=0||this.input_environment.value()>=0){
                  swal({
                    confirmButtonColor: '#8CD4F5', title: `Unsuccessful Submission`,
                    text: 'Failed submitting your environmental awareness message. Please fill out all inputs with accurate information.',
                    type: "error",
                    showConfirmButton: false,
                    timer: 4000
                  }
                    )
                } else if(this.input_environment.value().length>=1 && this.input_environment.value()!==""){
                  swal({
                    confirmButtonColor: '#8CD4F5', title: `Successfull Submission`,
                    text: 'You have successfully submitted your environmental awareness message.',
                    type: "success",
                    showConfirmButton: true,
                    confirmButtonText: "Home"
                  },
                  function(isConfirm) {
                    if (isConfirm) {
                      form.show();
                      form.hidefunc4();
                    }
                  }
                    )
                  
                  }
                      });

                this.btn_submitexperiences.mousePressed(()=>{
                  if(this.input_experiences.value().length<1 || this.input_experiences.value()===""){
                    swal({
                      confirmButtonColor: '#8CD4F5', title: `Unsuccessful Submission`,
                      text: 'Failed submitting your experiences. Please fill out all inputs.',
                      type: "error",
                      showConfirmButton: false,
                      timer: 4000
                    }
                      )
                  } else if(this.input_experiences.value()<=0||this.input_experiences.value()>=0){
                  swal({
                    confirmButtonColor: '#8CD4F5', title: `Unsuccessful Submission`,
                    text: 'Failed submitting your experiences. Please fill out all inputs with accurate information.',
                    type: "error",
                    showConfirmButton: false,
                    timer: 4000
                  }
                    )
                }else if(this.input_experiences.value().length>=1 && this.input_experiences.value()!==""){
                  swal({
                    confirmButtonColor: '#8CD4F5', title: `Successfull Submission`,
                    text: 'You have successfully submitted your experiences.',
                    type: "success",
                    showConfirmButton: true,
                    confirmButtonText: "Home"
                  },
                  function(isConfirm) {
                    if (isConfirm) {
                      form.show();
                      form.hidefunc3();                    }
                  }
                    )
                  
                  }
                      });

                this.btn_submitfeedback.mousePressed(()=>{
                  if(this.input_feedback.value().length<1 || this.input_feedback.value()===""){
                    swal({
                      confirmButtonColor: '#8CD4F5', title: `Unsuccessful Submission`,
                      text: 'Failed submitting your review. Please fill out all inputs.',
                      type: "error",
                      showConfirmButton: false,
                      timer: 4000
                    }
                      )
                  } else if(this.input_feedback.value()<=0||this.input_feedback.value()>=0){
                  swal({
                    confirmButtonColor: '#8CD4F5', title: `Unsuccessful Submission`,
                    text: 'Failed submitting your review. Please fill out all inputs with accurate information.',
                    type: "error",
                    showConfirmButton: false,
                    timer: 4000
                  }
                    )
                } else if(this.input_feedback.value().length>=1 && this.input_feedback.value()!==""){
                  swal({
                    confirmButtonColor: '#8CD4F5', title: `Successfull Submission`,
                    text: 'You have successfully submitted your review.',
                    type: "success",
                    showConfirmButton: true,
                    confirmButtonText: "Home"
                  },
                  function(isConfirm) {
                    if (isConfirm) {
            form.show();
            form.hidefunc2();
                    }
                  }
                    )
                  
                  }
                      });

                      this.btn_home4.mousePressed(()=>{
                        form.show();
                        form.hidefunc2();
                            });
                            this.btn_home3.mousePressed(()=>{
                              form.show();
                              form.hidefunc3();
                                  });
                                  this.btn_home9.mousePressed(()=>{
                                  form.show();
                                  form.hidefunc4();
                                });
                            this.btn_rate.mousePressed(()=>{
                              form.enter();
                              this.input_feedback.show();
                              this.ratetitle.show();
                              this.btn_submitfeedback.show();
                              this.feedbackdescription.show();
                              this.btn_home4.show();
                              hide7 = false;                                  });

         this.btn_home6.mousePressed(()=>{
            form.show();
            this.btn_resetprogress.hide();
            this.settingstitle.hide();
            this.btn_home6.hide();
            hide4 = true;
                });

          this.btn_aboutus.mousePressed(()=>{
            form.enter();
            hide1 = false;
            hide2 = false;
            hide3 = false;
            this.aboutustitle.show();
            this.btn_home8.show();
                });

          this.btn_home8.mousePressed(()=>{
            this.btn_intro.show();
            this.btn_education.show();
            this.btn_environment.show();
            this.btn_otherapps.show();
            this.btn_rate.show();
            this.btn_socialmedia.show();
            this.title.show();
            this.btn_home8.hide();
            this.aboutustitle.hide();
            hide = false;  
            hide1 = true;
            hide2 = true;
            hide3 = true;
                });

                hide6 = true;
                this.socialmediatitle.hide();
                this.input_chat.hide();
                this.btn_send.hide();
                this.btn_home5.hide();

                this.btn_home5.mousePressed(()=>{
                  hide6 = true;
                  this.socialmediatitle.hide();
                  this.input_chat.hide();
                  this.btn_send.hide();
                  this.btn_intro.show();
                  this.btn_education.show();
                  this.btn_environment.show();
                  this.btn_otherapps.show();
                  this.btn_rate.show();
                  this.btn_socialmedia.show();
                  this.title.show();
                  this.btn_home5.hide();
                  hide = false;  
                      });
                
                      this.btn_socialmedia.mousePressed(()=>{
                        hide6 = false;
                        this.socialmediatitle.show();
                        this.input_chat.show();
                        this.btn_send.show();
                        this.btn_intro.hide();
                        this.btn_education.hide();
                        this.btn_environment.hide();
                        this.btn_otherapps.hide();
                        this.btn_rate.hide();
                        this.btn_socialmedia.hide();
                        this.title.hide();
                        this.btn_home5.show();
                        hide = true;  
                            });

                this.btn_resetprogress.mousePressed(()=>{
                  swal({
                    confirmButtonColor: '#8CD4F5', title: 'Are you sure you would like to reset your progress?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#8CD4F5',
                    cancelButtonColor: '#d33333',
                    confirmButtonText: "Yes"},    function(isConfirm) {
                        if (isConfirm) {
                        location.reload();
                      }
                    })
                })

                this.btn_fakehome.mousePressed(()=>{
                  swal({
                    confirmButtonColor: '#8CD4F5', title: 'Are you sure you would like to exit this app?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#8CD4F5',
                    cancelButtonColor: '#d33333',
                    confirmButtonText: "Yes"},    function(isConfirm) {
                        if (isConfirm) {
                        location.reload();
                      }
                    })
                })

    this.btn_login.mousePressed(()=>{
this.btn_intro.hide();
this.btn_education.hide();
this.btn_environment.hide();
this.btn_otherapps.hide();
this.btn_rate.hide();
hide2 = true;
hide1 = true;
this.settingstitle.hide();
this.btn_resetprogress.hide();
hide3 = true;
hide4 = true;
this.aboutustitle.hide();
this.btn_home6.hide();
this.btn_home8.hide();
this.btn_socialmedia.hide();
this.title.hide();
this.btn_go.show();
this.btn_home2.show();
this.input_firstname.show();
this.logintitle.show();
this.input_lastname.show();
this.input_email.show();
this.input_password.show();
hide = true;
    });
    
    this.btn_aboutus.mousePressed(()=>{
      this.btn_intro.hide();
      this.btn_education.hide();
      this.btn_environment.hide();
      this.btn_otherapps.hide();
      this.btn_rate.hide();
      hide2 = false;
      hide1 = false;
      this.settingstitle.hide();
      this.btn_resetprogress.hide();
      hide3 = false;
      hide4 = true;
      this.aboutustitle.show();
      this.btn_home6.hide();
      this.btn_home8.show();
      this.btn_socialmedia.hide();
      this.title.hide();
      this.btn_go.hide();
      this.btn_home2.hide();
      this.input_firstname.hide();
      this.logintitle.hide();
      this.input_lastname.hide();
      this.input_email.hide();
      this.input_password.hide();
      hide = true;
          });
          
    this.btn_settings.mousePressed(()=>{
      this.btn_intro.hide();
      this.btn_education.hide();
      this.btn_environment.hide();
      this.btn_otherapps.hide();
      this.btn_rate.hide();
      hide2 = true;
      hide1 = true;
      this.settingstitle.show();
      this.btn_resetprogress.show();
      hide3 = true;
      hide4 = false;
      this.aboutustitle.hide();
      this.btn_home6.show();
      this.btn_home8.hide();
      this.btn_socialmedia.hide();
      this.title.hide();
      this.btn_go.hide();
      this.btn_home2.hide();
      this.input_firstname.hide();
      this.logintitle.hide();
      this.input_lastname.hide();
      this.input_email.hide();
      this.input_password.hide();
      hide = true;
          });
    this.btn_logout.mousePressed(()=>{
      this.btn_logout.hide();
      this.btn_login.show();
      name = "Anonymous";
          });
    this.btn_go.mousePressed(()=>{
    
      if(this.input_firstname.value().length<1 || this.input_firstname.value()===""||this.input_lastname.value().length<1 || this.input_lastname.value()===""||this.input_email.value().length<1 || this.input_email.value()===""||this.input_password.value().length<1 || this.input_password.value()===""){
        swal({
          confirmButtonColor: '#8CD4F5', title: `Unsuccessful Login`,
          text: 'Failed logging you in. Please fill out all inputs.',
          type: "error",
          showConfirmButton: false,
          timer: 4000
        }
          )
      } else if(this.input_firstname.value()<=0||this.input_firstname.value()>=0||this.input_lastname.value()<=0||this.input_lastname.value()>=0||this.input_email.value()<=0||this.input_email.value()>=0){
      swal({
        confirmButtonColor: '#8CD4F5', title: `Unsuccessful Login`,
        text: 'Failed logging you in. Please fill out all inputs with accurate information.',
        type: "error",
        showConfirmButton: false,
        timer: 4000
      }
        )
    } else if(this.input_firstname.value().length>=1 && this.input_firstname.value()!==""&&this.input_lastname.value().length>=1 && this.input_lastname.value()!==""&&this.input_email.value().length>=1 && this.input_email.value()!==""&&this.input_password.value().length>=1 && this.input_password.value()!==""){
      this.btn_logout.show();
      this.btn_login.hide();
      name = this.input_firstname.value() + " " + this.input_lastname.value();
      swal({
        confirmButtonColor: '#8CD4F5', title: `Successfully Logged In`,
        text: 'You are successfully logged in.',
        type: "success",
        showConfirmButton: true,
        confirmButtonText: "Home"
      },
      function(isConfirm) {
        if (isConfirm) {
form.hide();
        }
      }
        )
      
      }
      });
  }

}
