
function setup() {
	createCanvas(1500, 500);
	colorMode(HSB);
}

function draw() {
	background(0, 0, 95);
	noFill();
	var start = 0;
	var finish = 5;
	for (let i = 0; i < 100; i++) {
	  stroke(300, 100, 100);
	  strokeWeight(0.5);
	  beginShape();
		for (let x = 0; x < width; x++) {
			var a = map(x, 0, width, start, finish);
			var scl = 6
			var y = noise(a) * scl * i;
			vertex(x, y);
		}
	  endShape();
	  start -= 0.01;
	  finish += 0.01;
	}
	noLoop();
}
