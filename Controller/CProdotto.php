<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
require_once '../Entity/EProdotto.php';
require_once '../Foundation/FProdotto.php';
require_once '../View/VProdotti.php';

/**
 * Description of CProdotto
 *
 * @author francesco
 */
class CProdotto {

    private static $instance = null;

    protected function __construct() {
        
    }

    public function getProd() {
        $f = FProdotto::getInstance();
        $p = $f->getProdotti();
        return $p;
    }

    public function addProdotto($titolo, $desc, $immagine, $colore, $tipo, $vetrina) {
        $p = new EProdotto();
        $imgname = $immagine["name"];
        list($imgname, $extension) = explode(".", $imgname);
        if (($immagine["type"] == "image/png") && ($immagine["size"] < 500000) && $extension == "png" && !(file_exists("../View/images/" . $immagine["name"]))) {
            move_uploaded_file($immagine["tmp_name"], "../View/images/" . $immagine["name"]);
            $p->setNome($titolo);
            $p->setDescrizione($desc);
            $p->setImmagine($imgname);
            $p->setColore($colore);
            $p->setTipo($tipo);
            $p->setVetrina($vetrina);
            $f = FProdotto::getInstance();
            $f->store($p);
            return true;
        }
        return false;
    }

    public function updateProdotto($id, $titolo, $desc, $immagine) {
        $fprod = FProdotto::getInstance();
        $prod = $fprod->load(utf8_decode(htmlspecialchars(mysql_real_escape_string($id))));
        if (!$prod)
            return false;
        if ($immagine != NULL) {
            $imgname = $immagine["name"];
            list($imgname, $extension) = explode(".", $imgname);
            if (($immagine["type"] == "image/png") && ($immagine["size"] < 500000) && $extension == "png" && !(file_exists("../View/images/" . $immagine["name"]))) {
                move_uploaded_file($immagine["tmp_name"], "../View/images/" . $immagine["name"]);
                $prod->setImmagine($imgname);
            }
            else
                return false;
        }
        if ($titolo != NULL)
            $prod->setNome(htmlspecialchars($titolo));
        if ($desc != NULL)
            $prod->setDescrizione(htmlspecialchars($desc));

        $fprod->update($prod);

        return true;
    }

    public function getProdottoByName($name) {
        $f = FProdotto::getInstance();
        $p = $f->getProdottoByName(utf8_decode(htmlspecialchars(mysql_real_escape_string($name))));
        return $p;
    }
    //controlla $prodotti
    public function sendProdotti($prodotti, $recapito) {
        $msg = "Ciao! Hai ricevuto una richiesta di preventivo da: " . $recapito . "
                \nSono stati richiesti i seguenti prodotti:\n";
        foreach ($prodotti as $chiave => $valore)
            $msg.=$chiave.": ".$valore."\n";
        $status = mail("fra.miscia@gmail.com", "Richiesta preventivo", $msg) ? true : false;
        //$status = true;
        return $status;
    }

    public static function getInstance() {
        if (CProdotto::$instance == null)
            CProdotto::$instance = new CProdotto();

        return CProdotto::$instance;
    }

}
?>
