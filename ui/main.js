console.log('Loaded!');
var img = document.getElementById ('madi');
var pos = 2;
var x = 2 ;
var moveright = function () {
    if ( pos < 100 ) {
        pos = pos + x ;
     img.style.marginLeft = pos + 'px' ;
    }
    else {
        x = -1 * x ;
        pos = pos+ x ;
    }
    
};

img.onclick = function () {
   
    
    var interval = setInterval (moveright,50) ;
};

