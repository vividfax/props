let roots = [];
let leaves1;
let leaves2;
let leaves3;

function preload() {

    leaves1 = loadImage("./images/leaves1.png");
    leaves2 = loadImage("./images/leaves2.png");
    leaves3 = loadImage("./images/leaves3.png");
}

function setup() {

    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    //frameRate(1);
    setInterval(display, 1000/0.02);

    background("#d9cce3");
    noStroke();
    rectMode(CENTER);
    imageMode(CENTER);

    push();
    translate(width/2, height/2);

    let originY1 = random(-80, -30);
    let originY2 = random(-80, -30);
    let originY3 = random(-80, -30);

    fill(100);
    rect(0, 0, 100, 300, 4);
    rect(0, 100, 100, 300, 100);
    rect(200, 0, 100, 300, 4);
    rect(200, 100, 100, 300, 100);
    rect(-200, 0, 100, 300, 4);
    rect(-200, 100, 100, 300, 100);

    fill(95);
    rect(0, -122, 94, 50, 4);
    rect(200, -122, 94, 50, 4);
    rect(-200, -122, 94, 50, 4);

    let stemThickness1 = random(25, 35);
    let stemThickness2 = random(25, 35);
    let stemThickness3 = random(25, 35);

    stroke(115, random(27, 37), random(67, 77));
    strokeWeight(stemThickness1-random(3));
    line(random(-10, 10), -250, 0, originY1+3);
    strokeWeight(stemThickness1);
    line(0, originY1+3, random(-10, 10), 170);
    line(0, originY1+3, random(-10, 10), 170);

    stroke(115, random(27, 37), random(67, 77));
    strokeWeight(stemThickness2-random(3));
    line(random(-10, 10)-200, -250, 0-200, originY2+3);
    strokeWeight(stemThickness2);
    line(0-200, originY2+3, random(-10, 10)-200, 170);
    line(0-200, originY2+3, random(-10, 10)-200, 170);

    stroke(115, random(27, 37), random(67, 77));
    strokeWeight(stemThickness3-random(3));
    line(random(-10, 10)+200, -250, 0+200, originY3+3);
    strokeWeight(stemThickness3);
    line(0+200, originY3+3, random(-10, 10)+200, 170);
    line(0+200, originY3+3, random(-10, 10)+200, 170);

    // stroke(115, random(27, 37), random(67, 77));
    // strokeWeight(random(30, 45));
    // line(random(-10, 10)-200, random(-200, -250), random(-10, 10)-200, 180);
    // stroke(115, random(27, 37), random(67, 77));
    // strokeWeight(random(30, 45));
    // line(random(-10, 10)+200, random(-200, -250), random(-10, 10)+200, 180);

    fill("#d9cce3");
    noStroke();
    beginShape();
    vertex(-100, -300);
    vertex(100, -300);
    vertex(100, random(-230, -200));
    vertex(-100, random(-230, -200));
    endShape();

    fill("#d9cce3");
    noStroke();
    beginShape();
    vertex(-100-200, -300);
    vertex(100-200, -300);
    vertex(100-200, random(-230, -200));
    vertex(-100-200, random(-230, -200));
    endShape();

    fill("#d9cce3");
    noStroke();
    beginShape();
    vertex(-100+200, -300);
    vertex(100+200, -300);
    vertex(100+200, random(-230, -200));
    vertex(-100+200, random(-230, -200));
    endShape();

    fill(255);
    noStroke();
    beginShape();
    vertex(-50, random(50, 180));
    vertex(50, random(50, 180));
    vertex(50, 200);
    vertex(-50, 200);
    endShape();

    fill(255);
    noStroke();
    beginShape();
    vertex(-50-200, random(50, 180));
    vertex(50-200, random(50, 180));
    vertex(50-200, 200);
    vertex(-50-200, 200);
    endShape();

    fill(255);
    noStroke();
    beginShape();
    vertex(-50+200, random(50, 180));
    vertex(50+200, random(50, 180));
    vertex(50+200, 200);
    vertex(-50+200, 200);
    endShape();

    image(leaves1, -180, random(-165, -175));
    image(leaves3, 185, random(-170, -180));
    image(leaves2, -15, random(-165, -175));

    fill("#7b9c78");
    noStroke();
    ellipse(0 + random(-1, 1), originY1 + random(-1, 1), 23);
    ellipse(-200 + random(-1, 1), originY2 + random(-1, 1), 23);
    ellipse(200 + random(-1, 1), originY3 + random(-1, 1), 23);

    stroke(100, 0.07);
    strokeWeight(2);
    line(-30, -96, 30, -96);
    line(-30-200, -96, 30-200, -96);
    line(-30+200, -96, 30+200, -96);
    stroke(100, 0.07);
    strokeWeight(3);
    line(-30, -148.5, 30, -148.5);
    line(-30-200, -148.5, 30-200, -148.5);
    line(-30+200, -148.5, 30+200, -148.5);

    roots.push(new Root(0, originY1, 0, originY1));
    roots.push(new Root(-200, originY2, -200, originY2));
    roots.push(new Root(200, originY3, 200, originY3));

    pop();

    noLoop();

    display();
}

function display() {

    //if (frameCount % 3 != 1) return;
    push();
    translate(width/2, height/2);

    for (let i = 0; i < roots.length; i++) {
        roots[i].update();
        roots[i].display();
    }

    fill("#bcb8bf");
    noStroke();
    rect(0, 120, 700, 50, 20);
    rect(0, 265, 700, 40, 20);
    rect(-320, 250, 60, 300, 20);
    rect(320, 250, 60, 300, 20);

    pop();
}
