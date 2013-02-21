$(document).ready(function(){

    $(".up").click(function(){
        $('html,body').animate({
            scrollTop: $('#outer').offset().top
        },'slow');
    })
    $(".to").click(function(){
        $('html,body').animate({
            scrollTop: $('#'+$(this).attr('name')).offset().top
        },'slow');
    })
    
    $('.elenco').click(function(e){
        var img = $(this).find("img");
        var nome = $(this).find('h4').text();
        $('<div id="closepp"><a>Chiudi</a></div>').appendTo("#popup")
        $('<div id="leftblock"><div>Nome: <h3>'+nome+'</h3></div>')
        .append('<div>Descrizione: </div></div>').appendTo("#popup");
        $('<div id="rightblock"><img src="'+img.attr("src")+'" width=95 height=380 /></div>').appendTo("#popup");
        $('#overlay').fadeIn('fast');
        $('#popup').show('slow');
    })
    
    $(document).on('click','#closepp',function(){
        $("#popup").get(0).innerHTML = null;
        $('#overlay').fadeOut('fast');
        $('#popup').hide();
    })
    
    $('.overlay').click(function(){
        $("#popup").get(0).innerHTML = null;
        $('#overlay').fadeOut('fast');
        $('#popup').hide();
    });


});

