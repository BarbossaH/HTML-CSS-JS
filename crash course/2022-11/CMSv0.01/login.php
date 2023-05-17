<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/login.css"/>
    <title>Log In</title>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="js/login.js"></script>
    <script>
        const pageUrl = loginUrl =>{
            console.log(loginUrl)
            loginUrl = "pages/" + loginUrl + ".html";
            $.get(loginUrl, function(data, status){
                document.getElementById("login-box").innerHTML = data;
            })
        }
        $.get("pages/loginform.html", function(data, status){
            document.getElementById("login-box").innerHTML = data;
        })
    </script>
</head>


<body>
    <img id="logo" src="./img/login/logoo.png" alt="" />
    <div id="login-box"></div>
</body>
</html>