<?php

namespace hw\src\classes;

class headers {
    public function set_headers() {
        //For whatever reasons the cache headers worked with header() function and maybe didnt work with echo???"
        //One day I can prob remove these so cache can actually do it's job at least for the login page and then I can load cache headers purely for the schedule part?
        header("Cache-Control: no-cache, no-store, must-revalidate");
        header("Pragma: no-cache");
        //I'm not too sure what all the meta tags and values do? But I know these ones are important and maybe I'll learn others one day
        echo "<meta charset=\"utf-8\">";
        echo "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">";
    }
}


?>