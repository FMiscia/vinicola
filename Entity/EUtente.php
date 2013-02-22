<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of EUtente
 *
 * @author francesco
 */
class EUtente {

    private $_id;
    public $username=null;
    public $password=null;
    public $admin=0;
    
    
    public function getId() {
        return $this->_id;
    }

    public function getUsername() {
        return $this->username;
    }

    public function setUsername($username) {
        $this->username = $username;
    }

    public function getPassword() {
        return $this->password;
    }

    public function setPassword($password) {
        $this->password = $password;
    }

    public function getAdmin() {
        return $this->admin;
    }

    public function setAdmin($admin) {
        $this->admin = $admin;
    }



}

?>
