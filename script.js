var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.querySelector(".random");

function setGradient() {
    body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}
// random color generator

const getRanHex = size => {
	let result = [];
	let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  
	for (let n = 0; n < size; n++) {
	  result.push(hexRef[Math.floor(Math.random() * 16)]);
	}
	return result.join('');
  }

function setRandomHex() {
	color1.value = "#" + getRanHex(6);
	color2.value = "#" + getRanHex(6);
	setGradient();
	console.log(color1.value + " " + color2.value);
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", setRandomHex);

setGradient();
