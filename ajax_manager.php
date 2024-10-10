<?php

use hw\src\db\database;

class ajax_manager {
    function __construct() {
        $this->database = new database();
        $this->action = isset($_POST["action"]) ? $_POST["action"] : null;
        $this->result = match($this->action) {
            'get_assignments' => $this->get_assignments(),
            'add_asssignment' => $this->add_assignment(),
            'clear_assignment' => $this->add_assignment(),
            default => $this->handle_default()
        };
    }

    public function get_assignments() {

    }
    
    public function add_assignment() {

    }

    public function clear_assignment() {

    }

    public function handle_default() {
        
    }
}

?>