const flock = [];

let alignmentSlider, cohesionSlider, separationSlider;

function setup() {
    createCanvas(640, 360);
    alignmentLabel = createDiv("Alignment");
    alignmentLabel.position(680,325);
    alignmentSlider = createSlider(0, 5, 1, 0.1);
    cohesionLabel = createDiv("Cohesion");
    cohesionLabel.position(830,325);
    cohesionSlider = createSlider(0, 5, 1, 0.1);
    separationLabel = createDiv("Separation");
    separationLabel.position(960,325);
    separationSlider = createSlider(0, 5, 1, 0.1);
    for (let i = 0; i < 200; i++) {
        flock.push(new Boid());
    }
}

function draw() {
    background(51);

    for (let boid of flock) {
        boid.edges();
        boid.flock(flock);
        boid.update();
        boid.show();
    }
}