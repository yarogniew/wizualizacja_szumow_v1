// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/h_aTgOl9J5I

var song;
var amp;
var button;
var sizeOfBird = 400;
var volhistory = [];

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('szumy.mp3');
}

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  background(50);
  button = createButton('toggle');
  button.position(20, 20);
  button.mousePressed(toggleSong);
  song.play();
  amp = new p5.Amplitude();
}

function draw() {

  var vol = amp.getLevel();
  volhistory.push(vol);
      var s = map(vol, 0, 0.5, 0, 255);
        //background(255-s);


      stroke(s);
        fill(s+50);
  strokeWeight(1);
  //bezier(85, 20, 10, 10, 90, 90, 15, 80);

  translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < 380; i+=13) {
    var r = map(volhistory[i], 0, 1, 0, sizeOfBird*vol*7);
    var x = r * cos(i);
    var y = r * sin(i);


    vertex(x, y);
  }

  endShape();

//console.log(sizeOfBird);

  if (volhistory.length > 380) {
    volhistory.splice(0, 1);

  }
  //ellipse(100, 100, 200, vol * 200);
}
