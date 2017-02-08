var test = QUnit.test;


test("Function `secondPass` should exist", function(t) {
  t.ok(window.secondPass,'it exists');
});

test("should return Object",function(t){
  var a = countdown ;
  t.equal(Object.prototype.toString.call(a) ,"[object Number]","it return Object")
});


QUnit.test( "secondPass async call", function(t) {
  t.expect( 1 );
 
  var a = t.async();

  setInterval(function() {
    t.ok( true, "test resumed from async operation 1" );
    a();
  }, 1000 );

});

test("when start sec more than 0, should sec --", function (t) {

  if (sec > 0){

      sec = sec -1 ;
    }

  t.ok(sec > 0,'sec --');
});

test("when click startCount , countdown start", function (t) {

  if (!timer_is_on){
    timer_is_on = 1;
    secondPass()
      
    }

  t.ok(timer_is_on = 1,'countdown start');
});


test("when click stopCount , countdown stop", function (t) {

  if (timer_is_on = 1){
    timer_is_on = 0;
    
      
    }

  t.ok(timer_is_on = 1,'countdown stop');
});

