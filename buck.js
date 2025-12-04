//GENERAL vvvvv

const mainmeny = document.getElementById("mainmeny")


//HEALTH vvvvvv

const healthstart = document.getElementById("hidden")
const dealerhealth = document.getElementById("dealerhltdiv")
const playerhealth = document.getElementById("playerhltdiv")
const health1 = document.getElementById("playerhealth1")
const health2 = document.getElementById("playerhealth2")
const health3 = document.getElementById("playerhealth3")
const dealerhealth1 = document.getElementById("dealerhealth1")
const dealerhealth2 = document.getElementById("dealerhealth2")
const dealerhealth3 = document.getElementById("dealerhealth3")
const playername = document.getElementById("playername")
const dealername = document.getElementById("dealername")

const allphealth = [
  playername,
  health1,
  health2,
  health3,
]

const alldhealth = [
  dealername,
  dealerhealth1,
  dealerhealth2,
  dealerhealth3,
]

//BUTTONSvvvv

const start = document.getElementById("startbutton");
const quit = document.getElementById("quitbutdiv")
const givenup = document.getElementById("givenup")
const givendown = document.getElementById("givendown")
const dealerbtnchoice = document.getElementById("dealerbtnchoice")
const playerbtnchoice = document.getElementById("playerbtnchoice")

//GAME PICTURESvvvv


const pregame = document.getElementById("pregame")
const loadinggun = document.getElementById("loadinggun")
const gamechoice = document.getElementById("gamechoice")
const playerselfshot = document.getElementById("playerselfshot")
const playersdealershot = document.getElementById("playersdealershot")
const dealerselfshot = document.getElementById("dealerselfshot")
const dealersplayershot = document.getElementById("dealersplayershot")
const dealersturn = document.getElementById("dealersturn")

// vv lagde denne arrayen så jeg kan fjerne alle bildene uten å trenge og ha en line of code per pic. vv

const pics = [
  pregame,
  loadinggun,
  gamechoice,
  playerselfshot,
  playersdealershot,
  dealerselfshot,
  dealersplayershot,
  dealersturn,
];

  // const reloadpic = pics.filter(pic => pic !== loadinggun);

const buffdealer = document.getElementById("buffdealer")
const homelessdealer = document.getElementById("homelessdealer")

//BOXESvvvv

const ammocount = document.getElementById("ammocount")

const livetxt = document.getElementById("livetxt")

const blanktxt = document.getElementById("blanktxt")


//vvvv CODE STWART, vvvv

let shotnr = [];

let gamestart = false;

let playerturn = true;

playerbtnchoice.addEventListener("click", playerbtnchoicef);

dealerbtnchoice.addEventListener("click", dealerbtnchoicef);

start.addEventListener("click", playermainscreen);

// lager denne function for å ha en auto check hvor mange "shots" det er i "shotnr" array'en

function ammonr() {
console.log(`there is ${shotnr.length} shots left`);
}


//start of start

function reload() {

mainmeny.classList.add("gamestart")

console.log  ("reloading");
  
  pics.forEach(pic => pic.style.display = pic === loadinggun ? "flex" : "none")
  
 loadinggun.style.display = "flex";

    let min = 2;
    let max = 8;
  let ran = Math.floor(Math.random() * (max - 2) + min);

console.log (ran);




for(let i = 0; i < ran;i++) {
  let shot = Math.round(Math.random()  );
  shotnr.push (shot);
  console.log(shotnr[i]);
}

let live = shotnr.filter(num => num === 0).length
let blank = shotnr.filter(num => num === 1).length


ammocount.textContent = `There is ${ran} shots, with ${live} live, and ${blank} blanks`
document.body.appendChild(ammocount);

console.log(shotnr);
if (ran === 2){
  console.log ("there are 2 shots")
}
if (ran === 3){
  console.log ("there are 3 shots")
}
if (ran === 4){
  console.log ("there are 4 shots")
}
if (ran === 5){
  console.log ("there are 5 shots")
}
if (ran === 6){
  console.log ("there are 6 shots")
}
if (ran === 7){
  console.log ("there are 7 shots")
}
if (ran === 8){
  console.log ("there are 8 shots")
}

}


start.addEventListener("click", () => {
  reload()
})


  
function playermainscreen () {

  setTimeout(() => {
  gamestart = true;

console.log("blob")

//STYLE CHANGEvvvvv

pregame.style.display = "none";

//setTimeout(() => {
loadinggun.style.display = "none";

ammocount.style.display = "none";

dealerhealth.style.display = "flex";

playerhealth.style.display = "flex";

gamechoice.style.display = "flex";

dealerbtnchoice.style.display = "flex";

playerbtnchoice.style.display = "flex";


//Making a button vvvv

const quitbutton = document.createElement("button");
quitbutton.textContent = "QUIT";
quitbutton.className = "quitbutton";
document.body.appendChild(quitbutton);

quitbutton.addEventListener("click", () => {
  quit.style.display = "block";
});

  givenup.addEventListener("click", () => {
    quitbutton.remove();
    window.location.href = "index.html";

  });
  
  givendown.addEventListener("click", () => {
    quit.style.display = "none"

  });




  

   
}, 5000); //end of start
};

//   vvv  return til main player screen for start av player sin runde etter self blank shot eller dealer er ferdig vvv

function playerreturn() {
  gamechoice.style.display = "flex";

loadinggun.style.display = "none";

dealerbtnchoice.style.display = "flex";

playerbtnchoice.style.display = "flex";

playerselfshot.style.display = "none";

playersdealershot.style.display = "none";

dealerselfshot.style.display = "none";

dealersplayershot.style.display = "none";

livetxt.style.display = "none";

blanktxt.style.display = "none";

}




