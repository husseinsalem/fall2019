
function Ship(){
    this.pos = createVector(wc/2,hc/2);
    this.r = 10 // size of triangle
    this.heading = 0;
    this.rotation = 0;
    this.isBoosting = false;

    this.vel = createVector(0,0); 
    
    this.boosting = function(b){
        this.isBoosting = b;
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

    this.hits = function(ast) {
        var d = dist(this.pos.x, this.pos.y, ast.pos.x, ast.pos.y);
        if(d < this.r + ast.r){
            return true;
        }else {
            return false;
        }

    }

    this.update = function(){
        this.pos.add(this.vel);
        this.vel.mult(0.99);

        if (this.isBoosting) {
            this.boost();
        } 
    }

    this.boost= function(){
        var force = p5.Vector.fromAngle(this.heading);
        force.mult(0.05)
        this.vel.add(force);
    }

    this.render = function() {
        push();
        translate(this.pos.x,this.pos.y);
        noFill();
        stroke(255);
        rotate(this.heading + PI/2);   
        triangle(-this.r,this.r,this.r,this.r,0,-this.r)
        pop();
    }
    
    this.setRotation = function(angle){
        this.rotation = angle;
    }

    this.turn = function(){
        this.heading += this.rotation;
    }


}