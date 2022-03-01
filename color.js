
            function nightdayHandeler(self){
                
                var target = document.querySelector('body')
                    if(self.value === 'night'){
                        target.style.backgroundColor = 'black';
                        target.style.color = 'white'; 
                        document.getElementById('grid').style.borderColor = 'white' ;
                        document.getElementById('article').style.borderColor = 'white' ; 
                        self.value = 'day' ;
                        
                        var alist = document.querySelectorAll('a');
                        var i = 0;
                        while(i < alist.length){
                            alist[i].style.color = 'blue';
                            i = i + 1
                        }

                    } else{target.style.backgroundColor = 'white';
                        target.style.color = 'black';
                        document.getElementById('grid').style.borderColor = 'black' ;
                        document.getElementById('article').style.borderColor = 'black' ; 
                        self.value = 'night' ; 
                        
                        var alist = document.querySelectorAll('a');
                        var i = 0;
                        while(i < alist.length){
                            alist[i].style.color = 'black';
                            i = i + 1
                        }

                        } 
            }
