class Polygon {
    constructor(x,y,width,height) {
      var options= {
         'restitution':0.3,
         'friction':2,
         'density':1.3
        }
  
      this.polygonimage = loadImage("Screenshot_1.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      
      World.add(world,this.body);
  
    }
    display(){
      var pos = this.body.position;
  
      push();
  
      imageMode(CENTER);
      
      image(this.polygonimage,pos.x,pos.y,this.width,this.height);
      
      pop();
    }
    };
     