
			var dot = [];
			var count = 0;
			
			function setup (){
				createCanvas(windowWidth,windowHeight);
			}
			
			function draw (){
			
				background(51);
				
				for (i=0; i< count; i++)
				{
					dot[i].display();
					dot[i].move();
				}
			if (mouseIsPressed && count <= 1000){
				dot[count] = new Flake();
				count++;
				}	
				
			if (count == 1000) //Reset the dot array to avoid ram overload
			{
				count = 0;
			}	
			
			}	
			
			
			function Flake(){
				this.x = mouseX + random(-80,80);
				this.y = mouseY;
				this.diameter = random(10, 30);
				this.speed = 5
				
				this.move = function(){
					
					// Floor detection
					if(this.y + this.diameter/2 < windowHeight)
					{
						this.y += this.speed;
					}
				}
				
				this.display = function(){
					noStroke();
					ellipse(this.x, this.y, this.diameter, this.diameter);
				}
			}