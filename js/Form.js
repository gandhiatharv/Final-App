class Form {

  constructor() {
    this.title = createElement('h2');
    this.btn_settings = createButton("Settings");
    this.btn_login = createButton("Log In");
    this.btn_intro = createButton("Start My Journey");
    this.btn_aboutus = createButton("About Us");
  }
  hide(){

  }
  enter() {

  }
  display(){
    this.title.html("App Title");
    this.title.position(195, 140);
    this.btn_settings.position(140, 130);
    this.btn_settings.style('background-color', 'lightgray');
    this.btn_settings.style('border-radius', 0);
    this.btn_settings.style('border', '2px solid');
    this.btn_settings.style('width', '100px');
    this.btn_settings.style('height', '30px');
    this.btn_settings.style('font-size', '10px');

    this.btn_login.position(335, 130);
    this.btn_login.style('background-color', 'lightgray');
    this.btn_login.style('border-radius', 0);
    this.btn_login.style('border', '2px solid');
    this.btn_login.style('width', '100px');
    this.btn_login.style('height', '30px');
    this.btn_login.style('font-size', '10px');

    this.btn_intro.position(135, 520);
    this.btn_intro.style('height', '100px');
    this.btn_aboutus.position(288, 520);
    this.btn_aboutus.style('height', '100px');
  }

}
