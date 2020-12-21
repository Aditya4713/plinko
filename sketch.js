var Engine = Matter.Engine;
 var World= Matter.World;
 var Bodies = Matter.Bodies;
 var Constraint = Matter.Constraint;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
 // createSprite(400, 200, 50, 50);
 div1 = new Divisions(700,320,70,70);
 div2 = new Divisions(700,320,70,70);
 div3 = new Divisions(700,320,70,70);
 div4 = new Divisions(700,320,70,70);
 div5 = new Divisions(700,320,70,70);
 div6 = new Divisions(700,320,70,70);
 div7 = new Divisions(700,320,70,70);
}

function draw() {
  background(0); 
  Engine.update(engine);
  display.div1(); 
  display.div2(); 
  display.div3(); 
  display.div4(); 
  display.div5(); 
  display.div6();
  display.div7();  
  drawSprites();
}