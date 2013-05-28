<?php

require_once 'View.php';
require_once '../Foundation/Utility/USession.php';

class VContatti extends View {

    public $content = 'contatti.tpl';
    public $scripts = array('CHome.js', 'CContatti.js');

    public function __construct() {
        $session = new USession();
        if ($session->leggi_valore("utente") == "admin")
            $this->admin = true;
        parent::__construct();
    }

}

$vcontatti = new VContatti();
?>
