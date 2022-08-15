<?php
    header('Access-Control-Allow-Origin: *');
    if (isset($_GET['data'])) {
        $data = $_GET['data'];
        preg_replace('/[[:cntrl:]]/', '', $data);
        $iter = 0;
        $success = false;
        $file = fopen("agile-quest-log.csv","a");
        while ($iter++ < 10) {
            if (flock($file, LOCK_EX)) {        
                fwrite($file, $data.PHP_EOL);
                flock($file, LOCK_UN);
                $success = true;
                break;
            } else {
                usleep(50000);
            }
        }
        fclose($file);
        if ($success) {
            echo '{"message": "Data added."}';
        } else {
            http_response_code(500);
            echo '{"message": "Could not write to file."}';
        }
    } else {
        http_response_code(400);
        echo '{"message": "Data parameter not found."}';
    }
?>
