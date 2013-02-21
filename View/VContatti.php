<?php


require_once 'View.php';


class VContatti extends View {
    
    public $content = 'contatti.tpl';
    public $scripts = array('CHome.js','CContatti.js');

        public function __construct() {

        parent::__construct();
    }


}

$vcontatti = new VContatti();
?>
