var leftIrisx = 800
var leftIrisy = 400
var leftPupilx = 800
var leftPupily = 400
var rightIrisx = 1100
var rightIrisy = 400
var rightPupilx = 1100
var rightPupily = 400
var bottomLipy = 675
var Directionleft = -1
var Directionright = 1

function setup()
{
    createCanvas(1900, 950);
}
function draw()
{
    //background
    background(12,50,18);
    fill(255, 229, 180);
    circle(950,500,800);

    //left iris
    fill(23,48,183);
    circle(leftIrisx,leftIrisy,100);
    leftIrisx+=Directionleft;
    if(leftIrisx >=900 ||  leftIrisx<=600)
    {
        Directionleft *= -1;
    }

    
    //left pupil
    fill(0,0,0);
    circle(leftPupilx,leftPupily,50);
    leftPupilx+=Directionleft;
    

    //right iris
    fill(23,48,183);
    circle(rightIrisx,rightIrisy,100);
    rightIrisx += Directionright 
    if(rightIrisx >=1200  ||  rightIrisx<=600)
    {
        Directionright *= -1;
    }


    //right pupil
    fill(0,0,0)
    circle(rightPupilx,rightPupily,50)
    rightPupilx += Directionright

    //top then bottom lips
    fill(235, 181, 184)
    ellipse(950, bottomLipy, 350, 30)
    ellipse(950, 675, 350, 45)
    bottomLipy += 1
    if(bottomLipy >=850)
    {
        bottomLipy = 1
    }

    //nose
    fill(150,50,20)
    rect(925,480,60,150)

    //right eyebrow
    rect(1040,280,150,50)

    //left eyebrow
    rect(725,280,150,50)

    //hair
    fill(150, 75, 0)
    arc(950, 300, 698, 400, radians(180), radians(360));

    
}