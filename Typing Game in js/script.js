const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
var start;

// Add leading zero to numbers 9 or below (purely for aesthetics):

function start_timer()
{
    
    var curtime=new Date();
    mins=Math.abs(curtime.getMinutes()-start.getMinutes())
    if(mins<10)
    {
        mins='0'+mins
    }

    secs=Math.abs(curtime.getSeconds()-start.getSeconds())

    if(secs<10)
    {
        secs='0'+secs
    }

    milisecs=Math.abs(Math.floor(curtime.getMilliseconds()/10)-Math.floor(start.getMilliseconds()/10))
    
    if(milisecs<10)
    {
        milisecs='0'+milisecs
    }

    theTimer.innerHTML=mins+":"+secs+":"+ milisecs;


}



//start_timer()

// Run a standard minute/second/hundredths timer:

function spell_checker()
{

    let text_entered=testArea.value;
    let text_tomatch=originText.substring(0,text_entered.length)
    
    if (text_entered.length==0)
    {

    testWrapper.style.borderColor="gray";
    }
    else if(text_entered==originText)
    {
        clearInterval(refresh);
        testWrapper.style.borderColor="Yellow";
        timer_running=false
    }
    else if(text_entered==text_tomatch){
        testWrapper.style.borderColor="green";
    
    }
    else{
        testWrapper.style.borderColor="red";
        //refresh=setInterval('start_timer()',10)
    }

}



// Match the text entered with the provided text on the page:
console.log(testArea.nodeValue)

// Start the timer:


// Reset everything:


function reset_all()
{
    clearInterval(refresh)
    testArea.value=''
    testArea.placeholder="The clock starts when you start typing."
    theTimer.innerHTML="00:00:00";
    testWrapper.style.borderColor="gray";
    fired=false
    timer_running=false
    console.log("Reset Button Called")
}

var timer_running=false;

var fired=false
//onload="start_timer();setInterval('start_timer()',1000)"
// Event listeners for keyboard input and the reset button:
var refresh;
testArea.addEventListener('keydown',run_timer,false)
setInterval('spell_checker()',10)
function run_timer()
{


    if (fired==false){
    start=new Date();
    fired=true
    }

start_timer();
let text_entered=testArea.value
if(timer_running==false)
{
refresh=setInterval('start_timer()',10)
timer_running=true
}

}