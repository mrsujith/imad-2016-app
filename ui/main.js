console.log('Loaded!');
var img = document.getElementById ('madi');
var pos = 1;
var x = 2 ;
var moveright = function () {
    if (-200 < pos < 200 ) {
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

