// creating buleprints
class Box{
constructor(x, y, width, height){ 
var a={
    restitution: 0.8, density: 1, friction: 1.5
}
this.body = Bodies.rectangle(x, y, width, height, a)
this.x = x;
this.y = y;
this.width = width;
this.height = height;
World.add(world, this.body)
}
Display(){
    push ()
    translate(this.body.position.x, this.body.position.y)
    rotate(this.body.angle)
    rectMode(CENTER);
    fill("white")
    rect(0,0, this.width, this.height)
    pop ()
}





}
