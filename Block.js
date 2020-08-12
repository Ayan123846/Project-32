class Block {
    constructor(x, y, width, height) {
      var options = {
         //isStatic : true,
        'restitution':0.4,
        'friction':6,
        'density':1.0
      }
      this.block = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visiblity = 255;
      
      World.add(world,this.block);
    }
    
    score(){
      if(this.visiblity < 0 && this.visiblity >- 105){
        score++;
      }
    }

    display(){
      if(this.block.speed < 5){
        var pos = this.block.position;
      
        rectMode(CENTER);
  
        strokeWeight(4);
        stroke("black");
  
        rect(pos.x,pos.y,this.width, this.height);
  
       }
       else{
         World.remove(world,this.block);
         push();
         this.visiblity = this.visiblity -5;
         tint(255,this.visiblity);
         pop();
       }
    }
  };
  