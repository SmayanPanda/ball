
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1=new Paper (200,200,20)
Dustbin1=new Dustbin (400,600,20,100)
Dustbin2=new Dustbin (600,600,20,100)
Dustbin3=new Dustbin (500,660,200,20)
ground1= new Ground (400,680,800,20)
	Engine.run(engine);
	
}

function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  Dustbin1.display();
  Dustbin2.display();
  Dustbin3.display();
  ground1.display();
  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW)
{
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:40,y:-45})
}
}


