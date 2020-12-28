class Ball {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.color = [random(0,255), random(0,255), random(0,255)];
    this.body = Bodies.circle(x, y, 10, options);
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    fill(this.color[0], this.color[1], this.color[2]);
    ellipseMode(CENTER);
    ellipse(0, 0, 20, 20);
    pop();
  }
};
