class Form {

  constructor() {
    this.title = createElement('h2');
    this.btn_settings = createButton("Settings");
    this.btn_login = createButton("Log In");
    this.btn_logout = createButton("Log Out");
    this.btn_intro = createButton("My Experiences With Social Media");
    this.btn_rate = createButton("Rate This App");
    this.btn_education = createButton("Seek/Provide Education");
    this.btn_socialmedia = createButton("Social Media");
    this.btn_environment = createButton("Talk About The Environment");
    this.btn_otherapps = createButton("More Like This");
    this.btn_aboutus = createButton("About Us");
    this.btn_go = createButton("Login");
    this.btn_fakehome = createButton("");
    this.input_firstname = createInput("").attribute("placeholder", "First Name");
    this.input_lastname = createInput("").attribute("placeholder", "Last Name");
    this.input_email = createInput("").attribute("placeholder", "Username");
    this.input_password = createInput("").attribute("placeholder", "Password");
    this.btn_home2 = createButton("Home");
    this.btn_home8 = createButton("Home");
    this.btn_home6 = createButton("Home");
    this.logintitle = createElement('h2');
    this.aboutustitle = createElement('h2');
    this.settingstitle = createElement('h2');
    this.btn_resetprogress = createButton('Reset');
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
    //form.enter();
    this.aboutustitle.html("About Us");
    this.aboutustitle.position(222, 155);
    this.aboutustitle.style('font-size', '30px');


    this.settingstitle.html("Settings");
    this.settingstitle.position(232, 155);
    this.settingstitle.style('font-size', '30px');

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

    this.btn_go.hide();
    this.btn_home2.hide();
    this.input_firstname.hide();
    this.logintitle.hide();
    this.input_lastname.hide();
    this.input_email.hide();
    this.input_password.hide();

    this.title.html("App Title");
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

    this.btn_home6.position(375, 630);
    this.btn_home6.style('border-radius', '25%');
    this.btn_home6.style('border', '2px dashed black')
    this.btn_home6.style('width', '50px');
    this.btn_home6.style('height', '25px');
    this.btn_home6.style('font-size', '7px');
    this.btn_home6.style('background-color', '#FFD580');

    this.btn_home8.position(375, 625);
    this.btn_home8.style('border-radius', '25%');
    this.btn_home8.style('border', '2px dashed black')
    this.btn_home8.style('width', '50px');
    this.btn_home8.style('height', '40px');
    this.btn_home8.style('font-size', '7px');
    this.btn_home8.style('background-color', '#FFD580');

    this.btn_resetprogress.position(292, 585);
    this.btn_resetprogress.style('width', '10%');
    this.btn_resetprogress.style('height', '4.5%')
    this.btn_resetprogress.style('font-size', '7px');

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

          this.btn_settings.mousePressed(()=>{
            form.enter();
            this.btn_resetprogress.show();
            this.settingstitle.show();
            this.btn_home6.show();
            hide4 = false;
                });

                
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
