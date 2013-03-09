<?php

require_once('FMysql.php');

/**
 * @author francesco
 * Foundation per la gestione dei prodotti
 */
class FProdotto extends FMysql {

    private static $instance = null;

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
        return $this->search(array(
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
