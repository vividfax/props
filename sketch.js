let roots = [];

function setup() {

    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    //frameRate(1);
    setInterval(display, 1000/0.3);

    background("#d9cce3");
    noStroke();
    rectMode(CENTER);

    push();
    translate(width/2, height/2);

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

    strokeCap(SQUARE);
    stroke(115, random(27, 37), random(67, 77));
    strokeWeight(random(30, 45));
    line(random(-10, 10), random(-200, -250), random(-10, 10), random(50, 200));
    stroke(115, random(27, 37), random(67, 77));
    strokeWeight(random(30, 45));
    line(random(-10, 10)-200, random(-200, -250), random(-10, 10)-200, random(50, 200));
    stroke(115, random(27, 37), random(67, 77));
    strokeWeight(random(30, 45));
    line(random(-10, 10)+200, random(-200, -250), random(-10, 10)+200, random(50, 200));

    let originY1 = random(-80, -30);
    let originY2 = random(-80, -30);
    let originY3 = random(-80, -30);

    fill("#7b9c78");
    noStroke();
    ellipse(0 + random(-1, 1), originY1 + random(-1, 1), 23);
    ellipse(-200 + random(-1, 1), originY2 + random(-1, 1), 23);
    ellipse(200 + random(-1, 1), originY3 + random(-1, 1), 23);

    stroke(100, 0.07);
    strokeWeight(2);
    line(-40, -96, 40, -96);
    line(-40-200, -96, 40-200, -96);
    line(-40+200, -96, 40+200, -96);
    stroke(100, 0.07);
    strokeWeight(3);
    line(-40, -148.5, 40, -148.5);
    line(-40-200, -148.5, 40-200, -148.5);
    line(-40+200, -148.5, 40+200, -148.5);

    roots.push(new Root(0, originY1, 0, originY1));
    roots.push(new Root(-200, originY2, -200, originY2));
    roots.push(new Root(200, originY3, 200, originY3));


    for (let i = 0; i < roots.length; i++) {
        roots[i].update();
        roots[i].display();
    }

    fill("#bcb8bf");
    rect(0, 120, 700, 50, 20);
    rect(0, 265, 700, 40, 20);
    rect(-320, 250, 60, 300, 20);
    rect(320, 250, 60, 300, 20);

    pop();

    noLoop();
}

function display() {

    //if (frameCount % 3 != 1) return;
    push();
    translate(width/2, height/2);

    for (let i = 0; i < roots.length; i++) {
        roots[i].update();
        roots[i].display();
    }
    pop();


    push();
    translate(width/2, height/2);
    fill("#bcb8bf");
    noStroke();
    rect(0, 120, 700, 50, 20);
    rect(0, 265, 700, 40, 20);
    rect(-320, 250, 60, 300, 20);
    rect(320, 250, 60, 300, 20);

    pop();
}
