function func(){
    return (console.log(new Date().toLocaleDateString()) );
     
}

let timerId = setInterval(func, 1000)
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 10000);