<?php

require_once 'FMysql.php';
/**
 * Description of FUtente
 *
 * @author francesco
 */
class FUtente extends FMysql {
    
    private static $instance = null;
    
    protected function __construct() {
        parent::__construct();
        $this->_table = 'utente';
        $this->_key = 'username';
        $this->_class = 'EUtente';
    }

    public static function getInstance() {
        if (FUtente::$instance == null)
            FUtente::$instance = new FUtente();
        return FUtente::$instance;
    }

}

?>
