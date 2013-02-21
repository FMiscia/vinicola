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
    
    function __construct() {
    }

    public function getProd() {
        $f = FProdotto::getInstance();
        $p = $f->getProdotti();
        return $p;    
    }
    
    public function addProd($nome,$descrizione,$colore,$immagine,$vetrina){
        $p = new EProdotto();
        $p->setNome($nome);
        $p->setDescrizione($descrizione);
        $p->setImmagine($immagine);
        $p->setColore($colore);
        $p->setVetrina($vetrina);
        $f = FProdotto::getInstance();
        $f->store($p);
    }
    
    public function getProdottoByName($name){
        $f = FProdotto::getInstance();
        $p = $f->getProdottoByName($name);
        return $p;   
    }
    
    public static function getInstance(){
        if(CProdotto::$instance == null)
            CProdotto::$instance =  new CProdotto();
        
        return CProdotto::$instance;
    }

}



?>
