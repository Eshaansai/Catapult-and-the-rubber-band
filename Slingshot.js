class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        //loading the images
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //displayed the catapult images
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
                //if bird is on the right side rubber band would be thick
                if (pointA.x>220){
                    //thicker line
                    strokeWeight(7);
                    //color found using colorzilla extention
                    stroke(48,22,8);
                    line(pointA.x-25, pointA.y, pointB.x-15, pointB.y+25);
                    line(pointA.x-25, pointA.y, pointB.x+20, pointB.y+25);
                    //loaded image for the support behind the bird
                    image(this.sling3,pointA.x-30,pointA.y-15,15,30);
                }
                //if bird is on the left side rubber band would be thin
                else{
                    //thinner line
                    strokeWeight(3);
                    //color found using colorzilla extention
                    stroke(48,22,8);
                    //created rubberbands between the bird and the catapult
                    line(pointA.x-25, pointA.y, pointB.x-15, pointB.y+25);
                    line(pointA.x+25, pointA.y, pointB.x+20, pointB.y+25);
                    //loaded image for the support behind the bird
                    image(this.sling3, pointA.x-30, pointA.y-15, 15, 30)
                    //image(image,x,y,width,height)
                }
        
        }
    }
    
}