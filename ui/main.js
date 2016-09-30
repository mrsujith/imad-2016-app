console.log('Loaded!');
var img = document.getElementById ('madi');
var pos = 0;

var moveright = function () {
     pos = pos + 5 ;
     img.style.marginLeft = pos + 'px' ;
}
img.onclick = function () {
   
    
    var interval = setInterval (moveright,50) ;
};

var img1 = document.getElementById ('madi1');
var pos = 0;

var moveleft = function () {
     pos = pos + 10 ;
     img1.style.marginright = pos + 'px' ;
}
img.onclick = function () {
   
    
    var interval1 = setInterval (moveleft,100) ;
};