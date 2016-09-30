console.log('Loaded!');
var img = document.getElementById ('madi');
img.onclick = function () {
    for (x=1 ; x <100 ; x++ )
    {
    img.style.marginLeft = x + 'px' ;
    }
};