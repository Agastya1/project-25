class trash
{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 213;
        this.thickness = 20;
        this.angle = 0;
        this.bottomBody = Bodies.rectangle(this.x, this.y, this.width, this.thickness, {isStatic : true})
        this.leftBody = Bodies.rectangle(this.x - this.width/2, this.y - this.height/2,this.thickness, this.height, {isStatic : true})
        Matter.Body.setAngle(this.leftBody, this.angle);
        this.rightBody = Bodies.rectangle(this.x + this.width/2, 600    ,this.thickness, this.height, {isStatic : true})
        Matter.Body.setAngle(this.rightBody, this.angle);
       this.image = loadImage("dustbingreen.png");
        World.add(world, this.bottomBody);
        World.add(world, this.rightBody);
        World.add(world, this.leftBody);
    }
    display(){
        var bottompos = this.bottomBody.position;
        var rightpos = this.rightBody.position;
        var leftpos = this.leftBody.position;

        push();
        translate(leftpos.x, leftpos.y);
        rectMode(CENTER)
        angleMode(RADIANS);
        fill("red");
        stroke(255);
        rotate(this.angle);
      rect(0,0,this.thickness, this.height);
       
        pop()
        push();
        translate(rightpos.x, rightpos.y);
        rectMode(CENTER)
        angleMode(RADIANS);
        fill("red");
        stroke(255);
        rotate(-1*this.angle);
        rect(0,0,this.thickness, this.height-20);
       
        pop()
        push();
        translate(bottompos.x, bottompos.y);
        imageMode(CENTER)
        angleMode(RADIANS);
        fill("red");
        stroke(255);
        image(this.image, 0,height/2,this.width, this.height/2)
         rect(0,0,this.width, this.thickness);
       
        pop()
    }
}