function Laser(spos, angle) {
    this.pos = createVector(spos.x,spos.y);
    this.vel = p5.Vector.fromAngle(angle);
    this.vel.mult(10); 



    this.update = function() {
        this.pos.add(this.vel);

    }

    this.render = function() {
        push();
            stroke(255);
            strokeWeight(4);
            point(this.pos.x,this.pos.y);
        pop();
    }

    this.hits = function(ast) {
        var d = dist(this.pos.x, this.pos.y, ast.pos.x, ast.pos.y);
        if(d < ast.r){
            return true;
        }else {
            return false;
        }
    }

}