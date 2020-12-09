const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,320,70,70);
    box2 = new Box(820,320,70,70);
    box3 = new Box(820,180,70,70);
    box4 = new Box(600,180,70,70);
    ground = new Ground(600,height,1200,30)
    

    log1 = new Log(710,240,300,PI/2);
    log2 = new Log(710,170,300,PI/2);
    

    box5= new Box(710,150,70,70);
    log3 = new Log(660,90,150, PI/7);
    log4 = new Log(770,90,150, -PI/7);

    pig1= new Pig(710,320) ;
    pig2 = new Pig(710,180);

    bird= new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    pig1.display();
    pig2.display();
    bird.display();
    
}