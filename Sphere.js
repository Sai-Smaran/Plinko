class Pole {
  constructor(x, y) {
    var options = {
        isStatic: true,
    }
    this.body = Bodies.circle(x, y, 10, options);
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    ellipse(0, 0, 20, 20);
    pop();
  }
};
