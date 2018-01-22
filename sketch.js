var currentTime=0;
var timeLeft = 10;



function setup(){
	noCanvas();

	startTime = millis();

	var params = getURLParams();

	if (params.minute) {
		var min = params.minute;
		timeLeft = min*60;
	}


	var timer = select('#timer');
	timer.html(convertSeconds(timeLeft-currentTime));

	function convertSeconds(s) {
		var min = floor(s/60);
		var sec = s%60;
		return nf(min,2) + ':' + nf(sec,2);
	}

	function timeIt() {
		currentTime = floor((millis()-startTime)/1000);
		timer.html(convertSeconds(timeLeft-currentTime));
		if (currentTime == timeLeft){
			clearInterval(interval);
		}
	}


	interval = setInterval(timeIt, 1000);


}
