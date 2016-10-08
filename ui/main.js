var button1 = document.getElementById('counter1');

var counter = 0 ;

button1.onclick = function () {
         counter = counter + 1 ;
         var span1 = document.getElementById('count1') ;
         span1.innerHTML = counter.toString();
     };


var button = document.getElementById('counter');

 button.onclick = function () {
     
   var response = new XMLHttpRequest();
   
    response.OnReadyStatechange = function () {
       if (response.readystate === XMLHttpResponse.Done) {
           if (response.status === 200) {
               
              var count = response.responseText();
              var span = document.getElementById('count');
              span.innerHtml = count.toString();
                                        }
           
                                                        }
       
                                                };
   
     
     response.open(GET,'http://mrsujith.imad.hasura-app.io/counter',true);
     response.send(null);
                                };
                                




 var img = document.getElementById ('madi');
var pos = 2;
var x = 2 ;
var moveright = function () {
    if ( pos < 400 && -400 < pos ) {
         pos = pos + x ;
     img.style.marginLeft = pos + 'px' ;
    }
    else {    x = - x ;
        pos = pos+ x ;
    }
};

img.onclick = function () {
        var interval = setInterval (moveright,20) ;
}; 



