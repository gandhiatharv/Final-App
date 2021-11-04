class Form {

  constructor() {
    this.title = createElement('h2');
    this.btn_settings = createButton("Settings");
    this.btn_login = createButton("Log In");
    this.btn_intro = createButton("My Experiences With Social Media");
    this.btn_rate = createButton("Rate This App");
    this.btn_education = createButton("Seek/Provide Education");
    this.btn_socialmedia = createButton("Social Media");
    this.btn_environment = createButton("Talk About The Environment");
    this.btn_otherapps = createButton("More Like This");
    this.btn_aboutus = createButton("About Us");
    this.btn_fakehome = createButton("");
  }
  hide(){

  }
  enter() {

  }
  display(){
    this.title.html("App Title");
    this.title.position(205, 140);
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

    this.btn_aboutus.position(237, 130);
    this.btn_aboutus.style('background-color', 'lightgray');
    this.btn_aboutus.style('border-radius', 0);
    this.btn_aboutus.style('border', '2px solid');
    this.btn_aboutus.style('width', '100px');
    this.btn_aboutus.style('height', '30px');
    this.btn_aboutus.style('font-size', '7px');
  }

}
