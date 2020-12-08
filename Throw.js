class Throw{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.17,
            length: 5
        }
        this.pointB = pointB
        this.throw= Constraint.create(options);
        World.add(world, this.throw);
        
    }
   
    fly(){
       this.throw.bodyA = null;
    }
    
    attach(body){
        this.throw.bodyA = body
    }
    display(){
        if(this.throw.bodyA){
            var pointA = this.throw.bodyA.position;
            var pointB = this.pointB;
          strokeWeight(5);
          line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
      
    }
    
}