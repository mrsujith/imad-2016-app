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
       list += "<li>" + "  . " + comment123[i-1] + "..." ;
                                                 }
           
       var ul = document.getElementById('orderlist');
          ul.innerHTML = list    }
                                                }        }; 
     var submit = document.getElementById('commentinput').value;
     
   response.open('GET','http://mrsujith.imad.hasura-app.io/submit-name/'+ submit,true);
     response.send(null);
     
         }
                           
   
        
