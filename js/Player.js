class Player {
  constructor(){

  }
  getMessage1(){
    database.ref('CM1').on("value", (data) => {
       
      CM1 = data.val();
    });
  }
  getMessage2(){
    database.ref('CM2').on("value", (data) => {
       
      CM2= data.val();
    });
  }
  getMessage3(){
    database.ref('CM3').on("value", (data) => {
       
      CM3 = data.val();
    });
  }
  getMessage4(){
    database.ref('CM4').on("value", (data) => {
       
      CM4 = data.val();
    });
  }
  getMessage5(){
    database.ref('CM5').on("value", (data) => {
       
      CM5 = data.val();
    });
  }
  getMessage6(){
    database.ref('CM6').on("value", (data) => {
       
      CM6 = data.val();
    });
  }
  getReported(){
    database.ref('reported').on("value", (data) => {
       
      reported = data.val();
    });
  }

  static updateReported(reportedval){
    database.ref('/').update({
      reported:reportedval
    });
  }
  static updateMessage1(chatmessage){
    database.ref('/').update({
      CM1:chatmessage
    });
  }
  static updateMessage2(chatmessage){
    database.ref('/').update({
      CM2:chatmessage
    });
  }
  static updateMessage3(chatmessage){
    database.ref('/').update({
      CM3:chatmessage
    });
  }
  static updateMessage4(chatmessage){
    database.ref('/').update({
      CM4:chatmessage
    });
  }
  static updateMessage5(chatmessage){
    database.ref('/').update({
      CM5:chatmessage
    });
  }
  static updateMessage6(chatmessage){
    database.ref('/').update({
      CM6:chatmessage
    });
  }
}
