//Radial Convergence of actors who worked together

let actors;

function preload(){
    actors = loadTable('IMDB-Movie-Data-SHORT.csv','csv','header');
    

}

let allActors = [];
var indexOfActor;
var inteval;
var h=700;
var w = 700;

function setup(){

   createCanvas(w,h);
   background(240);
   noStroke();
   ellipse(w/2,h/2,500,500);

   
//get the actor details
    var data = actors.getColumn('Actors');
 
    for(i=0;i<data.length;i++){

        allActors.push(data[i].split(/,/));
       // print(data[i]);
    }
    allActors = allActors.flat();
	//to get non repeating values
    allActors = [...new Set(allActors)];

//draw the points around the circle
    interval = 2*PI/allActors.length;
    //print(interval);
    
    stroke(255,200,200,100);
  //make connections
    for(i=0;i<data.length;i++){

        for(k=0;k<allActors.length;k++){

       
            indexOfActor = data[i].indexOf(allActors[k]);
        // print(indexOfActor);
            if(indexOfActor == -1 || indexOfActor == 0){
            } else{
                //print(data[i],allActors[k]);
                //print(actors.getColumn('Title')[i]);

                var temp = data[i].split(/,/);
                for(j=0;j<temp.length;j++){
                    var thing = allActors.indexOf(temp[j]);
                    //print(thing);

                    if(thing != k){
                        var x1=250*cos(interval*k) +w/2;
                        var y1 =250*sin(interval*k) +h/2;

                        var x2=250*cos(interval*thing) +w/2;
                        var y2 =250*sin(interval*thing) +h/2;

                        //print(x1,y1,x2,y2);

                        line(x2,y2,x1,y1);  

                    }

                }

            }
        }

    }
    noFill();
    stroke(0,0,0,100);

    for(i=0;i<allActors.length;i++){
        var x=250*cos(interval*i) +w/2;
        var y =250*sin(interval*i) +h/2;
		 push();
                        
		var name = allActors[i];

		translate(x,y);
		ellipse(0,0,2,2);
		rotate(interval*i);
		textSize(5);
		text(name, 5,5);
		pop();
      
  
  }
   


  


}

function draw(){


}