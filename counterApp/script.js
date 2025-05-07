
const counter = document.getElementById("counter")
const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset")
const increase = document.getElementById("increase")

let count = 0

decrease.onclick = () => {
    count--;
    counter.textContent = count;
}

reset.onclick = () => {
    count = 0;
    counter.textContent = count;
}

increase.onclick = () => {
    count++;
    counter.textContent = count;
}

