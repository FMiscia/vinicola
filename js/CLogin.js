/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {
    
    function showMessage(message, element) {
        $(element).stop(true).hide().text(message)
                .fadeIn('slow')
                .delay(900)
                .fadeOut('slow');
    }
    $("#submit").click(function(e) {
        e.preventDefault();
        $("#contact-form").ajaxForm(
                {
                    success: function(data) {
                        var response = jQuery.parseJSON(data);
                        if (response.result) {       
                            setTimeout(function() {
                                window.location.replace("VProdotti.php");
                            }, 1200);
                        }
                        else {
                            showMessage("Errore!", "#logged");
                        }
                    }
                }).submit();

    });

});

