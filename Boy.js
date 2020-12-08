class Boy{
    constructor(x,y,width, height) {
        this.width = width;
        this.height = height;
        this.image = loadImage("Plucking mangoes/boy.png");
        this.posX = this.posY = y
      }
      display(){
        image(this.image,this.posX,this.posY, this.width, this.height);
      }
}