var bubbles = [];

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
        this.x = x ;
        this.y = y;
        this.r = r;
        this.speed = 5;
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5 ,5);
    }

    show() {
        noStroke();
        fill(400, 100)
        ellipse(this.x, this.y, this.r * 2);
    }
}