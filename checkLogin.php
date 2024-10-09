<?php
//One day for funsies I'll make this account based based on emails and have multiples tables ig? or some other way of data in the DB
//Also means this entire thing will change from an INI setup to a SQL query and man I don't want to do that rn (lazy xd)
$username = isset($_POST["username"]) ? $_POST["username"] : null;
$password = isset($_POST["password"]) ? $_POST["password"] : null;
//Should really do something if the post request somehow returns null for either value
$configs = include($_SERVER["DOCUMENT_ROOT"] . "/config.php");
$schedule = parse_ini_file($configs->server_root . "/private/schedule.ini");
//Once again, why did I use 2 ini files? idk
if (($username != null && $username == $schedule["username"]) && ($password != null && $password == $schedule["password"])) {
    //Was json really necessary? No, but do I actually care either? No
    echo json_encode(["success"=>"true"]);
} else {
    echo json_encode(["success"=>"false"]);
}
?>