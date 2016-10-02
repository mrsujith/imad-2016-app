var button = document.getElementById('counter');

var counter = 0 ;

button.onclick = function () {
   
         counter = counter + 1 ;
         
         var span = document.getElementById('count') ;
         
         span.innerHTML = counter.toString();
         
    };


console.log('Loaded!');
/* var img = document.getElementById ('madi');
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
}; */



