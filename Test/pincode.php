<?php
// Remove blow comments from header If  you are making calls from another server
/*
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
*/
error_reporting(E_ALL);
ini_set('display_errors',1);
$hostname = "localhost";
$username = "admin";
$password = "Homecare@4321";
$dbname = "pincodes_001";
$q = $_GET['q'];
if((isset($q) || !empty($q)) && (strlen($q) === 6) ) {
	$con = mysqli_connect($hostname, $username, $password, $dbname);
    $query = "SELECT * FROM pincodes WHERE pincode LIKE '$q%'";
    $result = mysqli_query($con, $query);
    $res = array();
    $op;
    while($resultSet = mysqli_fetch_assoc($result)) {
     $res['address'] = $resultSet['districtname'].",".$resultSet['circlename'];
    
    }
    if(!$res) {
    	$res[0] = 'Not found!';
    }
    echo json_encode($res); // $res;
}

?>
