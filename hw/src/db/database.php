<?php

namespace hw\src\db;


class database {
    public $conn;
    public $query;


    public function __constructor() {
        $json = file_get_contents("secrets.json") or die("Failed");
        $json_data = json_decode($json, true);
        $this->conn = new mysqli($json_data["domain"], $json_data["user"], $json_data["password"], $json_data["database"]);
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