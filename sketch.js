
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var trashobj, paperobj, groundobj;
var world;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	trashobj = new trash(1200,650);
	paperobj = new Paper(200,450,70);
	groundobj = new ground(width/2, 670, width, 20);
	// var render = Render.create({
	// 	element : document.body,
	// 	engine : engine, 
	// 	option : {
	// 		width : 1200,
	// 		height : 700,
	// 		wireframes : false
	// 	}
	// });

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(255);
  groundobj.display();
  paperobj.display();
  trashobj.display();
  
  drawSprites();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperobj.body, paperobj.body.position, {x : 85, y:-85});
	}
}




