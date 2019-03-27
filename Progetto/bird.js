function Bird(){
    this.y = height/2;
    this.x = 64;
    this.gravity = 0.25;
    this.velocity = 0;
    
    this.show = function(){
        image(b, this.x, this.y, 40, 40);
    }
    
    this.up = function(){
        this.y = constrain(height-(freq*2), 0, height);
        
    }

    this.update = function(){
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;
        
        if(this.y > height){
            this.y = height;
            this.velocity = 0;
        }
        if(this.y < 0){
            this.y = 0;
            this.velocity = 0;
        }
    }
}