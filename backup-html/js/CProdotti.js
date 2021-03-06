$(document).ready(function(){
    
    quantity = new Object();
    var TotalCounter=0;
    
    $('#sublink').show("slow");
    $('.sidelink').mouseover(function(){
        $(this).css("color","black")
    }).mouseout(function(){
        $(this).css("color","white")
    })
    
    $(function(){
        $(window).scroll(reloadCarrello);
        reloadCarrello();
        dd();
    });
    
    $(document).on("click",".button",function(e) {
        var button = $(e.target);
        var oldValue = button.parent().find("input").val();
        var key = button.parent().find("input").attr("name");
        if (button.text() == "+") {
            ++oldValue;
            ++quantity[key];
        } else {
            if (oldValue >= 1) {
                --oldValue;
                --quantity[key];
            }
        }
        button.parent().find("input").val(oldValue);
    });
    
    $('.sidelink').mouseover(function(){
        $(this).css("color","black")
    }).mouseout(function(){
        $(this).css("color","white")
    })
    
    function reloadCarrello() {
        var window_top = $(window).scrollTop();
        var div_top = $('#ancora').offset().top;
        var right = ($(window).width() - ($("#banner").offset().left + $("#banner").outerWidth()));
        if (window_top > div_top){
            $('#boxC').addClass('top')
            $('.top').css("right",right);
        }
        else
            $('#boxC').removeClass('top');
    }
    
    function cancel(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        return false;
    }
    
    function dd(){

        var drop = document.querySelector('#boxC');
        var drag = document.querySelectorAll('.vini');
            
        addEvent(drag, 'dragstart', function (e) {
            e.dataTransfer.effectAllowed = 'move'; // only dropEffect='copy' will be dropable
            e.dataTransfer.setData('Text', $(this).attr("alt")); // required otherwise doesn't work
        });
        // Tells the browser that we *can* drop on this target
        addEvent(drop, 'dragover',function(e){
            //$(e.target).css("background-color","white")
            e.target.className = "dragOver";
            //showMessage("Rilascia");
            e.preventDefault();
            return false;
        }, false);
            
        //addEvent(drop, 'dragover',cancel)
            
        addEvent(drop, 'dragenter',function(e){
            //$(e.target).css("background-color","white")
            e.target.className = "dragOver";
            //showMessage("Rilascia");
            e.preventDefault();
            return false;
        }, false);

        //addEvent(drop, 'dragenter',cancel);
        
        addEvent(drop,'dragleave',function(e){
            e.target.className = "";
            e.preventDefault();
            return false;
        }, false);

                
            
        addEvent(drop, 'drop', function (e) {
            ++TotalCounter;
            e.target.className = "";
            if (e.preventDefault) e.preventDefault(); // stops the browser from redirecting off to the text.
            e.dataTransfer.dropEffect = 'move';
            var t = e.dataTransfer.getData('Text');
            if (!quantity.hasOwnProperty(t.toString())){
                quantity[(t.toString())] = 1;
                $('<div class="res" align="center">')
                .append('<label for="name">'+t+'</label>')
                .append('<input type="text" name = "'+t+'" id="'+t.replace(/ /g,"")+'" value="'+quantity[(t.toString())]+'"/>')
                .append('<div class="button inc">+</div><div class="button dec">-</div></div>')
                .appendTo("#resoconto") ;
            }else{
                var valore = ++quantity[(t.toString())];
                $("#"+t.replace(/ /g,"")).attr("value",valore);
                
            }
            showMessage("Elemento Aggiunto","#messagebox");
            (TotalCounter==1)?$("#elCounter").text("1 prodotto inserito"):$("#elCounter").text(TotalCounter+" prodotti inseriti");
            return false;
        });
       
    }
    
    $("#check").click(function(){
        var right = ($(window).width() - ($("#banner").offset().left + $("#banner").outerWidth()));
        var top = $("#banner").offset().top
        $("#popupScontrino").css("right",right);
        $("#popupScontrino").css("top",top);
        if(TotalCounter>0){
            $('.overlay').fadeIn('fast');
            $('#popupScontrino').show('slow');
        }else{
            showMessage("Nessun prodotto nel carrello...","#chartEmpty")
        }
    })
    $('#closepp').click(function(){
        updateCounter();
        $('.overlay').fadeOut('fast');
        $('#popupScontrino').hide();
    })
    
    $('.overlay').click(function(){
        updateCounter();
        $('.overlay').fadeOut('fast');
        $('#popupScontrino').hide();
    })
    
    function showMessage(message,element){
        $(element).stop(true).hide().text(message)
        .fadeIn('slow')
        .delay(900)
        .fadeOut('slow');
    }
    
    function updateCounter(){
        var tot=0;
        for (var x in quantity){
            tot+= quantity[x];
        }
        if(tot>=1)
            (tot==1)?$("#elCounter").text("1 prodotto inserito"):$("#elCounter").text(tot+" prodotti inseriti");
        TotalCounter=tot;
    }
    
    $(document).on("change","input",function(){
        if( Math.floor($(this).val()) == $(this).val() && $.isNumeric($(this).val())) 
            quantity[$(this).attr("name")] = parseInt(($(this).val()));
        else
            $(this).attr("value",quantity[$(this).attr("name")]);
    })
    
    $('.elencoshort').click(function(e){
        var left = $("#sidebar").offset().right;
        var top = $("#banner").offset().top + ($("#banner").height()/2);
        $("#popupP").css("top",top);
        $("#popupP").css("left",left);
        var img = $(this).find("img");
        var nome = $(this).find('h4').text();
        if ( nome  != "" && img != "")
        {
            $('<div id="closepp"><a>Chiudi</a></div>').appendTo("#popupP")
            $('<div id="leftblock"><div>Nome: <h3>'+nome+'</h3></div>')
            .append('<div>Descrizione: </div></div>').appendTo("#popupP");
            $('<div id="rightblock"><img src="'+img.attr("src")+'" width=95 height=380 /></div>').appendTo("#popupP");
        }
        $('.overlay').fadeIn('fast');
        $('#popupP').show('slow');
    })
    
    $(document).on('click','#closepp',function(){
        $("#popupP").get(0).innerHTML = null;
        $('.overlay').fadeOut('fast');
        $('#popupP').hide();
    })
    
    $('.overlay').click(function(){
        $(".popup").get(0).innerHTML = null;
        $('.overlay').fadeOut('fast');
        $('.popup').hide();
    });

});