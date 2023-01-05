document.querySelector(".matato").addEventListener('click', roll)

function roll() {
    let randomNum1 = Math.floor(Math.random() * 100) + 1; // 1-100
    document.querySelector("h2").innerHTML = randomNum1
}