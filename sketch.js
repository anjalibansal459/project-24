
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer1 ;
var ground1;
var stone1;
var rubber1;
var iron1;
var s1

function preload()
{
	
}

function setup() {
	createCanvas(1500, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer1=new Hammer(400,100)
ground1=new Ground(750,980,1500,200)
stone1=new Stone(400,100,100,100)
rubber1=new Rubber(400,100,50)
iron1= new Iron(100,200)
s1=new Sand(100,100,20)
	
}


function draw() {
  
  background("skyblue");
  Engine.update(engine)
  rectMode(CENTER);
  hammer1.display()
  ground1.display()
  stone1.display()
  rubber1.display()
  iron1.display()
  s1.display()

 // drawSprites()
}



