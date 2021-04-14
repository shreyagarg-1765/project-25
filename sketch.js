
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
	paper=new ball(200,450,70);
	ground=new Ground(width/2,680,width,20);
    dustbin=new Dustbin(1200,100);
	dustbin.scale=0.15;
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

   Engine.update(engine)

   paper.display();

   ground.display();

  dustbin.display();


  drawSprites();
 
}

function keyPressed(){
    if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15})
	}

}

