
var Links = {
    setColor:function(color){
        var alist = document.querySelectorAll('a');
                        var i = 0;
                        while(i < alist.length){
                            alist[i].style.color = color;
                            i = i + 1
                        }
    }
}            
var body = {
    setColor:function(color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}
            function nightdayHandeler(self){
                
                var target = document.querySelector('body')
                    if(self.value === 'night'){
                        body.setBackgroundColor('black');
                        body.setColor('white'); 
                        document.getElementById('grid').style.borderColor = 'white' ;
                        document.getElementById('article').style.borderColor = 'white' ; 
                        self.value = 'day' ;
                        
                        Links.setColor('powderblue')
                    } else{body.setBackgroundColor('white');
                        body.setColor('black');
                        document.getElementById('grid').style.borderColor = 'black' ;
                        document.getElementById('article').style.borderColor = 'black' ; 
                        self.value = 'night' ; 
                        
                        Links.setColor('black')
                        

                        } 
            }
