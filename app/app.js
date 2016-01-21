$(document).ready(function(){
	$('#fullpage').fullpage({
				sectionsColor: ['#446cb3', '#e4f1fe', '#4183d7','#81cfe0', '4ecdc4', '#whitesmoke'],
				anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage','5thpage', 'lastPage'],
				menu: '#menu',
				scrollingSpeed: 1000,
                css3: true,
                afterLoad: function(anchorLink, index){
					if(index == 1){
						$('#section0').fadeIn('slow', function() {
                            $(this).addClass("lightOn");
                        });
					}
                    if(index == 2){
                        $('#section1').find('p').first().fadeIn(100, function(){
                        $('#section1').find('p').last().fadeIn(100);
                        });;
                        
                        $('#section1').find('h1').first().fadeIn(100, function(){
                        $('#section1').find('h1').last().fadeIn(100);
                        });;  
                    }
                    
                  },
                 onLeave: function(index, nextIndex, direction){
                     
                    if (index == 1 && direction == 'down'){
						 $('#section0').removeClass("lightOn");
                         
                          $('#section1').delay(200).animate({
							right: '0%'
						}, 1000, 'easeOutExpo');
                        
                      
					} 
                 }
			});

});