class Game {
  constructor(){}

  

  update(state){

  }

  async start(){
    form = new Form();
    player = new Player();
    form.display();

  }

  activateReport(){
    Player.updateReported(true);
  }

  unactivateReport(){
    if(tries === 1 && reported === true){
      swal(
        {
          confirmButtonColor: '#8CD4F5', title: `You Have Been Reported`,
          text: "Please be sure that your posts don't intend to harm anyone or damage anyone's self esteem.",
          type:'warning',
          confirmButtonText: "Ok"
        }
      );
    }
    tries = 0;
  }

  play(){
player.getMessage1();
player.getMessage2();
player.getMessage3();
player.getMessage4();
player.getMessage5();
player.getMessage6();
player.getReported();




drawSprites();
    }
   
}
