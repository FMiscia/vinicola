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
    
    public function addProd($data){
        $temp = json_decode($data);
        $p = new EProdotto();
        $p->setNome($temp->nome);
        $p->setDescrizione($temp->descrizione);
        $p->setImmagine($temp->immagine);
        $p->setColore($temp->colore);
        $p->setVetrina($temp->vetrina);
        $f = FProdotto::getInstance();
        $f->store($p);
    }
    
    public function getProdottoByName($name){
        $f = FProdotto::getInstance();
        $p = $f->getProdottoByName(utf8_decode(htmlspecialchars(mysql_real_escape_string($name))));
        return $p;   
    }
    
    public static function getInstance(){
        if(CProdotto::$instance == null)
            CProdotto::$instance =  new CProdotto();
        
        return CProdotto::$instance;
    }

}



?>
