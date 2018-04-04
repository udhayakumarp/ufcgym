<?php

if(isset($_GET['mobilenum']))
{
	$rndno=rand(100000, 999999);
	$mobilenum = $_GET['mobilenum']; //$_GET['mobilenum'];

	// OTP sending

    // Authorisation details.
	$username = "udhaya@teampumpkin.com";
	$hash = "f27ba35f20d0a10e5d485e178048685cd11f1786314b0654821178fda110260f";

	// Config variables. Consult http://api.textlocal.in/docs for more info.
	$test = "0";

	// Data for text message. This is the text message data.
	$sender = "TXTLCL"; // This is who the message appears to be from.
	$numbers = "91".$mobilenum; // A single number or a comma-seperated list of numbers
	$message = "Your UFCGYM Verrification code: ".$rndno;
	// 612 chars or less
	// A single number or a comma-seperated list of numbers
	$message = urlencode($message);
	$data = "username=".$username."&hash=".$hash."&message=".$message."&sender=".$sender."&numbers=".$numbers."&test=0";
 
    $url = 'https://api.textlocal.in/send/?';
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL,$url);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS,$data);  //Post Fields
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

	$headers = [
	    'X-Apple-Tz: 0',
	    'X-Apple-Store-Front: 143444,12',
	    'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
	    'Accept-Encoding: gzip, deflate',
	    'Accept-Language: en-US,en;q=0.5',
	    'Cache-Control: no-cache',
	    'Content-Type: application/x-www-form-urlencoded; charset=utf-8',
	    'Host: www.example.com',
	    'Referer: http://139.59.12.164/ufcGym/ufcgym.com/get-a-guest-pass.html', //Your referrer address
	    'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:28.0) Gecko/20100101 Firefox/28.0',
	    'X-MicrosoftAjax: Delta=true'
	];

	curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

	$msg_status = curl_exec ($ch);

    session_start();
	$_SESSION['phone']=$mobilenum;
	$_SESSION['otp']=$rndno;
	$_SESSION['timestamp']=time();

	echo $rndno;

	curl_close ($ch);


	// End OTP sending

	


	// session_start();
	// 	$_SESSION['phone']=$mobilenum;
	// 	$_SESSION['otp']=$rndno;
	// 	$_SESSION['timestamp']=time();

	// echo $mobilenum;
}
else
{
	echo "false";
}

?>