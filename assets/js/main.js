const watch = document.querySelector('.watch');
const startt = document.querySelector('.start');
const stopp = document.querySelector('.stop');
const resett = document.querySelector('.reset');
let secondss = 0;
let timer;

function createWatch(secondss){
    const data = new Date(secondss * 1000);
    return data.toLocaleTimeString('pt-AO',{
        hour12: false,
        timeZone: 'GMT'
    });
}


function startWatch(){
        timer = setInterval(function(){
        secondss++;
        watch.innerHTML = createWatch(secondss);
    }, 1000)
}

startt.addEventListener('click', function(event){
    clearInterval(timer);
    startWatch();
    watch.classList.remove('paused')
})

stopp.addEventListener('click', function(event){
    clearInterval(timer);
    watch.classList.add('paused')
})

resett.addEventListener('click', function(event){
    clearInterval(timer);
    watch.innerHTML = "00:00:00";
    secondss = 0;
    watch.classList.remove('paused')
})