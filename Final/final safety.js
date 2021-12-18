let bubbles = [];

function setup() {
    createCanvas (1800, 800);
    for (let i = 0; i < 300; i++){
        let x = random(width);
        let y = random (height);
        let r = random (10, 20);
        bubbles[i] = new Bubble (x, y, r);
    }
}

function draw() {
    background (0);
    for (let i = 0; i < bubbles.length; i++){
        bubbles[i].move();
        bubbles[i].show();
    }


}

class Bubble {
    constructor (x, y, r) {
        this.posx = x;
        this.posy = random(-50,0);
        this.size = random(2,5);
    }

    this.update = function(time) {
        // x position follows a circle
        let w = 0.6; // angular speed
        let angle = w * time + this.initialangle;
        this.posX = width / 2 + this.radius * sin(angle);
    
        // different size snowflakes fall at slightly different y speeds
        this.posY += pow(this.size, 0.5);
    
        // delete snowflake if past end of screen
        if (this.posY > height) {
          let index = snowflakes.indexOf(this);
          snowflakes.splice(index, 1);
        }
      };
    
      this.display = function() {
        ellipse(this.posX, this.posY, this.size);
      };