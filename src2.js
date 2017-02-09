
  var timer_is_on = true;
var sec=600,
  countDiv = document.getElementById('countdown'),
      

  secondPass,

  countdown = setInterval(function(){
    secondPass()

  } ,1000);
  
  function secondPass() {
    
    var min = Math.floor(sec/60);
    remsec = sec% 60;

    if (remsec < 10) {
      remsec = "0" + remsec;

    }
    if (min < 10) {
      min = "0" + min;

    }
      

    countDiv.innerHTML = min + ':' + remsec;
    if (sec > 0){

      sec = sec -1 ;
    }else{
      clearInterval(countdown);
      countDiv.innerHTML = "Done";

    }
    
}


function yts(){
 sec = document.getElementById("field").value;
}

function reset (){
    sec=600;
}
 function startCount() {
    if (!timer_is_on) {
        timer_is_on = true;
       setInterval(function(){
    secondPass()

  } ,1000);
    }

}

function stopCount() {
    clearInterval(countdown);
    timer_is_on = false;
}



