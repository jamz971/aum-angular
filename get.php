<?php

/*$str = file_get_contents("http://api.adopteunmec.com/api/users?count=10&offset=0");

$json = json_decode($str, true);

print_r($json);*/


$postdata =  'var1=watson.jessy@orange.fr';
$postdata .= '&var2=123456971';
 
 
$opts = array('http' =>
    array(
        'method'  => 'POST',
        'header'  => "Content-Type: application/x-www-form-urlencoded\r\nAuthorization: Basic ".base64_encode($login.':'.$password)."\r\n",
        'timeout' => 300,
        'content' => $postdata
    )
);
 
 
$context  = stream_context_create($opts);
 
$result = file_get_contents('http://api.adopteunmec.com/api/users?count=10&offset=0', false, $context);
?>