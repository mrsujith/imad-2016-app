console.log('Loaded!');
var img = document.getElementById ('madi');
var pos = 2;
var x = 2 ;
var moveright = function () {
    if ( pos < 400 && -400 < pos ) {
       
          pos = pos + x ;
     img.style.marginLeft = pos + 'px' ;
    }
    else {
        x = - x ;
        pos = pos+ x ;
    }
    
};

img.onclick = function () {
   
        var interval = setInterval (moveright,20) ;
};



var Art = document.getElementById ('Art1');

var art11 = 0 ;

Art.onclick = function () {
   
         art11 = art11 + 1 ;
         
         var span = document.getElementById('count1') ;
         
         span.innerHTML = art11.toString();
         
         
};