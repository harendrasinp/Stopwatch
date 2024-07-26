// --------------------------HTML-elements-section-------------------------------------
const startbtn=document.querySelector("#start");
const stopbtn=document.querySelector("#stop");
const restartbtn=document.querySelector("#restart");
const counts=document.querySelector("#count");
const second=document.querySelector("#second");
const minut=document.querySelector("#minut");

// ---------------------------------variables------------------------------------------------
// at initially count, second and minut set Zero, which is increases after function call when start button clicked;
let count=0;
let sec=0;
let min=0;
// initially timer variable sets false, which shows button status, start stop or restart;
let timer=false;
//  this variable show's setTimeout id, which is crrently running;
let timerId;
// ----------------------------start-button-section-----------------------------------------
// to perform Start action, here is addEvent Listener on start button;
startbtn.addEventListener("click",()=>{
    startbtn.style.boxShadow = "0px 0px 10px 2px #e6f16a";
    stopbtn.style.boxShadow ="none";
    restartbtn.style.boxShadow ="none";
    if (!timer) {
        timer = true;
        stopWatch();
    }
});
// -----------------------------stop-button-section----------------------------------------
// to perform stop action, here is addEvent Listener on Stop button
stopbtn.addEventListener("click",()=>{
    stopbtn.style.boxShadow = "0px 0px 10px 2px #e6f16a";
    startbtn.style.boxShadow ="none";
    restartbtn.style.boxShadow ="none";
    timer=false;
    //clearing current setTimeout id to prevent repeat call to setTimeout, when stop button clicked
    clearTimeout(timerId);  
});
// -----------------------------restart-button-section---------------------------------------
// to perform restart action, here is addEvent Listener on Restart button
restartbtn.addEventListener("click",()=>{
    restartbtn.style.boxShadow = "0px 0px 10px 2px #e6f16a";
    startbtn.style.boxShadow ="none";
    stopbtn.style.boxShadow ="none";
    timer=false;   
    //clearing current setTimeout id to prevent repeat call to setTimeout, when stop restart clicked
    clearTimeout(timerId); 
    //  after clicked on restart button here all variables and html Element data becomes "Zero";
    count=0; 
    sec=0;
    min=0;
    counts.innerHTML="00";
    second.innerHTML="00";
    minut.innerHTML="00";
});
// --------------------------------stopWatch-function section------------------------------
// function which is call on click  on every button;
function stopWatch(){
    // if condition, to check which button were clicked by its timer status, true or false;
    if(timer==true){
        // count increment by on if timer is true else no increment;
        count=count+1;
        // if condition, to keep limit on count, to not increment more than 100;
        if(count==100){
            // sec increment by "one" if count becomes equal to 100; which is set "Zero" initially
            sec=sec +1;
            // count becomes "Zero once count reach to "100";
            count= 0;
        };
        // if condition, to keep limit on sec, to not increment more than 60 second;
        if(sec==60){
            // sec becomes "Zero once sect reach to "60"sec;
            sec=0;
            // min increment by "one" if sec becomes equal to "60"; which is set "Zero" initially
            min=min +1;
        }
        // all updated value of count,sec,min were save in there new variable;
        let stcounts=count;
        let stsec=sec;
        let stmin=min;
        // if condition, to check whether count,sec,min have single digite  or double digit; once they have single digits,concatinate "0" with it;
        if(count<10){
            stcounts= "0"+stcounts;
        }
        if(sec<10){
            stsec= "0"+stsec;
        }
        if(min<10){
            stmin= "0"+stmin;
        }
        // add updated value or data in html Element 
        counts.innerHTML=stcounts;
        second.innerHTML=stsec;
        minut.innerHTML=stmin;
        // setTimeout is runs after every 10 milisecond,
        timerId = setTimeout("stopWatch()",10);
    };
}


