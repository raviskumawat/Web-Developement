
function initialize_clock()
{
    var now=new Date()
    hrs=now.getHours()
    min=now.getMinutes()
    sec=now.getSeconds() 

    hrdeg=hrs*30+min*0.5
    hrmove="rotate("+hrdeg+")"
    console.log("Moving hr :"+hrmove)
    console.log(document.querySelector(".clockbox #hour"))
    document.querySelector(".clockbox #hour").style.transform="rotate("+hrdeg+"deg)"

    mindeg=min*6+sec*0.1
    minmove="rotate("+mindeg+")"
    console.log("Moving minute  :"+minmove)
    console.log(document.querySelector(".clockbox #minute"))
    document.querySelector("#minute").style.transform="rotate("+mindeg+"deg)"
    
    secdeg=sec*6
    secmove="rotate("+secdeg+")"
    console.log("Moving sec:"+secmove)
    console.log(document.querySelector(".clockbox #second"))
    document.querySelector(".clockbox #second").style.transform="rotate("+secdeg+"deg)"
    //location.reload()
    //document.getElementById("hour").style.transform(hrmove);
}

function display_time()
{
    var d=new Date()

    //s=strDate.split(':')
    //console.log(s[0])
    document.getElementById("displaytime").innerText="Time is "+d.getHours()+"hrs "+d.getMinutes()+"Mins "+d.getSeconds()+"Seconds";
    
}
function onchange(){
    location.reload()
}
initialize_clock()
//display_time()
//location.reload()
//setInterval(initialize_clock(),2000);
//document.getElementById("displaytime")
//onload="initialize_clock();setInterval('initialize_clock()',1000)"