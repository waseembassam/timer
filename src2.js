


  var counttimer = setInterval(function(){myTimer()} ,1000);

  var sec = 900  ;
  var min = 900 / 60;
  
  function myTimer() {

    document.getElementById("timer").innerHTML = sec;
    sec--;
  
}

