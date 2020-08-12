const Engine = Matter.Engine; 

const World= Matter.World; 

const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine, world;

var polygon;

var block1,block2,block3,block4,block5,block6,block7,block8,block9;

var block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22;

var block23,block24,block25,block26,block27,block28,block29,block30,block31,block32;

var launcher;

var ground1,ground2,ground3;

var score = 0;

function setup(){
    createCanvas(1366,653);

    engine = Engine.create();
    world = engine.world;

    polygon = new Polygon(200,300,80,70);
 
    launcher = new Launcher(polygon.body,{x:200,y:300});

    ground1 = new Ground(700,300,300,20);
    ground2 = new Ground(450,600,250,20);
    ground3 = new Ground(1200,250,200,20);

    block1 = new Block(450,565,40,50);
    block2 = new Block(491,565,40,50);
    block3 = new Block(409,565,40,50);
    block4 = new Block(531,565,40,50);
    block5 = new Block(369,565,40,50);
    block6 = new Block(491,515,40,50);
    block7 = new Block(409,515,40,50);
    block8 = new Block(450,515,40,50);
    block9 = new Block(450,465,40,50);

    block10 = new Block(680,265,40,50);
    block11 = new Block(639,265,40,50);
    block12 = new Block(719,265,40,50);
    block13 = new Block(761,265,40,50);
    block14 = new Block(599,265,40,50);
    block15 = new Block(801,265,40,50);
    block16 = new Block(719,215,40,50);
    block17 = new Block(639,215,40,50);
    block18 = new Block(680,215,40,50);
    block19 = new Block(761,215,40,50);
    block20 = new Block(680,165,40,50);
    block21 = new Block(719,165,40,50);
    block22 = new Block(700,120,40,50);

    block23 = new Block(1200,215,40,50);
    block24 = new Block(1200,165,40,50);
    block25 = new Block(1280,215,40,50);
    block26 = new Block(1280,165,40,50);
    block27 = new Block(1120,215,40,50);
    block28 = new Block(1120,165,40,50);
    block29 = new Block(1280,120,40,50);
    block30 = new Block(1120,120,40,50);
    block31 = new Block(1200,120,40,50);
    block32 = new Block(1200,80,200,30);
}

function draw(){
    background(rgb(247, 123, 138));
    Engine.update(engine);

    textSize(40);
    fill(0);
    textFont("Times New Roman");
    text("By : ",950,500);
    text("Mohammed Ayan",1050,550);
    textSize(37); 
    fill(0);
    textFont("Times New Roman");
    text("Drag The Hexagon Stone Release It To Launch Toward The Blocks",10,50);
    textSize(20);
    text("Press 'Space' To Attach The Hexagon Store Back To Launcher",570,400);
    textSize(25);
    text("Score = " + score,1200,45);

    ground1.display();
    ground2.display();
    ground3.display();

    polygon.display();

    launcher.display();
    
    fill("red");
    block1.display();
    block2.display();  
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    fill("green");
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();

    fill("orange");
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    block26.score();
    block27.score();
    block28.score();
    block29.score();
    block30.score();
    block31.score();
    block32.score();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x: mouseX,y: mouseY});
}

function mouseReleased(){
  launcher.fly();
}

function keyPressed(){
  if(keyCode === 32){
    launcher.attach(polygon.body);
    Matter.Body.setPosition(polygon.body,{x:200,y:300});
  }
}