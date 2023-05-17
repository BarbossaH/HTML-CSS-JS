<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body>
<?php
    session_start();
    if(isset($_SESSION['loggedin'])){
        require("home.php");
    }else{
        require("login.php");
    }
?>
</body>
</html>