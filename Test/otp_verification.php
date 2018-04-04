<?php

if(isset($_GET['otpvl']))
{

   session_start();
   $inactive = 300;
   $session_life = time() - $_SESSION['timestamp']; 

   $otpverify = $_GET['otpvl'];
   $ses_otp = $_SESSION['otp'];

   if($session_life < $inactive)
   {
      if($otpverify == $ses_otp)
      {
         echo "true";
      }
      else
      {
         echo "false";
      }

   }
   else
   {
       echo "false";
   }

}

?>