<?php

namespace hw\src\classes;

class files {
    public function load_files($uuid) {
        //All css and js files are loaded here for simplicty even though it is only called once
        //Gotta also be careful that none of my css files overlap on elements without intention and instead just use .css() to change shit xd 
        echo "<link rel=\"stylesheet\" href=\"static/css/body.css?q=$uuid\">";
        echo "<link rel=\"stylesheet\" href=\"static/css/login.css?q=$uuid\">";
        echo "<link rel=\"stylesheet\" href=\"static/css/table.css?q=$uuid\">";
        echo "<script src=\"../../static/js/jquery.js?q=$uuid\"></script>";
        //Realistically could combine both js files into one but separating lets me view their functionality and their backend requests separately YIPPEE
        echo "<script src=\"static/js/login.js?q=$uuid\"></script>";
        echo "<script src=\"static/js/schedule.js?q=$uuid\"></script>";
    }
}
?>