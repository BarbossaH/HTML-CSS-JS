var loginValid = false;
var registerValid = false;

function loginCheck(inputid, spanid){
    input = document.getElementById(inputid);
    span = document.getElementById(spanid)
    if(input.value.length < 6){
        span.innerHTML = "Username must be over 6 digits";
        loginValid = false;
    }else{
        const regex = /(\.|\?|\;|\:|\'|\")+/
        if(input.value.match(regex) != null){
            span.innerHTML = "Username should not contain , . ? ; : ' \"";
            loginValid = false;
        }else{
            span.innerHTML = "";
            loginValid = true;
        }
    }
    
}

function registerCheck(event, spanid){
    console.log(spanid);
    const item = event.target;
    const span = document.getElementById(spanid);
    var regex="";
    switch(item.name){
        case("username"):
            if(item.value.length < 6){
                span.innerHTML = "(Must be over 6 digits)";
                registerValid = false;
            }else{
                regex = /(\.|\?|\;|\:|\'|\")+/
                if(item.value.match(regex) != null){
                    span.innerHTML = "(Should not contain , . ? ; : ' \")";
                    registerValid = false;
                }else{
                    span.innerHTML = "";
                    registerValid = true;
                }
            }
            break;
        case("password"):
            if(item.value.length < 8){
                span.innerHTML = "(Must be over 8 digits)";
                registerValid = false;
            }else{
                regex = /(?=.*?[A-Z])(?=.*?[a-z])[a-zA-Z]/
                if(item.value.match(regex) == null){
                    span.innerHTML = "(Must contain both upper and lower case)";
                    registerValid = false;
                }else{
                    span.innerHTML = "";
                    registerValid = true;
                }
            }
            break;
        case ("firstname"):
            regex = "^[a-zA-Z]*$";
            if(item.value.match(regex) == null){
                span.innerHTML = "(Can only include letters)";
                registerValid = false;
            }else{
                span.innerHTML = "";
                registerValid = true;
            }
            break;
        case("lastname"):
            regex = "^[a-zA-Z]*$";
            if(item.value.match(regex) == null){
                span.innerHTML = "(Can only include letters)";
                registerValid = false;
            }else{
                span.innerHTML = "";
                registerValid = true;
            }
            break;
        case("photo"):
            var lastdot = item.value.lastIndexOf('.');
            var fileextension = item.value.substr(lastdot+1).toLowerCase();
            if(fileextension!= "jpg" && fileextension!= "jpeg" && fileextension!= "png"){
                span.innerHTML = "(Only jpg, jpeg and png)";
                registerValid = false;
            }else{
                span.innerHTML = "";
                registerValid = true;
            }
    }

}

function handleLogin(event){
    event.preventDefault();
    if(loginValid){
        console.log("login")
        const username = event.target.username.value;
        const password = event.target.password.value;
        const remember = event.target.remember.checked;
        $.post(
            "com/login.php",
            {   username: username, 
                password: password, 
                remember: remember 
            },
            function(data) {
              alert(data);
              if (data.includes("Incorrect username!")) {
                const error = document.getElementById("usernamecheck");
                error.innerHTML = "Username does not exist!";
              } else if (data.includes("Incorrect password!")) {
                const error = document.getElementById("usernamecheck");
                error.innerHTML = "Invalid password!";
              } else {
                location.reload();
              }
            }
        );
    }
    event.target.username.value = "";
    event.target.password.value = "";
    event.target.remember.checked = false;
}

function handleRegister(event){
    event.preventDefault();
    if(registerValid){
        const username = event.target.username.value;
        const password = event.target.password.value;
        const firstname = event.target.firstname.value;
        const lastname = event.target.lastname.value;
        const email = event.target.email.value;
        $.post(
            "com/register.php",
            {
              username: username,
              password: password,
              firstname: firstname,
              lastname: lastname,
              email: email
            },
            data => {
            if (data.includes("This user already exists!")) {
                alert("This user already exists!");
                } else if(data.includes("Could not prepare statement!")){
                alert("There was a problem with your registration, please try again.");
                } else{
                    alert("registered")
                location.reload();
                }

            }
        );
    }
}