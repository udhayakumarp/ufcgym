<?php

require('config.php');

if(isset($_POST['franchise_lead_first_name']))
{
	$franchise_lead_first_name = $_POST['franchise_lead_first_name'];
	$franchise_lead_address = $_POST['franchise_lead_address'];
	$franchise_lead_phone = $_POST['franchise_lead_phone'];
	$franchise_lead_country = $_POST['franchise_lead_country'];
	$franchise_lead_email = $_POST['franchise_lead_email'];
	$franchise_lead_statte = $_POST['franchise_lead_statte'];
	$franchise_lead_postal_code = $_POST['franchise_lead_postal_code'];
	$franchise_lead_company = $_POST['franchise_lead_company'];
	$franchise_lead_company_web = $_POST['franchise_lead_company_web'];
	$franchise_lead_inv_turnover = $_POST['franchise_lead_inv_turnover'];
	$franchise_lead_corp_turnover = $_POST['franchise_lead_corp_turnover'];
	$franchise_lead_hear_about = $_POST['franchise_lead_hear_about'];
	$franchise_work_out_radio = $_POST['franchise_work_out_radio'];
	$franchise_own_a_property = $_POST['franchise_own_a_property'];
	// $franchise_lead_area_sq_ft = $_POST['franchise_lead_area_sq_ft'];



   if($franchise_own_a_property === "Yes")
   {
   	 $franchise_lead_area_sq_ft = $_POST['franchise_lead_area_sq_ft'];
   }
   else
   {
   	 $franchise_lead_area_sq_ft = "NIL";
   }


	$franchise_lead_has_agreed_to_terms_and_conditions = isset($_POST['franchise_lead_has_agreed_to_terms_and_conditions']);

    if($franchise_lead_has_agreed_to_terms_and_conditions)
    {
    	$franchise_lead_has_agreed_to_terms_and_conditions = "True";
    }
    else
    {
    	$franchise_lead_has_agreed_to_terms_and_conditions = "False";
    }




 $sql_insert =  mysqli_query($con,"INSERT INTO franchise (`franchise_lead_first_name`, `franchise_lead_address`, `franchise_lead_phone`, `franchise_lead_country`, `franchise_lead_email`, `franchise_lead_state`, `franchise_lead_postal_code`, `franchise_lead_company`, `franchise_lead_company_web`, `franchise_lead_inv_turnover`, `franchise_lead_corp_turnover`, `franchise_lead_hear_about`, `franchise_work_out_radio`, `franchise_own_a_property`, `franchise_lead_area_sq_ft`, `franchise_lead_has_agreed_to_terms_and_conditions`, `date`)
 VALUES ('$franchise_lead_first_name','$franchise_lead_address','$franchise_lead_phone','$franchise_lead_country','$franchise_lead_email','$franchise_lead_statte','$franchise_lead_postal_code','$franchise_lead_company','$franchise_lead_company_web','$franchise_lead_inv_turnover','$franchise_lead_corp_turnover','$franchise_lead_hear_about','$franchise_work_out_radio','$franchise_own_a_property','$franchise_lead_area_sq_ft','$franchise_lead_has_agreed_to_terms_and_conditions',NOW())"); 

 if($sql_insert)
 {
 	echo "Send sucessfully";

 	require 'PHPMailer/PHPMailerAutoload.php';

$recmail = 'ufcgym4321@gmail.com';

$mail = new PHPMailer;

$mail->isSMTP();                                   // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';                    // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                            // Enable SMTP authentication
$mail->Username = 'ufcgym4321@gmail.com';          // SMTP username
$mail->Password = 'Admin@4321'; // SMTP password
$mail->SMTPSecure = 'tls';                         // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                 // TCP port to connect to

$mail->setFrom('info@ufcgym.com', 'UFC Gym');
$mail->addAddress($recmail);   // Add a recipient
// $mail->addCC('reachus@merusridevelopers.com');
//$mail->addBCC('bcc@example.com');

$mail->isHTML(true);  // Set email format to HTML

$bodyContent = '<p>Hi,</p>';
$bodyContent .= '<p><b>'.$franchise_lead_first_name.'</b> has contacted via <a href="http://139.59.12.164/ufcGym/ufcgymfranchise/ufcgymfranchise.com/index.html">franchise form</a></p>';
$bodyContent .= '<p>&nbsp;</p>';
$bodyContent .= '<p>Please find the details below:</p>';
$bodyContent .= '<p>&nbsp;</p>';
$bodyContent .= '<p><b>Name: </b>'.$franchise_lead_first_name.'</p>';
$bodyContent .= '<p><b>Address: </b>'.$franchise_lead_address.'</p>';
$bodyContent .= '<p><b>Phone: </b>'.$nfranchise_lead_phone.'</p>';
$bodyContent .= '<p><b>City: </b>'.$franchise_lead_country.'</p>';
$bodyContent .= '<p><b>Email: </b>'.$franchise_lead_email.'</p>';
$bodyContent .= '<p><b>State: </b>'.$franchise_lead_statte.'</p>';
$bodyContent .= '<p><b>Area: </b>'.$franchise_lead_postal_code.'</p>';
$bodyContent .= '<p><b>Company Name: </b>'.$franchise_lead_company.'</p>';
$bodyContent .= '<p><b>Company Website: </b>'.$franchise_lead_company_web.'</p>';
$bodyContent .= '<p><b>Company Individual Turnover: </b>'.$franchise_lead_inv_turnover.'</p>';
$bodyContent .= '<p><b>Company Corporate Turnover: </b>'.$franchise_lead_corp_turnover.'</p>';
$bodyContent .= '<p><b>HOW DID YOU HEAR ABOUT US ? </b>'.$franchise_lead_hear_about.'</p>';
$bodyContent .= '<p><b>DO YOU WORK OUT ? </b>'.$franchise_work_out_radio.'</p>';
$bodyContent .= '<p><b>DO YOU OWN A PRORETY? </b>'.$franchise_own_a_property.'</p>';
$bodyContent .= '<p><b>IF YES – AREA IN SQ. FT. CARPET:</b>'.$franchise_lead_area_sq_ft.'</p>';

$mail->Subject = 'Email from Localhost by Udhaya';
$mail->Body    = $bodyContent;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
 }
 else
 {
 	echo "Database Connection Failed";
 }





 // echo "Firstname: ".$franchise_lead_first_name;
 // echo "\nfranchise_lead_address: ".$franchise_lead_address;
 // echo "\nfranchise_lead_phone: ".$franchise_lead_phone;
 // echo "\nfranchise_lead_country: ".$franchise_lead_country;
 // echo "\nfranchise_lead_email: ".$franchise_lead_email;
 // echo "\nfranchise_lead_statte: ".$franchise_lead_statte;
 // echo "\nfranchise_lead_postal_code: ".$franchise_lead_postal_code;
 // echo "\nfranchise_lead_company: ".$franchise_lead_company;
 // echo "\nfranchise_lead_company_web: ".$franchise_lead_company_web;
 // echo "\nfranchise_lead_inv_turnover: ".$franchise_lead_inv_turnover;
 // echo "\nfranchise_lead_corp_turnover: ".$franchise_lead_corp_turnover;
 // echo "\nfranchise_lead_hear_about: ".$franchise_lead_hear_about;
 // echo "\nfranchise_work_out_radio: ".$franchise_work_out_radio;
 // echo "\nfranchise_own_a_property: ".$franchise_own_a_property;
 // echo "\nfranchise_lead_area_sq_ft: ".$franchise_lead_area_sq_ft;
 // echo "\nfranchise_lead_has_agreed_to_terms_and_conditions: ".$franchise_lead_has_agreed_to_terms_and_conditions;


}

?>