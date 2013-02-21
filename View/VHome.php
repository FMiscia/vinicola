<?php

require_once 'View.php';
require_once '../Controller/CHome.php';
/**
 * View che gestisce la home page. Vedi View.php per analizzare
 * la maggior parte di variabili smarty
 */
class VHome extends View {
    
    public $content = 'home.tpl';
    public $scripts = array('CHome.js');

        public function __construct() {   
        parent::__construct();
    }


}

$vhome = new VHome();
?>