let healthbar = [health3, health2, health1];

let dealerhealthbar = [dealerhealth3, dealerhealth2, dealerhealth1];

console.log (healthbar);
console.log (dealerhealthbar);

//   start dealerbtnchoice

function dealerbtnchoicef() {
  if (!playerturn | !gamestart) return;

gamechoice.style.display = "none";

dealerbtnchoice.style.display = "none";

playerbtnchoice.style.display = "none";

playersdealershot.style.display = "flex";

if (shotnr[0] === 0){
  dealerhealthbar [0].style.display = "none";
  console.log ("Player's turn:dealer took dmg");
  dealerhealthbar.splice(0,1);
  playerturn = false;
  livetxt.style.display = "flex";
  setTimeout(() => {
    dealersgameturn()
  }, 3000);

}

else {
  console.log ("Player's turn:It was a blank");
  playerturn = false;
  blanktxt.style.display = "flex";
  setTimeout(() => {
    dealersgameturn()
  }, 3000);
}

turnupdate();

shotnr.splice(0,1);

ammonr()

if (shotnr.length === 0){

  reload()

}
};    // << end of dealerbtnchoice


 // vv start of playerbtnchoice vv

function playerbtnchoicef() {
  if (!playerturn | !gamestart) return;

  gamechoice.style.display = "none";

dealerbtnchoice.style.display = "none";

playerbtnchoice.style.display = "none";

  playerselfshot.style.display = "flex";

  if (shotnr[0] === 0) {
    healthbar [0].style.display = "none";
    console.log ("Player's turn:you took dmg");
    livetxt.style.display = "flex"
    healthbar.splice(0,1);
    console.log (healthbar);
    playerturn = false
    setTimeout(() => {
  
      dealersgameturn()

    }, 3000);
  }

  else {
    console.log ("Player's turn:it was blank")
    blanktxt.style.display = "flex"
      playerturn = true;
    setTimeout(() => {

       playerreturn();
    }, 3000);
  }

  ammonr()

  shotnr.splice(0,1);

  console.log(shotnr);

  if (shotnr.length === 0){
  reload()
  }
}    // <- end of playerbtnchoice

      // <- end of function for player 



//    vv start of dealers turn,  vv

function dealersgameturn() {

if (playerturn | !gamestart) return;

if (healthbar.length === 0 | dealerhealthbar.length === 0) return;

  playersdealershot.style.display = "none";

  playerselfshot.style.display = "none"

  gamechoice.style.display = "none";

 dealersturn.style.display = "flex";


  dealersturn.style.display = "none";

  dealerselfshot.style.display = "none";

  livetxt.style.display = "none";

blanktxt.style.display = "none";


// Jeg bruker math.random for at den skal velge hvem Dealer skal skyte, den går fra 0 - 1 så den jobber i dessimaler hvis den blir mindre enn 0.7 så skyter han Player

if (Math.random() < 0.7) {

  dealersplayershot.style.display = "flex";

  setTimeout(() => {
    
  

  if (shotnr[0] === 0) {
    healthbar [0].style.display = "none";
    console.log ("Dealer's turn:player took dmg");
    livetxt.style.display = "flex";
    healthbar.splice (0,1);
        setTimeout(() => {
    gamechoice.style.display = "flex";
    playerturn = true;
       playerreturn();
    }, 3000);
  }

  else {
    console.log ("Dealer's turn:It was a blank. Lucky...") 
    blanktxt.style.display = "flex";
        setTimeout(() => {
    gamechoice.style.display = "flex";
   playerturn = true;
       playerreturn();
    }, 3000);
  }
  
  shotnr.splice (0,1);
}, 2000);
}

else {

 

  dealerselfshot.style.display = "flex";

 setTimeout(() => {

  if (shotnr[0] === 0) {
    dealerhealthbar [0].style.display = "none";
    console.log ("Dealer's turn:dealer took dmg");
    dealerhealthbar.splice (0,1);
    livetxt.style.display = "flex";
    setTimeout(() => {
    gamechoice.style.display = "flex";
   playerturn = true;
       playerreturn();
    }, 3000);
  }

  else {
    console.log ("Dealer's turn:it was a blank");
    blanktxt.style.display = "flex";
    playerturn = false
    setTimeout(() => {
    dealersgameturn()
    }, 3000);
  }

  shotnr.splice (0,1);
}, 2000);
}

ammonr()

if (shotnr.length === 0){

  reload()

}
}

setInterval(() => {
  


if (healthbar.length === 0){

    alldhealth.forEach(el => el.style.display = "none");

    allphealth.forEach(el => el.style.display = "none");
  
    pics.forEach(pic => pic.style.display = "none");

    buffdealer.style.display = "flex";

    playerbtnchoice.style.display = "none";

    dealerbtnchoice.style.display = "none";

    livetxt.style.display = "none";
 
  console.log ("player lost");

  return;  // << bruker "return" sånn den ikke fortsetter å med denne comanden 

}


if (dealerhealthbar.length === 0) {

  alldhealth.forEach(el => el.style.display = "none");

  allphealth.forEach(el => el.style.display = "none");
  
  pics.forEach(pic => pic.style.display = "none");

  homelessdealer.style.display = "flex";

  playerbtnchoice.style.display = "none";

  dealerbtnchoice.style.display = "none";

  livetxt.style.display = "none";

  console.log ("Dealer lost");

  return;

}

}, 500);