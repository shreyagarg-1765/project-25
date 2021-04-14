class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true,
          'restitution':0,
          'friction':1,
          'density':0.1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("sprites/dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
     //var pos =this.body.position;
      imageMode(CENTER);
      fill("red");
      image(this.image,-this.eight,0, this.width, this.height);
      
    }
  };
   
  
