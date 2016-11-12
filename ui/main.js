var comment123 = [] ;
       
       function comment() {
      
          var response = new XMLHttpRequest();
   
          response.onreadystatechange = function () {
             if (response.readyState === XMLHttpRequest.DONE) {
                  if (response.status === 200) {
                       var comment1 = response.responseText;
                       comment123.push(comment1);
                 
                 var list = '' ; 
           for (i=0;i < comment123.length ; i++) {
       list += "<li>" +  "comment " + "  . " + comment123[i] + "..." ;
                                                 }
           
       var ul = document.getElementById('orderlist');
          ul.innerHTML = list    }
                                                }        }; 
     var submit = document.getElementById('commentinput').value;
     
   response.open('GET','http://mrsujith.imad.hasura-app.io/submit-name/'+ submit,true);
     response.send(null);
     
         }
                           
        function todoList() {
            var item = document.getElementById("todoInput").value ;
            var text = document.createTextNode(item);
            var newItem = document.createElement("li");
            newItem.appendChild(text);
            document.getElementById("todoList").appendChild(newItem);
        }
        
        
                                
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

