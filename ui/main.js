var button = document.getElementById('counter');

 button.onclick = function () {
   var response = new XMLHttpRequest();
   
    response.onreadystatechange = function () {
       if (response.readyState === XMLHttpRequest.DONE) {
           if (response.status === 200) {
               
              var count11 = response.responseText;
              var span = document.getElementById('count');
              span.innerHTML = count11.toString();
                                        }
                                                         }
       
                                               };
   
          response.open('GET','http://mrsujith.imad.hasura-app.io/counter',true);
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
    else {  x = - x ;
        pos = pos+ x ;
    }
};

img.onclick = function () {
        var interval = setInterval (moveright,20) ;
}; 

