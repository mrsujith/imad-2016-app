console.log('Loaded!');
var img = document.getElementById ('madi');
img.onclick = function () {
    for (x=10 ; x <100 ; x+= 10 )
    {
    img.style.marginLeft = x + 'px' ;
    }
}