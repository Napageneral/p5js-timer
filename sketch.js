var counter = 0;
var timeLeft = 10;



function setup(){
	noCanvas();

	var params = getURLParams();

	if (params.minute) {
		var min = params.minute;
		timeLeft = min*60;
	}


	var timer = select('#timer');
	timer.html(convertSeconds(timeLeft-counter));

	function convertSeconds(s) {
		var min = floor(s/60);
		var sec = s%60;
		return nf(min,2) + ':' + nf(sec,2);
	}

	function timeIt() {
		counter++;
		timer.html(convertSeconds(timeLeft-counter));
		if (counter == timeLeft){
			clearInterval();
		}
	}


	setInterval(timeIt, 1000);


}
