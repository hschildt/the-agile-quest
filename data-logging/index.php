<?php

function handleCors() {
    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
        // you want to allow, and if so:
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            // may also be using PUT, PATCH, HEAD etc
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        exit(0);
    }
    // Write data
    $_POST = json_decode(file_get_contents('php://input'), true);
    if (isset($_POST['data'])) {
        writeData($_POST['data']);
    } else {
        http_response_code(400);
        echo '{"message": "Data parameter not found."}';
    }    
}

function writeData($data) {
    $LOG_FILE = "agile-quest-log.csv";
    $MAX_RETRIES = 10;
    $RETRY_WAIT_MS = 50;

    function clean_str($str) {
        $org = $str;
        $str = strval($str);
        $str = preg_replace('/[[:cntrl:]]/', '', $str);
        $str = str_replace('"', '""', $str);
        $str = '"' . $str . '"';
        return $str;
    }
    function join_row($row) {
        $text_row = implode(',', array_map('clean_str', $row));
        return $text_row;
    };
    $text = implode(PHP_EOL, array_map('join_row', $data)) . PHP_EOL;

    $iter = 0;
    $success = false;
    $file = fopen($LOG_FILE,"a");
    while ($iter++ < $MAX_RETRIES) {
        if (flock($file, LOCK_EX)) {        
            fwrite($file, $text);
            flock($file, LOCK_UN);
            $success = true;
            break;
        } else {
            usleep($RETRY_WAIT_MS * 1000);
        }
    }
    fclose($file);
    if ($success) {
        echo '{"message": "Data added."}';
    } else {
        http_response_code(500);
        echo '{"message": "Could not write to file."}';
    }
}

handleCors();

?>
