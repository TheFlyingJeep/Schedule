<?php

namespace hw\src\classes;


class login {
    public function display_login() {
        //Both are in divs with position absolute so they overlap each other on the body and I can hide one and show the other
        echo file_get_contents("templates/login.html");
        //I eventually need to design another page that overlaps table.html where you add all the details for a new assignment
        echo file_get_contents("templates/table.html");
        //echo file_get_contents("templates/add_assignment.html");?
        //Or I can just edit schedule.html directly but either works (prob will just do direct html edit why not)
    }
}

?>