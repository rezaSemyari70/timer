let flag;
let myTime = setInterval(() => {
    document.getElementById('time').innerText = new Date().toLocaleTimeString('en-US', {
        hour12: false
    });
    flag = true;
}, 1000);


function changeColor() {
    document.getElementById('hour12').style.backgroundColor = "#000000"
};

function changeFormat() {
    if (flag) {
        clearInterval(myTime);
        flag = false;
        myTime = setInterval(() => {
            document.getElementById('time')
                .innerText = new Date().toLocaleTimeString('en-US');
        }, 1000);
    } else {
        flag = true;
        myTime = setInterval(() => {
            document.getElementById('time')
                .innerText = new Date().toLocaleTimeString('en-US', {
                    hour12: false
                });

        });
    }
}

function stopWatch() {
    document.getElementById('mainTime').style.display = "none";
    document.getElementById('partStopWatch').style.display = "flex";
    clearInterval(myTime)
    let zeroTime = [Math.floor(new Date().getHours() / 24), Math.floor(new Date().getMinutes() / 60), Math.floor(new Date().getSeconds() / 60)].join(':');
    document.getElementById('time').innerText = zeroTime;
}

function back() {
    document.getElementById('partStopWatch').style.display = "none";
    document.getElementById('mainTime').style.display = "flex";
}

let sec = Math.floor(new Date().getSeconds() / 60);
let min = Math.floor(new Date().getMinutes() / 60);
let hour = Math.floor(new Date().getHours() / 24);


function start() {
    document.getElementById('partStopWatch').style.display = "none";
    document.getElementById('partTimer').style.display = "flex";

    stopTimer = setInterval(() => {
        if (sec === 59) {
            min++;
            sec = 0;
        }
        if (min === 59 && sec === 59) {
            hour++;
        }
        sec++

        document.getElementById('time').innerText = [hour, min, sec].join(':');
        flag = true;
    }, 1000);

}

function stop() {
    clearInterval(stopTimer);
    document.getElementById('partTimer').style.display = "none";
    document.getElementById('partStop').style.display = "flex";
}

function resume(){
    start();
    document.getElementById('partStopWatch').style.display = "none";
    document.getElementById('partTimer').style.display = "none";
}

function restart() {
    sec = 0, min = 0 , hour = 0 ;
    document.getElementById('time').innerText = [hour, min, sec].join(':');
}