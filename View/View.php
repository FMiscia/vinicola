<?php

require_once '../libs/Smarty.class.php';
require_once '../includes/config.inc.php';

/**
 * @abstract
 * Classe astratta derivata da smarty, per il caricamento dei template.
 * Gestisce tutte le più importanti variabili smarty
 */
abstract class View extends Smarty {

    public $content = null;
    public $scripts = null;
    protected $admin = false;
    /**
     * @access public
     * @global array $config
     */
    public function __construct() {
        parent::__construct();
        global $config;
        $this->template_dir = $config['smarty']['template_dir'];
        $this->compile_dir = $config['smarty']['compile_dir'];
        $this->config_dir = $config['smarty']['config_dir'];
        $this->cache_dir = $config['smarty']['cache_dir'];
        $this->caching = false;
        $this->mostraPagina();
    }

    /**
     * @access public
     *
     * Mostra la pagina assegnando tutte le variabili
     *
     */
    public function mostraPagina() {
        if (!is_array($this->scripts) || is_null($this->content))
            return;
       
        $this->assign('scripts', $this->scripts);
        $this->assign('content', $this->content);
        $this->assign("admin",$this->admin);
        $this->display('default.tpl');
    }

}

?>
