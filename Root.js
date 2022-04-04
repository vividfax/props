class Root {

    constructor(x, y, originX, originY) {

        this.originX = originX;
        this.originY = originY;

        this.x = x;
        this.y = y;

        this.dirX = random(-1, 1);
        this.dirY = random(0, 1);

        this.dead = false;
    }

    update() {

        if (this.y > 200 && dist(this.x, this.y, this.originX, 200) > 47) {
            this.dead = true;
        }

        if (!this.dead) {

            if (this.x > this.originX+46 || this.x < this.originX-46) {
                this.dirX *= -1;
            }

            this.x += this.dirX;
            this.y += this.dirY;

            if (random() < 0.1) {
                this.dirX = random(-1, 1);
                this.dirY = random(0.5, 1);
            }

            if (random() < 0.5/(this.y-this.originY+10)) {
                roots.push(new Root(this.x, this.y, this.originX, this.originY));
            }

            if (random() < 0.0003*(this.y-this.originY+10)) {
                this.dead = true;
            }
        } else {
            if (random() < 0.3/(this.y-this.originY+10)) {
                this.dead = false;
                roots.push(new Root(this.x, this.y, this.originX, this.originY));
            }
        }
    }

    display() {

        if (!this.dead) {
            fill(28, 26, random(85, 92));
            noStroke();
            ellipse(this.x, this.y, 200/(this.y-this.originY+10));
        }
    }
}
