class Boid {
    constructor() {
        this.position = createVector(width/2, height/2);
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(0.5, 1.5));
        this.acceleration = createVector();
    }

    align(boids) {
        let perceptionRadius = 100;
        let avg = createVector();
        let total = 0;
        for (let other of boids) {
            let d = dist(
                this.position.x, 
                this.position.y, 
                other.position.x, 
                other.position.y
            );
            if (other != this && d < perceptionRadius) {
                avg.add(other.velocity);
                total++;
            }
        }
        if (total > 0) {
            avg.div(total);
            this.velocity = avg;
        }
    }
    
    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
    }

    show() {
        strokeWeight(16);
        stroke(255);
        point(this.position.x, this.position.y);
    }
}