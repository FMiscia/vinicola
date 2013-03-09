<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!--
        Cookies n' Cream by FWT
        www.freewebsitetemplat.es
        Images by Image Base http://imagebase.davidniblack.com/
        Released under the Creative Commons Attribution 3.0 License.
-->
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="content-type" content="text/html" charset=utf-8" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <title>Vinicola D'Inzeo</title>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
        <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyAO2zXC0wh-S8SjMgPRZfoTUGZMGHBIzZ0&sensor=false"></script>
        <link href="http://fonts.googleapis.com/css?family=Shanti" rel="stylesheet" type="text/css" />
        <link href="http://fonts.googleapis.com/css?family=Tangerine" rel="stylesheet" type="text/css" />
        <link href="../templates/template1/template/style.css" rel="stylesheet" type="text/css" />
        {foreach $scripts as $s}
            <script type="text/javascript" src='../js/{$s}'></script>
        {/foreach}
    </head>
    <body>
        <div id="outer">

            <div id="banner"><a href="VHome.php">
                <div id="titolo"><h2>Azienda Agricola</h2><h1>D'Inzeo</h1></div>
                <img id="imglogo" draggable="false" src="images/banner1.jpg" alt="" /></a>
            </div>
            <div id="main">
                <div id="sidebar">
                    <a href="VHome.php"><h3 class="sidelink"> Home Page</h3></a>
                    <a href="VChisiamo.php"><h3 class="sidelink">Chi Siamo</h3></a>
                    <a href="VProdotti.php"><h3 class="sidelink">Prodotti</h3></a>
                    <div id="sublink">
                        <a href="#" class ="to" name="invetrina"><h4 class="sidelink">In Vetrina</h4></a>
                        <a href="#" class ="to" name="vino"><h4 class="sidelink">Vini</h4></a>
                        <a href="#" class ="to" name="olio"><h4 class="sidelink">Olio</h4></a>
                        <!--<a href="#" class ="to" name="prodotti"><h4 class="sidelink">Prodotti Tipici</h4></a>-->
                    </div>
                    <a href="VContatti.php"><h3 class="sidelink">Contatti</h3></a>
                    <!--  <ul class="linkedList">
                            <li class="first">
                                    <a href="#">Egestas praesent sollicitudin</a>
                            </li>
                            <li>
                                    <a href="#">Interdum nec pretium</a>
                            </li>
                            <li>
                                    <a href="#">Volutpat mi proin</a>
                            </li>
                            <li class="last">
                                    <a href="#">Pulvinar convallis fringilla molestie</a>
                            </li>
                    </ul> -->
                </div>
                {include $content}
            </div>
            <div id="copyright">
                @2013 by Micio Team ---- 
                {if $admin}
                <a style = "text-decoration: none" align=right href="VLogin.php?action=logout">Logout</a>
                {else}
                    <a style = "text-decoration: none" align=right href="VLogin.php">Azienda Agricola D'Inzeo</a>
                    {/if}
            </div>
        </div>
    </body>
