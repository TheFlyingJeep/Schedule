<?php

namespace hw\src\classes;


class login {
    public function display_login() {
        echo file_get_contents("templates/login.html");
    }
}

?>