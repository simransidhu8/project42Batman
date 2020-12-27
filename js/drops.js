class Drops{
    constructor(x, y){
        var options = {
            friction: 0.1
        }
        this.body = Bodies.circle(x, y, options);
        this.radius = 5;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        fill("lightBlue");
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }

    update(){
        if (this.body.position.y > height){
          Matter.Body.setPosition(this.body, { x: random(0, 400), y: random(0, 400) });
        }
    }
}
