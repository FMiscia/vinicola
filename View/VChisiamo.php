<?php

/**
 * @package Galufra
 */
require_once 'View.php';
require_once '../Foundation/Utility/USession.php';

/**
 * View che gestisce la home page. Vedi View.php per analizzare
 * la maggior parte di variabili smarty
 */
class VChisiamo extends View {

    public $content = 'chisiamo.tpl';
    public $scripts = array('CHome.js');

    public function __construct() {
        $session = new USession();
        if ($session->leggi_valore("utente") == "admin")
            $this->admin = true;
        parent::__construct();
    }

}

$vchisiamo = new VChisiamo();
?>
