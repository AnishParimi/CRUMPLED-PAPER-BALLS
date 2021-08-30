
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;



function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_option={
isStatic:false,
restitution:0.1,
friction:0,
density:1.2

	}
   groundObj= new ground(width/2,670,width,20)
   Leftside=new ground(1100,600,20,120)
   RightSide= new ground(1350,600,20,120)
  
	

	ball=Bodies.circle(260,100,20,ball_option)
	World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  

  ellipse(ball.position.x,ball.position.y,20)
  
  
  groundObj.display()
  Leftside.display()
  RightSide.display()
 
}
function keyPressed(){

	if (keyCode==UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:85,y:-80})
	}
}



