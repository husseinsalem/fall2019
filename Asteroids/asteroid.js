function Asteroid(_pos, _r){

    if(_pos){
        this.pos = _pos.copy();
    } else {
        this.pos = createVector(random(wc),random(hc));

    }

    if(_r){
        this.r = _r * 0.5;
    } else {
        this.r = random(10,50);
    }


   
    this.numV = floor(random(4,13));
    this.offset = [];
    this.vel = p5.Vector.random2D();

    for (var i=0;i<this.numV;i++){
        this.offset[i] = random(-this.r,this.r);
    }

    this.update = function() {
        this.pos.add(this.vel);

        
    }

    this.breakup = function(){
        var newA = [];
        newA[0] = new Asteroid(this.pos, this.r);
        newA[1] = new Asteroid(this.pos, this.r);
        return newA
        }

    this.render = function() {
        push();
        
        noFill();
        stroke(255);   
        translate(this.pos.x,this.pos.y); 
        //ellipse(0,0,this.r * 2);
       
        beginShape();
        for(i=0;i<this.numV;i++){
            var angle= map(i,0,this.numV,0,2*PI);
            var x = (this.offset[i] + this.r)*cos(angle);
            var y = (this.offset[i] + this.r)*sin(angle);

            vertex(x,y);
        }
        endShape(CLOSE);

        pop();
    }

    this.edges = function(){
        if (this.pos.x > wc + this.r){
             this.pos.x= -this.r;
        }else if (this.pos.x < 0 -this.r){
            this.pos.x = wc + this.r;
        }
        if (this.pos.y > hc + this.r){
            this.pos.y= -this.r;
       }else if (this.pos.y < 0 -this.r){
           this.pos.y = hc + this.r;
       }

    }


}