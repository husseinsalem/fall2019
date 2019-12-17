// using the bike trip data to create an arc diagram of trips: each tick is a bike docking location and the height of the arc is the time the trip took
//this is a basic setup
let trips;
var stationID =[];
let indexNumberStart;
let indexNumberEnd;

//load in the trip data

function preload(){
   trips = loadTable("201910-capitalbikeshare-tripdata.csv", 'csv','header');
    stations = loadStrings("Capital_Bike_Share_Locations.csv");

}



function setup(){
    createCanvas(1024, 550);
//create baseline
    strokeWeight(10);
    line(0,400, 1024, 400);

//create tics for stations: 
    strokeWeight(1);
	
	//print(stations);
//Load the stations into an array	
	for (let i = 0; i < stations.length; i++){

    var data = stations[i].split(/,/);
    //print(data[3]);
     stationID.push(data[3]);

   }
//divide the line by the number of stations	
	var tickSpacer = 1024/stationID.length;

   		for(var i=0;i<stationID.length; i++){

    	line(i*tickSpacer, 410, i*tickSpacer, 390 );

   }

   
  

//
// only use the first 1000 trips
for (i=0;i<1000;i++){

//get the info
    let temp1 = trips.getColumn('Start station number')[i];
    let temp2 = trips.getColumn('End station number')[i];
    let dur = trips.getColumn('Duration')[i];
    dur = map(dur, 0, 2000, 350, 0); //get control
    
//dont want ther same station.... just a straight line
    if(temp1 != temp2){
      //  print(dur);
 //match the start station to the idex of the location of the station   
        indexNumberEnd = stationID.indexOf(temp2);
        indexNumberStart = stationID.indexOf(temp1);


        // make the curve
    //anchor point **indexNumberStart*tickSpacer, 400, ***indexNumberEnd*tickSpacer, 400
		
//use the bexier to make the curve
   noFill();
   stroke(255,0,0, 50);
    bezier(indexNumberStart*tickSpacer, 400,indexNumberStart*tickSpacer, dur,indexNumberEnd*tickSpacer, dur,indexNumberEnd*tickSpacer, 400);

    }
}
   
  


//    var startStation = data[4];
//    var endStation = data[6];


    
}





function draw(){


}