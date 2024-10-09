<?php
require_once __DIR__ . '/autoload.php';

use hw\src\classes\headers;
use hw\src\classes\login;

$headers = new headers();
$headers->set_headers();
$uuid = uniqid();

echo "<link rel=\"stylesheet\" href=\"static/css/body.css?q=$uuid\">";
echo "<link rel=\"stylesheet\" href=\"static/css/login.css?q=$uuid\">";
echo "<link rel=\"stylesheet\" href=\"static/css/table.css?q=$uuid\">";
echo "<script src=\"../../static/js/jquery.js?q=$uuid\"></script>";
echo "<script src=\"static/js/login.js?q=$uuid\"></script>";
echo "<script src=\"static/js/schedule.js?q=$uuid\"></script>";

$login = new login();
$login->display_login();
?>