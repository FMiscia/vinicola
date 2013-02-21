<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of EProdotto
 *
 * @author francesco
 */
class EProdotto {

    private $_id = null;
    public $nome = null;
    public $descrizione = null;
    public $colore = null;
    public $immagine = null;
    public $vetrina = false;
    public $tipo = null;


    public function getId() {
        return $this->_id;
    }

    public function getNome() {
        return $this->nome;
    }

    public function setNome($nome) {
        $this->nome = $nome;
    }

    public function getDescrizione() {
        return $this->descrizione;
    }

    public function setDescrizione($descrizione) {
        $this->descrizione = $descrizione;
    }

    public function getColore() {
        return $this->colore;
    }

    public function setColore($colore) {
        $this->colore = $colore;
    }

    public function getVetrina() {
        return $this->vetrina;
    }

    public function setVetrina($vetrina) {
        $this->vetrina = $vetrina;
    }

    public function getImmagine() {
        return $this->immagine;
    }

    public function setImmagine($immagine) {
        $this->immagine = $immagine;
    }
    
    public function getTipo(){
        return $this->tipo;
    }
    
    public function setTipo($tipo){
        $this->tipo = $tipo;
    }

}

?>
