class Mango{
    constructor(x, y) {
        var options = {
            'isStatic' : true ,
            'friction':0.4,
            'density':0.7
        }
        this.body = Bodies.rectangle(x, y, 43,43, options);
        this.image = loadImage("Plucking mangoes/mango.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 40,40);
        pop();
      }
}