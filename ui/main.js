console.log('Loaded!');
var img = document.getElementById ('madi');
var pos = 0;
img.onclick = function () {
    pos = pos + 25 ;
    {
    img.style.marginLeft = pos + 'px' ;
    }
};