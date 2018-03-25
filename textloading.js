var txt;
var songB;

function preload(){
txt = loadStrings('tekstpiosenki.txt');
  songB = loadSound('Potrzeby.mp3');
}


function setup(){
noCanvas();
console.log(txt);
}
