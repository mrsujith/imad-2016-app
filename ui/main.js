console.log('Loaded!');
var img = document.getElementById ('madi');
var pos = 0;

var moveright = function () {
     pos = pos + 100 ;
     img.style.marginLeft = pos + 'px' ;
}
img.onclick = function () {
   
    
    var interval = setInterval (moveright,10) ;
};