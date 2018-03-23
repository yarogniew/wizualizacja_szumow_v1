// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/h_aTgOl9J5I

var song;
var amp;
var button;
var sizeOfBird = 400;
var volhistory = [];
var j;

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
          background(50);
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('szumy.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(50);
  button = createButton('stop/play');
  button.mousePressed(toggleSong);
  song.play();
  amp = new p5.Amplitude();
}

function draw() {

  var vol = amp.getLevel();
  volhistory.push(vol);
      var s = map(vol, 0, 0.5, 0, 255);
        //background(255-s);


j = random(30,50);
  fill(s+50, j, 100,  s+100);
  strokeWeight(20);
  stroke(s, s-100);
  //bezier(85, 20, 10, 10, 90, 90, 15, 80);

  translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < 380; i+=7) {
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
