var mySound;
var x = 0;
var y = 200;
var dir = 1;
// var crad = 100
var once = 1;
var actualTime = 0;
var loadTime;
var speed = 20;
var r = 0;
var p = 100;
var a = 1080;
var b = 720;
var k = 0;
var z = 0;
var w = 0;
var tr = 0;
var wid = 0;
var hei = 0;
//
// cX = random(width)
// cY = random(height)
// var droplet = [];

function setup() {
  mySound = loadSound("Majula.mp3", playMusic);
  // var droplet[0] = new Droplet;
  // for(var i = 0; i < droplet.length; i++){
  //   droplet[i].display();
  // }
  // x = -crad;
  // y = height/2;
  createCanvas(a,b);
  background(0);
  ellipse(width/2, height/2, 100);
}

// function Droplet(){
//   this.posX = random(width);
//   this.posY = random(Height);
//   this.diameter = r + 10
//
//   this.display = function(){
//     ellipse(this.posX, this.posY, this.diameter)
//   }
//
// }


function draw(){

  background(0);
  actualTime = millis() - loadTime;
  println(actualTime);
  println("p",p);
  println("tr", tr);
  println("r", r);

  if(p < 0){
    p = 100
  }
  if(r > 300){
    r = 0
  }
  // for(var i = 0; i < droplet.length; i++){
  //   droplet[i].display();
  // }
  if(actualTime > 1000 && actualTime < 3500){
    p = map(actualTime, 1000, 3500, 90, 0);
    fill(243,178,29,p);
    ellipse(100,100,r);
    r = map(actualTime, 1000, 3500, 0, 500);
    noStroke();


  }

  if(actualTime > 3700 && actualTime < 4400){
      p = map(actualTime, 3700, 4400, 255, 0);
      fill(243,178,29,p);
      ellipse(400,400,r);
      r = map(actualTime, 3700, 4400, 0, 500);
      noStroke();

  }

  if(actualTime > 4500 && actualTime < 5800){
      p = map(actualTime, 4500, 5800, 170, 0);
      fill(243,178,29,p);
      ellipse(600,700,r);
      r = map(actualTime, 4500, 5800, 0, 500);
      noStroke();
  }

  if(actualTime > 5800 && actualTime < 7800){
      p = map(actualTime, 5800, 7800, 255, 0);
      fill(243,178,29,p);
      ellipse(800,600,r);
      r = map(actualTime, 5800, 7800, 0, 500);
      noStroke();

  }
  if(actualTime > 6700 && actualTime < 7500){
      p = map(actualTime, 6700, 7500, 255, 0);
      fill(243,178,29,p);
      ellipse(600,300,r);
      r = map(actualTime, 6700, 7500, 0, 500);
      noStroke();
  }
  if(actualTime > 13800 && actualTime < 15100){
      p = map(actualTime, 13800, 15100, 255, 0);
      fill(243,178,29,p);
      ellipse(300,700,r);
      r = map(actualTime, 13800, 15100, 0, 500);
      noStroke();
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
  }else if(actualTime > 45000 && actualTime < 51200){
    noStroke();
    fill(255 +w ,0,z);
    ellipse(500,500,k);
    k = k + .5
    p = p - .000000000000000000000002
    z = z - 2
    w = w + 2
  }
  if(actualTime > 15200 && actualTime < 15900){
    noStroke();
    fill(243,178,29,p);
    ellipse(678,700,r);
    r = map(actualTime, 15200, 15900, 0, 500);
    p = map(actualTime, 15200, 15900, 100, 0);


  }
  if(actualTime > 16800 && actualTime < 17500){
    noStroke();
    fill(243,178,29,p);
    ellipse(800,600,r);
    r = map(actualTime, 16800, 17500, 0, 500);
    p = map(actualTime, 16800, 17500, 100, 0);

  }
  if(actualTime > 21500 && actualTime < 22200){
    noStroke();
    fill(243,178,29,p);
    ellipse(600,400,r);
    r = map(actualTime, 21500, 22200, 0, 500);
    p = map(actualTime, 21500, 22200, 100, 0);

  }

  if(actualTime > 23800 && actualTime < 24500){
    noStroke();
    fill(243,178,29,p);
    ellipse(700,700,r);
    r = map(actualTime, 23800, 24500, 0, 500);
    p = map(actualTime, 23800, 24500, 100, 0);

  }

    if(actualTime > 24800 && actualTime < 25500){
      noStroke();
      fill(243,178,29,p);
      ellipse(800,600,r);
      r = map(actualTime, 24800, 25500, 0, 500);
      p = map(actualTime, 24800, 25500, 100, 0);
    }

      if(actualTime > 29800 && actualTime < 30700){
        noStroke();
        fill(243,178,29,p);
        ellipse(800,600,r);
        r = map(actualTime, 29800, 30700, 0, 500);
        p = map(actualTime, 29800, 30700, 100, 0);
      }
      if(actualTime > 31800 && actualTime < 32700){
          noStroke();
          fill(243,178,29,p);
          ellipse(600,200,r);
          r = map(actualTime, 31800, 32700, 0, 500);
          p = map(actualTime, 31800, 32700, 100, 0);
  }
      if(actualTime > 32800 && actualTime < 33700){
        noStroke();
        fill(243,178,29,p);
        ellipse(400,800,r);
        r = map(actualTime, 32800, 33700, 0, 500);
        p = map(actualTime, 32800, 33700, 100, 0);
}
      if(actualTime > 34800 && actualTime < 35700){
          noStroke();
          fill(243,178,29,p);
          ellipse(500,200,r);
          r = map(actualTime, 34800, 35700, 0, 500);
          p = map(actualTime, 34800, 35700, 100, 0);
}
if(actualTime > 41200 && actualTime < 42900){
  noStroke();
  fill(243,178,29,p);
  ellipse(678,700,r);
  r = map(actualTime, 41200, 42900, 0, 500);
  p = map(actualTime, 41200, 42900, 100, 0);
}

if(actualTime > 42200 && actualTime < 43900){
  noStroke();
  fill(243,178,29,p);
  ellipse(400,700,r);
  r = map(actualTime, 42200, 43900, 0, 500);
  p = map(actualTime, 42200, 43900, 100, 0);
}

if(actualTime > 44200 && actualTime < 45900){
  noStroke();
  fill(243,178,29,p);
  ellipse(300,900,r);
  r = map(actualTime, 44200, 45900, 0, 500);
  p = map(actualTime, 44200, 45900, 100, 0);
}

if(actualTime > 46200 && actualTime < 46900){
  noStroke();
  fill(243,178,29,p);
  ellipse(678,700,r);
  r = map(actualTime, 46200, 46900, 0, 500);
  p = map(actualTime, 46200, 46900, 100, 0);
}

if(actualTime > 47200 && actualTime < 48900){
  noStroke();
  fill(243,178,29,p);
  ellipse(200,500,r);
  r = map(actualTime, 47200, 48900, 0, 500);
  p = map(actualTime, 47200, 48900, 100, 0);
}
if(actualTime > 49200 && actualTime < 50900){
  noStroke();
  fill(243,178,29,p);
  ellipse(678,700,r);
  r = map(actualTime, 49200, 50900, 0, 500);
  p = map(actualTime, 49200, 50900, 100, 0);
}
// booms w rect
if(actualTime > 51200 && actualTime < 53900){
  noStroke();
  fill(243,178,29,p);
  wid =  wid + 2
  hei = hei + 2
  rect(random(width), random(height), wid, hei));
  r = map(actualTime, 51200, 53900, 0, 500);
  p = map(actualTime, 51200, 53900, 100, 0);
}

if(actualTime > 51200 && actualTime < 53900){
  noStroke();
  fill(243,178,29,p);
  ellipse(678,700,r);
  r = map(actualTime, 51200, 53900, 0, 500);
  p = map(actualTime, 51200, 53900, 100, 0);
}

// booms w rect
if(actualTime > 65200 && actualTime < 66900){
  noStroke();
  fill(243,178,29,p);
  wid =  wid + 2
  hei = hei + 2
  rect(random(width), random(height), wid, hei));
  r = map(actualTime, 65200, 66900, 0, 500);
}
}
  // if (x > width + crad) {
  //   dir = dir * -1;
  // }

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
