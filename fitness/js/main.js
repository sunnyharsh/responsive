window.addEventListener('load' ,init);

function init(){
    document.getElementById('check').addEventListener('click' , showMenu);
}

function showMenu(){
    var navbar=document.getElementById("navbar");
     if(navbar.className=="nav"){
          navbar.className="show";
     }
     else {
        navbar.className="nav";
     }
 }