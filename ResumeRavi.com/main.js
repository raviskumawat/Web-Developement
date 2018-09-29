function openNav()
{
    if(document.getElementById("mySidenav").style.width=="0px"){
    document.getElementById("mySidenav").style.width="180px";
    document.getElementById("main").style.marginLeft = "180px";
    }
    else{
    document.getElementById("mySidenav").style.width="0px";
    document.getElementById("main").style.marginLeft = "0px";
    }
}

function closeNav()
{
    document.getElementById("mySidenav").style.width="0px";
    document.getElementById("main").style.marginLeft = "0px";
}

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
