var myRain1;
var myRain2;
var randXPos1;
var randXPos2;

var bg;

var song;
var loadTime;

function preload() {
    bg = loadImage('bg2.jpeg');
    song = loadSound('rain.mp3')
}

function setup() {
    createCanvas(1000,700);
    image(bg, 0, 0, 1200, 700);
    
    fill(255);
    textSize(20);
    text("Race the raindrops!", 400, 660);
    text("Click for sound.", 420, 685)


    randXPos1 = random(width);
    randXPos2 = random(width);

    myrain1 = new Rain(random(15,35), 0, randXPos1, random(0.5,2));
    myrain2 = new Rain(random(15,35), 0, randXPos2, random(0.5,2));

    
}

function mouseReleased(){
    if (song.isLoaded()) {
        loadTime = millis();
        print(loadTime);
        song.play();
      }

    
}

function draw() {

    myrain1.update();
    myrain1.display();
    
    myrain2.update();
    myrain2.display();
    
    
}

function Rain(tempSize, tempY, tempX, tempSpeed) {
    this.size = tempSize;
    this.yPos = tempY;
    this.xPos = tempX;
    this.speed = tempSpeed;

    this.update = function() {
        this.yPos = this.yPos + this.speed;

        let wiggles1 = [1, 2];
        let wiggle = random(wiggles1);
        if (wiggle == 1){
            this.xPos = this.xPos + random(0, 15);
        }
        if (wiggle == 2){
            this.xPos = this.xPos - random(0, 15);
        }
    }



    this.display = function() {
        fill(121, 143, 148);
        stroke(141, 164, 168);
        //noStroke();
        circle(this.xPos, this.yPos, this.size);
    }
}