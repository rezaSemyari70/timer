
let flag ;
let myTime = setInterval(()=>{
    document.getElementById('time').innerText = new Date().toLocaleTimeString('en-US', { hour12: false });
    flag = true;
},1000);


function changeColor(){
    document.getElementById('hour12').style.backgroundColor = "#000000" 
};

function changeFormat(){

    // document.getElementById('partStopWatch').style.display = "none" ;
    // document.getElementById('partTimer').style.display = "none" ;
    if(flag){
        clearInterval(myTime);
        flag = false ;
        myTime = setInterval(()=>{
            document.getElementById('time')
            .innerText = new Date().toLocaleTimeString('en-US');
        },1000);
    } else{
        flag = true ;
        myTime = setInterval(()=>{
            document.getElementById('time')
            .innerText = new Date().toLocaleTimeString('en-US', { hour12: false });
            
        });
    }
}

function stopWatch(){
    document.getElementById('mainTime').style.display = "none" ;
    document.getElementById('partStopWatch').style.display = "flex";
   
}

function back(){
    document.getElementById('partStopWatch').style.display = "none" ;
    document.getElementById('mainTime').style.display = "flex";
}

function start(){
    document.getElementById('time').innerText = [new Date().getHours(),new Date().getMinutes(),new Date().getSeconds()].join(':') ;

}






