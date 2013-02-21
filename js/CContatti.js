/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){

    var map = initializeMap();
    geocoder = new google.maps.Geocoder();
    geocoder.geocode(
    {
        'address': "Via garigliano, San Severo 71016 (FG)"
    },
    function(results, status) {
        var pos = results[0].geometry.location
        map.setCenter(pos);
        infowindow.setContent(infoHTML());
        infowindow.open(map, marker);
    }   
    );
    var markerPos = new google.maps.LatLng(
        parseFloat(41.688931),
        parseFloat(15.387987)
        );
    var marker = new google.maps.Marker({
        'position': markerPos,
        'map':map,
        'title': "Azienda Agricola D'Inzeo",
        'address': "Via Zannotti 166 San Severo - 71016 (FG)",
        'tel':"Tel/Fax  +39 0882 224160",
        'mobile': "+39 328 36 08 075",
        'email':"emanueladinzeo@hotmail.it",
        'infoHTML' : infoHTML
    });
    
    
    var infowindow = new google.maps.InfoWindow({
        
        maxWidth: 300
    //pixelOffset: new google.maps.Size(-150, 50)
    });
    

    google.maps.event.addListener(marker, 'click', function(){
        infowindow.setContent(infoHTML());
        infowindow.open(map, marker);
    });
    
    function infoHTML(){
        var output; 
        output= '<div align="center">'+marker.title+'</div>'
        +'<ul>'
        +'<li>'+marker.address+'</li>'
        +'<li>'+marker.tel+'</li>'
        +'<li>'+marker.mobile+'</li>'
        +'<li>'+marker.email+'</li>'
        +'</ul>';

        return output;
    }

    
    
    function initializeMap(){
        var myOptions = {
            zoom: 16,
            center: new google.maps.LatLng(41.688931,15.387987),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            
        };
        return new google.maps.Map($('#map_canvas')[0], myOptions);
    }


});