

function setup() {
  //set Canvas to size of window
  
  createCanvas(windowWidth, windowHeight);

  //Intoduction Page
    background(200);
    

  button1 =createButton('Beijing');
  button1.position(25, 20);
  //Load Data when Button 1 is Pressed
  button1.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Beijing%2C%20Beijing%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });


  button2 = createButton('Chongqing');
  button2.position(85, 20);
  //Load Data when Button 2 is Pressed
  button2.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Chongqing%2C%20Chongqing%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  

  button3 = createButton('Shanghai');
  button3.position(166, 20);
  //Load Data when Button 3 is Pressed
  button3.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Shanghai%2C%20Shanghai%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  

  button4 = createButton('Changchun');
  button4.position(238, 20);
  //Load Data when Button 4 is Pressed
  button4.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Changchun%2C%20Changchun%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  button5 = createButton('Chengdu');
  button5.position(320, 20);
  //Load Data when Button 5 is Pressed
  button5.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Chengdu%2C%20Chengdu%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
}


function weatherLoaded(data) {
  var temp = data.query.results.channel.item.condition.temp-32;
  var humidity = data.query.results.channel.atmosphere.humidity;
  var visibility = data.query.results.channel.atmosphere.visibility;
  var vis = floor(visibility)
  //forcast data
  var tempD2H = data.query.results.channel.item.forecast[0].high;
  var tempD2L = data.query.results.channel.item.forecast[0].low;

// HOW to get avarage of tempD2H+tempD2L?!?!
//var tempforcast1 = ((tempD2H+tempD2L)/2);
 



//print data to the console
//print(temp);
//print(windSpeed);
print(tempD2H);
print(tempD2L);
//print(tempforcast1);


  background(200);

  //add data info in bottom left corner of the screen
  //for more information about using text in a P5js sketch visit:
  //http://creative-coding.decontextualize.com/text-and-type/
  
  textSize(15);
  textFont("Helvetica");
  textAlign(RIGHT);
   
    fill(255,0,0);
    text("temperature" + temp, windowWidth/2, windowHeight - 60);
     
    fill(0,0,255)
    text("humidity  "+ humidity, windowWidth/2, windowHeight - 40);

    fill(255);
    text("visibility" + visibility, windowWidth/2, windowHeight - 20);
    // text(windangle, 30 windowHeight);

  //create ellipse and set width and height of the ellipse to windSpeed data
  noStroke();
  fill(200+temp,0,0);
 
  rect(25, windowHeight/2.5,100,100,10);
  
   noStroke();
  fill(0,0,humidity*2.8);
  noStroke();
  rect(150, windowHeight/2.5,100,100,10);
  
   //create ellipse and set width and height of the ellipse to temp data
  fill(220+vis);
 
  rect(275, windowHeight/2.5,100,100,10);

 

}