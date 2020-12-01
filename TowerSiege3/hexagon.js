class Polygon
{
    constructor()
    {
        var options = {
            isStatic:false,
            density:0.3
        }
        this.body = Bodies.circle(100,100,35,options);
        this.image = loadImage("hexagon.png")
        World.add(world, this.body);
    }
    display()
    {
        var pos =this.body.position;
        imageMode(CENTER);
        fill("yellow");
        stroke(255);
        strokeWeight(4);
        image(this.image,pos.x, pos.y,50,50);
    }
}