<?php

require_once '../Foundation/FUtente.php';

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

    public static function getInstance() {
        if (CProdotto::$instance == null)
            CProdotto::$instance = new CProdotto();

        return CProdotto::$instance;
    }

}

?>
