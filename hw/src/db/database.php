<?php

namespace hw\src\db;


class database {
    public $conn;
    //Should probably do some restrictions on valid query entries to prevent injection (even though I should be the only one who can use this XDDDD)
    //Prob will do sql injection prevention in js but whatever works works
    public $query;


    public function __constructor() {
        //Utilizes different ini file as the login, maybe eventually I'll confine all login info for this project into the main config.ini file teehee
        $configs = include($_SERVER['DOCUMENT_ROOT'] . '/config.php');
        $config = parse_ini_file($configs->server_root .  "/private/config.ini");
        $this->conn = new mysqli($config["host"], $config["username"], $config["password"], $config["dbname"]);
        if ($conn->connect_error) {
            die("Failure to connect to database");
        }
    }

    //Table has 4 categories, if troubles arise with identification may create a 5th one for integers to add unique ids to each assignment for convience
    //Find a simple way to encode dates for SQL (Using date data type for sql category)

    //Inserts into table but must make sure assignment is uniquely identifiable somehow idek yet maybe a uuid category as mentioned above?
    public function insert_data($category, $date, $assignment, $description) {

    }

    //Much simpler, although some sorting will be done to send it in a json in 3 subsections. I would also like to sort them by date before sending to js if possible to
    //make row construction much easier for myself heehee
    public function get_data() {

    }

    //Main reason a uuid might be needed for assignments because what if names become alike and all else can overlap and descriptions are just no
    public function clear_data($assignment) {
        
    }

}

?>