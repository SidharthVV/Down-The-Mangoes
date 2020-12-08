class Tree{
    constructor(x, y) {
        this.image = loadImage("Plucking mangoes/tree.png");
        this. posX = x
        this.posY = y
      }
      display(){
        image(this.image,this.posX,this.posY, 600,610)
      }
}