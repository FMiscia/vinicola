<?php

require_once 'View.php';
require_once '../Controller/CAdministration.php';
require_once '../Foundation/Utility/USession.php';

/**
 * Description of VLogin
 *
 * @author francesco
 */
class VLogin extends View {

    public $content = 'login.tpl';
    public $scripts = array('CHome.js','CLogin.js','jquery.form.js');

    public function __construct($action) {
        $session = new USession();
        if($session->leggi_valore("utente") == "admin")
            $this->admin = true;
        if ($action != null) {
            preg_filter('([[:punct:]])', '', $action);
            $this->$action();
        }
        parent::__construct();
    }

    public function login() {
        $out = array('result' => false);
        if (isset($_POST['name']) && isset($_POST["password"]) && 
                $this->admin = CAdministration::getInstance()->login($_POST['name'], $_POST['password'])) {
            $out = array('result' => true);
        }  
        echo json_encode($out);
        exit;
    }
    
    public function logout(){
        $session = new USession();
        $session->cancella_valore("utente");
        $this->admin = false;
    }

}

$action = null;

if (isset($_POST['submit']))
    $action = $_POST['submit'];

if(isset($_GET['action']))
    $action = $_GET['action'];

$login = new VLogin($action);
?>
