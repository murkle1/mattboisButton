document.querySelector(".matato").addEventListener('click', roll)

function roll() {
    let randomNum1 = Math.floor(Math.random() * 100) + 1; // 1-100
    document.querySelector("h2").innerHTML = randomNum1
}

// detecting keyboard press

document.addEventListener('keydown', keypress)

// making only spacebar roll
//console.log(KeyboardEvent) to see what event triggered the event listener

function keypress(KeyboardEvent) {
    console.log(KeyboardEvent)
    if(KeyboardEvent.key === ' '){
        roll()
    }
}
