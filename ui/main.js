console.log('Loaded!');
var img = document.getElementById ('madi');
var pos = 0;

var moveright = function () {
    if (pos < 200 ) {
        pos = pos + 1 ;
     img.style.marginLeft = pos + 'px' ;
    }
    else {
        pos = 0 ;
    }
    
};

img.onclick = function () {
   
    
    var interval = setInterval (moveright,50) ;
};

