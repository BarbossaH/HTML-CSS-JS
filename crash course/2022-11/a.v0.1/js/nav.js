function gotoURL(url){
    window.location.assign(url);
}

function triggerMenu(){
    var n = document.getElementById("nav");
    if (n.className === "nav"){
        n.className += " menu_on";
    } else{
        n.className = "nav";
    }
}