 $(document).ready(function(){
        
        var person = new Array();
        
        $.getJSON( "json/event_list.json", function( data ) {
        
           console.log( data );
            
           for (i = 0; i < data.length; i++ ) {
                
                $('.data-wrap').append('<h2 id="' + data[i]["id"] + '">' + data[i]["title"] + '</h2>');
                $('.data-wrap').append( '<img src="' + data[i]["image"][0] + '" />' );    
           }
            
            
        });
     
        
    });
    