var t1,t2,t3,t4,f,h
var b1,b2,b3,b4
var b5,b6,b7,b8
var p1,p2
var p1i,p2i
var a=0,b=0,c=0,d=0
var x=0,y=0,w=0,m=0
var lap1=0,lap2=0
var gs=1,tl=3,tlc,tc=0


function preload(){
p1i=loadImage('p1.png')
p2i=loadImage('p2.png')
}

function setup(){
    createCanvas(800,400)
    t1=createSprite(75,200,100,350) 
    t2=createSprite(400,75,750,100)
    t3=createSprite(725,200,100,350)
    t4=createSprite(400,325,750,100)
    f=createSprite(400,75,20,100)
    h=createSprite(400,325,20,100)
    b1=createSprite(10,200,15,350)
    b2=createSprite(400,10,750,15)
    b3=createSprite(790,200,15,350)
    b4=createSprite(400,390,750,15) 
    b5=createSprite(135,200,15,145) 
    b6=createSprite(400,135,525,15)
    b7=createSprite(665,200,15,145)
    b8=createSprite(400,265,525,15)
    p1=createSprite(450,50,50,25)
    p1.addImage(p2i)
    p2=createSprite(450,95,50,25)
    p2.addImage(p1i)
    tlc=createSprite(250,175,25,25)
}

function draw(){
    background('green')
    x=x-1
    y=y-1
    tc=tc-1
    textSize(30)
    fill(0)
    textFont('Courier New')
    text('Le Mans',325,165)
    textSize(20)
    text('laps:'+tl,150,180)
    text('press R to reset',350,250)
    text('player 1:'+lap1+'laps',150,210)
    text('player 2:'+lap2+'laps',150,240)
    
    p1.bounceOff(b1)
    p1.bounceOff(b2)
    p1.bounceOff(b3)
    p1.bounceOff(b4)
    p1.bounceOff(b5)
    p1.bounceOff(b6)
    p1.bounceOff(b7)
    p1.bounceOff(b8)
    p2.bounceOff(b1)
    p2.bounceOff(b2)
    p2.bounceOff(b3)
    p2.bounceOff(b4)
    p2.bounceOff(b5)
    p2.bounceOff(b6)
    p2.bounceOff(b7)
    p2.bounceOff(b8)
    p1.bounce(p2)
    p2.bounce(p1)

    b1.shapeColor='black'
    b2.shapeColor='black'
    b3.shapeColor='black'
    b4.shapeColor='black'
    b5.shapeColor='black'
    b6.shapeColor='black'
    b7.shapeColor='black'
    b8.shapeColor='black'
    f.shapeColor='black'
    h.shapeColor='gray'
    tlc.shapeColor='black'

    if(gs===1){
     p1.setSpeedAndDirection(a,b)
    p1.rotation=b
    p2.setSpeedAndDirection(c,d)
    p2.rotation=d

    if(keyWentDown('up')){
     a=5   
    }
    if(keyWentUp('up')){
    a=0  
    }
    if(keyWentDown('down')){
    a=-3   
    }
    if(keyWentUp('down')){
    a=0  
    }
    if(keyDown('right')){
    b=b+5  
    }
    if(keyDown('left')){
    b=b-5 
    }

    if(keyWentDown('w')){
    c=5   
    }
    if(keyWentUp('w')){
    c=0  
    }
    if(keyWentDown('s')){
    c=-3   
    }
    if(keyWentUp('s')){
    c=0  
    }
    if(keyDown('d')){
    d=d+5  
    }
    if(keyDown('a')){
    d=d-5 
    }
    if(p1.isTouching(h)){
    w=1
    }
    if(p2.isTouching(h)){
    m=1
    }
    if(x<0&&p1.isTouching(f)&&w===1){
    lap1=lap1+1
    w=0
    }
    if(y<0&&p2.isTouching(f)&&m===1){
    lap2=lap2+1
    m=0
    }
    if(tc<0&&mousePressedOver(tlc)){
        tl=tl+1
        tc=10
    }
    if(mousePressedOver(tlc)&&tl>24){
        tl=3
    }
}

    if(lap1===tl){
        text('player1 win',350,200)
        gs=0
        gs=0
        p1.setSpeedAndDirection(0,0)
        p2.setSpeedAndDirection(0,0)
    }
    if(lap2===tl){
        text('player2 win',350,200)
        gs=0
        p1.setSpeedAndDirection(0,0)
        p2.setSpeedAndDirection(0,0)
    }
 
    if(keyDown('r')){
        gs=1
        p1.x=450
        p1.y=50
        p2.x=450
        p2.y=95
        lap1=0
        lap2=0
        a=0
        b=0
        c=0
        d=0
    }
    drawSprites()
}