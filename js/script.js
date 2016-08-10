var time = 0;
var running = 0;


function startPause(){
	if(running == 0){

		running = 1;
		increment();
		document.getElementById('start').innerHTML = "Pause";
	} else{
		running = 0;
		document.getElementById('start').innerHTML = "Continue";
	}
};

function reset(){
	
	time = 0;
	running = 0;
	document.getElementById('myTimer').innerHTML = "00:00:00";
	document.getElementById('tenth').innerHTML = "000";
	document.getElementById('start').innerHTML = "Start";

};

function increment(){
	if(running == 1){
		setTimeout(function(){
			time++;
			var sec = Math.floor(time*4/1000%60);
			var min = Math.floor(time*4/1000/60) %60;
			var hour = Math.floor(time*4/(1000*60*60)% 24);
			var tenth = Math.floor(time*4%1000);
			if(sec < 10){
				sec = "0" + sec;
			}
			if(min < 10){
				min = "0" + min;
			}
			
			if(hour < 10){
				hour = "0" + hour;
			}
			
			document.getElementById('myTimer').innerHTML = hour + ':' + min + ':' + sec;
			document.getElementById('tenth').innerHTML = tenth;
			increment();

		}, 1)};
	}




document.getElementById('start').addEventListener('click', startPause);

document.getElementById('stop').addEventListener('click', reset);


























// var time = document.getElementById('myTimer').innerHTML;
// var re = /\s*:\s*/;
// var timerList = time.split(re);


// var buttonStart = document.getElementById('start');
// function changeButton(){
//  if (buttonStart.innerHTML == 'Pause'){
//    buttonStart.innerHTML = 'Continue'
//  } else{
//    buttonStart.innerHTML = 'Pause';
//  }
//    }
    
// buttonStart.addEventListener('click', changeButton);





// function startTimer(){
// 	var myTimer = document.getElementById('myTimer');
// 	var time = myTimer.innerHTML;


// 	var arr = time.split(' : ');
// 	var hour = arr[0];
// 	var min = arr[1];
// 	var sec = arr[2];
// 	if (sec < 10) sec = '0'+ sec;
// 	if (min < 10) min = '0'+ min;
// 	if (hour < 10) hour = '0'+ hour;
// 	for (sec=0; sec<60; sec++){
// 		myTimer.innerHTML = hour+":"+min+":"+sec;
//     setTimeout(startTimer, 1000);
// 	}




// }
// startTimer()


 // function startTimer() {
 //    var my_timer = document.getElementById("my_timer");
 //    var time = my_timer.innerHTML;
 //    var arr = time.split(":");
 //    var h = arr[0];
 //    var m = arr[1];
 //    var s = arr[2];
 //    if (s == 0) {
 //      if (m == 0) {
 //        if (h == 0) {
 //          alert("Время вышло");
 //          window.location.reload();
 //          return;
 //        }
 //        h--;
 //        m = 60;
 //        if (h < 10) h = "0" + h;
 //      }
 //      m--;
 //      if (m < 10) m = "0" + m;
 //      s = 59;
 //    }
 //    else s--;
 //    if (s < 10) s = "0" + s;
 //    document.getElementById("my_timer").innerHTML = h+":"+m+":"+s;
 //    setTimeout(startTimer, 1000);