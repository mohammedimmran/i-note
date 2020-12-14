<?php
    if(isset($_POST['submit']))
    {
       
        $name = $_POST['name'];
        $email = $_POST['email'];
        $msg = $_POST['message'];
        $phone=$_POST['mobile'];

        $to = 'myselfmdimran@gmail.com';

        $subject = 'Form Submission';

        $messaged =  "Name :" .$fname. "\n"."Phone: " .$phone."\n"."Wrote this :"."\n".$msg;

        $headers = "From: ".$email;


        if(mail($to , $subject , $messaged , $headers))
        {
            echo "<h1>Thank you " .$fname." we  will contact u Soon </h1>";


        }
        else

        {
            echo "someting went wrong";
        }
    }

?>  