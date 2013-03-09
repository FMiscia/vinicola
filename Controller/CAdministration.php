<?php

require_once '../Foundation/FUtente.php';
require_once '../Foundation/FProdotto.php';
require_once '../Foundation/Utility/USession.php';
require_once '../Entity/EUtente.php';
/**
 * Description of CAdministration
 *
 * @author francesco
 */
class CAdministration {

    private static $instance = null;

    protected function __construct() {
        
    }

    public function isAdmin($name) {
        $futente = FUtente::getInstance();
        $user = $futente->load(utf8_decode(htmlspecialchars(mysql_real_escape_string($name))));
        if ($user && $user->getAdmin())
            return true;
        return false;
    }

    public function login($uname, $passwd) {
        $futente = FUtente::getInstance();
        $utente = $futente->load(utf8_decode(htmlspecialchars(mysql_real_escape_string($uname))));
        if ($utente && $utente->getPassword() == md5($passwd)) {
            $session = new USession();
            //if admin
            $session->imposta_valore("utente", "admin");
            return true;
        }
        return false;
    }
    
    public function updateProdotto($id,$titolo,$desc){
        $fprod = FProdotto::getInstance();
        $prod = $fprod->load(utf8_decode(htmlspecialchars(mysql_real_escape_string($id))));
        if(!$prod)
            return false;
        $prod->setNome(htmlspecialchars($titolo));
        $prod->setDescrizione(htmlspecialchars($desc));
        $fprod->update($prod);
        return true;
    }

    public static function getInstance() {
        if (CAdministration::$instance == null)
            CAdministration::$instance = new CAdministration();

        return CAdministration::$instance;
    }

}

?>
