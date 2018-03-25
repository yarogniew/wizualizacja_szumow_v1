// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/h_aTgOl9J5I

var songB;
var amp;
var button;
var sizeOfSz;
var volhistory = [];
var j, n;
var xoff = 0.05;
var result;

function toggleSong() {
  if (songB.isPlaying()) {
    songB.pause();
          background(50);
  } else {
    songB.play();
  }
}

function preload() {
  //song = loadSound('szumy.mp3');
  songB = loadSound('Potrzeby.mp3');
  result = loadStrings('tekstpiosenki.txt');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  sizeOfBird = min(windowWidth, windowHeight)-200; //choose the smaller side of the screen
  angleMode(DEGREES);
  background(50);
  button = createButton('pause/play');
  button.mousePressed(toggleSong);
  button.position(20, 20);
  //button.size(200);
  songB.play();
  amp = new p5.Amplitude();
  amp.setInput(songB);

  //console.log(result.length);

}

function draw() {
  n = noise(xoff)*2;
  var vol = amp.getLevel();
  volhistory.push(vol);
      var s = map(vol, 0, 0.5, 0, 255);
        //background(255-s);


  j = random(0,40);
  fill(s+50*n, j, 100,  s+100);
  strokeWeight(1);
  stroke(s+50, 100, j,  s+100, s-100);

  push();
  translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < 380; i+=11) {
    var r = map(volhistory[i], 0, 1, 0, sizeOfBird*vol*7);
    var x = r * cos(i);
    var y = r * sin(i);

//console.log(i);
    curveVertex(x, y);
  }

  endShape(CLOSE);

  if (volhistory.length > 380) {
    volhistory.splice(0, 2);

  }
  pop();
  noStroke();
  textAlign(CENTER);
  textSize(sizeOfBird/20);
  fill(s+50*n, s+100*n);
  text(result[0], width / 2, 50);
  //ellipse(100, 100, 200, vol * 200);
}
