<div class="overlay" id="overlayShort" style="display:none;"></div>
<div class="popup" id="popupP"></div>
<div class="overlay" id="overlayR" style="display:none;"></div>
<div class="popup" id="popupScontrino">
    <div id="closepp"><div id="titscheda"><h2 align="center">Resoconto</h2></div><a href="#">Chiudi</a></div>
    <div id="mexResoconto">Ecco il resoconto del tuo carrello. Qui puoi impostare le quantit&agrave dei prodotti selezionati. 
        Quando sei pronto inserisci un recapito e inviaci la tua richiesta, ti contatteremo al pi&ugrave presto.</div>
    <div id="resoconto">
    </div>
    <div id="sendPrev">
        <div><h3>Inserisci un recapito:</h3></div>
        <div><input type="text" name=""  value="telefono o mail..." size="30"/></div>
        <div><a href="#" id="send">Invia il preventivo</a></div>
    </div>
</div>    
<div id="PCcontainer">
    <div id="boxP">
        <h2 align="center">I nostri Prodotti</h2>
        <div class="presentazioneP">Qui potrai scoprire tutti i nostri prodotti. Fai click all'interno della cornice per consultare la descrizione tecnica.</div>
        <a id="invetrina"><div  id="title" align="center"><h2>In Vetrina</h2></div></a>
        {foreach from=$prodotti item=prodotto}
            {if $prodotto->getVetrina()}
                <div class="prodotto">
                    <div class="elencoshort"><a id="linkbot" href="#">       
                            <img class="vini" src="images/{$prodotto->getImmagine()}.png" alt="{$prodotto->getNome()}" />
                            <h4 align="center">{$prodotto->getNome()}</h4></a>
                    </div>
                    <div class="added">Aggiunto!</div>
                    <img class="addtocart" draggable="false" src="images/addc.png" widht="70" height="23" />
                </div>
            {/if}
        {/foreach}
        {if $admin}
            <div class="prodotto">
                <div id="addprodotto" class="elencoshort"> 
                    <img class="vini" src="images/botadd.png" alt="aggiungi" />
                    <h4>Aggiungi</h4>
                </div>
            </div>
        {/if}
        <a id="vino"><div id="title" align="center"><h2>Vino</h2></div></a>
        <div class="up"><h4><a href="#">Torna su</a></h4></div>
        {foreach from=$prodotti item=prodotto}
            {if $prodotto->getTipo() == "vino"}
                <div class="prodotto">
                    <div class="elencoshort"><a id="linkbot" href="#">         
                            <img class="vini" src="images/{$prodotto->getImmagine()}.png" alt="{$prodotto->getNome()}" />
                            <h4 align="center">{$prodotto->getNome()}</h4></a>
                    </div>
                    <div class="added">Aggiunto</div>
                    <img class="addtocart" draggable="false" src="images/addc.png" widht="70" height="23" />
                </div>
            {/if}
        {/foreach}
        {if $admin}
            <div class="prodotto">
                <div id="addprodotto" class="elencoshort"> 
                    <img class="vini" src="images/botadd.png" alt="aggiungi" />
                    <h4>Aggiungi</h4>
                </div>
            </div>
        {/if}
        <a id="olio"><div id="title" align="center"><h2>Olio</h2></div></a>
        <div class="up"><h4><a href="#">Torna su</a></h4></div>
        {foreach from=$prodotti item=prodotto}
            {if $prodotto->getTipo() == "olio"}
                <div class="prodotto">
                    <div class="elencoshort"><a id="linkbot" href="#">    
                            <img class="vini" src="images/{$prodotto->getImmagine()}.png" alt="{$prodotto->getNome()}" />
                            <h4 align="center">{$prodotto->getNome()}</h4></a>
                    </div>
                    <div class="added">Aggiunto</div>
                    <img class="addtocart" draggable="false" src="images/addc.png" widht="70" height="23" />
                </div>
            {/if}
        {/foreach}
        {if $admin}
            <div class="prodotto">
                <div id="addprodotto" class="elencoshort"> 
                    <img class="vini" src="images/botadd.png" alt="aggiungi" />
                    <h4>Aggiungi</h4>
                </div>
            </div>
        {/if}
    </div>
</div>
<div id="ancora"></div>
<div id="boxC">
    <div>
        <div id="tcarrello"><h2 style="color: #141414">Carrello</h2></div>
        <div id="messagebox"></div>
        <div id="imgC" draggable="false"></div> 
        <div id="elCounter"></div> 
        <p>Inserisci i prodotti che desideri all'interno del carrello. Quando hai terminato clicca qui sotto
            per controllare le ultime cose e richiedere il preventivo</p>
        <a id="check" href="#">Controlla & Invia</a>
        <div id="chartEmpty"></div>
    </div>
</div>
<div id="sotto"></div>

<br class="clear" />
