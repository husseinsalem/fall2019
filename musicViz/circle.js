var song;
var fft;
let button;
var col= 50;
var c= 60;
var d= 50;


function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html('STOP');
  } else {
    song.stop();
    button.html('PLAY');
  }
}

function preload() {
  song = loadSound('SubwaysGoingHome.mp3');
}


function setup() {
  createCanvas(500, 600);
  colorMode(HSB, 90);
  angleMode(DEGREES);
  button = createButton('PLAY');
  button.position(19, 19);
  button.size(100, 50);
  button.style("font-family","monospace");
  button.mousePressed(togglePlaying);
  fft = new p5.FFT(0.95, 128);
}

function draw() {
  col,c,d = mouseX/4;
  background (col,c,d);
  var spectrum = fft.analyze();
  noStroke();
  translate(width / 2, height / 2);
  for (var i = 0; i < spectrum.length; i++)
  {
    var angle = map(i, 1000, spectrum.length, 0, 360);
    var amp = spectrum[i];
    var r = map(amp, 50, 199, 51, 190);
    var x = r * cos(angle);
    var y = r * sin(angle);
    stroke(i, 255, 255);
    rotate(365/50);
    line(0, 0, x, y);
  }

}