<?php
$username = isset($_POST["username"]) ? $_POST["username"] : null;
$password = isset($_POST["password"]) ? $_POST["password"] : null;
$configs = include($_SERVER["DOCUMENT_ROOT"] . "/config.php");
$schedule = parse_ini_file($configs->server_root . "/private/schedule.ini");
if (($username != null && $username == $schedule["username"]) && ($password != null && $password == $schedule["password"])) {
    echo json_encode(["success"=>"true"]);
} else {
    echo json_encode(["success"=>"false"]);
}
?>