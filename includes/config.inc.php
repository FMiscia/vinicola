<?php

global $config;
$config["mysql"] = array(
    "host" => isset($_SERVER['DB1_HOST']) ?$_SERVER['DB1_HOST']:"localhost",
    "username" => isset($_SERVER["DB1_USER"])?$_SERVER["DB1_USER"]:"*****",
    "password" =>isset($_SERVER["DB1_PASS"])?$_SERVER["DB1_PASS"]:"*******",
    "dbname" => "dinzeo");
$config["smarty"] = array(
    "template_dir" => "../templates/template1/template/",
    "compile_dir" => "../templates/template1/templates_c/",
    "config_dir" => "../templates/template1/configs/",
    "cache_dir" => "../templates/template1/cache/",
);
?>

