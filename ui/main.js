console.log('Loaded!');
var img = document.getElementById ('madi');
var pos = 0;
var x = 2 ;
var moveright = function () {
    if (pos < 200 ) {
        pos = pos + x ;
     img.style.marginLeft = pos + 'px' ;
    }
    else {
        x = -2 ;
        pos = pos - 2 ;
    }
    
};

img.onclick = function () {
   
    
    var interval = setInterval (moveright,50) ;
};

