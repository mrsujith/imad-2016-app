console.log('Loaded!');
var img = document.getElementById ('madi');
var pos = 0;

var moveright = function () {
    if (pos < 200 ) {
        pos = pos + 2 ;
     img.style.marginLeft = pos + 'px' ;
    }
    else {
        pos = - 200 ;
    }
    
};

img.onclick = function () {
   
    
    var interval = setInterval (moveright,50) ;
};

