<?php

namespace hw\src\db;


class database {
    public $conn;
    public $query;


    public function __constructor() {
        $configs = include($_SERVER['DOCUMENT_ROOT'] . '/config.php');
        $config = parse_ini_file($configs->server_root .  "/private/config.ini");
        $this->conn = new mysqli($config["host"], $config["username"], $config["password"], $config["dbname"]);
        if ($conn->connect_error) {
            die("Failure to connect to database");
        }
    }

    public function insert_data($category, $date, $assignment, $description) {

    }

    public function get_data() {

    }

    public function clear_data($assignment) {
        
    }

}

?>