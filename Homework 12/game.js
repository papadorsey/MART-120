

var characterX = 100;
var characterY = 100;

var w = 87;
var s = 83;
var a = 65;
var d = 68;
var mouseClicked = 0;

var shapeX = 30;
var shapeY = 50; 
var shapeXspeed;
var shapeYspeed;

var mouseShapeX;
var mouseShapeY;

//call createBorders function
createBorders()

function setup()
{
    createCanvas(500,600)
    shapeXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
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
     circle(shapeX,shapeY,20)
 
     shapeXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
 
     shapeX += shapeXspeed;
     shapeY += shapeYspeed;
 
     if (shapeX > width) 
     {
         shapeX = 0;
     }
 
     if (shapeX < 0) 
     {
         shapeX = width;
     }
 
     if (shapeY > height) 
     {
         shapeY = 0;
     }
 
     if (shapeY < 0) 
     {
         shapeY = height;
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