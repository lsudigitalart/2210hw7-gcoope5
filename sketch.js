var mySound;
var x = 0
var y = 200
var dir = 1
var crad = 100
var once = 1
var actualTime = 0
var loadTime;
var speed = 20
var r = 0;
var p = 100
var a = 1080
var b = 720
var k = 0
var z = 0
var w = 0

function setup() {
  mySound = loadSound("Majula.mp3", playMusic);
  x = -crad;
  y = height/2;
  createCanvas(a,b);
  background(0);
  ellipse(width/2, height/2, 100);
}

function draw(){

  background(0);
  actualTime = millis() - loadTime;
  println(actualTime);
  if(p < 0){
    p = 100 + 2
  }
  if(r > 500){
    r = 0 - 10
  }
  if(actualTime > 1000 && actualTime < 1800){
    push();
    noStroke();
    fill(0,200,255,p);
    ellipse(100,100,r);
    r = r + 10
    p = p - 2
    pop();
  }
  if(actualTime > 3700 && actualTime < 4500){
    push();
    noStroke();
    fill(0,200,255,p);
    ellipse(400,400,r);
    r = r + 10
    p = p - 2
    pop();
  }

  if(actualTime > 4500 && actualTime < 5300){
    push();
    noStroke();
    fill(0,200,255,p);
    ellipse(600,700,r);
    r = r + 10
    p = p - 2
    pop();
    }

  if(actualTime > 5800 && actualTime < 6500){
    push();
    noStroke();
    fill(0,200,255,p);
    ellipse(800,600,r);
    r = r + 10
    p = p - 2
    pop();

  }
  if(actualTime > 6700 && actualTime < 7500){
    push();
    noStroke();
    fill(0,200,255,p);
    ellipse(600,300,r);
    r = r + 10
    p = p - 2
    pop();

  }
  if(actualTime > 13800 && actualTime < 16000){
    push();
    noStroke();
    fill(0,200,255,p);
    ellipse(300,700,r);
    r = r + 5
    p = p - 2
    pop();

  }

  if(actualTime > 13800 && actualTime < 31000){
    noStroke();
    fill(255,0,0);
    ellipse(500,500,k);
    k = k + .5
    p = p - .000000000000000000000002
  }else if(actualTime > 31000 && actualTime < 39000){
    noStroke();
    fill(255,0,z);
    ellipse(500,500,k);
    k = k + .5
    p = p - .000000000000000000000002
    z = z + 2
  }else if(actualTime > 39000 && actualTime < 45000){
    noStroke();
    fill(255 + w,0,z);
    ellipse(500,500,k);
    k = k + .5
    p = p - .000000000000000000000002
    z = z - 2
    w = w - 2
  }
  if(actualTime > 15200 && actualTime < 16300){
    push();
    noStroke();
    fill(0,200,255,p);
    ellipse(678,700,r);
    r = r + 5
    p = p - 2
    pop();


  }
  if(actualTime > 16800 && actualTime < 17800){
    push();
    noStroke();
    fill(0,200,255,p);
    ellipse(800,600,r);
    r = r + 5
    p = p - 2
    pop();

  }
  if(actualTime > 21500 && actualTime < 22800){
    push();
    noStroke();
    fill(0,200,255,p);
    ellipse(600,400,r);
    r = r + 10
    p = p - 2
    pop();

  }

  if(actualTime > 23800 && actualTime < 24300){
    push();
    noStroke();
    fill(0,200,255,p);
    ellipse(700,700,r);
    r = r + 10
    p = p - 2
    pop();

  }

    if(actualTime > 24800 && actualTime < 25700){
      push();
      noStroke();
      fill(0,200,255,p);
      ellipse(800,600,r);
      r = r + 10
      p = p - 2
      pop();

    }

      if(actualTime > 29800 && actualTime < 30700){
        push();
        noStroke();
        fill(0,200,255,p);
        ellipse(800,600,r);
        r = r + 10
        p = p - 2
        pop();
      }
      if(actualTime > 31800 && actualTime < 32700){
          push();
          noStroke();
          fill(0,200,255,p);
          ellipse(600,200,r);
          r = r + 10
          p = p - 2
          pop();
  }
      if(actualTime > 32800 && actualTime < 33700){
        push();
        noStroke();
        fill(0,200,255,p);
        ellipse(400,800,r);
        r = r + 10
        p = p - 2
        pop();
}
      if(actualTime > 34800 && actualTime < 35700){
          push();
          noStroke();
          fill(0,200,255,p);
          ellipse(500,200,r);
          r = r + 10
          p = p - 2
          pop();
}
}
  if (x > width + crad) {
    dir = dir * -1;
  }

function playMusic(){
  loadTime = millis();
  mySound.play();
}

function mousePressed(){
  if(once == 1){
    mySound.pause();
    once = 0;
  }else {
    mySound.play();
    once = 1;
  }
}
