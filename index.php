<?php
require_once __DIR__ . '/autoload.php';

use hw\src\classes\headers;
use hw\src\classes\login;
use hw\src\classes\files;

//Maybe one day utilize the cache headers later (Separate file? Or conditonal function? idk I'll look into it once this shit is functional lmao)
$headers = new headers();
$headers->set_headers();
$uuid = uniqid();

$files = new files();
$files->load_files($uuid);

$login = new login();
$login->display_login();
?>