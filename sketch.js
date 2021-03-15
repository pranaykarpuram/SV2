var database;
var firstName, lastName, age, phoneNumber, address;
var state = "login";
var login, signin, dashboard, bsa, calendar, data,error;
var username, correctUsername, correctPassword, password;
var name, number, address, mail, age;
//var hour,minute,second;
var dayIndex = 1;
var bg1, bg2,bg3,bg4,bg5;

function preload(){
  bg1 = loadImage("images/login.png");
  bg2 = loadImage("images/dashboard.png");
  bg3 = loadImage("images/Labs.png");
  bg4 = loadImage("images/bsa.png");
  bg5 = loadImage("images/tablets.png");
}
function setup() {
  database = firebase.database();
  login = new Login();
  signin = new Signin();
  data = new Database();
  dashboard = new Dashboard();
  error = new Error();
  bsa = new BSA();
  labs = new Labs();
  createCanvas(windowWidth,windowHeight);
  console.log(width, height);

}

function draw() {

  //let h = hour();
  //let m = minute();
  //let s = second();
  //let mi = millis();
  //console.log(h);

  //if(h === 0&&m === 0&&s === 0/*&&mi>0&&mi<999*/){
  //  dayIndex = dayIndex+1;
  //}

  //console.log(dayIndex);
  console.log(correctUsername);
  if(state==="login"){
    background(bg1);
    login.display();
    signin.hide();
  }
  else{
    login.hide();
  }

  if(state==="signin"){
    background(bg1);
    signin.display();
  }
  else{
    signin.hide();
  }

  if(state === "dashboard"){
    background(bg2);
    dashboard.display();
  }
  else{
    dashboard.hide();
  }

  if(state === "error"){
    background(bg1);
    error.display();
  }
  else{
    error.hide();
  }

  if(state === "BSA"){
    background(bg4);
    bsa.display();    
  }
  else{
    bsa.hide();
  }

  if(state === "counts"){
    background(bg3);
    labs.display();
  }
  else{
    labs.hide();
  }

  text("x:" +mouseX,mouseX,mouseY);
  text("y:" +mouseY,mouseX+30,mouseY);  
  drawSprites();
}
//Create checkbox
/*  async function getTime(){
  var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
  var responseJson = await response.json();
  var dt = responseJson.datetime;
  hour = dt.slice(11,13);
  minute = dt.slice(14,16);
  second = dt.slice(17,19);
  console.log(responseJson); 
}*/
