      var img = document.getElementById ('madi');
      var pos = 2;
      var x = 2 ;
      var moveright = function () {
    if ( pos < 400 && -400 < pos ) {
         pos = pos + x ;
     img.style.marginLeft = pos + 'px' ;
    }
    else {  x = - x ;
        pos = pos+ x ;
    }
};

img.onclick = function () {
        var interval = setInterval (moveright,20) ;
}; 
     
     
     function todoList() {
            var item = document.getElementById("todoInput").value ;
            var text = document.createTextNode(item);
            var newItem = document.createElement("li");
            newItem.appendChild(text);
            document.getElementById("todoList").appendChild(newItem);
        }


        
                                


