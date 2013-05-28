<?php

require_once 'View.php';
require_once '../Controller/CProdotto.php';
require_once '../Controller/CAdministration.php';
require_once '../Entity/EProdotto.php';
require_once '../Foundation/Utility/USession.php';

/**
 * View che gestisce la home page. Vedi View.php per analizzare
 * la maggior parte di variabili smarty
 */
class VProdotti extends View {

    public $content = 'prodotti.tpl';
    public $scripts = array('CProdotti.js', 'h5utils.js',"jquery.form.js");

    public function __construct($action) {
        $session = new USession();
        if ($session->leggi_valore("utente") == "admin")
            $this->admin = true;
        if ($action != null) {
            preg_filter('([[:punct:]])', '', $action);
            $this->$action();
        }
        $controller = CProdotto::getInstance();
        $prodotti = $controller->getProd();
        $this->assignByRef("prodotti", $prodotti);
        parent::__construct();
    }

    public function getProdotto() {
        $out = array(
            'prodotto' => null,
            'admin' => false
        );
        if (isset($_GET['nome'])) {
            $nome = $_GET['nome'];
            $controller = CProdotto::getInstance();
            $prod = $controller->getProdottoByName($nome);
            $out = array(
                'prodotto' => $prod,
                'admin' => $this->admin
            );
        }
        echo json_encode($out);
        exit;
    }

    public function addProdotto() {
        $out = array('result' => false);
        if ($this->admin && isset($_POST['title']) && isset($_POST['desc']) && isset($_FILES["file"]) && isset($_POST['color'])
                && isset($_POST['tipo']) ) {
            $controller = CProdotto::getInstance();
            if ($controller->addProdotto(utf8_decode($_POST['title']), utf8_decode($_POST['desc']), $_FILES["file"], $_POST['color'], 
                    $_POST['tipo'],(isset($_POST['vetrina'])?true:false)))
                $out = array('result' => true);
        }
        echo json_encode($out);
        exit;
    }

    public function isAdmin() {
        $out = array(
            'result' => $this->admin
        );
        echo json_encode($out);
        exit;
    }

    public function updateProdotto() {
        $out = array("result" => false);
        if (($this->admin && isset($_POST['id']) && ( isset($_FILES["file"]) || isset($_POST['titolo']) || isset($_POST['descrizione']))) &&
                (CProdotto::getInstance()->updateProdotto($_POST['id'], utf8_decode($_POST['titolo']), utf8_decode($_POST['descrizione']), 
                        isset($_FILES["file"])?$_FILES["file"]:null)))
            $out = array("result" => true);

        echo json_encode($out);
        exit;
    }
    
    public function sendProdotti() {
        $out = array("result" => false);
        if(isset($_POST['prodotti']) && isset($_POST['recapito']) && CProdotto::getInstance()->sendProdotti($_POST['prodotti'],$_POST['recapito'])){
            $out = array("result" => true);
        }
        
        echo json_encode($out);
        exit;
    }

}

$action = null;
if (isset($_GET['action']))
    $action = $_GET['action'];
if (isset($_POST['action']))
    $action = $_POST['action'];
$vprodotti = new VProdotti($action);
?>
