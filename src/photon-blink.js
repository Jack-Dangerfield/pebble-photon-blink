var UI = require('ui');							//these lines initialize some of the commands we are going to use later
var ajax = require('ajax');
var Vector2 = require('vector2');

//These next 2 lines need to be edited with your unique device ID and access token
var DEVICE_ID = "XXXXXXXXXXXXXXXXXXXXXXXX";//from build.particle.io
var ACCESS_TOKEN = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";//from build.particle.io
//See this intructable for help on finding these

var main_window = new UI.Window();//this line creates our window

//BUTTON TEXT

//this is going to be our on button
var txtOnLabel = new UI.Text({			//this is going to be our on button
    position: new Vector2(0, 15),		//this determines where our button will be
    size: new Vector2(144, 30),
    font: 'Gothic 28 Bold',					//this determines what the text will look like
    text: 'ON',											//this is what you button says
    textAlign: 'center',						
    color: 'black'									//this determines the color of the text(feel free to change it if you are using a color screen)
});

//this is going to be our off button
var txtOffLabel = new UI.Text({			
    position: new Vector2(0, 95),
    size: new Vector2(144, 30),
    font: 'Gothic 28 Bold',
    text: 'OFF',
    textAlign: 'center',
    color: 'black'
});

//MAIN WINDOW

//Now to put all of those together
main_window.backgroundColor('white');				//this sets the backround to white
main_window.add(txtOnLabel);								//these lines add our buttons to the screen
main_window.add(txtOffLabel);
main_window.show();													//this command opens the main window, it will trigger on start-up


//FUNCTIONS

function Toggle(function_name,function_value){					//this is the function that will be called when a watch button is pressed
  var URL = 'https://api.particle.io/v1/devices/' + DEVICE_ID + '/' + function_name +'?access_token=' + ACCESS_TOKEN;
	//this url is directly linked to your photon
	//the function_name gets named below
  ajax(																			//this command allows us to send a String to that URL
    {
      url: URL,															//this is the URL from above
      method: 'post',	
      type: 'json',
      data: { "args": function_value}				//this is the String that we will send, function_value gets named below
    }
  );
}



//BUTTON ACTIONS

//this will be our on button
main_window.on('click', 'up', function() {			//this action triggers when the up button on the watch is triggered
  Toggle('led','ON');														//these parameters become function_name and function_value above
});

//this will be our on button
main_window.on('click', 'down', function() {		//this action triggers when the down button on the watch is triggered
  Toggle('led','OFF');
});
