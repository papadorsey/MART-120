

var characterX = 100;
var characterY = 100;

var w = 87;
var s = 83;
var a = 65;
var d = 68;
var mouseClicked = 0;

var shapeX = 30;
var shapeY = 50; 

var shapeXs =[];
var shapeYs = [];
var diameters = [];

var shapeXspeeds = [];
var shapeYspeeds = [];

var mouseShapeX = 0;
var mouseShapeY = 0;

//call createBorders function
createBorders()

function setup()
{
    createCanvas(500,600)

    for (var i = 0; i < 1; i++) 
    {
    shapeXspeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYspeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeXs[i] = random(50);
    shapeYs[i] = random(80);
    diameters[i] = random(10);
    }
}

function createCharacter()
{
// character
fill(255,255,255)
circle (characterX,characterY,40)
}

function exitMessage()
{
    //exit message
    textSize(30);
    text("Escape", width-120,height-50)
}

function playerExit()
{
    // has character left the exit?
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(50);
        text("Huzzah!", width/2-50, height/2-50);

    }
}

function createEnemy()
{
     // potential enemy
     fill(255,0,0);
     
     for (var i = 0; i < shapeXs.length; i++) 
     {
     circle(shapeXs[i], shapeYs[i], diameters[i]++); 
     shapeXspeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYspeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     }
 
     shapeXs[i] += shapeXspeeds[i];
     shapeYs[i] += shapeYspeeds[i];
 
     if (shapeXs[i] > width) 
     {
         shapeXs[i] = 0;
     }
 
     if (shapeXs[i] < 0) 
     {
         shapeXs[i] = width;
     }
 
     if (shapeYs[i] > height) 
     {
         shapeYs[i] = 0;
     }
 
     if (shapeYs[i] < 0) 
     {
         shapeYs[i] = height;
     }
}

function createBorders()
    {
    // top border
    rect(0,0,width,10);

    // left border
    rect(0,0,10,height);

    // bottom border
    rect(0,height-10,width,10);

    // right border
    rect(width-10,-20,10,height-50);
    }

    function createBarriers()
    {
    // barrier 1
    rect(150,120,20,100,45)

    // barrier 2
    rect(230,400,100,20,45)

    // barrier 3
    rect(280,420,20,200,45)

    // barrier 4
    rect(300,150,500,20,45)
    }

    function characterMovement ()
    {
        // key bindings
        if (keyIsDown(w)) 
        {
            characterY += -6;    
        }

        if (keyIsDown(s)) 
        {
            characterY += 6;
        }

    if (keyIsDown(a)) 
        {
            characterX += -6;
        }

    if (keyIsDown(d)) 
        {
            characterX += 6;
        }
    }

    function mouseClicked() {
        mouseShapeX = mouseX;
        mouseShapeY = mouseY;}

function draw()
{
    background(0,45,45);
    stroke(0);
    fill(0);

    createBorders();
    createBarriers();
    createCharacter();
    characterMovement();
    createEnemy();
    exitMessage();
    playerExit();



}
