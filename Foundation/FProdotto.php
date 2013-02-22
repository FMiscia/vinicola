<?php

/**
 * @package Galufra
 */
require_once('FMysql.php');

/**
 * Foundation per la gestione di un utente sul db
 */
class FProdotto extends FMysql {

    /**
     * @access public
     */
    protected function __construct() {
        parent::__construct();
        $this->_table = 'prodotti';
        $this->_key = 'id';
        $this->_class = 'EProdotto';
    }

    public function getProdotti() {
        return $this->search();
    }

    public function getProdottoByName($nome) {
        return  $this->search(array(
                    array("nome", " = ", $nome)
                        )
        );
       
    }

    public static function getInstance() {
        if (FProdotto::$instance == null)
            FProdotto::$instance = new FProdotto();
        return FProdotto::$instance;
    }

}

?>
