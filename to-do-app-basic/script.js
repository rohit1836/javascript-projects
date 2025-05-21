const input = document.querySelector("input");
const addBtn = document.querySelector("#addBtn");
const deleteBtn = document.querySelector(".deleteBtn");
const displaySection = document.querySelector(".display-section");

let tasks = [];

input.addEventListener('keyup', event => {
    if (event.key === 'Enter')
        addCity();
})

addBtn.addEventListener("click", (event) => {
    addCity();
});

displaySection.addEventListener("click", (event) => {
    if (event.target.tagName === "P") {
        event.target.parentElement.classList.toggle("completed");
    }
});

function addCity() {
    if (input.value === '' || input.value === ' ') return
    const item = document.createElement("div");
    item.className = "item";
    item.innerHTML = `
    <p>${input.value}</p>
    <button class="deleteBtn">Delete</button>`;

    tasks.push(`${input.value}`)
    displaySection.appendChild(item);
    input.value = '';
    displaySection.hidden = false;
}