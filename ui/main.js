console.log('Loaded!');
var img = document.getElementById ('madi');
var pos = 0;

var moveright = function () {
    if (pos < 300 ) {
        pos = pos + 5 ;
     img.style.marginLeft = pos + 'px' ;
    }
    else {
        pos = 0 ;
    }
    
};

img.onclick = function () {
   
    
    var interval = setInterval (moveright,50) ;
};

