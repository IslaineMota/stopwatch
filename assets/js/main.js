const clock = document.getElementById('watch');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
let seconds = 0;
let timer;

start.addEventListener('click', function(e){
    clock.classList.remove('color-stopped')
    clearInterval(timer);
    startClock();
})
stop.addEventListener('click', function(e){
    clock.classList.add('color-stopped');
    clearInterval(timer);

})
reset.addEventListener('click', function(e){
    clock.classList.remove('color-stopped')
    clearInterval(timer);
    clock.innerHTML = '00:00:00';
    seconds = 0;


})

function createSeconds (seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC',
    })
}

function startClock() {
    timer = setInterval(() => {
    seconds++
    clock.innerHTML = createSeconds(seconds);
    }, 1000);
}