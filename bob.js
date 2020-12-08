class bob {
    constructor(x,y, colour){    
    var options ={
        isStatic: false,
        restitution: 0.9,
        friction: 1.0,
        frictionAir:0.0,
        slop:1,
        inertia:Infinity,
        density: 1.2
     }
     this.x =x;
     this.y=y;
     this.colour=colour;
     this.body = Bodies.rectangle(x,y,40,40,options);
     World.add(world, this.body);
  }

  display(){
    var angle = this.body.angle;
    var  pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    strokeWeight(3)
    stroke("White");
    fill("black");
    ellipse(0,0, this.radius,this.radius);
    pop();
  }
};