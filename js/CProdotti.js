$(document).ready(function() {

    quantity = new Object();
    /*check whether an email has been set or not in the input box*/
    set = false;
    var TotalCounter = 0;

    $('#sublink').show("slow");
    $('.sidelink').mouseover(function() {
        $(this).css("color", "black")
    }
    ).mouseout(function() {
        $(this).css("color", "white")
    })

    $(function() {
        dd();
        $(window).scroll(reloadCarrello);

    });

    $(document).on("click", ".button", function(e) {
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

    $('.sidelink').mouseover(function() {
        $(this).css("color", "black")
    }).mouseout(function() {
        $(this).css("color", "white")
    })

    function reloadCarrello() {
        var window_top = $(window).scrollTop();
        var div_top = $('#ancora').offset().top;
        var right = ($(window).width() - ($("#banner").offset().left + $("#banner").outerWidth()));
        if (window_top > div_top) {
            $('#boxC').addClass('top')
            $('.top').css("right", right);
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

    function dropEffect() {
        var cart = $("#imgC").addClass('dragOver');
        setTimeout(function() {
            cart.removeClass('dragOver');
        }, 1000);

    }


    function dd() {

        var drop = document.querySelector('#imgC');
        var drag = document.querySelectorAll('.vini');

        addEvent(drag, 'dragstart', function(e) {
            e.dataTransfer.effectAllowed = 'move'; // only dropEffect='copy' will be dropable
            e.dataTransfer.setData('Text', $(this).attr("alt")); // required otherwise doesn't work
        });
        // Tells the browser that we *can* drop on this target
        addEvent(drop, 'dragover', function(e) {
            //$(e.target).css("background-color","white")
            e.target.className = "dragOver";
            //showMessage("Rilascia");
            e.preventDefault();
            return false;
        }, false);

        //addEvent(drop, 'dragover',cancel)

        addEvent(drop, 'dragenter', function(e) {
            //$(e.target).css("background-color","white")
            e.target.className = "dragOver";
            //showMessage("Rilascia");
            e.preventDefault();
            return false;
        }, false);

        //addEvent(drop, 'dragenter',cancel);

        addEvent(drop, 'dragleave', function(e) {
            e.target.className = "";
            e.preventDefault();
            return false;
        }, false);



        addEvent(drop, 'drop', function(e) {
            ++TotalCounter;
            e.target.className = "";
            if (e.preventDefault)
                e.preventDefault(); // stops the browser from redirecting off to the text.
            e.dataTransfer.dropEffect = 'move';
            var t = e.dataTransfer.getData('Text');
            if (!quantity.hasOwnProperty(t.toString())) {
                quantity[(t.toString())] = 1;
                $('<div class="res" align="center">')
                        .append('<label for="name">' + t + '</label>')
                        .append('<input type="text" name = "' + t + '" id="' + t.replace(/ /g, "") + '" value="' + quantity[(t.toString())] + '"/>')
                        .append('<div class="button inc">+</div><div class="button dec">-</div></div>')
                        .appendTo("#resoconto");
            } else {
                var valore = ++quantity[(t.toString())];
                $("#" + t.replace(/ /g, "")).attr("value", valore);

            }
            showMessage("Elemento Aggiunto", "#messagebox");
            (TotalCounter == 1) ? $("#elCounter").text("1 prodotto inserito") : $("#elCounter").text(TotalCounter + " prodotti inseriti");
            return false;
        });

    }

    $("#check").click(function(e) {
        var right = ($(window).width() - ($("#banner").offset().left + $("#banner").outerWidth()));
        var top = $("#banner").offset().top
        $("#popupScontrino").css("right", right);
        $("#popupScontrino").css("top", top);
        if (TotalCounter > 0) {
            $('.overlay').fadeIn('fast');
            $('#popupScontrino').show('slow');
        } else {
            showMessage("Nessun prodotto nel carrello...", "#chartEmpty")
        }
        e.preventDefault();
    })
    $('#closepp').click(function(e) {
        updateCounter();
        $('.overlay').fadeOut('fast');
        $('#popupScontrino').hide();
        e.preventDefault();
    })

    $('.overlay').click(function(e) {
        updateCounter();
        $('.overlay').fadeOut('fast');
        $('#popupScontrino').hide();
        e.preventDefault();
    })

    function showMessage(message, element) {
        $(element).stop(true).hide().text(message)
                .fadeIn('slow')
                .delay(900)
                .fadeOut('slow');
    }

    function updateCounter() {
        var tot = 0;
        for (var x in quantity) {
            tot += quantity[x];
        }
        if (tot >= 1)
            (tot == 1) ? $("#elCounter").text("1 prodotto inserito") : $("#elCounter").text(tot + " prodotti inseriti");
        TotalCounter = tot;
    }

    $(document).on("change", "input", function() {
        if (Math.floor($(this).val()) == $(this).val() && $.isNumeric($(this).val()))
            quantity[$(this).attr("name")] = parseInt(($(this).val()));
        else
            $(this).attr("value", quantity[$(this).attr("name")]);
    })

    $('.elencoshort').click(function(e) {
        if ($(this).attr("id") != "addprodotto") {
            var img = $(this).find("img");
            var nome = $(this).find('h4').text();
            $.get("VProdotti.php",
                    {
                        'action': "getProdotto",
                        'nome': nome
                    }).success(function(data) {
                var response = jQuery.parseJSON(data);
                var left = $("#sidebar").offset().right;
                var top = $("#banner").offset().top + ($("#banner").height() / 2);
                $("#popupP").css("top", top);
                $("#popupP").css("left", left);
                if (response.admin) {
                    $('<form id="newHotnessForm" action="VProdotti.php?action=updateProdotto" method="post" enctype="multipart/form-data">')
                            .append('<div id="closepp"><a href="#">Chiudi</a></div>')
                            .append('<div id="rightblock"><img src="' + img.attr("src") + '" width=95 height=380 /></div>')
                            .append('<div id="leftblock"><div align="center"><input id="titleinput" type="text" name="titolo" value="' + nome + '"" /></div>')
                            .append('<div><input id="pDesc" type="hidden"  name="id" value="' + response.prodotto[0].id + '"/></div>')
                            .append('<div><textarea id="pDesc"  name="descrizione" id="message" >' + response.prodotto[0].descrizione + '</textarea></div>')
                            .append('<label id="lfile">Modifica l\'immagine:</label>')
                            .append('<input id="ifile" name="file" type="file" size="20" />')
                            .append('<div align="center"><a href="#" id="saveProduct">Salva</a></div>')
                            .append('<div id="saved" align="center"></div>').appendTo("#popupP")
                }
                else {
                    $('<div id="closepp"><a href="#">Chiudi</a></div>').appendTo("#popupP")
                    $('<div id="rightblock"><img src="' + img.attr("src") + '" width=95 height=380 /></div>').appendTo("#popupP");
                    $('<div id="leftblock"><div align="center"><h3>' + nome + '</h3></div>')
                            .append('<div>' + response.prodotto[0].descrizione + '</div>')
                            .append('<img id="bottadd" class="addtocart" draggable="false" src="images/addc.png" widht="70" height="23" />')
                            .append('<div id="addedfromscheda"></div></div>').appendTo("#popupP");

                }
                $('.overlay').fadeIn('fast');
                $('#popupP').show('slow');
            });
        }
        e.preventDefault();
    })

    $(document).on('click', '#closepp', function(e) {

        $("#popupP").get(0).innerHTML = null;
        $('.overlay').fadeOut('fast');
        $('#popupP').hide();
        e.preventDefault();
    })

    $('.overlay').click(function(e) {
        $(".popup").get(0).innerHTML = null;
        $('.overlay').fadeOut('fast');
        $('.popup').hide();
        e.preventDefault();
    });


    $(document).on('click', '.addtocart', function(e) {
        dropEffect();
        if ($(".popup").css("display") == "none") {
            $(this).stop(true).css("display", "none").delay(400).show('0');
            $(this).prev().stop(true).css("display", "block").show('0').delay(400).hide('0');
        } else {
            showMessage("Aggiunto!", "#addedfromscheda");
        }
        ++TotalCounter;
        var t = $(this).prev().prev().find('h4').text();
        if (t == '') {
            t = $(this).prev().prev().find('h3').text();
        }
        if (!quantity.hasOwnProperty(t.toString())) {
            quantity[(t.toString())] = 1;
            $('<div class="res" align="center">')
                    .append('<label for="name">' + t + '</label>')
                    .append('<input type="text" name = "' + t + '" id="' + t.replace(/ /g, "") + '" value="' + quantity[(t.toString())] + '"/>')
                    .append('<div class="button inc">+</div><div class="button dec">-</div></div>')
                    .appendTo("#resoconto");
        } else {
            var valore = ++quantity[(t.toString())];
            $("#" + t.replace(/ /g, "")).attr("value", valore);

        }
        showMessage("Elemento Aggiunto", "#messagebox");
        (TotalCounter == 1) ? $("#elCounter").text("1 prodotto inserito") : $("#elCounter").text(TotalCounter + " prodotti inseriti");

    });

    $(".up").click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#outer').offset().top
        }, 'slow');
    });
    $(".to").click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#' + $(this).attr('name')).offset().top
        }, 'slow');
    });


    $(document).on('click', '#saveProduct', function(e) {
        e.preventDefault();
        /*$("#rightblock").html('');
         $("#rightblock").html('<img src="images/loader.gif" alt="Uploading...."/>');*/
        $("#newHotnessForm").ajaxForm(
                {
                    success: function(data) {
                        var response = jQuery.parseJSON(data);
                        if (response.result) {
                            showMessage("Operazione eseguita, ricarico la pagina!", "#saved");
                            setTimeout(function() {
                                location.reload();
                            }, 1200);
                        }
                        else {
                            /* $("#rightblock").html('');
                             $("#rightblock").html('<img id="thumb" src="images/botadd.png" width=50 height=200 />');*/
                            showMessage("Errore. Riprova", "#saved");
                        }
                    }
                }).submit();
    });


    $(document).on('click', '#addprodotto', function(e) {
        tipo = $(e.target).find("img").attr("id");
        if (tipo === undefined)
            tipo = tipo = $(e.target).attr("id");
        $('<form id="newHotnessForm" action="VProdotti.php?action=addProdotto" method="post" enctype="multipart/form-data">')
                .append('<div id="closepp"><a href="#">Chiudi</a></div>')
                .append('<div id="rightblock"><img id="thumb" src="images/botadd.png" width=50 height=200 />')
                .append('<div id="leftblock"><div align="center"><input id="titinput" type="text" name="title" value="Nome Prodotto" /></div>')
                .append('<div><input id="prodType" type="hidden"  name="tipo" value="' + tipo + '"/></div>')
                .append('<div><textarea id="prodDesc"  name="desc" value="" id="message" >Scrivi qui una descrizione...</textarea></div>')
                .append('Colore: <input class="cfile" type="radio" name="color" value="bianco">Bianco')
                .append('<input class="cfile" type="radio" name="color" value="rosso">Rosso')
                .append('<input class="cfile" type="radio" name="color" checked="checked" value="null">Ignora')
                .append('<br>Vetrina: <input class="vfile" type="checkbox" name="vetrina" value="vetrina"><br>')
                .append('<label id="lfile">Scegli un\'immagine:</label>')
                .append('<input id="ifile" name="file" type="file" size="20" />')
                .append('<div align="center"><a href="#" id="addProduct">Salva</a></div>')
                .append('<div id="saved" align="center"></div>').appendTo("#popupP");
        $('.overlay').fadeIn('fast');
        $('#popupP').show('slow');
        e.preventDefault();
    });

    $(document).on('focus', '#titinput', function(e) {
        $(this).val("");
    });

    $(document).on('focus', '#prodDesc', function(e) {
        $(this).val("");
    });

    $(document).on('click', '#addProduct', function(e) {
        e.preventDefault();
        $("#rightblock").html('');
        $("#rightblock").html('<img src="images/loader.gif" alt="Uploading...."/>');
        $("#newHotnessForm").ajaxForm(
                {
                    success: function(data) {
                        var response = jQuery.parseJSON(data);
                        if (response.result) {
                            showMessage("Operazione eseguita, ricarico la pagina!", "#saved");
                            setTimeout(function() {
                                location.reload();
                            }, 1200);
                        }
                        else {
                            $("#rightblock").html('');
                            $("#rightblock").html('<img id="thumb" src="images/botadd.png" width=50 height=200 />');
                            showMessage("Errore. Riprova", "#saved");
                        }
                    }
                }).submit();

    });

    $(document).on('focus', '#recapito', function(e) {
        if(!set){
            $(this).val("");
            set=true;
        }
    });

    $(document).on('click', '#send', function(e) {
        var reg = /^[\w\.\-]+@([\w\-]+\.)+[a-zA-Z]/;
        var reg2 = /^[0|3]{1}[0-9]{5,10}$/;
        var email = $('#recapito').val();
        if ((email == '') || (reg.test(email) == false)) {

            showMessage("Recapito non valido", "#sendBox");

        } else {
            $.post("VProdotti.php",
                    {
                        'action': "sendProdotti",
                        'prodotti': quantity,
                        'recapito': $("#recapito").val()
                    }).success(function(data) {
                var response = jQuery.parseJSON(data);
                if (response.result) {
                    showMessage('Richiesta inviata!',"#sendBox");
                } else {
                    showMessage("Errore", "#sendBox");
                }
            });
        }
    });
});