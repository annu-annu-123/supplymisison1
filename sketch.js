var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bl,br,bb;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	




	engine = Engine.create();
	world = engine.world;
	//CREATING PACKAGE AND HELICOPTER
	helicopter = Bodies.rectangle(width/2, 150, 250, 150 , {isStatic:true} );
	packageBody = Bodies.circle(width/2 , 150 , 50 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	World.add(world,helicopter);

	//Create a Ground

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 bb= Bodies.rectangle(width/2,630,200,40, {isStatic:true})
	 br= Bodies.rectangle(width/2+120 ,550,40,200 , {isStatic: true})
	 bl= Bodies.rectangle(width/2-120 ,550,40,200, {isStatic : true})
	 World.add(world,bb);
	 World.add(world,br);
	 World.add(world,bl);

	Engine.run(engine);
  
}


function draw() {

	background(0);
	rect(ground.position.x, ground.position.y, width, 10)
	imageMode(CENTER);
	image(packageIMG, packageBody.position.x, packageBody.position.y, 70,70);
	image(helicopterIMG, helicopter.position.x, helicopter.position.y, 250,150);
	fill("red")
	rect(bb.position.x,bb.position.y,200,40)
	rect(br.position.x,br.position.y,40,200)
	rect(bl.position.x,bl.position.y,40,200)
	
  
  
//image(ground.positon.x, ground.position.y, width, 10);


 
}
//event based function
function keyPressed() {
 if (keyCode === DOWN_ARROW) {

    Matter.Body.setStatic(packageBody,false)
  }
}



