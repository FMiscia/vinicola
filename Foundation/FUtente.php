<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of FUtente
 *
 * @author francesco
 */
class FUtente extends FMysql {
    
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
