<?php

require_once 'View.php';
require_once '../Controller/CProdotto.php';
require_once '../Entity/EProdotto.php';

/**
 * View che gestisce la home page. Vedi View.php per analizzare
 * la maggior parte di variabili smarty
 */
class VProdotti extends View {

    public $content = 'prodotti.tpl';
    public $scripts = array('CProdotti.js', 'h5utils.js');
    private static $instance = null;

    public function __construct($action) {
        if ($action != null)
            $this->$action();
        $controller = CProdotto::getInstance();
        $prodotti = $controller->getProd();
        $this->assignByRef("prodotti", $prodotti);
        $this->assign("admin", false);
        parent::__construct();
    }

    public function getProdotto() {
        if (!isset($_GET['nome']))
            return null;
        $nome = $_GET['nome'];
        $controller = CProdotto::getInstance();
        $prod = $controller->getProdottoByName($nome);
        $out = array(
            'prodotto' => $prod
        );
        echo json_encode($out);
        exit;
    }

    public function addProdotto() {
        if (!isset($_GET['prodotto']))
            return null;
        $controller = CProdotto::getInstance();
        $out = false;
        if ($controller->addProdotto($_GET['prodotto'])) {

            $out = array(
                'result' => true
            );
        }
        echo json_encode($out);
        exit;
    }

    public static function getInstance() {
        if (VProdotti::$instance == null) {
            if (!isset($_GET['action']))
                $_GET['action'] = null;

            VProdotti::$instance = new VProdotti($_GET['action']);
        }

        return VProdotti::$instance;
    }

}

VProdotti::getInstance();
?>
