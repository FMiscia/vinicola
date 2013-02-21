<?php
/**
 * @package Galufra
 */

require_once 'View.php';

/**
 * View che gestisce la home page. Vedi View.php per analizzare
 * la maggior parte di variabili smarty
 */
class VChisiamo extends View {
    
    public $content = 'chisiamo.tpl';
    public $scripts = array('CHome.js');

        public function __construct() {

        parent::__construct();
    }


}

$vchisiamo = new VChisiamo();
?>
