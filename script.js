var bell = document.getElementById("bell");
var timerId = null;

function scheduleBell(period) {
	var timeInput = document.getElementById(period);
	var timeValue = timeInput.value;
	
	if (timeValue) {
        const currentTime = new Date();
        const dateString = `${currentTime.toISOString().slice(0, 10)}T${timeValue}:00`;
        const dateObject = new Date(dateString);
        console.log(dateObject)
		localStorage.setItem(period, dateObject);
		alert("Bell scheduled for " + timeValue + ".");
	}
}

function startBell() {
	var period1Time = localStorage.getItem("period1");
	var period2Time = localStorage.getItem("period2");
	var period3Time = localStorage.getItem("period3");
	
	if (period1Time && period2Time && period3Time) {
		var now = new Date();
		var period1Date = new Date(now.toDateString() + " " + period1Time);
		var period2Date = new Date(now.toDateString() + " " + period2Time);
    }}

var  audio = new Audio('mixkit-classic-alarm-995.wav');


function playAudio() {

        audio.play();


      } 

function stopAudio() {

        audio.pause();
        audio.currentTime = 0;
}   


setInterval(function() {
    var now = new Date();
    var period1Time = localStorage.getItem("period1");
    console.log(period1Time);
    let period1Date = new Date(period1Time);
    period = period1Date.toLocaleTimeString().slice(0,5)
    console.log(period1Date.toLocaleTimeString().slice(0,5));
    if ( period  === now.toLocaleTimeString().slice(0,5)) {
        playAudio();
        setTimeout(function() {
            stopAudio();
        }
        , 10000);
    }

    var period2Time = localStorage.getItem("period2");
    console.log(period2Time);
    let period2Date = new Date(period2Time);
    period2 = period2Date.toLocaleTimeString().slice(0,5)
    console.log(period1Date.toLocaleTimeString().slice(0,5));
    if ( period2  === now.toLocaleTimeString().slice(0,5)) {
        playAudio();
        setTimeout(function() {
            stopAudio();
        }
        , 10000);
    }

    var period3Time = localStorage.getItem("period3");
    console.log(period3Time);
    let period3Date = new Date(period3Time);
    period3 = period3Date.toLocaleTimeString().slice(0,5)
    console.log(period3Date.toLocaleTimeString().slice(0,5));
    if ( period3  === now.toLocaleTimeString().slice(0,5)) {
        playAudio();
        setTimeout(function() {
            stopAudio();
        }
        , 10000);
    }
 
}, 1000);





