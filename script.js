//Fonctionnalité 1

var clickerButton = document.getElementsByTagName("footer")[0];

var x = 1;
var onButtonClick = function() {
  console.log(`clique ${x}`);
  ++x;
};
clickerButton.addEventListener("click", onButtonClick);

//Fonctionnalité 2

let menuHamburger = document.querySelector(".navbar-toggler-icon");
let menu = document.getElementById('navbarHeader');
let menuStatus = false;

function menuToggle() {
  if(menuStatus == false) {
    // menuClass.style.className = "collapse bg-dark";
    menuStatus = true;
    menu.classList.remove('collapse');
  } else if (menuStatus == true ) {
    menu.classList.add('collapse');
    menuStatus = false;
  }
}

menuHamburger.onclick = menuToggle;

//Fonctionnalité 3
let firstCardElt = document.getElementsByClassName("card")[0];
let firstCardButtonElts = firstCardElt.getElementsByTagName("button");
function cardTextRed(){ 
	firstCardElt.style.color = "red";
}
firstCardButtonElts[1].addEventListener("click", cardTextRed);

//Fonctionnalité 4
let secondCardElt = document.getElementsByClassName("card")[1];
let secondCardButtonElts = secondCardElt.getElementsByTagName("button");
let textColorStatus = false;
function TextGreen(){
	if (secondCardElt.style.color === "green") {
		secondCardElt.style.color = "";
	}
	else {
		secondCardElt.style.color = "green";
	}
}
secondCardButtonElts[1].addEventListener("click", TextGreen);

//Fonctionnalité 5

document.querySelector("header").addEventListener("dblclick", function(){
  if (document.querySelector("link").disabled === false) {
    document.querySelector("link").disabled = true ;
  } else {
    document.querySelector("link").disabled = false ;
  }
});

//Fonctionnalité 6

let cardElmts = document.getElementsByClassName("card");

for (let count = 0; count < 6; count++) {
	let cardText = cardElmts[count].getElementsByClassName("card-text")[0];
	let cardImage = cardElmts[count].getElementsByClassName("card-img-top")[0];
  let cardButtonView = cardElmts[count].getElementsByTagName("button")[0];
  
	function miniCard() {
		if (cardImage.style.width === "20%") {
			cardImage.style = "";
			cardText.classList.toggle("collapse");
		}
		else {
			cardImage.style.width = "20%";
			cardText.classList.toggle("collapse");
		}
	}
	cardButtonView.addEventListener("mouseover", miniCard);
}

// Fonctionnalité 7
